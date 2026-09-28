/**
 * Recebe o lead do formulário e grava na planilha do Google (via Apps Script).
 * Configuração: GOOGLE_SHEETS_WEBHOOK_URL e GOOGLE_SHEETS_SECRET no .env.local
 * (passo a passo em integrations/google-sheets/README.md).
 * Também envia o Lead para a API de Conversões da Meta (META_CAPI_TOKEN).
 */

import { sendCapiLead } from "@/lib/meta-capi";

const FIELDS = [
  "nome",
  "clinica",
  "whatsapp",
  "cidade",
  "faturamento",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "pagina",
  "referrer",
] as const;

type Lead = Record<(typeof FIELDS)[number], string>;

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // honeypot: campo invisível que só robô preenche
  if (clean(body.website)) return Response.json({ ok: true });

  const lead = Object.fromEntries(FIELDS.map((f) => [f, clean(body[f], f === "pagina" || f === "referrer" ? 500 : 200)])) as Lead;

  const digits = lead.whatsapp.replace(/\D/g, "");
  if (!lead.nome || !lead.clinica || (digits.length !== 10 && digits.length !== 11)) {
    return Response.json({ ok: false, error: "Campos obrigatórios ausentes" }, { status: 422 });
  }

  // API de Conversões da Meta: roda em paralelo e nunca derruba o salvamento na planilha
  const capi = sendCapiLead({
    eventId: clean(body.event_id, 100) || crypto.randomUUID(),
    nome: lead.nome,
    whatsapp: digits,
    cidade: lead.cidade,
    pageUrl: lead.pagina,
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
    userAgent: request.headers.get("user-agent") || undefined,
    fbp: clean(body.fbp, 200) || undefined,
    fbc: clean(body.fbc, 500) || undefined,
  }).catch((err) => console.error("[lead] falha na API de Conversões:", err));

  const [saved] = await Promise.all([saveToSheet(lead), capi]);
  return saved
    ? Response.json({ ok: true })
    : Response.json({ ok: false, error: "Falha ao salvar" }, { status: 502 });
}

async function saveToSheet(lead: Lead) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (!url || !secret) {
    console.error("[lead] GOOGLE_SHEETS_WEBHOOK_URL/GOOGLE_SHEETS_SECRET não configurados — lead não salvo:", lead);
    return false;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, ...lead, whatsapp: `+55 ${lead.whatsapp}` }),
      signal: AbortSignal.timeout(10_000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !data?.ok) throw new Error(data?.error ?? `HTTP ${res.status}`);
    return true;
  } catch (err) {
    console.error("[lead] falha ao gravar na planilha:", err, lead);
    return false;
  }
}

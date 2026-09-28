import { createHash } from "node:crypto";
import { META_PIXEL_ID } from "./site";

/**
 * API de Conversões da Meta (envio do evento pelo servidor).
 * Usa o mesmo event_id do pixel no navegador, então a Meta conta o lead uma vez só.
 * Configuração: META_CAPI_TOKEN (obrigatório) e META_TEST_EVENT_CODE (opcional, só p/ testes).
 */

const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v26.0";

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");
const norm = (v: string) => v.trim().toLowerCase();

export type CapiLead = {
  eventId: string;
  nome: string;
  whatsapp: string; // só dígitos com DDD
  cidade: string;
  pageUrl: string;
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
};

export async function sendCapiLead(lead: CapiLead) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return { skipped: true as const };

  const [first = "", ...rest] = norm(lead.nome).split(/\s+/);
  const last = rest.at(-1) ?? "";
  // "Campinas, Cambuí" -> "campinas"
  const city = norm(lead.cidade.split(/[,–-]/)[0] ?? "").replace(/[^\p{L}]/gu, "");

  const user_data: Record<string, unknown> = {
    ph: [sha256(`55${lead.whatsapp}`)],
    country: [sha256("br")],
    ...(first && { fn: [sha256(first)] }),
    ...(last && { ln: [sha256(last)] }),
    ...(city && { ct: [sha256(city)] }),
    ...(lead.ip && { client_ip_address: lead.ip }),
    ...(lead.userAgent && { client_user_agent: lead.userAgent }),
    ...(lead.fbp && { fbp: lead.fbp }),
    ...(lead.fbc && { fbc: lead.fbc }),
  };

  const body = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.eventId,
        event_source_url: lead.pageUrl,
        action_source: "website",
        user_data,
        custom_data: { content_name: "Formulário LP ALVEO" },
      },
    ],
    ...(process.env.META_TEST_EVENT_CODE && { test_event_code: process.env.META_TEST_EVENT_CODE }),
  };

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8_000),
    },
  );
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(`CAPI ${res.status}: ${JSON.stringify(data)}`);
  return data as { events_received?: number };
}

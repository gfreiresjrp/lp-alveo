# Leads da LP → Google Sheets

Fluxo: formulário da LP → `POST /api/lead` (Next) → Apps Script da planilha → nova linha na aba **Leads**.

## Configurar (uma vez, ~3 minutos)

1. Abra a planilha de leads → **Extensões → Apps Script**.
2. Apague o conteúdo de `Código.gs` e cole todo o `Code.gs` desta pasta
   (ele já vem com o segredo igual ao do `.env.local`). Salve.
3. **Implantar → Nova implantação** → tipo **App da Web**:
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
4. Autorize o acesso quando o Google pedir.
5. Copie a **URL do app da Web** (termina em `/exec`) e cole em
   `GOOGLE_SHEETS_WEBHOOK_URL=` no `.env.local` da LP.
6. Reinicie o `npm run dev`.

Na hospedagem (Vercel etc.), cadastre as mesmas duas variáveis:
`GOOGLE_SHEETS_WEBHOOK_URL` e `GOOGLE_SHEETS_SECRET`.

## Colunas gravadas

Data/hora · Nome · Clínica/consultório · WhatsApp · Cidade/bairro · Faturamento mensal ·
utm_source · utm_medium · utm_campaign · utm_term · utm_content · gclid · fbclid · Página · Origem

A aba **Leads** e o cabeçalho são criados sozinhos no primeiro lead.

## Se alterar o `Code.gs` depois

Implantar → **Gerenciar implantações** → editar → **Nova versão**. (A URL continua a mesma.)

> `Code.gs` contém o segredo e está no `.gitignore`. Não compartilhe.

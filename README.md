# Lu Toledo — Landing Page (Vite + React + TS + Tailwind)

Landing de captura de leads para imóveis de alto padrão em Limeira.

## Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 (config em `tailwind.config.ts`)
- React Router DOM 6

## Como rodar
```bash
npm install
cp .env.example .env   # edite as variáveis
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```

## Deploy no Vercel
1. Suba o repositório no GitHub.
2. Importe no Vercel — as configurações padrão funcionam:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Configure as variáveis de ambiente do `.env.example` no painel do Vercel.

## Variáveis de ambiente
Todas com prefixo `VITE_` (veja `.env.example`):
- `VITE_SHEETS_ENDPOINT` — URL do Google Apps Script Web App (captura no Sheets).
- `VITE_WHATSAPP_PHONE` — Número com DDI (apenas dígitos).
- `VITE_GA4_ID`, `VITE_META_PIXEL_ID`, `VITE_GTM_ID` — IDs de tracking (opcionais).

## Estrutura
```
/
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── LeadForm.tsx
│   │   └── WhatsAppButton.tsx
│   └── pages/
│       ├── LandingPage.tsx
│       └── Obrigado.tsx
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── tsconfig*.json
```

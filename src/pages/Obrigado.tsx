import { useEffect } from 'react'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '5519974159585'

export default function ObrigadoPage() {
  useEffect(() => {
    document.title = 'Obrigado — Lu Toledo'
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-deep px-6 py-20 text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(217,118,58,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(201,169,110,0.3), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-gold">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="eyebrow mb-5 justify-center">Solicitação Recebida</p>
        <h1 className="font-display text-3xl uppercase leading-tight md:text-5xl">
          Pré-cadastro feito
          <span className="block font-serif italic normal-case tracking-normal text-gold">com sucesso.</span>
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-white/80">
          Inicie seu atendimento tocando no botão abaixo.
        </p>
        <div className="hairline mx-auto my-12 max-w-[140px]" />
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Olá Lu! Acabei de me cadastrar na sua página.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar Agora no WhatsApp
          </a>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}

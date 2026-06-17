import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const SHEETS_ENDPOINT =
  import.meta.env.VITE_SHEETS_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbycWA6vMg4mB6jj-kDPq2oEFU1aqapfRPTEmsAIulJfZrxqk3d6o6Up5J5vbiGQfRoz/exec'

export function LeadForm() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'lp-lu-toledo', ts: new Date().toISOString() }),
      }).catch(() => {})
    } finally {
      navigate('/obrigado')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow block mb-1">Nome Completo</span>
          <input name="nome" required className="luxe-input" placeholder="Como podemos te chamar" />
        </label>
        <label className="block">
          <span className="eyebrow block mb-1">WhatsApp</span>
          <input name="whatsapp" required type="tel" className="luxe-input" placeholder="(19) 9 0000-0000" />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow block mb-1">E-mail</span>
        <input name="email" required type="email" className="luxe-input" placeholder="seu@email.com" />
      </label>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow block mb-1">Faixa de Investimento</span>
          <select name="faixa" required className="luxe-input">
            <option value="">Selecione</option>
            <option>R$ 1M – R$ 2M</option>
            <option>R$ 2M – R$ 4M</option>
            <option>R$ 4M – R$ 7M</option>
            <option>Acima de R$ 7M</option>
          </select>
        </label>
        <label className="block">
          <span className="eyebrow block mb-1">Tipo de Imóvel</span>
          <select name="tipo" required className="luxe-input">
            <option value="">Selecione</option>
            <option>Casa em Condomínio Fechado</option>
            <option>Mansão / Alto Padrão</option>
            <option>Apartamento de Cobertura</option>
            <option>Terreno Premium</option>
            <option>Investimento / Locação</option>
          </select>
        </label>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary mt-4 w-full sm:w-auto">
        {submitting ? 'Enviando...' : 'Receber Curadoria Exclusiva'}
      </button>
      <p className="text-xs text-muted-foreground">
        Seus dados são confidenciais. Resposta em até 2 horas via WhatsApp.
      </p>
    </form>
  )
}

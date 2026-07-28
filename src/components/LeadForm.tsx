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
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'lp-lu-toledo',
          ts: new Date().toISOString()
        }),
      })

      const json = await res.json()
      console.log(json)

      if (json.result !== 'success') {
        throw new Error('Erro ao salvar')
      }

      navigate('/obrigado')

    } catch (err) {
      console.error(err)
      alert('Erro ao enviar. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  } // ✅ FECHA AQUI

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      
      <div className="grid gap-7 sm:grid-cols-1">
        <label className="block">
          <span className="eyebrow block mb-1">Nome Completo</span>
          <input name="nome" required className="luxe-input" />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow block mb-1">E-mail</span>
        <input name="email" required type="email" className="luxe-input" />
      </label>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow block mb-1">WhatsApp</span>
          <input name="telefone" required type="tel" className="luxe-input" />
        </label>

        <label className="block">
          <span className="eyebrow block mb-1">Faixa Investimento</span>
          <select name="faixa" required className="luxe-input">
            <option value="">Selecione</option>
            <option>R$ 1M – R$ 2M</option>
            <option>R$ 2M – R$ 4M</option>
            <option>R$ 4M – R$ 7M</option>
            <option>Acima de R$ 7M</option>
          </select>
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow block mb-1">Tipo de Imóvel</span>
          <select name="tipo" required className="luxe-input">
            <option value="">Selecione</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Outro</option>
          </select>
        </label>

        <label className="block">
          <span className="eyebrow block mb-1">Objetivo</span>
          <select name="objetivo" required className="luxe-input">
            <option value="">Selecione</option>
            <option value="Morar">Morar</option>
            <option value="Investir">Investir</option>
          </select>
        </label>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary mt-4 w-full sm:w-auto">
        {submitting ? 'Enviando...' : 'AGENDAR CONSULTORIA EXCLUSIVA'}
      </button>

      <p className="text-xs text-muted-foreground">
        Seus dados são confidenciais. Resposta em até 2 horas via WhatsApp.
      </p>
    </form>
  )
}

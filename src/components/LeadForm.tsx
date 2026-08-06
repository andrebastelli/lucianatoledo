import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const SHEETS_ENDPOINT =
  import.meta.env.VITE_SHEETS_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbxhVvP_k95qqoSyVXzy-ICW295A39GapSGVB0JBwpbyYwmWG1n3hQJKbnB5ACA4sQ75/exec'

export function LeadForm() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()

  setError('')

  const form = e.currentTarget
  const data = Object.fromEntries(new FormData(form).entries())

  // Validação e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(String(data.email))) {
    setError('Informe um e-mail válido.')
    return
  }

  // Validação WhatsApp
  const telefone = String(data.telefone)

if (!/^\d{10,11}$/.test(telefone)) {
  setError('Digite um WhatsApp válido com DDD (10 ou 11 números).')
  return
}

  setSubmitting(true)

  try {
    await fetch(SHEETS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        telefone,
        source: 'lp-lu-toledo',
        ts: new Date().toISOString()
      }),
    })

    navigate('/obrigado')

  } catch {
    setError('Não foi possível enviar. Tente novamente.')
  } finally {
    setSubmitting(false)
  }
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, '').slice(0, 11)
}

return (
  <form onSubmit={onSubmit} className="grid gap-7">
    
    {/* Nome */}
    <div className="grid gap-7 sm:grid-cols-1">
      <label className="block">
        <span className="eyebrow block mb-1">Nome Completo</span>
        <input name="nome" required className="luxe-input" placeholder="Como podemos te chamar" />
      </label>
    </div>

    {/* Email */}
    <label className="block">
      <span className="eyebrow block mb-1">E-mail</span>
      <input name="email" required type="email" className="luxe-input" placeholder="seu@email.com" />
    </label>

    {/* WhatsApp + Faixa */}
    <div className="grid gap-7 sm:grid-cols-2">
      <label className="block">
        <span className="eyebrow block mb-1">WhatsApp</span>
        <input
          name="telefone"
          required
          type="tel"
          inputMode="numeric"
          maxLength={11}
          className="luxe-input"
          placeholder="19999999999"
          onChange={(e) => {
            e.target.value = onlyNumbers(e.target.value)
          }}
        />
      </label>

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
    </div>

    {/* Tipo + Objetivo */}
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
      {submitting ? 'Enviando...' : 'INICIAR PRÉ ATENDIMENTO VIA WHATSAPP'}
    </button>

    <p className="text-xs text-muted-foreground">
      Seus dados são confidenciais. Resposta em até 2 horas via WhatsApp.
    </p>
  </form>
)
}

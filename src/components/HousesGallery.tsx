import { useState } from 'react'

const PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '5519974159585'

type House = {
  id: string
  title: string
  subtitle: string
  features: string[]
  images: string[]
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

const HOUSES: House[] = [
  {
    id: 'villa-jardins',
    title: 'Villa Jardins',
    subtitle: 'Condomínio Alphaville · Limeira',
    features: ['4 suítes', 'Sala ampla integrada', 'Piscina aquecida', 'Espaço gourmet', '600 m² · 4 vagas'],
    images: [
      'photo-1600596542815-ffad4c1539a9',
      'photo-1600585154340-be6161a56a0c',
      'photo-1600607687939-ce8a6c25118c',
      'photo-1600566753190-17f0baa2a6c3',
      'photo-1600585154526-990dced4db0d',
    ].map(u),
  },
  {
    id: 'casa-mirante',
    title: 'Casa Mirante',
    subtitle: 'Residencial Terras de Santa Cruz',
    features: ['3 suítes', '1 lavabo', 'Home office', 'Piscina com deck', '420 m² · 3 vagas'],
    images: [
      'photo-1613490493576-7fde63acd811',
      'photo-1600585154363-67eb9e2e2099',
      'photo-1582268611958-ebfd161ef9cf',
      'photo-1505691938895-1758d7feb511',
      'photo-1600210492486-724fe5c67fb0',
    ].map(u),
  },
  {
    id: 'mansao-horizonte',
    title: 'Mansão Horizonte',
    subtitle: 'Condomínio Reserva da Mata',
    features: ['5 suítes', 'Cinema privativo', 'Adega climatizada', 'Quadra de tênis', '900 m² · 6 vagas'],
    images: [
      'photo-1564013799919-ab600027ffc6',
      'photo-1600047509807-ba8f99d2cdde',
      'photo-1600573472556-e636c2acda88',
      'photo-1600566753086-00f18fb6b3ea',
      'photo-1600585152220-90363fe7e115',
    ].map(u),
  },
  {
    id: 'residencia-atelier',
    title: 'Residência Atelier',
    subtitle: 'Condomínio Fechado · Centro de Limeira',
    features: ['2 quartos', '2 suítes', 'Sala em pé direito duplo', 'Jardim de inverno', '320 m² · 2 vagas'],
    images: [
      'photo-1512917774080-9991f1c4c750',
      'photo-1600585154084-4e5fe7c39198',
      'photo-1600566753051-6057f5b71d65',
      'photo-1493809842364-78817add7ffb',
      'photo-1600596542815-ffad4c1539a9',
    ].map(u),
  },
]

function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0)
  const total = images.length
  const go = (n: number) => setI((n + total) % total)

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — foto ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            idx === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        type="button"
        aria-label="Foto anterior"
        onClick={() => go(i - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Próxima foto"
        onClick={() => go(i + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir para foto ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-6 bg-gold' : 'w-1.5 bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function whatsappHref(h: House) {
  const msg = `Olá, Lu! Tenho interesse na *${h.title}* (${h.subtitle}). Gostaria de receber mais detalhes desta propriedade.`
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
}

export function HousesGallery() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {HOUSES.map((h) => (
        <article
          key={h.id}
          className="flex flex-col border border-gold/30 bg-deep/70 backdrop-blur-sm shadow-luxe"
        >
          <Carousel images={h.images} alt={h.title} />
          <div className="flex flex-1 flex-col p-7 md:p-8">
            <h3 className="font-display text-2xl uppercase leading-tight text-white md:text-3xl">
              {h.title}
            </h3>
            <p className="mt-2 font-serif italic text-gold">{h.subtitle}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-white/75 sm:grid-cols-2">
              {h.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-px w-4 flex-shrink-0 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref(h)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 self-start"
            >
              Quero detalhes desta casa
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

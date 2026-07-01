import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LeadForm } from '@/components/LeadForm'
import { HousesGallery } from '@/components/HousesGallery'
import heroMansion from '@/assets/hero-mansion.jpg'
import condoEntrance from '@/assets/condo-entrance.jpg'
import luToledo from '@/assets/lu-toledo.jpg'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative h-[100svh] min-h-[640px] overflow-hidden bg-deep">
        <div className="absolute inset-0">
          <img
            src={heroMansion}
            alt="Mansão moderna de alto padrão em condomínio fechado de Limeira"
            className="kenburns h-full w-full object-cover opacity-70"
            width={1920}
            height={1280}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(30,40,55,0.55) 0%, rgba(25,35,50,0.45) 50%, rgba(20,28,42,0.85) 100%)',
            }}
          />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 text-white">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl italic text-gold">Lu</span>
            <span className="all-caps text-sm text-white">Toledo</span>
          </div>
          <span className="hidden text-xs tracking-[0.35em] text-white/70 sm:block">
            CRECI 139.131 · LIMEIRA / SP
          </span>
        </nav>

        <div className="relative z-10 mx-auto flex h-[calc(100%-96px)] max-w-7xl flex-col justify-center px-6">
  <div className="max-w-3xl md:max-w-5xl fade-up">
    <p className="eyebrow mb-6"><span className="gold-line" />Imóveis de Alto Padrão · Limeira</p>
    <h1 className="font-display text-4xl uppercase leading-[1.05] tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Onde a <span className="font-serif italic normal-case tracking-normal text-gold">exclusividade</span> encontra o seu novo endereço em Limeira
    </h1>
    <p className="mt-8 max-w-xl md:max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
      Curadoria estratégica de imóveis premium em condomínios fechados.
      Mais de 10 anos transformando investimentos em patrimônios extraordinários.
    </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#form" className="btn-primary">Quero Conhecer a Seleção</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/60">
          Role para descobrir
        </div>
      </header>

      {/* DOR / SOLUÇÃO */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <img
              src={luToledo}
              alt="Interior minimalista de alto padrão"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[5/6] w-full object-cover shadow-luxe"
            />
          </div>
          <div>
            <p className="eyebrow mb-5"><span className="gold-line" />A Realidade</p>
            <h2 className="text-3xl uppercase leading-tight md:text-4xl">
              Encontrar o imóvel certo em Limeira
              <span className="block font-serif italic normal-case tracking-normal text-terracotta">
                não deveria ser exaustivo.
              </span>
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Microrregiões seguras, valorização real, vizinhança alinhada ao seu estilo de vida.
              A maioria das ofertas no mercado não passa por esse filtro — e o custo de uma decisão
              errada em alto padrão é alto demais.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Como sua consultora, eu faço esse trabalho antes de você sequer agendar uma visita.
              Você recebe apenas o que <strong className="text-foreground">faz sentido para o seu patrimônio</strong>.
            </p>
            <div className="mt-10">
               <p className="font-display all-caps text-sm">Lu Toledo</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Corretora credenciada
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                CRECI 139.131
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-deep py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="eyebrow mb-4 justify-center">Por que Lu Toledo</p>
            <h2 className="font-display text-3xl uppercase leading-tight md:text-5xl">
              Quatro pilares de
              <span className="font-serif italic normal-case tracking-normal text-gold"> consultoria premium</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title} className="group bg-deep p-10 transition-colors hover:bg-[#34495e]">
                <div className="mb-6 text-gold">{d.icon}</div>
                <h3 className="all-caps mb-3 text-sm text-white">{d.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-background py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-2">
            <Stat number="150+" label="Famílias atendidas com curadoria exclusiva" />
            <Stat number="10+" label="Anos transformando investimentos em patrimônio" />
          </div>
          <div className="hairline mt-16" />
          <p className="mt-10 text-center font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
            "A Lu enxerga o imóvel certo antes mesmo de a gente saber o que estava procurando.
            Negociação impecável e total transparência."
          </p>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — Família M., Residencial Premium · Limeira
          </p>
        </div>
      </section>

      {/* OFERTA / GALERIA DE CASAS */}
      <section id="oferta" className="relative overflow-hidden py-24 md:py-32 bg-deep">
        <img
          src={condoEntrance}
          alt="Entrada de condomínio fechado de alto padrão em Limeira"
          loading="lazy"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow mb-5 justify-center"><span className="gold-line" />Seleção Exclusiva · Edição Limitada</p>
            <h2 className="font-display text-3xl uppercase leading-tight text-white md:text-4xl">
              Galeria de
              <span className="block font-serif italic normal-case tracking-normal text-gold">
                casas selecionadas
              </span>
              para você conhecer
            </h2>
            <p className="mt-6 text-white/70">
              Quatro propriedades de alto padrão, curadas pessoalmente. Navegue pelas fotos e fale comigo no WhatsApp para receber os detalhes completos.
            </p>
          </div>
          <HousesGallery />
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="form" className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-5"><span className="gold-line" />Qualificação</p>
            <h2 className="text-3xl uppercase leading-tight md:text-4xl">
              Vamos construir sua
              <span className="block font-serif italic normal-case tracking-normal text-terracotta">
                curadoria personalizada
              </span>
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-muted-foreground">
              Preencha os campos abaixo. Em até 2 horas você recebe no WhatsApp uma seleção feita
              à mão para o seu perfil — sem listagens genéricas, sem pressão de venda.
            </p>
            <div className="mt-10 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3"><span className="h-px w-6 bg-gold" /> Atendimento consultivo 1:1</p>
              <p className="flex items-center gap-3"><span className="h-px w-6 bg-gold" /> Sigilo absoluto das informações</p>
              <p className="flex items-center gap-3"><span className="h-px w-6 bg-gold" /> Resposta em até 2h úteis</p>
            </div>
          </div>
          <div className="bg-card p-8 shadow-soft md:p-12">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-deep py-16 text-white/80">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl italic text-gold">Lu</span>
              <span className="all-caps text-base text-white">Toledo</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Consultoria especializada em imóveis de alto padrão em Limeira e região.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">CRECI 139.131</p>
          </div>
          <div>
            <p className="all-caps mb-4 text-xs text-gold">Contato</p>
            <p className="text-sm">WhatsApp · (19) 97415-9585</p>
            <p className="mt-2 text-sm">contato@lutoledo.com.br</p>
            <p className="mt-2 text-sm">Limeira / SP</p>
          </div>
          <div>
            <p className="all-caps mb-4 text-xs text-gold">Social</p>
            <div className="flex gap-4">

  {/* Instagram */}
  <a 
    href="https://instagram.com/luntoledo" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-[#C9A96E] hover:text-[#FAF7F4] transition-colors"
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M7.75 2h8.5C19.99 2 22 4.01 22 7.75v8.5C22 19.99 19.99 22 16.25 22h-8.5C4.01 22 2 19.99 2 16.25v-8.5C2 4.01 4.01 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/lucianatoledoimoveis" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-[#C9A96E] hover:text-[#FAF7F4] transition-colors"
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M13 22v-9h3l1-4h-4V7c0-1.03.28-1.73 1.8-1.73H17V2.14C16.65 2.09 15.46 2 14.1 2 11.24 2 9.5 3.7 9.5 6.84V9H7v4h2.5v9H13z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a 
    href="#form" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="text-[#C9A96E] hover:text-[#FAF7F4] transition-colors"
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.87.5 3.68 1.46 5.26L2 22l4.97-1.6c1.54.84 3.27 1.28 5.07 1.28h.01c5.46 0 9.88-4.42 9.88-9.88S17.5 2 12.04 2zm0 17.96c-1.6 0-3.17-.43-4.54-1.25l-.33-.2-2.95.95.96-2.88-.21-.34a7.94 7.94 0 01-1.23-4.3c0-4.41 3.59-8 8-8 4.42 0 8 3.59 8 8 0 4.42-3.58 8.02-8 8.02zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  </a>

</div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Lu Toledo · Corretora de Imóveis · Todos os direitos reservados.
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-6xl text-terracotta md:text-7xl">{number}</div>
      <div className="hairline mx-auto my-5 max-w-[80px]" />
      <p className="all-caps text-xs text-muted-foreground md:text-sm">{label}</p>
    </div>
  )
}

const DIFERENCIAIS = [
  {
    title: 'Curadoria Especializada',
    text: 'Cada imóvel passa por análise técnica, jurídica e de potencial — você só conhece o que merece sua atenção.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Segurança Inteligente',
    text: 'Condomínios mapeados por padrão construtivo, gestão e perfil de moradores — tranquilidade real para sua família.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: 'Localização Estratégica',
    text: 'Microrregiões em valorização, com acesso, infraestrutura e qualidade de vida pensados para os próximos 10 anos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Potencial de Valorização',
    text: 'Leitura do Ciclo Selic 2026 e do mercado de Limeira para posicionar seu investimento na curva certa.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
]

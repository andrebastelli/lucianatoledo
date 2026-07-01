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
      <header className="relative h-[100svh] min-h-[750px] overflow-hidden bg-deep">
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

        <div className="relative z-10 mx-auto flex h-[calc(100%-96px)] max-w-7xl flex-col justify-center px-6 pb-16 sm:pb-0">
  <div className="max-w-3xl md:max-w-5xl fade-up">
    <p className="eyebrow mb-6"><span className="gold-line" />Consultoria Imobiliária de Alto Padrão</p>
<h1 className="font-display text-4xl uppercase leading-[1.05] tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
  Mais do que <span className="font-serif italic normal-case tracking-normal text-gold">imóveis,</span> lugares onde as <span className="font-serif italic normal-case tracking-normal text-gold sm:whitespace-nowrap"> melhores memórias</span> <span className="sm:whitespace-nowrap">são construídas.</span>
</h1>
    <p className="mt-8 max-w-xl md:max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
      Especialista em imóveis premium e condomínios fechados em Limeira.
      Transformo a busca pelo imóvel ideal em uma jornada estratégica, segura e alinhada ao estilo de vida, aos valores e aos objetivos da sua família.
      Porque uma casa não é apenas um endereço. É o cenário onde sua história acontece.
    </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#form" className="btn-primary">QUERO MINHA CONSULTORIA EXCLUSIVA</a>
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
              alt="Lu Toledo"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/6] w-full object-cover shadow-luxe"
            />
          </div>
          <div>
            <p className="eyebrow mb-5"><span className="gold-line" />SOBRE LU TOLEDO</p>
            <h2 className="text-3xl uppercase leading-tight md:text-4xl">
              Experiência, sensibilidade
              <span className="block font-serif italic normal-case tracking-normal text-terracotta">
                e estratégia.
              </span>
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Há mais de 12 anos atuando no mercado imobiliário de alto padrão, desenvolvi uma metodologia baseada em escuta ativa, comportamento humano e análise estratégica.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Minha missão vai além de apresentar imóveis.
              <strong className="text-foreground"> Eu ajudo pessoas a encontrarem espaços que representem quem elas são hoje e quem desejam se tornar amanhã.</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Com formação em Programação Neurolinguística (PNL), compreendo que cada decisão importante nasce primeiro da emoção, depois da razão.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground"> Por isso, cada atendimento é conduzido de forma personalizada, respeitando sonhos, objetivos e momentos de vida.</strong>.
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
            <p className="eyebrow mb-4 justify-center">MEU DIFERENCIAL</p>
            <h2 className="font-display text-3xl uppercase leading-tight md:text-5xl">
  Uma consultoria construída
  <span className="block font-serif italic normal-case tracking-normal text-gold">sobre quatro pilares</span>
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

          <div className="mt-20 rounded-lg bg-white/5 p-12 backdrop-blur-sm">
            <h3 className="mb-12 text-center font-display text-2xl uppercase text-white md:text-3xl">
              O que torna esta experiência exclusiva
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {EXCLUSIVIDADES.map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
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

      {/* O QUE ACREDITO */}
      <section className="bg-deep py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center font-display text-3xl uppercase text-white md:text-4xl">
            O que acredito
          </h2>
          <div className="space-y-6 font-serif text-lg leading-relaxed text-white/90 md:text-xl">
            <p>Pessoas adquirem imóveis.</p>
            <p>Famílias constroem histórias.</p>
            <p>Uma decisão imobiliária vai muito além de localização, arquitetura ou metragem.</p>
            <p>Ela influencia a forma como você vive, convive, cresce e cria memórias com quem realmente importa.</p>
            <p>Por isso, cada projeto de vida merece ser compreendido com atenção.</p>
            <p className="pt-4 text-gold">Porque o imóvel certo não é apenas aquele que atende às suas necessidades de hoje, mas aquele que faz sentido para o futuro que você deseja construir.</p>
          </div>
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
    title: 'Seleção Estratégica',
    text: 'Antes de chegar até você, cada oportunidade passa por uma análise criteriosa. Assim, seu tempo é dedicado apenas a imóveis que realmente fazem sentido para sua família e seu patrimônio.',
    icon: (
      // Funil de filtragem — representa a curadoria/seleção
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h18l-7.5 8.5V19l-3 1.5v-8L3 4z" />
      </svg>
    ),
  },
  {
    title: 'Segurança na Decisão',
    text: 'Avaliação criteriosa de localização, potencial de valorização, perfil do condomínio e qualidade construtiva.',
    icon: (
      // Escudo com check — segurança confirmada na decisão
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Conexão Humana',
    text: 'Antes de falar sobre imóveis, procuro entender pessoas. Porque o imóvel ideal é consequência da clareza sobre o que realmente importa para você.',
    icon: (
      // Duas pessoas — relação/conexão humana
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-1c0-3 2.5-5 6-5s6 2 6 5v1" />
        <circle cx="17.5" cy="9.5" r="2.3" />
        <path d="M15.5 21v-.8c0-2.1 1.6-3.7 3.5-3.9" />
      </svg>
    ),
  },
  {
    title: 'Visão de Futuro',
    text: 'Não analisamos apenas o imóvel de hoje. Construímos uma decisão que continuará fazendo sentido para você daqui a 5, 10 ou 15 anos.',
    icon: (
      // Olho no horizonte — visão de longo prazo
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
]

const EXCLUSIVIDADES = [
  'Compreensão profunda do seu momento de vida e dos seus objetivos',
  'Seleção estratégica de oportunidades alinhadas ao seu estilo de vida',
  'Análise patrimonial e potencial de valorização',
  'Acompanhamento integral durante toda a jornada',
  'Sigilo absoluto e discrição em cada etapa',
  'Relacionamento construído com confiança e transparência',
  'Experiência humana aliada à inteligência emocional',
  'Decisões imobiliárias alinhadas ao futuro que você deseja construir',
]

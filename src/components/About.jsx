import { useParallax } from '../hooks/useScrollAnimations';

const stats = [
  { number: '+50', label: 'Eventos' },
  { number: '+30', label: 'Marcas' },
  { number: '+5', label: 'Anos Exp.' },
  { number: '+100', label: 'Colaboraciones' },
];

export default function About() {
  const parallaxRef = useParallax(0.08);

  return (
    <section id="sobre-mi" className="relative overflow-hidden">
      {/* Ambient blur orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="py-28 md:py-40 noise relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-24 md:mb-28 reveal">
            <p className="text-[var(--text-muted)] text-[10px] font-normal tracking-[0.15em] mb-3">01</p>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold mb-6">Sobre Mi</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight dark:text-cream text-dark">
              Detras de la <span className="italic font-normal gold-text">camara</span>
            </h2>
            <div className="gold-line mx-auto mt-8 animate-expand-line" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo */}
            <div className="reveal-left">
              <div className="relative" ref={parallaxRef}>
                <div className="relative overflow-hidden aspect-[3/4] glass glow-gold rounded-2xl editorial-zoom">
                  <img
                    src="/images/portafolio/stephannyCabas_23.03.47.jpeg"
                    alt="Stephanny Cabas - Sobre Mi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-gold glow-gold px-6 py-4 animate-float rounded-xl">
                  <p className="text-3xl font-semibold gold-text tracking-tight">SC</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="reveal text-2xl md:text-3xl font-semibold dark:text-cream text-dark mb-10 tracking-tight leading-snug">
                Una apasionada por conectar
                <span className="italic font-normal gold-text"> marcas con personas</span>
              </h3>

              <p className="reveal text-[var(--text-secondary)] text-sm md:text-base font-normal leading-relaxed mb-6">
                Soy Stephanny Cabas, modelo profesional, promotora y asesora de imagen con mas de 5 anos
                de trayectoria en la industria. Mi enfoque combina profesionalismo, versatilidad y una
                presencia que conecta genuinamente con cada audiencia.
              </p>

              <p className="reveal text-[var(--text-secondary)] text-sm md:text-base font-normal leading-relaxed mb-12">
                He colaborado con marcas reconocidas en campanas publicitarias, eventos de alto perfil
                y producciones editoriales. Cada proyecto es una oportunidad para crear impacto visual
                y elevar la imagen de marca.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 stagger">
                {stats.map((stat) => (
                  <div key={stat.label} className="reveal-scale glass-card p-5 text-center rounded-xl">
                    <p className="text-3xl md:text-4xl font-semibold gold-text mb-2">{stat.number}</p>
                    <p className="text-[var(--text-muted)] text-[10px] font-medium tracking-[0.1em] uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

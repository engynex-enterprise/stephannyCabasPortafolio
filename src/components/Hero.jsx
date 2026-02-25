import { useScrollFade, useScrollBlur } from '../hooks/useScrollAnimations';

export default function Hero() {
  const fadeRef = useScrollFade(0, 600);
  const blurRef = useScrollBlur(12, 800);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-dark bg-warm noise">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/portafolio/stephannyCabas_11.23.53.jpeg"
          alt="Stephanny Cabas"
          className="w-full h-full object-cover object-center opacity-50 dark:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t dark:from-dark dark:via-dark/60 dark:to-dark/30 from-warm via-warm/60 to-warm/30" />
        <div className="absolute inset-0 bg-gradient-to-r dark:from-dark/50 from-warm/50 via-transparent dark:to-dark/50 to-warm/50" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-[150px]" />

      {/* Content */}
      <div ref={fadeRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div ref={blurRef}>
          {/* Tagline */}
          <div className="reveal flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-[0.5px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold">
              Modelo &amp; Promotora
            </p>
            <div className="w-12 h-[0.5px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Name */}
          <h1 className="reveal-blur font-light text-6xl md:text-8xl lg:text-9xl dark:text-white text-dark tracking-tight mb-4 leading-[0.9]">
            STEPHANNY
          </h1>
          <h1 className="reveal-blur font-bold text-5xl md:text-7xl lg:text-8xl animate-shimmer leading-[0.9] tracking-tight mb-14">
            CABAS
          </h1>

          {/* Role tags */}
          <div className="reveal flex items-center justify-center gap-3 sm:gap-4 mb-16">
            {['Asesora', 'Promotora', 'Modelo'].map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="inline-block w-1 h-1 rounded-full bg-gold mx-3 sm:mx-4 align-middle" />}
                <span className="text-[10px] sm:text-xs font-normal tracking-[0.12em] uppercase dark:text-cream/50 text-dark/50">
                  {role}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal-slow">
            <a
              href="#contacto"
              className="btn-editorial group inline-flex items-center gap-3 px-10 py-4 glass-gold rounded-full text-gold text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-700 glow-gold-hover"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contactame
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-scroll">
        <div className="w-6 h-10 rounded-full border dark:border-cream/20 border-dark/20 flex justify-center pt-2">
          <div className="w-0.5 h-2.5 rounded-full dark:bg-cream/40 bg-dark/40 animate-mouse-scroll" />
        </div>
        <span className="text-[8px] font-normal tracking-[0.15em] uppercase dark:text-cream/20 text-dark/20">Scroll</span>
      </div>
    </section>
  );
}

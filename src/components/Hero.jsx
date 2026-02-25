import { useScrollFade, useScrollBlur } from '../hooks/useScrollAnimations';
import { socialLinks } from '../data/social';

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
          <div className="reveal flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-[10px] font-body font-semibold tracking-mega uppercase text-gold">
              Modelo &amp; Promotora
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Name - high contrast */}
          <h1 className="reveal-blur font-display font-semibold text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] dark:text-white text-dark leading-[0.85] tracking-tight mb-3">
            STEPHANNY
          </h1>
          <h1 className="reveal-blur font-display font-medium text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] animate-shimmer leading-[0.85] mb-10">
            CABAS
          </h1>

          {/* Role tags */}
          <div className="reveal flex items-center justify-center gap-3 sm:gap-4 mb-14">
            {['Asesora', 'Promotora', 'Modelo'].map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="inline-block w-1 h-1 rounded-full bg-gold mx-3 sm:mx-4 align-middle" />}
                <span className="text-[10px] sm:text-[11px] font-body font-medium tracking-ultra uppercase dark:text-cream/60 text-dark/60">
                  {role}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal-slow">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-10 py-4 glass-gold text-gold text-[10px] font-body font-semibold tracking-mega uppercase hover:bg-gold/15 transition-all duration-700 glow-gold-hover"
            >
              Descubre mas
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social - vertical with brand colors */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-gold/40" />
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-cream/40 text-dark/40 transition-all duration-500 hover:scale-125"
            style={{ '--brand-color': s.color }}
            onMouseEnter={(e) => e.currentTarget.style.color = s.color}
            onMouseLeave={(e) => e.currentTarget.style.color = ''}
            aria-label={s.label}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={s.path} />
            </svg>
          </a>
        ))}
        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-gold/40" />
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-scroll">
        <div className="w-6 h-10 rounded-full border-2 dark:border-cream/30 border-dark/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full dark:bg-cream/50 bg-dark/50 animate-mouse-scroll" />
        </div>
        <span className="text-[8px] font-body tracking-mega uppercase dark:text-cream/30 text-dark/30">Scroll</span>
      </div>
    </section>
  );
}

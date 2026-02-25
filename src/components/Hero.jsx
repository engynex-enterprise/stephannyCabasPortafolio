import { useScrollFade, useScrollBlur } from '../hooks/useScrollAnimations';
import { socialLinks, WHATSAPP_URL } from '../data/social';

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

          {/* CTAs */}
          <div className="reveal-slow flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#25D366]/30 text-[#25D366] text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-700 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.15)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Social icons - horizontal, prominent */}
          <div className="reveal flex items-center justify-center gap-3 mt-14">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110"
                style={{ color: s.color, backgroundColor: s.color + '12' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.color + '25'; e.currentTarget.style.boxShadow = `0 0 25px ${s.color}30`; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = s.color + '12'; e.currentTarget.style.boxShadow = ''; }}
                aria-label={s.label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
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

import { socialLinks } from '../data/social';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-dark bg-warm noise relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Top: Logo + Nav + Social in one row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-2xl font-semibold tracking-tight dark:text-cream text-dark hover:text-gold transition-colors duration-500"
          >
            Stephanny Cabas
          </a>

          {/* Nav links horizontal */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="editorial-underline text-[10px] font-medium tracking-[0.12em] uppercase text-[var(--text-secondary)] hover:text-gold transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons with brand colors */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110"
                style={{ color: social.color, backgroundColor: social.color + '12' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = social.color + '25'; e.currentTarget.style.boxShadow = `0 0 25px ${social.color}30`; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = social.color + '12'; e.currentTarget.style.boxShadow = ''; }}
                aria-label={social.label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs font-normal tracking-wider">
            &copy; {currentYear} Stephanny Cabas. Todos los derechos reservados.
          </p>
          <a
            href="https://engynex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-[var(--text-muted)] text-xs font-normal tracking-wider">by</span>
            <img
              src="/images/engynex-logo.png"
              alt="Engynex"
              className="h-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

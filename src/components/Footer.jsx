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
            className="font-display text-2xl font-semibold tracking-wider uppercase dark:text-cream text-dark hover:text-gold transition-colors duration-500"
          >
            Stephanny Cabas
          </a>

          {/* Nav links horizontal */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-body font-medium tracking-mega uppercase text-[var(--text-secondary)] hover:text-gold transition-colors duration-500"
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
                className="w-9 h-9 glass rounded-lg flex items-center justify-center dark:text-cream/30 text-dark/30 transition-all duration-500 hover:scale-110"
                aria-label={social.label}
                onMouseEnter={(e) => { e.currentTarget.style.color = social.color; e.currentTarget.style.backgroundColor = social.color + '15'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.backgroundColor = ''; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-[10px] tracking-wider uppercase">
            &copy; {currentYear} Stephanny Cabas. Todos los derechos reservados.
          </p>
          <p className="text-[var(--text-muted)] text-[10px] tracking-wider">
            by <span className="text-gold/60 hover:text-gold transition-colors duration-500">Engynex</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

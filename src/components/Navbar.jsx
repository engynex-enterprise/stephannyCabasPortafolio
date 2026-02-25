import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { socialLinks } from '../data/social';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mi', href: '#sobre-mi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'glass-dark border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="text-xl font-semibold tracking-tight uppercase dark:text-cream text-dark hover:text-gold transition-colors duration-500"
          >
            Stephanny
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-expand editorial-underline text-[10px] font-medium tracking-[0.12em] uppercase dark:text-cream/50 text-dark/50 dark:hover:text-cream hover:text-dark transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-1.5 ml-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-gold/50 hover:text-gold hover:bg-gold/10 transition-all duration-500"
                  aria-label={s.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full dark:text-cream/50 text-dark/50 hover:text-gold transition-all duration-500 hover:scale-110"
              aria-label={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center dark:text-cream/50 text-dark/50 hover:text-gold transition-colors duration-500"
              aria-label={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              className="relative z-50 w-8 h-8 flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <div className="relative w-5 h-3">
                <span className={`absolute top-0 left-0 w-full h-[0.5px] dark:bg-cream bg-dark transition-all duration-500 ${menuOpen ? 'rotate-45 top-1.5' : ''}`} />
                <span className={`absolute top-1.5 left-0 w-full h-[0.5px] dark:bg-cream bg-dark transition-all duration-500 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`absolute top-3 left-0 w-full h-[0.5px] dark:bg-cream bg-dark transition-all duration-500 ${menuOpen ? '-rotate-45 top-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 dark:bg-dark/80 bg-warm/80 backdrop-blur-3xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-3xl font-light tracking-wide dark:text-cream/80 text-dark/80 hover:text-gold transition-all duration-700 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <div
            className={`gold-line mt-6 transition-all duration-1000 ${
              menuOpen ? 'w-[80px] opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '550ms' : '0ms' }}
          />
          <div
            className={`flex items-center gap-4 mt-8 transition-all duration-700 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '650ms' : '0ms' }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/10 transition-all duration-500"
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
    </nav>
  );
}

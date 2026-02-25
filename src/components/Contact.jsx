import { socialLinks, EMAIL, EMAIL_HREF, PHONE, WHATSAPP_URL } from '../data/social';

const contactInfo = [
  { icon: 'email', label: 'Email', value: EMAIL, href: EMAIL_HREF },
  { icon: 'phone', label: 'WhatsApp', value: PHONE, href: WHATSAPP_URL },
  { icon: 'location', label: 'Ubicacion', value: 'Colombia', href: '#' },
];

const iconPaths = {
  email: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  phone: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  location: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
};

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="py-28 md:py-40 dark:bg-dark-100 bg-warm-100 noise relative">
        {/* Ambient */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-24 reveal">
            <p className="text-[10px] font-body font-semibold tracking-mega uppercase text-gold mb-5">Contacto</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium dark:text-cream text-dark leading-[1.1]">
              Trabajemos <span className="italic gold-text">juntos</span>
            </h2>
            <div className="gold-line mx-auto mt-8" />
            <p className="text-[var(--text-secondary)] text-sm mt-8 max-w-md mx-auto leading-relaxed">
              Tienes un proyecto en mente? Me encantaria ser parte de el.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Info with glass cards */}
            <div className="lg:col-span-2 space-y-6 reveal-left">
              {contactInfo.map((info) => (
                <a key={info.icon} href={info.href} className="flex items-center gap-5 group glass-card p-5 rounded-xl">
                  <div className="w-10 h-10 glass-gold rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-all duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[info.icon]} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--text-muted)] text-[9px] tracking-wider uppercase mb-1">{info.label}</p>
                    <p className="text-[var(--text-secondary)] text-sm group-hover:text-gold transition-colors duration-500">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div className="pt-4">
                <p className="text-[var(--text-muted)] text-[9px] tracking-mega uppercase mb-5">Redes Sociales</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center dark:text-cream/30 text-dark/30 transition-all duration-500 hover:scale-110"
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
            </div>

            {/* Form with glass container */}
            <div className="lg:col-span-3 reveal-right">
              <form className="glass p-8 md:p-12 glow-gold space-y-8 rounded-2xl">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-[9px] font-body tracking-mega uppercase text-[var(--text-muted)] mb-4">Nombre</label>
                    <input
                      type="text" id="name" name="name" placeholder="Tu nombre"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--border)] focus:border-gold/40 dark:text-cream text-dark text-sm dark:placeholder:text-cream/25 placeholder:text-dark/25 outline-none transition-all duration-700"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-body tracking-mega uppercase text-[var(--text-muted)] mb-4">Email</label>
                    <input
                      type="email" id="email" name="email" placeholder="tu@email.com"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--border)] focus:border-gold/40 dark:text-cream text-dark text-sm dark:placeholder:text-cream/25 placeholder:text-dark/25 outline-none transition-all duration-700"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[9px] font-body tracking-mega uppercase text-[var(--text-muted)] mb-4">Asunto</label>
                  <input
                    type="text" id="subject" name="subject" placeholder="Asunto del mensaje"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--border)] focus:border-gold/40 dark:text-cream text-dark text-sm dark:placeholder:text-cream/25 placeholder:text-dark/25 outline-none transition-all duration-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] font-body tracking-mega uppercase text-[var(--text-muted)] mb-4">Mensaje</label>
                  <textarea
                    id="message" name="message" rows="4" placeholder="Cuentame sobre tu proyecto..."
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--border)] focus:border-gold/40 dark:text-cream text-dark text-sm dark:placeholder:text-cream/25 placeholder:text-dark/25 outline-none transition-all duration-700 resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 glass-gold rounded-full text-gold text-[10px] font-body font-semibold tracking-mega uppercase hover:bg-gold/10 transition-all duration-700 glow-gold-hover"
                  >
                    Enviar Mensaje
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

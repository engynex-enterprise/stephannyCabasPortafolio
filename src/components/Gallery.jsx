import { useState } from 'react';
import { useScrollScale } from '../hooks/useScrollAnimations';

const categories = ['Todos', 'Editorial', 'Moda', 'Swimwear', 'Lifestyle'];

const galleryItems = [
  { id: 1, category: 'editorial', label: 'Blue Neon Editorial', src: '/images/portafolio/stephannyCabas_11.23.52.jpeg', featured: true },
  { id: 2, category: 'editorial', label: 'Beauty Close-up', src: '/images/portafolio/stephannyCabas_11.23.53.jpeg' },
  { id: 3, category: 'editorial', label: 'Studio Portrait', src: '/images/portafolio/stephannyCabas_11.24.10.jpeg' },
  { id: 4, category: 'editorial', label: 'Fashion Silhouette', src: '/images/portafolio/stephannyCabas_11.24.111.jpeg' },
  { id: 5, category: 'editorial', label: 'Artistic Editorial', src: '/images/portafolio/stephannyCabas_11.24.11.jpeg' },
  { id: 6, category: 'editorial', label: 'Neon Lounge', src: '/images/portafolio/stephannyCabas_11.23.521.jpeg' },
  { id: 7, category: 'moda', label: 'Black Dress Elegance', src: '/images/portafolio/stephannyCabas_22.59.591.jpeg', featured: true },
  { id: 8, category: 'moda', label: 'Glamour Portrait', src: '/images/portafolio/stephannyCabas_22.59.59.jpeg' },
  { id: 9, category: 'moda', label: 'Statement Look', src: '/images/portafolio/stephannyCabas_22.59.58.jpeg' },
  { id: 10, category: 'moda', label: 'Dynamic Pose', src: '/images/portafolio/stephannyCabas_23.00.00.jpeg' },
  { id: 11, category: 'moda', label: 'Power Stance', src: '/images/portafolio/stephannyCabas_23.00.002.jpeg' },
  { id: 12, category: 'moda', label: 'Fashion Forward', src: '/images/portafolio/stephannyCabas_23.00.001.jpeg' },
  { id: 13, category: 'swimwear', label: 'Rooftop Nights', src: '/images/portafolio/stephannyCabas_11.23.38.jpeg', featured: true },
  { id: 14, category: 'swimwear', label: 'City Lights', src: '/images/portafolio/stephannyCabas_11.23.383.jpeg' },
  { id: 15, category: 'swimwear', label: 'Poolside Glamour', src: '/images/portafolio/stephannyCabas_11.23.381.jpeg' },
  { id: 16, category: 'swimwear', label: 'Golden Hour', src: '/images/portafolio/stephannyCabas_11.23.391.jpeg' },
  { id: 17, category: 'swimwear', label: 'Cinematic Vibes', src: '/images/portafolio/stephannyCabas_11.23.39.jpeg' },
  { id: 18, category: 'swimwear', label: 'Studio Swimwear', src: '/images/portafolio/stephannyCabas_11.24.101.jpeg' },
  { id: 19, category: 'swimwear', label: 'Studio Back', src: '/images/portafolio/stephannyCabas_11.24.102.jpeg' },
  { id: 20, category: 'swimwear', label: 'Pool Session', src: '/images/portafolio/stephannyCabas_11.23.382.jpeg' },
  { id: 21, category: 'lifestyle', label: 'Professional Portrait', src: '/images/portafolio/stephannyCabas_23.03.47.jpeg', featured: true },
  { id: 22, category: 'lifestyle', label: 'White Suit Session', src: '/images/portafolio/stephannyCabas_23.03.48.jpeg' },
  { id: 23, category: 'lifestyle', label: 'Lifestyle Elegance', src: '/images/portafolio/stephannyCabas_23.03.481.jpeg' },
  { id: 24, category: 'lifestyle', label: 'Thoughtful Moment', src: '/images/portafolio/stephannyCabas_23.03.482.jpeg' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const scaleRef = useScrollScale(0.92);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const displayed = activeFilter === 'all' ? filtered.slice(0, 12) : filtered;

  return (
    <section id="portfolio" className="py-28 md:py-40 relative overflow-hidden noise">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.04] rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <p className="text-[10px] font-body font-semibold tracking-mega uppercase text-gold mb-5">Portfolio</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium dark:text-cream text-dark leading-[1.1]">
            Mi <span className="italic gold-text">trabajo</span>
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
          {categories.map((cat) => {
            const val = cat === 'Todos' ? 'all' : cat.toLowerCase();
            const isActive = activeFilter === val;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(val)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-body font-medium tracking-ultra uppercase transition-all duration-700 ${
                  isActive
                    ? 'glass-gold text-gold glow-gold'
                    : 'glass dark:text-cream/40 text-dark/40 dark:hover:text-cream/70 hover:text-dark/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div ref={scaleRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 stagger">
          {displayed.map((item, i) => {
            const isFeatured = item.featured && (i === 0 || i === 5 || i === 8);
            return (
              <div
                key={item.id}
                className={`reveal-scale visible group relative overflow-hidden cursor-pointer rounded-lg ${
                  isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setLightbox(item)}
              >
                <div className="aspect-square w-full dark:bg-dark-200 bg-warm-100 border border-[var(--border)] relative overflow-hidden rounded-lg">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="font-display text-lg lg:text-xl font-medium text-cream mb-1">{item.label}</p>
                      <p className="text-gold text-[9px] tracking-mega uppercase capitalize">{item.category}</p>
                      <div className="w-8 h-[1px] bg-gold/50 mt-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-3xl" />
          <button
            className="absolute top-6 right-8 z-10 text-cream/50 hover:text-gold text-2xl transition-colors duration-500"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 glass-dark p-4 text-center rounded-b-lg">
              <p className="font-display text-lg font-medium text-cream">{lightbox.label}</p>
              <p className="text-gold text-[9px] tracking-mega uppercase capitalize">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState, useEffect, useCallback, useRef } from 'react';

const categories = ['Todos', 'Editorial', 'Moda', 'Swimwear', 'Lifestyle'];

const galleryItems = [
  { id: 1, category: 'editorial', label: 'Blue Neon Editorial', src: '/images/portafolio/stephannyCabas_11.23.52.jpeg' },
  { id: 2, category: 'editorial', label: 'Beauty Close-up', src: '/images/portafolio/stephannyCabas_11.23.53.jpeg' },
  { id: 3, category: 'editorial', label: 'Studio Portrait', src: '/images/portafolio/stephannyCabas_11.24.10.jpeg' },
  { id: 4, category: 'editorial', label: 'Fashion Silhouette', src: '/images/portafolio/stephannyCabas_11.24.111.jpeg' },
  { id: 5, category: 'editorial', label: 'Artistic Editorial', src: '/images/portafolio/stephannyCabas_11.24.11.jpeg' },
  { id: 6, category: 'editorial', label: 'Neon Lounge', src: '/images/portafolio/stephannyCabas_11.23.521.jpeg' },
  { id: 7, category: 'moda', label: 'Black Dress Elegance', src: '/images/portafolio/stephannyCabas_22.59.591.jpeg' },
  { id: 8, category: 'moda', label: 'Glamour Portrait', src: '/images/portafolio/stephannyCabas_22.59.59.jpeg' },
  { id: 9, category: 'moda', label: 'Statement Look', src: '/images/portafolio/stephannyCabas_22.59.58.jpeg' },
  { id: 10, category: 'moda', label: 'Dynamic Pose', src: '/images/portafolio/stephannyCabas_23.00.00.jpeg' },
  { id: 11, category: 'moda', label: 'Power Stance', src: '/images/portafolio/stephannyCabas_23.00.002.jpeg' },
  { id: 12, category: 'moda', label: 'Fashion Forward', src: '/images/portafolio/stephannyCabas_23.00.001.jpeg' },
  { id: 13, category: 'swimwear', label: 'Rooftop Nights', src: '/images/portafolio/stephannyCabas_11.23.38.jpeg' },
  { id: 14, category: 'swimwear', label: 'City Lights', src: '/images/portafolio/stephannyCabas_11.23.383.jpeg' },
  { id: 15, category: 'swimwear', label: 'Poolside Glamour', src: '/images/portafolio/stephannyCabas_11.23.381.jpeg' },
  { id: 16, category: 'swimwear', label: 'Golden Hour', src: '/images/portafolio/stephannyCabas_11.23.391.jpeg' },
  { id: 17, category: 'swimwear', label: 'Cinematic Vibes', src: '/images/portafolio/stephannyCabas_11.23.39.jpeg' },
  { id: 18, category: 'swimwear', label: 'Studio Swimwear', src: '/images/portafolio/stephannyCabas_11.24.101.jpeg' },
  { id: 19, category: 'swimwear', label: 'Studio Back', src: '/images/portafolio/stephannyCabas_11.24.102.jpeg' },
  { id: 20, category: 'swimwear', label: 'Pool Session', src: '/images/portafolio/stephannyCabas_11.23.382.jpeg' },
  { id: 21, category: 'lifestyle', label: 'Professional Portrait', src: '/images/portafolio/stephannyCabas_23.03.47.jpeg' },
  { id: 22, category: 'lifestyle', label: 'White Suit Session', src: '/images/portafolio/stephannyCabas_23.03.48.jpeg' },
  { id: 23, category: 'lifestyle', label: 'Lifestyle Elegance', src: '/images/portafolio/stephannyCabas_23.03.481.jpeg' },
  { id: 24, category: 'lifestyle', label: 'Thoughtful Moment', src: '/images/portafolio/stephannyCabas_23.03.482.jpeg' },
];

/* Full collage: 24 images on a 24-col x 9-row grid */
const fullCollagePositions = [
  { col: '1 / 4', row: '1 / 4', z: 2, r: -1 },
  { col: '3 / 7', row: '1 / 3', z: 1, r: 0.5 },
  { col: '6 / 9', row: '1 / 5', z: 3, r: -0.5 },
  { col: '9 / 14', row: '1 / 3', z: 2, r: 0 },
  { col: '13 / 16', row: '1 / 4', z: 1, r: 0.8 },
  { col: '16 / 19', row: '1 / 3', z: 2, r: -0.3 },
  { col: '18 / 22', row: '1 / 5', z: 3, r: 0.5 },
  { col: '21 / 25', row: '1 / 4', z: 1, r: -0.8 },
  { col: '1 / 5', row: '4 / 6', z: 1, r: 0.3 },
  { col: '4 / 8', row: '3 / 7', z: 3, r: -0.5 },
  { col: '7 / 10', row: '4 / 7', z: 2, r: 0 },
  { col: '10 / 14', row: '2 / 8', z: 4, r: 0 },
  { col: '13 / 16', row: '4 / 7', z: 2, r: 0.5 },
  { col: '15 / 19', row: '3 / 7', z: 1, r: -0.3 },
  { col: '19 / 23', row: '4 / 6', z: 2, r: 0.8 },
  { col: '22 / 25', row: '3 / 6', z: 3, r: -0.5 },
  { col: '1 / 4', row: '6 / 10', z: 2, r: 0.5 },
  { col: '3 / 6', row: '7 / 10', z: 1, r: -0.3 },
  { col: '5 / 10', row: '6 / 10', z: 3, r: 0 },
  { col: '10 / 14', row: '7 / 10', z: 2, r: 0.5 },
  { col: '13 / 17', row: '6 / 10', z: 1, r: -0.5 },
  { col: '17 / 21', row: '7 / 10', z: 2, r: 0.3 },
  { col: '20 / 23', row: '6 / 9', z: 3, r: -0.8 },
  { col: '22 / 25', row: '7 / 10', z: 1, r: 0.5 },
];

/* Small collage: up to 8 images on a 12-col x 6-row grid */
const smallCollagePositions = [
  { col: '1 / 4', row: '1 / 4', z: 2, r: -1 },
  { col: '3 / 7', row: '1 / 3', z: 1, r: 0.5 },
  { col: '6 / 9', row: '1 / 4', z: 3, r: -0.5 },
  { col: '8 / 13', row: '1 / 4', z: 2, r: 0.3 },
  { col: '1 / 5', row: '3 / 7', z: 1, r: 0.3 },
  { col: '4 / 8', row: '4 / 7', z: 3, r: -0.5 },
  { col: '7 / 10', row: '3 / 7', z: 2, r: 0 },
  { col: '9 / 13', row: '4 / 7', z: 1, r: 0.8 },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('collage');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffsetStart = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const lightbox = lightboxIndex >= 0 ? filtered[lightboxIndex] : null;

  const openLightbox = useCallback((item) => {
    const idx = filtered.findIndex((f) => f.id === item.id);
    setLightboxIndex(idx);
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, [filtered]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex < 0) return;
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex < 0) return;
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, [lightboxIndex, filtered.length]);

  const toggleZoom = useCallback(() => {
    setZoom((prev) => {
      if (prev === 1) return 2;
      setPanOffset({ x: 0, y: 0 });
      return 1;
    });
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex < 0) return;
    const handleKey = (e) => {
      switch (e.key) {
        case 'ArrowRight': e.preventDefault(); goNext(); break;
        case 'ArrowLeft': e.preventDefault(); goPrev(); break;
        case 'Escape': e.preventDefault(); closeLightbox(); break;
        case '+': case '=': e.preventDefault(); zoomIn(); break;
        case '-': e.preventDefault(); zoomOut(); break;
        case '0': e.preventDefault(); setZoom(1); setPanOffset({ x: 0, y: 0 }); break;
      }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, goNext, goPrev, closeLightbox, zoomIn, zoomOut]);

  // Mouse drag to pan when zoomed
  const handlePointerDown = useCallback((e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    panOffsetStart.current = { ...panOffset };
  }, [zoom, panOffset]);

  const handlePointerMove = useCallback((e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setPanOffset({
      x: panOffsetStart.current.x + dx,
      y: panOffsetStart.current.y + dy,
    });
  }, [isPanning]);

  const handlePointerUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  // Mouse wheel zoom
  const handleWheel = useCallback((e) => {
    if (lightboxIndex < 0) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.25, 4));
    } else {
      setZoom((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPanOffset({ x: 0, y: 0 });
        return next;
      });
    }
  }, [lightboxIndex]);

  const isAllItems = activeFilter === 'all';
  const collagePositions = isAllItems ? fullCollagePositions : smallCollagePositions;

  return (
    <section id="portfolio" className="py-28 md:py-40 relative overflow-hidden noise">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.04] rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-24 md:mb-28 reveal">
          <p className="text-[var(--text-muted)] text-[10px] font-normal tracking-[0.15em] mb-3">02</p>
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold mb-6">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight dark:text-cream text-dark">
            Mi <span className="italic font-normal gold-text">trabajo</span>
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </div>

        {/* Controls: Filters + View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 reveal">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const val = cat === 'Todos' ? 'all' : cat.toLowerCase();
              const isActive = activeFilter === val;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(val)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-medium tracking-[0.12em] uppercase transition-all duration-700 ${
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

          {/* View Mode Toggle */}
          <div className="flex items-center glass rounded-full p-1 gap-1">
            {/* Grid icon */}
            <button
              onClick={() => setViewMode('grid')}
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-500 ${
                viewMode === 'grid'
                  ? 'glass-gold text-gold'
                  : 'dark:text-cream/30 text-dark/30 dark:hover:text-cream/60 hover:text-dark/60'
              }`}
              aria-label="Vista cuadricula"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>

            {/* Collage icon */}
            <button
              onClick={() => setViewMode('collage')}
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-500 ${
                viewMode === 'collage'
                  ? 'glass-gold text-gold'
                  : 'dark:text-cream/30 text-dark/30 dark:hover:text-cream/60 hover:text-dark/60'
              }`}
              aria-label="Vista collage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h5.25v7.5H3.75zM3.75 14.25h7.5v6H3.75zM12 3.75h8.25v4.5H12zM14.25 11.25h6v9h-6z" />
              </svg>
            </button>
          </div>
        </div>

        {/* COLLAGE VIEW */}
        {viewMode === 'collage' && (
          <div className={`collage-grid ${isAllItems ? 'collage-full' : 'collage-small'}`}>
            {filtered.map((item, i) => {
              const pos = collagePositions[i % collagePositions.length];
              return (
                <div
                  key={item.id}
                  className="collage-item group cursor-pointer"
                  style={{
                    gridColumn: pos.col,
                    gridRow: pos.row,
                    zIndex: pos.z,
                    transform: `rotate(${pos.r}deg)`,
                  }}
                  onClick={() => openLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover rounded-lg transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm rounded-lg" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-sm lg:text-base font-medium text-cream mb-1">{item.label}</p>
                      <p className="text-gold text-[9px] font-semibold tracking-[0.12em] uppercase">{item.category}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="editorial-zoom group relative cursor-pointer rounded-lg aspect-[3/4]"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-lg lg:text-xl font-medium italic text-cream mb-1">{item.label}</p>
                    <p className="text-gold text-[10px] font-semibold tracking-[0.12em] uppercase">{item.category}</p>
                    <div className="w-8 h-[0.5px] bg-gold/50 mt-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-3xl" />

          {/* Top bar: counter + close */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5" onClick={(e) => e.stopPropagation()}>
            <p className="text-cream/40 text-xs font-normal tracking-wider">
              {lightboxIndex + 1} / {filtered.length}
            </p>
            <div className="flex items-center gap-2">
              {/* Zoom controls */}
              <button
                onClick={zoomOut}
                className="w-9 h-9 flex items-center justify-center rounded-full glass text-cream/40 hover:text-gold transition-all duration-500"
                aria-label="Alejar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
                </svg>
              </button>
              <button
                onClick={zoomIn}
                className="w-9 h-9 flex items-center justify-center rounded-full glass text-cream/40 hover:text-gold transition-all duration-500"
                aria-label="Acercar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </button>
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="w-9 h-9 flex items-center justify-center rounded-full glass text-cream/40 hover:text-gold transition-all duration-500 ml-1"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Previous arrow */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full glass text-cream/40 hover:text-gold hover:scale-110 transition-all duration-500"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full glass text-cream/40 hover:text-gold hover:scale-110 transition-all duration-500"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image container with zoom + pan */}
          <div
            ref={imageContainerRef}
            className="relative z-10 max-w-[85vw] max-h-[80vh] flex items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            style={{ cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in' }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-[80vh] object-contain rounded-lg transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
              }}
              draggable="false"
              onClick={(e) => { if (zoom === 1) { e.stopPropagation(); toggleZoom(); } }}
            />
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 py-5 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg md:text-xl font-medium italic text-cream/80">{lightbox.label}</p>
            <p className="text-gold/60 text-[10px] font-semibold tracking-[0.12em] uppercase mt-1">{lightbox.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}

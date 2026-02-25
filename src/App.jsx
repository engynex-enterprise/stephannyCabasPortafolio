import { useRevealObserver, useScrollProgress } from './hooks/useScrollAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useRevealObserver();
  useScrollProgress();

  return (
    <>
      <div className="scroll-progress" />
      <Navbar />

      <main>
        <Hero />
        <div className="space-y-3 px-2 md:px-4 py-3">
          <div className="rounded-3xl overflow-hidden section-tile">
            <About />
          </div>
          <div className="rounded-3xl overflow-hidden section-tile">
            <Gallery />
          </div>
          <div className="rounded-3xl overflow-hidden section-tile">
            <Contact />
          </div>
        </div>
      </main>

      <div className="px-2 md:px-4 pb-3">
        <div className="rounded-3xl overflow-hidden section-tile">
          <Footer />
        </div>
      </div>
    </>
  );
}

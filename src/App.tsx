// Ce flag module reste true tant que la page n'est pas rechargée
let hasLoadedOnce = false;
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import './App.css'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel.tsx'

import About from './components/About';
import Contact from './components/Contact';
  
import HorizontalScrollText from './components/HorizontalScrollText';
import MouseTrail from './components/mouse.tsx';
import Navbar from './components/Navbar.tsx';



function App() {
  const [loading, setLoading] = useState(() => {
    if (!hasLoadedOnce) {
      hasLoadedOnce = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  const [mainPointerEvents, setMainPointerEvents] = useState<React.CSSProperties['pointerEvents']>('auto');

  useEffect(() => {
    const handleScroll = () => {
      const contactAnchor = document.getElementById('contact');
      if (!contactAnchor) return;
      const rect = contactAnchor.getBoundingClientRect();
      // Si l'ancre contact est dans le viewport (visible), on bloque le main
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setMainPointerEvents('none');
      } else {
        setMainPointerEvents('auto');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="relative w-full min-h-screen bg-[#faf6e7]">
      {/* Contact en fond, toujours présent */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Contact />
      </div>
      {/* Contenu principal scrollable, effet rideau natif */}
      <main
        className="relative z-10 min-h-screen bg-transparent"
        style={{ pointerEvents: mainPointerEvents }}
      >
        <Navbar />
        <MouseTrail />
        <HorizontalScrollText />
        <div id="about">
          <About />
        </div>
        <div id='projects'>
          <HorizontalScrollCarousel />
        </div>
        {/* Espace pour scroller et révéler Contact */}
        <div className="w-full h-[100vh]" />
        {/* Ancre scrollable pour la section contact */}
        <div id="contact" className="w-full h-0" />
        <section id="section10" >
          <a className="scroll-down-btn"> <span></span></a>
        </section>
      </main>
    </div>
  );
}

export default App

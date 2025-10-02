// Ce flag module reste true tant que la page n'est pas rechargée
let hasLoadedOnce = false;
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import './App.css'
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
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
    <I18nextProvider i18n={i18n}>
      <div className="relative w-full min-h-screen bg-[#faf6e7]">
        {/* Contact en fond, toujours présent */}
        
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
          <div id='contact'>
            <Contact />
          </div>
         
          <section id="section10" >
            <a className="scroll-down-btn"> <span></span></a>
          </section>
        </main>
        
        {/* Footer en dehors du main pour éviter les conflits pointer-events */}
   
      </div>
    </I18nextProvider>
  );
}

export default App

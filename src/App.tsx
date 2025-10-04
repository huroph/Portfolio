// Ce flag module reste true tant que la page n'est pas rechargée
let hasLoadedOnce = false;
import Loader from './components/Loader';
import SmallScreenError from './components/SmallScreenError';
import { useState, useEffect } from 'react';
import './App.css'
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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

  // Détection de la largeur d'écran
  const [showSmallScreenError, setShowSmallScreenError] = useState(window.innerWidth < 800);

  // Callback pour que le Loader puisse signaler qu'il a terminé
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  // Écouter les changements de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowSmallScreenError(width < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  if (loading) return <Loader onComplete={handleLoaderComplete} />;
  
  // Afficher l'écran d'erreur si l'écran est trop petit
  if (showSmallScreenError) return <SmallScreenError />;
  
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
          <div id='contact' className='h-screen'>
            <Contact />
          </div>
         
          <section id="section10" >
            <a className="scroll-down-btn"> <span></span></a>
          </section>
        </main>
        
        {/* Footer en dehors du main pour éviter les conflits pointer-events */}
        
        {/* Vercel Analytics */}
        <Analytics />
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </div>
    </I18nextProvider>
  );
}

export default App

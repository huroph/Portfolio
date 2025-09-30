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

  if (loading) return <Loader />;
  return (
    <div className="relative w-full min-h-screen bg-[#faf6e7]">
      {/* Contact en fond, toujours présent */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Contact />
      </div>
      {/* Contenu principal scrollable, effet rideau natif */}
      <main className="relative z-10 min-h-screen">
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
        <section id="section10" >
          <a className="scroll-down-btn"> <span></span></a>
        </section>
      </main>
    </div>
  );
}

export default App

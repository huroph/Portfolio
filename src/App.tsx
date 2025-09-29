import './App.css'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel.tsx'

import About from './components/About';
import Contact from './components/Contact';
  
import HorizontalScrollText from './components/HorizontalScrollText';
import MouseTrail from './components/mouse.tsx';
import Navbar from './components/Navbar.tsx';


function App() {
  return (
    <div className="bg-neutral-800">
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

       <section
                    id="section10" >
                    <a className="scroll-down-btn"> <span></span></a>
                </section>
    </div>
  )
}

export default App

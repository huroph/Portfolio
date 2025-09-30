
import { useParams } from 'react-router-dom';
import '../humane-font.css';

import { useEffect, useRef } from 'react';

const ProjectPage = () => {
  const { project } = useParams();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const font = window.getComputedStyle(titleRef.current).fontFamily;
      // eslint-disable-next-line no-console
      console.log('Font utilisée pour le titre projet :', font);
    }
  }, []);

  return (
    <>
      {/* Titre projet pleine hauteur */}
      <div className="flex flex-col items-center justify-end h-screen bg-[#faf6e7] px-8 md:px-32">
        <h1
          ref={titleRef}
          className="text-[20vw] font-bold text-[#ff4300] text-center mt-20 humane-title"
        >
          {project?.toUpperCase()}
        </h1>
      </div>

      {/* Brief projet style maquette */}
      <section className="w-full flex flex-col items-center py-16 bg-[#faf6e7] px-100 " >
        <div className="w-full max-w-5xl flex flex-col gap-12">
          {/* BRIEF */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{letterSpacing: '.08em'}}>Brief</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <p className="text-md  text-[#222] font-normal leading-snug">
              Smart Pulse Industrie specializes in the energy optimization of industrial buildings through the installation of destratifiers, enabling companies to significantly reduce their energy consumption.
            </p>
          </div>
          {/* YEAR */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest text-lg humane-title text-[40px] font-extrabold " style={{letterSpacing: '.08em'}}>Year</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">2024</span>
          </div>
          {/* SERVICES */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{letterSpacing: '.08em'}}>Services</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">Brand identity</span>
          </div>
          {/* CLIENT */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{letterSpacing: '.08em'}}>Client</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">Smart Pulse Industrie</span>
          </div>
        </div>
      </section>

      {/* Mosaïque d'images (placeholders) */}
      <section className="w-full flex flex-col items-center py-16 bg-[#faf6e7] px-8 md:px-32">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-3xl bg-[#ff4300] flex items-center justify-center text-white text-2xl font-bold opacity-80"
            >
              Image {i}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

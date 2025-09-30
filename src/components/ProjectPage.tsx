
import { useParams } from 'react-router-dom';
import '../humane-font.css';
import { useRef, useEffect } from 'react';
import { projects } from '../data/projects';

const ProjectPage = () => {
  const { project } = useParams();
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Cherche les données du projet correspondant au paramètre d'URL
  const projectData = projects.find(p => p.slug.toLowerCase() === (project || '').toLowerCase());

  // Scroll en haut à chaque navigation sur la page projet
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [project]);

  if (!projectData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf6e7]">
        <h1 className="text-4xl text-[#ff4300] font-bold mb-4">Projet introuvable</h1>
        <a href="/" className="text-[#ff4300] underline text-lg">Retour à l'accueil</a>
      </div>
    );
  }

  return (
    <>
      {/* Titre projet pleine hauteur */}
      <div className="flex flex-col items-center justify-end h-screen bg-[#faf6e7] px-8 md:px-32">
        <h1
          ref={titleRef}
          className="text-[20vw] font-bold text-[#ff4300] text-center mt-20 humane-title"
        >
          {projectData.title}
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
              {projectData.brief}
            </p>
          </div>
          {/* YEAR */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest text-lg humane-title text-[40px] font-extrabold " style={{letterSpacing: '.08em'}}>Year</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">{projectData.year}</span>
          </div>
          {/* SERVICES */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{letterSpacing: '.08em'}}>Services</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">{projectData.services}</span>
          </div>
          {/* CLIENT */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{letterSpacing: '.08em'}}>Client</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <span className="text-md text-[#222] font-normal">{projectData.client}</span>
          </div>
        </div>
      </section>

      {/* Mosaïque d'images (placeholders) */}
      <section className="w-full flex flex-col items-center py-16 bg-[#faf6e7] px-8 md:px-32">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(projectData.images.length > 0
            ? projectData.images
            : [1,2,3,4,5,6]
          ).map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-3xl bg-[#ff4300] flex items-center justify-center text-white text-2xl font-bold opacity-80"
            >
              {typeof img === 'string' ? <img src={img} alt={projectData.title + ' visuel'} className="w-full h-full object-cover rounded-3xl" /> : `Image ${i+1}`}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

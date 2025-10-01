
import { useParams } from 'react-router-dom';
import '../humane-font.css';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import Contact from './Contact';

// Imports dynamiques des mockups pour tous les projets
import trueTourismMockup1 from '../assets/truetourism/Mockup_1.png';
import trueTourismMockup2 from '../assets/truetourism/Mockup_2.png';
import BambouTechMockup1 from '../assets/BambouTech/Mockup_1.png';
import BambouTechMockup2 from '../assets/BambouTech/Mockup_2.png';
import EoleMockup1 from '../assets/Eole/Mockup_1.png';
import EoleMockup2 from '../assets/Eole/Mockup_2.png';

const ProjectPage = () => {
    const [contactZIndex, setContactZIndex] = useState(0);
    const [contactPointerEvents, setContactPointerEvents] = useState('none');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const contactAnchor = document.getElementById('contact');
            if (!contactAnchor) return;
            const rect = contactAnchor.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setContactZIndex(20);
                setContactPointerEvents('auto');
            } else {
                setContactZIndex(0);
                setContactPointerEvents('none');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const contactAnchor = document.getElementById('contact');
            if (!contactAnchor) return;
            const rect = contactAnchor.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setContactZIndex(20);
            } else {
                setContactZIndex(0);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const { project } = useParams();
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Cherche les données du projet correspondant au paramètre d'URL
    const projectData = projects.find(p => p.slug.toLowerCase() === (project || '').toLowerCase());

    // Fonction pour récupérer les images selon le projet
    const getProjectMockups = (projectSlug: string) => {
        switch (projectSlug.toLowerCase()) {
            case 'truetourism':
                return { mockup1: trueTourismMockup1, mockup2: trueTourismMockup2 };
            case 'bamboutech':
                return { mockup1: BambouTechMockup1, mockup2: BambouTechMockup2 };
            case 'eole':
                return { mockup1: EoleMockup1, mockup2: EoleMockup2 };
            default:
                return { mockup1: trueTourismMockup1, mockup2: trueTourismMockup2 };
        }
    };

    const currentMockups = getProjectMockups(project || '');

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
        <div className="relative w-full min-h-screen bg-[#faf6e7]">
            {/* Contact en fond, effet rideau restauré */}
            <div className="fixed inset-0" style={{ zIndex: contactZIndex, pointerEvents: contactPointerEvents as any }}>
                <Contact />
            </div>
            {/* Contenu principal scrollable, effet rideau natif */}
            <main
                className="relative z-10 min-h-screen"
            >
                {/* Titre projet pleine hauteur */}
                <div className="flex flex-col items-center justify-end h-screen bg-[#faf6e7] px-8 md:px-32">
                    <h1
                        ref={titleRef}
                        className="text-[20vw] font-bold text-[#ff4300] text-center mt-20 humane-title"
                    >
                        {i18n.language.startsWith('fr') ? projectData.title : (projectData.title_en || projectData.title)}
                    </h1>
                </div>

                {/* Brief projet style maquette */}
                <section className="w-full flex flex-col items-center py-16 bg-[#faf6e7] px-100 " >
                    <div className="w-full max-w-5xl flex flex-col gap-12">
                        {/* BRIEF */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{ letterSpacing: '.08em' }}>Brief</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>
                            <p className="text-md  text-[#222] font-normal leading-snug">
                                {i18n.language.startsWith('fr') ? projectData.brief : (projectData.brief_en || projectData.brief)}
                            </p>
                        </div>
                        {/* YEAR */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="uppercase text-[#ff4300] tracking-widest text-lg humane-title text-[40px] font-extrabold " style={{ letterSpacing: '.08em' }}>Year</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>
                            <span className="">{projectData.year}</span>
                        </div>
                        {/* SERVICES */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{ letterSpacing: '.08em' }}>Services</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>
                            <span className="text-md text-[#222] font-normal">{projectData.services}</span>
                        </div>
                        {/* CLIENT */}
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title text-[40px]" style={{ letterSpacing: '.08em' }}>Client</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>
                            <span className="text-md text-[#222] font-normal">{projectData.client}</span>
                        </div>
                    </div>
                </section>

                {/* images Mockup */}
                <section className="w-full flex flex-col items-center justify-center  py-16 bg-[#faf6e7] px-8 md:px-32 gap-8">
                    <div className="w-full flex justify-center">
                        <img 
                            src={currentMockups.mockup1} 
                            alt={`Mockup 1 du projet ${projectData?.title}`} 
                            className="w-2/3 h-auto"
                        />
                    </div>
                     <div className="w-full flex justify-center">
                        <img 
                            src={currentMockups.mockup2} 
                            alt={`Mockup 2 du projet ${projectData?.title}`} 
                            className="w-2/3 h-auto"
                        />
                    </div>
                </section>
                {/* Section projet suivant */}
                <section className="w-full flex flex-col items-center py-24 bg-[#faf6e7] px-8 md:px-32">
                    <div className="w-full max-w-3xl flex flex-col items-center gap-8">
                        <span className="uppercase text-[#ff4300] tracking-widest font-bold text-lg humane-title mb-6">Projet suivant</span>
                        <div className="w-full flex flex-col md:flex-row items-center gap-8">
                            <div className="w-[320px] h-[220px] rounded-3xl bg-[#ff4300] flex items-center justify-center text-white text-2xl font-bold opacity-80">
                                {/* Image placeholder, à remplacer par l'image du projet suivant */}
                                Image
                            </div>
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <span className="text-3xl font-bold text-[#ff4300] humane-title">{
                                    (() => {
                                        const idx = projects.findIndex(p => p.slug.toLowerCase() === (project || '').toLowerCase());
                                        const next = projects[(idx + 1) % projects.length];
                                        return next.title;
                                    })()
                                }</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Espace pour scroller et révéler Contact */}
                <div className="w-full h-[100vh]" />
                {/* Ancre scrollable pour la section contact */}
                <div id="contact" className="w-full h-0" />
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
};

export default ProjectPage;

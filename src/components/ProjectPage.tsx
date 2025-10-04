
import { useParams, useNavigate } from 'react-router-dom';
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
import MockupTrueTourism1 from './mockup/truetourism/Mockup_1';
import MockupTrueTourism2 from './mockup/truetourism/Mockup_2';
import MockupBambouTech1 from './mockup/bamboutech/Mockup_1';
import MockupBambouTech2 from './mockup/bamboutech/Mockup_2';
import transTrueTourism from '../assets/truetourism/transTruetourism.webp';
import transBambouTech from '../assets/BambouTech/transBambouTech.webp';
import transEole from '../assets/Eole/transEole.webp';

const ProjectPage = () => {

    const { i18n, t } = useTranslation();
    const navigate = useNavigate();
    const [isBackButtonVisible, setIsBackButtonVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { project } = useParams();
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Cherche les données du projet correspondant au paramètre d'URL
    const projectData = projects.find(p => p.slug.toLowerCase() === (project || '').toLowerCase());

    // Gestion du scroll pour le bouton retour
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scroll vers le bas
                setIsBackButtonVisible(false);
            } else {
                // Scroll vers le haut
                setIsBackButtonVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Fonction pour obtenir le projet suivant
    const getNextProject = () => {
        const currentIndex = projects.findIndex(p => p.slug.toLowerCase() === (project || '').toLowerCase());
        const nextIndex = (currentIndex + 1) % projects.length;
        return projects[nextIndex];
    };

    const nextProject = getNextProject();

    // Fonction pour récupérer l'image de transition selon le projet
    const getTransitionImage = (projectSlug: string) => {
        switch (projectSlug.toLowerCase()) {
            case 'truetourism':
                return transTrueTourism;
            case 'bamboutech':
                return transBambouTech;
            case 'eole':
                return transEole;
            default:
                return transTrueTourism; // Image par défaut
        }
    };

    // Navigation vers le projet suivant
    const handleNextProject = () => {
        navigate(`/project/${nextProject.slug}`);
    };

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
            {/* Bouton retour fixe en haut */}
            <button 
                onClick={() => navigate('/#projects')}
                className={`fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 text-[#ff4300] font-medium cursor-pointer hover:underline transition-all duration-300 group ${
                    isBackButtonVisible ? 'translate-y-0' : '-translate-y-20'
                }`}
                aria-label="Retour aux projets"
            >
                <svg 
                    className="w-5 h-5 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7 7m-7-7l7-7" />
                </svg>
                <span className="transition-all duration-300 group-hover:scale-110">{t('back_button')}</span>
            </button>

            {/* Contact en fond, effet rideau restauré */}

            {/* Contenu principal scrollable, effet rideau natif */}
            <main
                className="relative z-10 min-h-screen flex flex-col  items-center justify-center"
            >
                {/* Titre projet pleine hauteur */}
                <div className="flex flex-col items-center justify-end h-screen bg-[#faf6e7] px-8 ">
                    <h1
                        ref={titleRef}
                        className="text-[20vw] font-bold text-[#ff4300] text-center mt-20 humane-title"
                    >
                        {i18n.language.startsWith('fr') ? projectData.title : (projectData.title_en || projectData.title)}
                    </h1>
                </div>

                {/* Brief projet style maquette */}
                <section className="w-1/2 flex flex-col items-center py-16 bg-[#faf6e7]  " >
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
                {/* images Mockup - Dynamiques selon le projet */}
                {project?.toLowerCase() === 'truetourism' && (
                    <>
                        <section className="w-full flex flex-col items-center justify-center  bg-[#faf6e7]   ">
                            <MockupTrueTourism1 />
                        </section>
                        <section className="w-full flex flex-col items-center justify-center py-4 bg-[#faf6e7] ">
                            <MockupTrueTourism2 />
                        </section>
                    </>
                )}

                {project?.toLowerCase() === 'bamboutech' && (
                    <>
                        <section className="w-full flex flex-col items-center justify-center  bg-[#faf6e7] px-8 md:px-32 gap-8">
                            <MockupBambouTech1 />
                        </section>
                        <section className="w-full flex flex-col items-center justify-center py-4 bg-[#faf6e7] px-8 md:px-32 gap-8">
                            <MockupBambouTech2 />
                        </section>
                    </>
                )}

                {project?.toLowerCase() === 'eole' && (
                    <section className="w-full flex flex-col items-center justify-center py-16 bg-[#faf6e7] px-8 md:px-32 gap-8">
                        <div className="w-full flex justify-center">
                            <img
                                loading="lazy"
                                src={currentMockups.mockup1}
                                alt={`Mockup 1 du projet ${projectData?.title}`}
                                className="w-2/3 h-auto"
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <img
                                loading="lazy"
                                src={currentMockups.mockup2}
                                alt={`Mockup 2 du projet ${projectData?.title}`}
                                className="w-2/3 h-auto"
                            />
                        </div>
                    </section>
                )}
                {/* Section projet suivant */}
                <div className="relative h-[200vh] ">
                    <section className="w-full h-screen flex flex-col items-center py-24 bg-[#faf6e7] sticky top-0">
                        <div className="w-full flex flex-col items-center gap-8">
                            <div className='h-150 w-full justify-center flex items-end sticky'>
                                <div className="uppercase text-[#ff4300] font-extralight text-[20vw] text-center mb-6">{t('next_project_title')}</div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full flex flex-col items-center gap-8 justify-center px-8">
                        <div className="flex justify-center w-full h-screen">
                            {/* Image cliquable pour aller au projet suivant */}
                            <button 
                                onClick={handleNextProject}
                                className="relative flex flex-col gap-12 items-center justify-center h-full cursor-pointer group focus:outline-none"
                                aria-label={`Aller au projet ${nextProject.title}`}
                            >
                                <img
                                    src={getTransitionImage(nextProject.slug)}
                                    alt={`Aperçu du projet ${nextProject.title}`}
                                    className="w-1/2 h-auto object-cover  "
                                />
                                {/* Titre du projet suivant */}
                                <div className="text-center">
                                   
                                    <p className="text-[#ff4300] opacity-70">{t('click_to_view')}</p>
                                </div>
                            </button>
                        </div>
                    </section>
                </div>
                <div className="w-full flex flex-col items-center gap-8 justify-center">
                    <Contact />
                </div>

                <section id="section10" >
                    <a className="scroll-down-btn"> <span></span></a>

                </section>

            </main>

        </div>
    );
};

export default ProjectPage;

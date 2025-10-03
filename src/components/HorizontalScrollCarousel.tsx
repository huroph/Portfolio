import trueTourism from '../assets/trueTourism.png';
import BambouTech from '../assets/BambouTech.png';
import EOLE from '../assets/EOLE.png';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { t } from 'i18next';


const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  // Définir les cartes projets
  const cards = [
    { id: 1, img: trueTourism, alt: "TrueTourism" },
    { id: 2, img: BambouTech, alt: "BambouTech" },
    { id: 3, img: EOLE, alt: "EOLE" },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#faf6e7] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute h-screen w-full flex items-center justify-center">
          <h1 className="text-[20vw] font-bold text-[#ff4300] text-center leading-tight mb-8">
            {t('project').toUpperCase()}
          </h1>
        </div>
        
        {/* Zone de détection au centre de l'écran */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            id="detection-zone"
            className="w-[10px] h-[600px] hidden"
          />
        </div>

        <motion.div style={{ x }} className="flex gap-[200px] items-center ">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: { id: number; img: string; alt: string } }) => {
  const isEOLE = card.alt === "EOLE";
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInZone, setIsInZone] = useState(false);

  const handleClick = () => {
    navigate(`/project/${card.alt}`);
  };

  // Fonction pour vérifier si la carte est dans la zone de détection
  useEffect(() => {
    const checkIntersection = () => {
      if (!cardRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      
      // Zone de détection au centre (400px width, 600px height)
      const zoneLeft = screenCenterX - 90 ;
      const zoneRight = screenCenterX + 90 ;
      const zoneTop = screenCenterY - 300;
      const zoneBottom = screenCenterY + 300;

      console.log('Card Rect:', cardRect);
      console.log('Zone:', { zoneLeft, zoneRight, zoneTop, zoneBottom });
      console.log('Screen Center:', { screenCenterX, screenCenterY });

      // Vérifier si la carte est dans la zone
      const inZone = cardRect.left < zoneRight && 
                    cardRect.right > zoneLeft && 
                    cardRect.top < zoneBottom && 
                    cardRect.bottom > zoneTop;

      setIsInZone(inZone);
    };

    // Observer les changements de position
    const observer = new MutationObserver(checkIntersection);
    const interval = setInterval(checkIntersection, 16); // 60fps

    checkIntersection();

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className={`group relative cursor-pointer ${isEOLE ? 'w-[700px]' : 'w-[250px]'}`} onClick={handleClick}>
      {/* Container principal avec effet de hover */}
      <div className="relative ">
        {/* Image */}
        <div className="relative  h-[500px] justify-center align-center flex">
          <img
            src={card.img}
            alt={card.alt}
            className={
              (isEOLE
                ? " w-[650px] h-[480px] "
                : " mx-30") +
              " transition duration-300 group-hover:scale-105"
            }
            style={isEOLE ? { objectFit: "contain" } : {}}
          />

          {/* Section info en bas - visible dans la zone OU au hover */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[#faf6e7] h-[200px] flex items-end justify-center pb-2 transition-opacity duration-300 ${
            isInZone || false ? 'opacity-100' : 'opacity-0'
          } group-hover:opacity-100`}>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-[#ff4300] mb-3">
                {card.alt}
              </h3>
              {/* Bouton En savoir plus */}
              <div className="bg-[#ff4300] text-white px-4 cursor-pointer py-2 rounded-full text-sm font-medium hover:bg-[#ff5722] transition-colors duration-200">
                En savoir plus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;


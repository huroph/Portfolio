import trueTourism from '../assets/truetourism/Mockup_Map.png';
import BambouTech from '../assets/BambouTech/Mockup_HomePage.png';
import EOLE from '../assets/EOLE.webp';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { t } from 'i18next';
import FrameIphone from './frame_iphone';


const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["90%", "-90%"]);

  // Définir les cartes projets
  const cards = [
    { id: 1, img: trueTourism, alt: "TrueTourism" },
    { id: 2, img: BambouTech, alt: "BambouTech" },
    { id: 3, img: EOLE, alt: "EOLE" },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#faf6e7] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
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

        <motion.div style={{ x }} className="flex gap-[200px] items-center z-20 ">
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
      const zoneLeft = screenCenterX - 90;
      const zoneRight = screenCenterX + 90;
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
    <div ref={cardRef} className={`group relative cursor-pointer z-10 ${isEOLE ? 'w-[600px]' : ''}`} onClick={handleClick}>
      {/* Container principal avec effet de hover */}
      <div className="relative z-20">
        {/* Image */}
        <motion.div
          animate={{
            y: isInZone ? -30 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <FrameIphone>
            <img
              src={card.img}
              alt={card.alt}
              loading="lazy"
              className={
                (isEOLE
                  ? "w-full h-full object-cover  "
                  : "") +
                " transition duration-300 " 
                
              }

            />
          </FrameIphone>
        </motion.div>


      </div>

      {/* Section info en bas - positionnée par rapport au container principal */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 w-full h-[200px] flex items-end justify-center z-10"
        animate={{
          opacity: isInZone ? 1 : 0,
          y: isInZone ? 40 : -60
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          opacity: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="flex flex-col items-center mb-4"
          animate={{
            y: isInZone ? 40 : -48
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20
          }}
        >
          <h3 className="text-3xl font-light text-[#ff4300] mb-3">
            {card.alt}
          </h3>
          {/* Bouton En savoir plus */}
          <motion.div 
            className="bg-[#ff4300] text-white px-4 cursor-pointer py-2 rounded-full text-sm font-medium"
            whileHover={{ 
              backgroundColor: "#ff5722",
              scale: 1.05
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            En savoir plus
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

  );
};

export default HorizontalScrollCarousel;


import trueTourism from '../assets/trueTourism.png';
import BambouTech from '../assets/BambouTech.png';
import EOLE from '../assets/EOLE.png';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


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
            PROJECT
          </h1>
        </div>
        <motion.div style={{ x }} className="flex gap-4">
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
  return (
    <div
      className="group relative flex items-center justify-center  flex-shrink-0 overflow-hidden "
    >
      <img
        src={card.img}
        alt={card.alt}
        className={
          
          (isEOLE
            ? "max-w-[1000px] w-auto h-auto mx-auto "
            : "w-[250px] h-auto mx-30") +
          " transition duration-300  group-hover:scale-105"
        }
        style={isEOLE ? { objectFit: "contain" } : {}}
      />
      {/* Bouton et titre centrés au hover */}
      <div className="absolute inset-0 flex items-end pb-12 justify-center pointer-events-none">
        <div className=" transition duration-300 flex py-4 rounded-[50px] rounded-tr-[50px] flex-col bg-[#faf6e7] w-1/2 items-center pointer-events-auto">
          <span className="text-[#ff4300] text-xl font-bold mb-4 ">{card.alt}</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;


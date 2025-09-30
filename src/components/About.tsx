import profil from '../assets/profil.png';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.7,
      ease: [0.4, 0.8, 0.2, 1] as [number, number, number, number],
    },
  },
  exit: { opacity: 0, y: -60, transition: { duration: 0.5 } },
};

// Pour gérer le délai personnalisé, on utilisera 'custom' dans chaque motion.*
const getTransition = (i: number) => ({
  delay: i * 0.15,
  duration: 1,
  ease: [0.4, 0.8, 0.2, 1] as [number, number, number, number],
});

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  return (
    <section ref={ref} className="w-full h-screen flex flex-col  py-24 bg-[#faf6e7] ">
      <div className="flex-1   flex flex-col md:flex-row items-center  gap-12 md:gap-0 relative">
        {/* Titre vertical */}
        <AnimatePresence>
          {inView && (
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={0}
              transition={getTransition(0)}
            >
              <span className="text-[5vw] font-bold text-[#ff4300] tracking-tight" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>ABOUT</span>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Image */}
        <AnimatePresence>
          {inView && (
            <motion.div
              className="flex-shrink-0 z-10  pl-40 "
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={1}
              transition={getTransition(1)}
            >
              <motion.img
                src={profil}
                alt="Portrait"
                className="rw-[320px] "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.7, ease: [0.4, 0.8, 0.2, 1] } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Contenu */}

 <AnimatePresence>
   <motion.div
          className="absolute top-0 left-1/2  text-center text-[12vw] font-bold text-[#ffead6] opacity-60 select-none pointer-events-none md:block hidden"
          style={{ zIndex: 0 }}
          initial={{ opacity: 0, scale: 0, x: '-50%', y: 0 }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: 0, transition: getTransition(3) }}
          exit={{ opacity: 0, scale: 0, x: '-50%', y: 0, transition: { duration: 0.5 } }}
        >ABOUT</motion.div>
 </AnimatePresence>
       

        <AnimatePresence>
          {inView && (
            <motion.div
              className="flex-1 flex pl-20 flex-col items-center md:items-start justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={2}
              transition={getTransition(2)}
            >
              <motion.div
                className="flex gap-16 mb-8 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={4}
                transition={getTransition(4)}
              >
                <motion.div
                  className="text-[#ff4300] text-6xl font-bold text-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  custom={5}
                  transition={getTransition(5)}
                >2<br /><span className="text-xl font-normal">Startup</span></motion.div>
                <motion.div
                  className="text-[#ff4300] text-6xl font-bold text-center border flex flex-col items-start justify-center" 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  custom={6}
                  transition={getTransition(6)}
                >
                +10
                 <span className="text-3xl font-normal ">Projects</span>
                
                </motion.div>
               

              </motion.div>
              
             
              <motion.p
                className="text-[#ff9a6c] text-base max-w-xl mb-6 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={8}
                transition={getTransition(8)}
              >
                <span className="font-bold text-[#ff4300]">UI/UX designer </span>avec un vrai passé d'ingénieur et d'entrepreneur. J'ai cofondé deux <span className="font-bold text-[#ff4300]">startups</span> et travaillé sur un CRM à grande échelle chez Proman. Mon fil rouge : <span className="font-bold text-[#ff4300]">transformer la complexité en expériences claires et intuitives</span>.<br />
                J'aime concevoir des produits utiles, esthétiques, et coordonner les équipes pour qu'ils voient le jour dans les temps.
              </motion.p>
              <motion.div
                className="italic text-[#ff4300] text-center text-lg z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={9}
                transition={getTransition(9)}
              >
                “Transforme la complexité en expériences intuitives et esthétiques”
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;

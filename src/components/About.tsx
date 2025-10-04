import profil from '../assets/profil.webp';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
  <section ref={ref} className="w-full h-screen flex flex-col  py-24 bg-[#faf6e7] ">
      <div className="flex-1   flex  items-center justify-end gap-12  relative">

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
                className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto"
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
            className="absolute top-0 left-1/2  text-right pr-10 text-[12vw] font-bold text-[#ffead6] opacity-60 select-none pointer-events-none md:block  w-full hidden"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0, scale: 0, x: '-50%', y: 0 }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: 0, transition: getTransition(3) }}
            exit={{ opacity: 0, scale: 0, x: '-50%', y: 0, transition: { duration: 0.5 } }}
          >{t('about_title')}</motion.div>
        </AnimatePresence>


        <AnimatePresence>
          {inView && (
            <motion.div
              className=" w-full flex-1 flex   flex-col "
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
                  className="text-[#ff4300] text-6xl font-bold text-center  flex flex-col items-start justify-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  custom={6}
                  transition={getTransition(6)}
                >
                  2
                  <span className="text-3xl font-normal ">{t('about_startup')}</span>

                </motion.div>
                <motion.div
                  className="text-[#ff4300] text-6xl font-bold text-center  flex flex-col items-start justify-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  custom={6}
                  transition={getTransition(6)}
                >
                  +10
                  <span className="text-3xl font-normal ">{t('about_projects')}</span>

                </motion.div>


              </motion.div>


              <motion.p
                className="text-[#ff9a6c] text-base max-w-xl mb-6 z-10 mr-32"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={8}
                transition={getTransition(8)}
              >
                {t('about_description')}
              </motion.p>
              <motion.div
                className="italic text-[#ff4300]  text-lg z-10 mr-32"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={9}
                transition={getTransition(9)}
              >
                {t('about_quote')}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;

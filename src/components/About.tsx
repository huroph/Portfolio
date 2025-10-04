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
  <section ref={ref} className="w-full h-screen flex flex-col  py-24 bg-[#faf6e7] items-center justify-center" >
      <div className="flex-1 flex items-center justify-end gap-12 relative md:flex-row flex-col">

        {/* Image */}
        <AnimatePresence>
          {inView && (
            <motion.div
              className="flex-shrink-0 z-10 md:pl-40 pl-0 md:order-1 order-1"
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
                className="w-[320px] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[360px] h-auto mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.7, ease: [0.4, 0.8, 0.2, 1] } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Contenu */}

        


        <AnimatePresence>
          {inView && (
            <motion.div
              className="w-full flex-1 flex flex-col md:order-2 order-2  items-center md:items-start justify-center  "
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={2}
              transition={getTransition(2)}
            >
              <motion.div
                className="flex gap-16 mb-8 z-10 flex-row  md:gap-16 gap-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                custom={4}
                transition={getTransition(4)}
              >

                <motion.div
                  className="text-[#ff4300] text-6xl font-bold text-center flex flex-col items-start justify-center md:items-start items-center"
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
                  className="text-[#ff4300] text-6xl font-bold text-center flex flex-col items-start justify-center md:items-start items-center"
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
                className="text-[#ff9a6c] text-base max-w-xl mb-6 z-10 md:mr-24 md:text-left text-center sm:mx-6 mx-6 "
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
                className="italic text-[#ff4300] text-lg z-10 md:mr-32 mr-0 md:text-left text-center"
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

import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HorizontalScrollText = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });


    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    );



    // Affichage conditionnel du texte selon scrollYProgress
    const [showText, setShowText] = useState(true);
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setShowText(v < 0.60);
        });
        return () => unsubscribe && unsubscribe();
    }, [scrollYProgress]);

    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -6000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 200, damping: 50 });

    return (
        <section
            ref={targetRef}
            className="h-[250vh] bg-[#faf6e7] text-[#ff4300]"
        >

            <div className="sticky top-2/5  items-center overflow-hidden ">
                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left flex whitespace-nowrap items-end font-black uppercase  text-8xl md:leading-[0.85] pl-10"
                >
                    <div >“There is beauty when something works intuitively.”</div>
                    <div className="text-[2vw] italic font-light" >Jonny Ive</div>
                </motion.p>

                <AnimatePresence mode="wait">
                    {showText && (
                        <>

                            <motion.p
                                key="desc-text"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5, ease: [0.4, 0.8, 0.2, 1] }}
                                className="text-[2vw]  text-[#ff4300] text-center leading-tight mb-8 mt-10 font-extralight"
                            >
                                Je suis Hugo Nahmias , Designer UI/UX
                            </motion.p>

                            <div className="flex justify-center mt-20">
                                <motion.button
                                    className="relative border-2 border-[#ff4300] text-[#ff4300] py-2 px-4 rounded-[50px] overflow-hidden z-10 cursor-pointer"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    key="desc-text"
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.5, ease: [0.4, 0.8, 0.2, 1] }}
                                    style={{ zIndex: 10 }}
                                    onClick={() => {
                                        const contact = document.getElementById('contact');
                                        if (contact) {
                                            contact.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full bg-[#ff4300]"
                                        variants={{
                                            rest: {
                                                y: "100%",
                                            },
                                            hover: {
                                                y: "0%",
                                                rotateZ: "10deg",
                                                scale: 2
                                            }
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.34, 1.56, 0.64, 1]
                                        }}
                                    />
                                    <motion.span
                                        className="relative z-10 text-2xl"
                                        variants={{
                                            rest: { color: "#ff4300" },
                                            hover: { color: "#ffffff" }
                                        }}
                                    >
                                        Parlons de votre projet 🚀 !
                                    </motion.span>
                                </motion.button>
                            </div>
                        </>
                    )}
                </AnimatePresence>

               

            </div>

        </section>
    );
};

export default HorizontalScrollText;
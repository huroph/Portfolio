import { motion } from 'framer-motion';
import { useState } from 'react';

interface PressTextProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
}

const PressText: React.FC<PressTextProps> = ({ 
  text, 
  className = '', 
  stagger = 0.05, 
  duration = 0.2 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const letters = text.split('');

  // Variants pour la couche du haut (compression vers le haut)
  const topLayerVariants = {
    initial: { scaleY: 1 },
    hover: { scaleY: 0 }
  };

  // Variants pour la couche du bas (décompression depuis le bas)
  const bottomLayerVariants = {
    initial: { scaleY: 0 },
    hover: { scaleY: 1 }
  };

  // Container variants pour le stagger
  const containerVariants = {
    initial: {},
    hover: {
      transition: { staggerChildren: stagger }
    }
  };

  const getTransition = (index: number) => {
    const delayReverse = (letters.length - 1 - index) * stagger;
    
    return {
      duration,
      ease: [0.42, 0, 0.58, 1] as any,
      delay: isHovered ? index * stagger : delayReverse
    };
  };

  return (
    <div 
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ lineHeight: 1 }}
    >
      {/* Couche du haut */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{ lineHeight: 1 }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`top-${index}`}
            className="inline-block"
            variants={topLayerVariants}
            transition={getTransition(index)}
            style={{ 
              transformOrigin: 'bottom',
              display: 'inline-block',
              lineHeight: 1,
              height: '1em',
              overflow: 'hidden'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Couche du bas (superposée) */}
      <motion.div
        className="absolute top-0 left-0 z-0"
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{ lineHeight: 1 }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`bottom-${index}`}
            className="inline-block"
            variants={bottomLayerVariants}
            transition={getTransition(index)}
            style={{ 
              transformOrigin: 'top',
              display: 'inline-block',
              lineHeight: 1,
              height: '1em',
              overflow: 'hidden'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default PressText;
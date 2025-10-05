import React from 'react';

interface FrameMacProps {
  children: React.ReactNode;
  className?: string;
}

const FrameMac: React.FC<FrameMacProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className} `}>
      {/* Écran du MacBook */}
      <div className="relative w-[480px] h-[300px]  bg-gray-900 rounded-[8px] p-[3px] shadow-xl">
        {/* Bordure interne de l'écran */}
        <div className="relative w-full h-full bg-black rounded-[6px] overflow-hidden">
          {/* Zone d'affichage */}
          <div className="absolute inset-[8px] bg-white rounded-[2px] overflow-hidden">
            {/* Contenu de l'écran */}
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      {/* Base du MacBook */}
      <div className="relative w-[480px] h-[12px] bg-gray-800 rounded-b-[6px]  shadow-lg -mt-[2px]">
        {/* Indicateur central (charnier) */}
        <div className="absolute top-[2px] left-1/2 transform -translate-x-1/2 w-[60px] h-[2px] bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default FrameMac;

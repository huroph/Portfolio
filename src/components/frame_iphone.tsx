import React from 'react';

interface FrameIphoneProps {
  children: React.ReactNode;
  className?: string;
}

const FrameIphone: React.FC<FrameIphoneProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Frame externe de l'iPhone */}
      <div className="relative w-[230px] h-[488px] bg-black rounded-[23px] p-1 shadow-2xl">
        {/* Écran intérieur */}
        <div className="relative w-full h-full bg-white rounded-[19px] overflow-hidden">
          {/* Encoche (notch) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[84px] h-[16px] bg-black rounded-b-[8px] z-10">
            {/* Haut-parleur */}
            <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-[29px] h-[1px] bg-gray-800 rounded-full"></div>
            {/* Caméra */}
            <div className="absolute top-[2px] right-[12px] w-[6px] h-[6px] bg-gray-900 rounded-full"></div>
          </div>
          
          {/* Contenu de l'écran */}
          <div className="w-full h-full pb-[3px]">
            {children}
          </div>
        </div>
        
        {/* Bouton d'alimentation */}
        <div className="absolute right-[-1px] top-[70px] w-[2px] h-[35px] bg-gray-700 rounded-l-[1px]"></div>
        
        {/* Boutons de volume */}
        <div className="absolute left-[-1px] top-[58px] w-[2px] h-[23px] bg-gray-700 rounded-r-[1px]"></div>
        <div className="absolute left-[-1px] top-[86px] w-[2px] h-[23px] bg-gray-700 rounded-r-[1px]"></div>
      </div>
    </div>
  );
};

export default FrameIphone;

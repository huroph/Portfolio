import Ecran3 from '../../../assets/BambouTech/Ecran_3.png';
import Ecran4 from '../../../assets/BambouTech/Ecran_4.png';

const MockupBambouTech2 = () => {
  return (
    <div className="w-2/3 h-auto bg-gradient-to-br from-pink-100 to-gray-100  rounded-3xl overflow-hidden">
      <div className=" mx-auto">
        {/* iPhone Mockups - Container avec overflow hidden pour couper le bas */}
        <div className="h-[500px] overflow-hidden relative">
          <div className="flex justify-center items-start gap-12 md:gap-16 ">
            {/* Premier iPhone - Légèrement incliné vers la gauche */}
            <div className="relative transform rotate-[-30deg] translate-y-[-150px] translate-x-[-100px]">
              <div className="relative">
                {/* iPhone Frame */}
                <div className="w-[300px] h-[600px] ">
                 
                    {/* Screen Content */}
                    <img 
                      src={Ecran3} 
                      alt="TrueTourism App Screen 3" 
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>
            </div>

            {/* Deuxième iPhone - Légèrement incliné vers la droite */}
            <div className="relative transform rotate-[-30deg] translate-y-8 translate-x-10">
                  <div className="relative">
                {/* iPhone Frame */}
                <div className="w-[300px] h-[600px]">
              
                    {/* Screen Content */}
                    <img 
                      src={Ecran4} 
                      alt="TrueTourism App Screen 4" 
                      className="w-full h-full object-cover"
                    />
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupBambouTech2;

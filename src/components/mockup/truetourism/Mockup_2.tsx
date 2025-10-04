import Ecran3 from '../../../assets/truetourism/Ecran_3.png';
import Ecran4 from '../../../assets/truetourism/Encran_4.png';

const MockupTrueTourism2 = () => {
  return (
    <div className="w-2/3 h-auto bg-gradient-to-br from-pink-100 to-gray-100  rounded-3xl overflow-hidden">
      <div className=" ">
        {/* iPhone Mockups - Container avec overflow hidden pour couper le bas */}
        <div className="h-[460px] ">
          <div className="flex justify-center items-start gap-12  ">
            {/* Premier iPhone - Légèrement incliné vers la gauche */}
            <div className=" transform rotate-[-30deg] translate-y-[-150px] translate-x-[-100px]">
           
                {/* iPhone Frame */}
             
                 
                    {/* Screen Content */}
                    <img 
                      src={Ecran3} 
                      alt="TrueTourism App Screen 3" 
                      className="w-[300px] h-[600px] object-contain"
                    />
                  
               
              
            </div>

            {/* Deuxième iPhone - Légèrement incliné vers la droite */}
            <div className="relative transform rotate-[-30deg] translate-y-8 translate-x-10">
                
                {/* iPhone Frame */}
                
              
                    {/* Screen Content */}
                    <img 
                      src={Ecran4} 
                      alt="TrueTourism App Screen 4" 
                      className="w-[300px] h-[600px] object-contain"
                    />
                 
               
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupTrueTourism2;

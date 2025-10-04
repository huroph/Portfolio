import Ecran1 from '../../../assets/truetourism/Ecran_1.png';
import Ecran2 from '../../../assets/truetourism/Ecran_2.png';

const MockupTrueTourism1 = () => {
  return (
    <div className="w-2/3 bg-gradient-to-br from-pink-100 to-gray-100  pt-8 rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header avec Font et Colors */}
        <div className="flex flex-col md:flex-row justify-between items-start  mx-8 gap-8">
          {/* Font Section */}
          <div className="flex-1">
            <h3 className="text-gray-600 text-sm font-medium mb-4 tracking-wide">Font</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Montserrat
            </h2>
          </div>

          {/* Colors Section */}
          <div className="flex-1  ">
            <h3 className="text-gray-600 text-sm font-medium mb-4 tracking-wide">Colors</h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#21BC81] rounded-2xl shadow-md"></div>
                <span className="text-xs text-gray-500 mt-2">#21BC81</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#FF7D00] rounded-2xl shadow-md"></div>
                <span className="text-xs text-gray-500 mt-2">#FF7D00</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl shadow-md border border-gray-200"></div>
                <span className="text-xs text-gray-500 mt-2">#F5F5F5</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#05061B] rounded-2xl shadow-md"></div>
                <span className="text-xs text-gray-500 mt-2">#05061B</span>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockups - Container avec overflow hidden */}
        <div className="h-[460px]  ">
          <div className="flex justify-center items-end  ">
            {/* Premier iPhone */}
            <div className=" transform rotate-[-8deg] translate-y-10">
              <img
                loading="lazy"
                src={Ecran1}
                alt="TrueTourism App Screen 1"
                className=" w-full h-full object-cover"
              />
            </div>

            {/* Deuxième iPhone */}
            <div className=" transform rotate-[10deg] translate-y-15">


              <img
                loading="lazy"
                src={Ecran2}
                alt="TrueTourism App Screen 2"
                className="w-full h-full object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupTrueTourism1;

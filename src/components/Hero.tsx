
import HorizontalScrollText from './HorizontalScrollText';

const Hero = () => {
  return (
    <>
     <section className="w-full h-screen flex flex-col items-center justify-center py-24 bg-[#faf6e7]">
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
      
        <h1 className="text-[6vw] font-bold text-[#ff4300] text-center leading-tight mb-8">
          Designer UI/UX
        </h1>
        <p className="text-2xl italic text-[#ff4300] text-center max-w-2xl">
          “There is beauty when something works and it works intuitively.”
        </p>
       
      </div>
    </section>
     
    </>
   
  );
};

export default Hero;

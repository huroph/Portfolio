import { useState, useEffect } from "react";

const Contact = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25) + " GMT");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center py-24 bg-[#faf6e7]">
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <h2 className="text-7xl font-bold text-[#ff4300] text-center mb-4">CONTACT</h2>
        <p className="text-xl text-[#ff9a6c] text-center mb-2">Ready to embark on a new digital journey together?</p>
        <p className="text-xl text-[#ff9a6c] text-center mb-12">Let's create something extraordinary.</p>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12 w-full pl-30">
          {/* Formulaire */}
          <form className="flex flex-col gap-8">
            <div>
              <label className="block text-[#ff9a6c] mb-2">NAME</label>
              <input className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg" type="text" placeholder="" />
            </div>
            <div>
              <label className="block text-[#ff9a6c] mb-2">EMAIL</label>
              <input className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg" type="email" placeholder="" />
            </div>
            <div>
              <label className="block text-[#ff9a6c] mb-2">MESSAGE</label>
              <textarea className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg" rows={3} placeholder="" />
            </div>
          </form>
          {/* Infos */}
          <div className="flex flex-col gap-8   justify-between">
            <div>
              <div className="text-[#ff9a6c] mb-1">EMAIL</div>
              <div className="text-[#ff4300] text-lg font-medium">hugo.nahmias@icloud.com</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">LOCATION</div>
              <div className="text-[#ff4300] text-lg font-medium">Paris , France</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">LOCAL TIME</div>
              <div className="text-[#ff4300] text-lg font-medium">{time}</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">CONNECT</div>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4300] text-3xl"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4300] text-3xl"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

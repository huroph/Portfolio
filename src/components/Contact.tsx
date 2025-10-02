import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25) + " GMT");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Configuration EmailJS - remplacez par vos vraies valeurs
      const serviceId = 'service_7ml0cfk'; // À configurer
      const templateId = 'template_vv226la'; // À configurer  
      const publicKey = 'Du1KjwOFdcfGnIdYA'; // À configurer

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'hugo.nahmias@icloud.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setMessage(t('message_sent'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setMessage(t('message_error'));
    } finally {
      setIsLoading(false);
    }
  };

  const { t } = useTranslation();
  return (
    <section className="w-full h-screen flex flex-col items-center  pb-24 bg-[#ff4300] ">
      <div className="w-full h-24 bg-[#faf6e7]"></div>
      <div className="w-full max-w-5xl px-4 pt-8 flex flex-col items-center">
        <h2 className="text-7xl font-bold text-white text-center mb-4">{t('CONTACT')}</h2>
        <p className="text-xl text-[#ff9a6c] text-center mb-2">{t('contact_idea')}</p>
        <p className="text-xl text-[#ff9a6c] text-center mb-12">{t('contact_experience')}</p>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-12 w-full pl-30">
          {/* Formulaire */}
          <form onSubmit={sendEmail} className="flex flex-col gap-8 pointer-events-auto">
            <div>
              <label className="block text-[#ff9a6c] mb-2">{t('NAME')}</label>
              <input 
                className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg text-white" 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="" 
              />
            </div>
            <div>
              <label className="block text-[#ff9a6c] mb-2">{t('EMAIL')}</label>
              <input 
                className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg text-white" 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="" 
              />
            </div>
            <div>
              <label className="block text-[#ff9a6c] mb-2">{t('MESSAGE')}</label>
              <textarea 
                className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-lg text-white" 
                rows={3} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="" 
              />
            </div>
            
            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 px-10 py-4 bg-[#ff4300] text-white font-bold text-lg rounded-full hover:bg-[#ff9a6c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border-2 border-transparent hover:border-white"
            >
              {isLoading ? (t('sending') || 'Envoi...') : (t('send_button') || 'Envoyer le message')}
            </button>

            {/* Message de statut */}
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-center ${
                message.includes('envoyé') || message.includes('sent') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}
          </form>
          {/* Infos */}
          <div className="flex flex-col gap-8   justify-between">
            <div>
              <div className="text-[#ff9a6c] mb-1">{t('EMAIL')}</div>
              <div className="text-white text-lg font-medium">hugo.nahmias@icloud.com</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">{t('LOCATION')}</div>
              <div className="text-white text-lg font-medium">Paris , France</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">{t('LOCAL_TIME')}</div>
              <div className="text-white text-lg font-medium">{time}</div>
            </div>
            <div>
              <div className="text-[#ff9a6c] mb-1">{t('CONNECT')}</div>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="white">
                    <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.4 27H5.2V12h4.2v15zm-2.1-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3zm19.7 17.1h-4.2v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-4.2s.1-13.7 0-15h4.2v2.1c.6-.9 1.6-2.1 3.9-2.1 2.8 0 4.9 1.8 4.9 5.6V27z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="white">
                    <path d="M16 0.4C7.2 0.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-3c-4.4 1-5.3-2.1-5.3-2.1-.7-1.7-1.7-2.1-1.7-2.1-1.4-1 .1-1 .1-1 1.5.1 2.3 1.5 2.3 1.5 1.4 2.3 3.7 1.6 4.6 1.2.1-1 .5-1.6.9-2-3.5-.4-7.2-1.7-7.2-7.5 0-1.7.6-3.1 1.5-4.2-.2-.4-.7-2 .1-4.1 0 0 1.3-.4 4.3 1.6 1.2-.3 2.5-.5 3.8-.5s2.6.2 3.8.5c3-2 4.3-1.6 4.3-1.6.8 2.1.3 3.7.1 4.1.9 1.1 1.5 2.5 1.5 4.2 0 5.8-3.7 7.1-7.2 7.5.5.4 1 .1 1.1.8v3c0 .5.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

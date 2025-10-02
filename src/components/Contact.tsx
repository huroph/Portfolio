import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Catégories pour portfolio
  const categories = [
    { value: 'projet-web', label: '🌐 Projet Web / Site' },
    { value: 'app-mobile', label: '📱 Application Mobile' },
    { value: 'ui-ux', label: '🎨 Design UI/UX' },
    { value: 'collaboration', label: '🤝 Collaboration / Freelance' },
    { value: 'startup', label: '🚀 Projet Startup' },
    { value: 'redesign', label: '✨ Refonte / Amélioration' },
    { value: 'conseil', label: '💡 Conseil / Audit' },
    { value: 'autre', label: '📝 Autre demande' }
  ];

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25) + " GMT");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategorySelect = (categoryValue: string) => {
    console.log('Catégorie sélectionnée:', categoryValue); // Debug temporaire
    setFormData(prev => ({
      ...prev,
      category: categoryValue
    }));
    setIsDropdownOpen(false);
  };

    const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validation de la catégorie
    if (!formData.category) {
      setMessage('Veuillez sélectionner une catégorie');
      setIsLoading(false);
      return;
    }

    try {
      // Configuration EmailJS - remplacez par vos vraies valeurs
      const serviceId = 'service_7ml0cfk'; // À configurer
      const templateId = 'template_vv226la'; // À configurer  
      const publicKey = 'Du1KjwOFdcfGnIdYA'; // À configurer

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        category: formData.category,
        to_email: 'hugo.nahmiaspro@outlook.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setMessage(t('message_sent'));
      setFormData({ name: '', email: '', message: '', category: '' });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setMessage(t('message_error'));
    } finally {
      setIsLoading(false);
    }
  };

  const { t } = useTranslation();



const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hugo-nahmias',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/huroph',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
  
    {
      name: 'Email',
      url: 'mailto:hugo.nahmiaspro@outlook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];


  return (
    <section className="w-full h-screen flex flex-col bg-[#ff4300] overflow-hidden">
      <div className="w-full h-[200px] bg-[#faf6e7]"></div>
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-4 flex flex-col">
        {/* Header compact */}
        <div className="text-center  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">{t('CONTACT')}</h2>
          <p className="text-lg text-[#ff9a6c] mb-1">{t('contact_idea')}</p>
          <p className="text-lg text-[#ff9a6c]">{t('contact_experience')}</p>
        </div>

        {/* Contenu principal en flex-1 */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
          {/* Formulaire - scrollable si nécessaire */}
          <div className="flex flex-col min-h-0">
            <form onSubmit={sendEmail} className="flex flex-col gap-4 flex-1 overflow-y-auto pr-2 pointer-events-auto ">
              <div>
                <label className="block text-[#ff9a6c] mb-1 text-sm font-medium">{t('NAME')}</label>
                <input 
                  className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-white placeholder-gray-300 pointer-events-auto" 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom..." 
                />
              </div>
              
              <div>
                <label className="block text-[#ff9a6c] mb-1 text-sm font-medium">{t('EMAIL')}</label>
                <input 
                  className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-white placeholder-gray-300 pointer-events-auto" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre.email@exemple.com" 
                />
              </div>
              
              {/* Dropdown Catégorie - compact */}
              <div className="relative dropdown-container">
                <label className="block text-[#ff9a6c] mb-1 text-sm font-medium">CATÉGORIE</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Dropdown clicked, current state:', isDropdownOpen);
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    className="w-full bg-transparent border-b border-[#ff9a6c] outline-none py-2 text-white flex justify-between items-center hover:border-white transition-colors"
                  >
                    <span className="text-sm">
                      {formData.category 
                        ? categories.find(cat => cat.value === formData.category)?.label 
                        : "Sélectionnez..."}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-[#ff9a6c] rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          type="button"
                          onClick={() => handleCategorySelect(category.value)}
                          className="w-full px-3 py-2 text-left text-white text-sm hover:bg-[#ff4300] transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-1 min-h-0">
                <label className="block text-[#ff9a6c] mb-1 text-sm font-medium">{t('MESSAGE')}</label>
                <textarea 
                  className="w-full h-40 bg-transparent border border-[#ff9a6c] rounded-lg outline-none p-3 text-white placeholder-gray-300 resize-none pointer-events-auto" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Décrivez votre projet..."
                />
              </div>
              
              {/* Bouton d'envoi - compact */}
             
 <button
                type="submit"
                disabled={isLoading}
                className=" px-6 py-3 mb-6 bg-white text-[#ff4300] font-bold rounded-full hover:bg-[#ff9a6c] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? (t('sending') || 'Envoi...') : (t('send_button') || 'Envoyer')}
              </button>
             
             
            </form>
          </div>

          {/* Infos contact - compact */}
          <div className="flex flex-col gap-6 lg:pl-8 mt-8 pointer-events-auto" style={{ pointerEvents: 'auto' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-[#ff9a6c] text-sm font-medium mb-1">📧 {t('EMAIL')}</div>
                <div className="text-white font-medium">hugo.nahmiaspro@outlook.com</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-[#ff9a6c] text-sm font-medium mb-1">📍 {t('LOCATION')}</div>
                <div className="text-white font-medium">Paris, France</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-[#ff9a6c] text-sm font-medium mb-1">🕐 {t('LOCAL_TIME')}</div>
                <div className="text-white font-medium">{time}</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-[#ff9a6c] text-sm font-medium mb-2">🔗 {t('CONNECT')}</div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full text-white hover:bg-[#ff4300] transition-all duration-300 pointer-events-auto"
                      aria-label={social.name}
                      style={{ pointerEvents: 'auto' }}
                      onClick={() => console.log('Clic sur:', social.name, social.url)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message de statut - position fixe */}
      {message && (
        <div className={`fixed bottom-4 left-4 right-4 mx-auto max-w-md p-3 rounded-lg text-center z-50 ${
          message.includes('envoyé') || message.includes('sent') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message}
        </div>
      )}
    </section>
  );
};

export default Contact;

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Fonction pour navigation smooth scroll
  const scrollToSection = (sectionId: string) => {
    console.log('Navigation vers:', sectionId); // Debug
    
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId.replace('#', ''));
    console.log('Élément trouvé:', element); // Debug
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn('Élément non trouvé pour:', sectionId);
    }
  };

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

  const quickLinks = [
    { name: t('about') || 'À propos', href: '#about' },
    { name: t('project') || 'Projets', href: '#projects' },
    { name: t('contact') || 'Contact', href: '#contact' }
  ];

  const services = [
    'UI/UX Design',
    'Design System',
    'Prototype & Wireframe',
    'Mobile App Design',
    'Web Design',
    'Brand Identity'
  ];

  return (
    <footer className="bg-gray-900 text-white relative z-50" style={{ pointerEvents: 'auto' }}>
      {/* Section principale */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1: À propos */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              
             
              <p className="text-[#ff9a6c] text-sm font-medium">
                🚀 {t('ready_digital')}
              </p>
            </div>
            
            {/* Contact rapide */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#ff9a6c]">📧</span>
                <a href="mailto:hugo.nahmiaspro@outlook.com" className="hover:text-[#ff4300] transition-colors">
                  hugo.nahmiaspro@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#ff9a6c]">📍</span>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#ff9a6c]">💼</span>
                <span>Disponible pour vos projets</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff4300]">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => {
                      console.log('Clic sur:', link.name, link.href); // Debug
                      scrollToSection(link.href);
                    }}
                    className="text-gray-300 hover:text-[#ff4300] transition-colors text-sm cursor-pointer flex items-center gap-2 group w-full text-left p-2 rounded hover:bg-gray-800/50"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    <svg 
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            {/* Bouton Retour en haut */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  console.log('Clic sur: Retour en haut'); // Debug
                  scrollToSection('top');
                }}
                className="text-gray-300 hover:text-[#ff4300] transition-colors text-sm cursor-pointer flex items-center gap-2 group p-2 rounded hover:bg-gray-800/50"
              >
                <svg 
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Retour en haut</span>
              </button>
            </div>

            
          </div>

          {/* Colonne 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff4300]">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  <span className="text-[#ff9a6c] mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>

            {/* Call to action */}
            
          </div>
        </div>
      </div>

      {/* Section réseaux sociaux */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Suivez-moi :</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-[#ff4300] text-gray-400 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Section copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-gray-500 text-sm">
              © {currentYear} Hugo Nahmias. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-[#ff4300] transition-colors">
                Politique de confidentialité
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-[#ff4300] transition-colors">
                Mentions légales
              </a>
              <span>•</span>
              <span>Fait avec ❤️ à Paris</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      scroll_intro: "Je suis Hugo Nahmias, Designer UI/UX",
      scroll_btn: "Parlons de votre projet 🚀 !",
      about_title: 'À PROPOS',
      about_startup: 'Startup',
      about_projects: 'Projets',
      about_description: "UI/UX designer avec un vrai passé d'ingénieur et d'entrepreneur. J'ai cofondé deux startups et travaillé sur un CRM à grande échelle chez Proman. Mon fil rouge : transformer la complexité en expériences claires et intuitives. J'aime concevoir des produits utiles, esthétiques, et coordonner les équipes pour qu'ils voient le jour dans les temps.",
      about_quote: 'Transforme la complexité en expériences intuitives et esthétiques',

  CONTACT: 'CONTACT',
  about: 'À propos',
  project: 'Projets',
  contact: 'Contact',
      contact_idea: 'Vos idées méritent mieux qu’un simple écran.',
      contact_experience: 'Faisons-en une expérience qui marquera les esprits.',
      NAME: 'NOM',
      EMAIL: 'EMAIL',
      MESSAGE: 'MESSAGE',
      LOCATION: 'LOCALISATION',
      LOCAL_TIME: 'HEURE LOCALE',
      CONNECT: 'RÉSEAUX',
      next_project: 'Projet suivant',
      brief: 'Brief',
      year: 'Année',
      services: 'Services',
      client: 'Client',
      back_button: 'Retour',
      next_project_title: 'Projet suivant',
      click_to_view: 'Cliquez pour voir le projet',
      projet_introuvable: 'Projet introuvable',
      retour_accueil: "Retour à l'accueil",
      scroll: 'SCROLL',
      ready_digital: 'Prêt à démarrer une nouvelle aventure digitale ensemble ?',
      create_extra: "Créons quelque chose d'extraordinaire."
    }
  },
  en: {
    translation: {
      scroll_intro: "I'm Hugo Nahmias, UI/UX Designer",
      scroll_btn: "Let's talk about your project 🚀 !",
      about_title: 'ABOUT',
      about_startup: 'Startup',
      about_projects: 'Projects',
      about_description: "UI/UX designer with a real background as an engineer and entrepreneur. I co-founded two startups and worked on a large-scale CRM at Proman. My focus: turning complexity into clear and intuitive experiences. I love designing useful, beautiful products and coordinating teams to deliver on time.",
      about_quote: 'Turning complexity into intuitive and beautiful experiences',
  CONTACT: 'CONTACT',
  about: 'About',
  project: 'Project',
  contact: 'Contact',
      contact_idea: 'Your ideas deserve more than just a screen.',
      contact_experience: 'Let’s make it an experience to remember.',
      NAME: 'NAME',
      EMAIL: 'EMAIL',
      MESSAGE: 'MESSAGE',
      LOCATION: 'LOCATION',
      LOCAL_TIME: 'LOCAL TIME',
      CONNECT: 'CONNECT',
      next_project: 'Next project',
      brief: 'Brief',
      year: 'Year',
      services: 'Services',
      client: 'Client',
      back_button: 'Go back',
      next_project_title: 'Next project',
      click_to_view: 'Click to view project',
      projet_introuvable: 'Project not found',
      retour_accueil: 'Back to home',
      scroll: 'SCROLL',
      ready_digital: 'Ready to embark on a new digital journey together?',
      create_extra: "Let's create something extraordinary."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.startsWith('fr') ? 'fr' : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

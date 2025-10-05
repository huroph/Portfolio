export type ProjectData = {
  slug: string;
  type: 'mobile' | 'web';
  title: string;
  title_en?: string;
  year: string;
  client: string;
  services: string;
  brief: string;
  brief_en?: string;
  images: string[]; // URLs ou chemins d'images
};

export const projects: ProjectData[] = [
  {
    slug: 'TrueTourism',
    type:'mobile',
    title: 'TrueTourism',
    title_en: 'TrueTourism',
    year: '2023 - 2024',
    client: 'TrueTourism',
    services: 'UI/UX Design, App Design, Branding, Co-founding',
    brief: `Startup spécialisée dans le tourisme intelligent. Création et structuration de la vision produit, stratégie de croissance, design et développement d’une application mobile multiplateforme. Gestion du branding et optimisation des performances.`,
    brief_en: `Startup specialized in smart tourism. Creation and structuring of the product vision, growth strategy, design and development of a cross-platform mobile application. Branding management and performance optimization.`,
    images: [], // tu pourras mettre des visuels d’écrans de l’app
  },
   {
    slug: 'BambouTech',
    type:'mobile',
    title: 'BambouTech',
    title_en: 'BambouTech',
    year: '2021 - 2022',
    client: 'BambouTech, SAS (Toronto / Silicon Valley)',
    services: 'UI/UX Design, AR/VR, Développement logiciel, Coordination technique',
    brief: `Startup spécialisée dans les technologies immersives (AR/VR) appliquées au sport outdoor et au bien-être. 
Conception d’une app de bien-être connectée intégrant IA, partenariat avec Decathlon pour un prototype de masque AR/VR, et recherche de financements dans la Silicon Valley.`,
    brief_en: `Startup specialized in immersive technologies (AR/VR) applied to outdoor sports and well-being.
Design of a connected well-being app integrating AI, partnership with Decathlon for a prototype AR/VR mask, and fundraising in Silicon Valley.`,
images: [], // tu peux ajouter le proto masque ou visuels AR/VR
  },
 {
  slug: 'EOLE',
  type:'web',
  title: 'EOLE',
  title_en: 'EOLE',
  year: '2024',
  client: 'Espace EOLE',
  services: 'UI/UX Design, Design System, Développement front',
  brief: `Refonte complète de l’UX et de l’UI afin de répondre aux besoins spécifiques du client. 
Mise en place d’une approche minimaliste et ergonomique, orientée vers la simplicité d’utilisation et la fluidité des parcours utilisateurs. 
L’objectif : offrir une expérience élégante et intuitive, alignée avec l’image moderne et professionnelle de l’Espace EOLE.`,
  brief_en: `Complete overhaul of the UX and UI to meet the specific needs of the client.
Implementation of a minimalist and ergonomic approach, focused on ease of use and fluidity of user journeys.
The goal: to offer an elegant and intuitive experience, aligned with the modern and professional image of Espace EOLE.`,
images: [],
},
];

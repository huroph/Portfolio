export type ProjectData = {
  slug: string;
  title: string;
  year: string;
  client: string;
  services: string;
  brief: string;
  images: string[]; // URLs ou chemins d'images
};

export const projects: ProjectData[] = [
  {
    slug: 'TrueTourism',
    title: 'TrueTourism',
    year: '2023 - 2024',
    client: 'TrueTourism',
    services: 'UI/UX Design, App Design, Branding, Co-founding',
    brief: `Startup spécialisée dans le tourisme intelligent. Création et structuration de la vision produit, stratégie de croissance, design et développement d’une application mobile multiplateforme. Gestion du branding et optimisation des performances.`,
    images: [], // tu pourras mettre des visuels d’écrans de l’app
  },
   {
    slug: 'BambouTech',
    title: 'BambouTech',
    year: '2021 - 2022',
    client: 'BambouTech, SAS (Toronto / Silicon Valley)',
    services: 'UI/UX Design, AR/VR, Développement logiciel, Coordination technique',
    brief: `Startup spécialisée dans les technologies immersives (AR/VR) appliquées au sport outdoor et au bien-être. 
Conception d’une app de bien-être connectée intégrant IA, partenariat avec Decathlon pour un prototype de masque AR/VR, et recherche de financements dans la Silicon Valley.`,
    images: [], // tu peux ajouter le proto masque ou visuels AR/VR
  },
 {
  slug: 'EOLE',
  title: 'EOLE',
  year: '2024',
  client: 'Espace EOLE',
  services: 'UI/UX Design, Design System, Développement front',
  brief: `Refonte complète de l’UX et de l’UI afin de répondre aux besoins spécifiques du client. 
Mise en place d’une approche minimaliste et ergonomique, orientée vers la simplicité d’utilisation et la fluidité des parcours utilisateurs. 
L’objectif : offrir une expérience élégante et intuitive, alignée avec l’image moderne et professionnelle de l’Espace EOLE.`,
  images: [],
}
];

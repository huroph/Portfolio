import { useEffect, useRef, useState } from 'react';

// Path extrait du loader.svg
const svgPath = "M47.9816 16.1191C48.004 16.1191 48.023 16.1021 48.0264 16.08C49.0412 9.49442 58.6637 8.26201 61.0039 15.0469L91.7992 104.335C92.0283 104.999 91.8025 105.735 91.2403 106.157C90.3722 106.808 89.1219 106.436 88.7498 105.417L76.9844 73.1934C73.7758 64.4057 61.8042 65.4717 59.2368 73.2838C59.1066 73.68 59.0605 74.0997 59.0605 74.5168V83.0098C59.0604 90.3909 48.8841 92.3703 46.1172 85.5273L32.082 50.8164C29.3151 43.9739 23.0061 45.9532 23.0059 53.334V85.3153C23.0059 86.7899 21.8104 87.9854 20.3358 87.9854C18.9837 87.9854 17.845 86.9746 17.6846 85.6321L10.0449 21.6963C10.0152 21.4471 10.0014 21.1916 10.0215 20.9414C10.5875 13.9063 20.4756 12.4076 23.0059 19.1855L34.9277 51.1221C37.5448 58.1327 47.9364 56.2565 47.9365 48.7734V16.1642C47.9365 16.1393 47.9567 16.1191 47.9816 16.1191Z";

const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const [show, setShow] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const loadedTimeRef = useRef<number | null>(null);

  // Détecter quand tout est chargé
  useEffect(() => {
    const checkIfLoaded = () => {
      // Vérifier que le DOM est prêt et les images principales chargées
      if (document.readyState === 'complete') {
        const criticalImages = [
          '/src/assets/trueTourism.webp',
          '/src/assets/BambouTech.webp', 
          '/src/assets/EOLE.webp'
        ];

        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true); // Continue même si erreur
            img.src = src;
          });
        });

        Promise.all(imagePromises).then(() => {
          loadedTimeRef.current = performance.now();
          setAllLoaded(true);
        });
      } else {
        // Réessayer quand le DOM sera prêt
        window.addEventListener('load', checkIfLoaded);
      }
    };

    checkIfLoaded();
    return () => window.removeEventListener('load', checkIfLoaded);
  }, []);

useEffect(() => {
  if (!pathRef.current) return;

  const path = pathRef.current;
  const length = path.getTotalLength();

  // Init
  path.style.strokeDasharray = `0 ${length}`;
  path.style.strokeDashoffset = `${length}`;
  path.style.opacity = '1';

  const finishDuration = 1000; // 1s pour la phase de finition
  
  let rafId: number;

  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    const elapsed = timestamp - startTimeRef.current;

    // PHASE 1: Boucle continue avec segment de 25% PENDANT le chargement
    if (!allLoaded) {
      // Rotation continue fluide (1 tour par seconde)
      const rotationSpeed = 0.001; // vitesse de rotation
      const progress = (elapsed * rotationSpeed) % 1; // 0 à 1 en boucle
      const trailLength = length * 0.25;
      path.style.strokeDasharray = `${trailLength} ${length - trailLength}`;
      const offset = length - (progress * length);
      path.style.strokeDashoffset = `${offset}`;
    }
    // PHASE 2: DÈS que tout est chargé, élargissement en 1s
    else {
      const loadedTime = loadedTimeRef.current || timestamp;
      const finishElapsed = timestamp - loadedTime;
      
      if (finishElapsed < finishDuration) {
        const progress = finishElapsed / finishDuration;
        const currentLength = length * (0.25 + 0.75 * progress);
        path.style.strokeDasharray = `${currentLength} ${length}`;
        // Continuer la rotation pendant l'élargissement
        const rotationSpeed = 0.001;
        const globalProgress = (elapsed * rotationSpeed) % 1;
        const offset = length - (globalProgress * length);
        path.style.strokeDashoffset = `${offset}`;
      } else {
        // Animation terminée
        setShow(false);
        onComplete?.(); // Notifier l'App que le loader est terminé
        return;
      }
    }

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(rafId);
  };
}, [allLoaded]);


  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#faf6e7]">
      <svg
        width={150}
        height={180}
        viewBox="0 0 102 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Path de fond */}
        <path
          d={svgPath}
          stroke="#ffe0d1"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ opacity: 0.3 }}
          transform="scale(0.92) translate(4 5)"
        />
        {/* Path animé */}
        <path
          ref={pathRef}
          d={svgPath}
          stroke="#ff4300"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          transform="scale(0.92) translate(4 5)"
          style={{
            strokeDasharray: '0 1000',
            strokeDashoffset: '1000',
            opacity: 1
          }}
        />
      </svg>
    </div>
  );
};

export default Loader;
const calculateDuration = (duration, language = "en") => {
  if (!duration.includes(" - ")) {
    return language === "en" ? "(1 month)" : "(1 mois)";
  }

  // Month mappings
  const monthMappings = {
    // English abbreviations
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,

    // French abbreviations
    janv: 0,
    févr: 1,
    mars: 2,
    avr: 3,
    mai: 4,
    juin: 5,
    juil: 6,
    août: 7,
    sept: 8,
    déc: 11,
  };

  const parseDate = (dateStr) => {
    if (dateStr === "Present" || dateStr === "Présent") {
      return new Date();
    }

    const [month, year] = dateStr.split(" ");
    const monthLower = month.toLowerCase();

    // Find the month number from our mappings
    let monthNumber = null;
    for (const [abbrev, num] of Object.entries(monthMappings)) {
      if (monthLower.startsWith(abbrev)) {
        monthNumber = num;
        break;
      }
    }

    if (monthNumber !== null) {
      return new Date(year, monthNumber);
    }

    // Fallback to direct parsing if nothing else worked
    return new Date(dateStr);
  };

  const [start, end] = duration.split(" - ");
  const startDate = parseDate(start);
  const endDate = parseDate(end);

  const monthsDiff =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  if (monthsDiff >= 12) {
    const years = Math.floor(monthsDiff / 12);
    if (language === "en") {
      return `(${years} ${years === 1 ? "year" : "years"})`;
    } else {
      return `(${years} ${years === 1 ? "an" : "ans"})`;
    }
  }

  if (language === "en") {
    return `(${monthsDiff} ${monthsDiff === 1 ? "month" : "months"})`;
  } else {
    return `(${monthsDiff} mois)`;
  }
};

export const projects = [
  {
    translations: {
      en: {
        title: "ConUHacks IX - Concordia Virtual Tour++",
        description:
          "Virtual campus tour application using 3D Gaussian Splatting featuring an interactive chatbot tour guide for Concordia University.",
        longDescription: `At ConUHacks IX, **Quebec's largest hackathon**, our team developed an innovative solution to revolutionize Concordia University's virtual campus tour experience. The project placed in the **top 5 among 180+ submissions**, demonstrating both technical excellence and practical utility. We leveraged 3D Gaussian Splatting, a cutting-edge machine learning technique in computer graphics, to transform traditional static images into a fully immersive 3D environment that visitors can freely explore.

        The application allows users to freely navigate through photorealistic 3D reconstructions of campus spaces, allowing them to form a stronger connection with the university. We enhanced the experience by integrating 'Sting,' an AI chatbot named after Concordia's Stingers mascot, which serves as a virtual tour guide providing dynamic information about Concordia, exam periods, professors, and more.

        Our implementation processes multiple photographs to create a point cloud using COLMAP, which is then converted into Gaussian points - specialized 3D elements with specific characteristics including position, color, orientation, and size. Through iterative optimization, these points are refined to create near-photorealistic representations of campus spaces, achieving high-quality results within the 24-hour hackathon constraint.`,
        challenges: [
          "Implementing 3D Gaussian Splatting within the 24-hour hackathon timeframe",
          "Integrating the chatbot seamlessly with the web app",
          "Gathering clean data for accurate 3D reconstructions",
        ],
        keywords: [
          "3D Gaussian Splatting",
          "Computer Graphics",
          "Machine Learning",
          "Hugging Face",
        ],
        duration: "Feb 2025",
      },
      fr: {
        title: "ConUHacks IX - Visite Virtuelle Concordia++",
        description:
          "Application de visite virtuelle du campus utilisant le Gaussian Splatting 3D avec un guide chatbot interactif pour l'Université Concordia.",
        longDescription: `À ConUHacks IX, **le plus grand hackathon du Québec**, notre équipe a développé une solution innovante pour révolutionner l'expérience de visite virtuelle du campus de l'Université Concordia. Le projet s'est classé dans le **top 5 parmi plus de 180 soumissions**, démontrant à la fois l'excellence technique et l'utilité pratique. Nous avons utilisé le Gaussian Splatting 3D, une technique d'apprentissage automatique de pointe en infographie, pour transformer des images statiques traditionnelles en un environnement 3D immersif que les visiteurs peuvent explorer librement.

        L'application permet aux utilisateurs de naviguer librement dans des reconstitutions 3D photoréalistes des espaces du campus, leur permettant de développer un lien plus fort avec l'université. Nous avons enrichi l'expérience en intégrant 'Sting,' un chatbot IA nommé d'après la mascotte des Stingers de Concordia, qui sert de guide virtuel fournissant des informations dynamiques sur Concordia, les périodes d'examens, les professeurs, et plus encore.

        Notre implémentation traite de multiples photographies pour créer un nuage de points utilisant COLMAP, qui est ensuite converti en points gaussiens - des éléments 3D spécialisés avec des caractéristiques spécifiques incluant position, couleur, orientation et taille. Grâce à une optimisation itérative, ces points sont affinés pour créer des représentations quasi-photoréalistes des espaces du campus, atteignant des résultats de haute qualité dans la contrainte du hackathon de 24 heures.`,
        challenges: [
          "Implémentation du Gaussian Splatting 3D dans le délai de 24 heures du hackathon",
          "Intégration harmonieuse du chatbot avec l'application web",
          "Collecte de données propres pour des reconstructions 3D précises",
        ],
        keywords: [
          "Gaussian Splatting 3D",
          "Infographie",
          "Apprentissage Automatique",
          "Hugging Face",
        ],
        duration: "Fév 2025",
      },
    },
    coverImage: {
      img: "/images/projects/concordia-virtual-tour-cover.png",
    },
    images: [
      "/images/projects/concordia-virtual-tour-1.gif",
      "/images/projects/concordia-virtual-tour-2.png",
    ],
    links: {
      github: "https://github.com/matlois75/ConUHacks_2025",
      website: "https://concordia.design/",
      demo: "https://youtu.be/A_DX9EN-Qm8?si=9cySosMlBfppZ0zA",
    },
  },
  {
    translations: {
      en: {
        title: "Reinforcement Learning Rocket League Agent",
        description:
          "PPO-based reinforcement learning agent using reward shaping and curriculum learning.",
        longDescription: `A deep reinforcement learning project that trains an agent to play Rocket League, a physics-based vehicular soccer game. The system implements a PPO (Proximal Policy Optimization) architecture to teach the AI agent complex 3D movement, ball control, positioning, and basic-to-intermediate strategy, effectively translating high-dimensional games states into meaningful actions.

        The project uses curriculum learning to teach the agent basic controls and strategies first, and building upon that knowledge to proceed to more advanced game mechanics and tactics. Custom functions were used for reward shaping to direct the agent in certain learning directions. Using RLGym and Stable Baseline 3, the agent was trained over tens of millions of timesteps with checkpoint models, final models, and best models being saved for each new training session.

        The database logging serves as a final visual of the agent's training by defining major changes in the curriculum learning goal to show how the agent maximized its rewards over time, along with various useful statistics of the game such as goals scored, ball touches, average distance from the ball, and others. Once the project is finalized, I plan on accreting my work and displaying the agent's various tracked metrics over time.`,
        challenges: [
          "Implementing curriculum learning transitions without disrupting training stability",
          "Handling high-dimensional state spaces while maintaining training efficiency",
          "Balancing exploration vs exploitation during training",
        ],
        keywords: [
          "Reinforcement Learning",
          "PPO",
          "RLGym",
          "Stable Baseline 3",
          "Python",
        ],
        duration: "Nov 2024 - Dec 2024",
      },
      fr: {
        title: "Agent d'Apprentissage par Renforcement pour Rocket League",
        description:
          "Agent basé sur PPO qui apprend par renforcement avec récompenses adaptées et apprentissage progressif.",
        longDescription: `
          Un projet d'IA qui entraîne un agent à jouer à Rocket League, un jeu de foot avec des voitures. Le système utilise PPO (Proximal Policy Optimization) pour apprendre à l'agent les mouvements 3D, le contrôle de balle, le positionnement et les stratégies de base, en convertissant les états de jeu complexes en actions concrètes.\n
          
          Le projet utilise un apprentissage progressif : l'agent maîtrise d'abord les bases avant de passer aux techniques avancées. Des fonctions de récompense personnalisées guident son apprentissage. Avec RLGym et Stable Baseline 3, l'agent s'est entraîné sur des millions d'étapes, avec sauvegarde des meilleurs modèles à chaque session.

          La base de données suit les progrès de l'agent en enregistrant les changements dans ses objectifs d'apprentissage et montre comment il optimise ses récompenses. Elle stocke aussi les stats du jeu : buts marqués, touches de balle, distance moyenne à la balle, etc. Le projet final présentera l'évolution des performances de l'agent dans le temps.
          `,
        challenges: [
          "Gérer les transitions d'apprentissage sans perdre la stabilité",
          "Traiter un espace d'états complexe tout en gardant l'entraînement efficace",
          "Équilibrer l'exploration et l'exploitation pendant l'entraînement",
        ],
        keywords: [
          "Apprentissage par Renforcement",
          "PPO",
          "RLGym",
          "Stable Baseline 3",
          "Python",
        ],
        duration: "Nov 2024 - Déc 2024",
      },
    },
    coverImage: {
      img: "/images/projects/rocket-league-cover-1.jpg",
      src: "https://www.rocketleague.com",
    },
    images: ["/images/projects/Rocket-League-Agent-Demo.mp4"],
    links: {},
  },
  {
    translations: {
      en: {
        title: "IEEE Smart and Radio Controlled Marshmallow Cannon",
        description:
          "A smart, RC car featuring a marshmallow cannon powered by AI-driven auto-tracking and RF communication.",
        longDescription: `
          As part of a cross-functional team of engineering students, I contributed to an innovative RC car project built from scratch. The vehicle featured an automated marshmallow launcher controlled by an AI-powered targeting system.

          I focused specifically on developing the facial recognition and tracking components that guided the launcher's targeting system. Using Python, OpenCV, and Dlib libraries, I implemented a real-time detection system that controlled the aiming mechanism.

          The solution combined Haar Cascade classifiers for initial face detection with KCF (Kernelized Correlation Filters) tracking algorithms, chosen for their efficiency and low computational overhead. This implementation enabled precise targeting while maintaining responsive performance.
        `,
        keywords: ["Computer Vision", "Python", "OpenCV"],
        duration: "Jun 2024 - Aug 2024",
        challenges: [
          "Finding a model that balanced accuracy and speed for real-time tracking on a Raspberry Pi",
          "Mapping the tracking data to the turret's movement for accurate targeting",
          "Integrating the tracking system with the existing RC car controls",
        ],
      },
      fr: {
        title: "Canon à Guimauves Intelligent et Radiocommandé IEEE",
        description:
          "Une voiture RC intelligente équipée d'un canon à guimauves utilisant le suivi automatique par IA et la communication RF.",
        longDescription: [
          "Dans le cadre d'une équipe pluridisciplinaire d'étudiants en ingénierie, j'ai contribué à un projet innovant de voiture RC construite de zéro. Le véhicule comportait un lanceur de guimauves automatisé contrôlé par un système de ciblage basé sur l'IA.",
          "Je me suis particulièrement concentré sur le développement des composants de reconnaissance faciale et de suivi qui guidaient le système de ciblage du lanceur. En utilisant Python, OpenCV et les bibliothèques Dlib, j'ai implémenté un système de détection en temps réel qui contrôlait le mécanisme de visée.",
          "La solution combinait des classificateurs Haar Cascade pour la détection initiale des visages avec des algorithmes de suivi KCF (Kernelized Correlation Filters), choisis pour leur efficacité et leur faible coût en calcul. Cette implémentation a permis un ciblage précis tout en maintenant des performances réactives.",
        ].join("\n\n"),
        keywords: ["Vision par Ordinateur", "Python", "OpenCV"],
        duration: "Juin 2024 - Août 2024",
        challenges: [
          "Optimiser l'équilibre précision-vitesse pour le suivi sur Raspberry Pi",
          "Adapter les données de suivi au mouvement de la tourelle pour un ciblage précis",
          "Intégrer le système de suivi aux commandes existantes de la voiture RC",
        ],
      },
    },
    images: [
      "/images/projects/turret-rc-car-1.jpg",
      "/images/projects/turret-rc-car-2.jpg",
    ],
    links: {
      github: "https://github.com/BMathi9s/rc_car_project",
      website:
        "https://ieeeconcordia.notion.site/IEEE-Smart-and-Radio-Controlled-Marshmallow-Cannon-cb7912ac4bc54f8886a9f84cbfa6575f",
    },
  },
  {
    translations: {
      en: {
        title: "Cody AI Service Robot",
        description:
          "Service robot with facial recognition and tracking capabilities for human-robot interaction.",
        longDescription: `
            As a member of Nano Stride, Concordia's AI and Robotics Club, I worked on developing Cody, our service robot. Though the club doesn't exist anymore, we nearly finished Cody. Our goal was to create an interactive guide for Concordia's main Hall building to help students and visitors find their way around.

            I led the development of Cody's facial recognition and tracking system using Python and OpenCV. Being my first big project, it came with its challenges - especially getting everything to work in real-time and maintaining reliable tracking regardless of how many people were around. My biggest challenge? Getting Cody to figure out who was talking to it in group situations. I came up with a solution that combined a Timing Delay Of Arrival (TDOA) system with speech analysis. Basically, Cody could pinpoint where sound was coming from and match it with lip movements in that area, letting it identify who was speaking.

            This project really leveled up my expertise in computer vision and AI. But what struck me most was discovering how fascinating and complex it is to build AI systems that interact naturally with humans. The experience solidified my passion for AI and robotics, giving me a strong foundation for everything that followed.
        `,
        keywords: ["Computer Vision", "Python", "OpenCV", "NumPy"],
        duration: "Oct 2023 - Jan 2024",
        challenges: [
          "Developing a system to identify the primary speaker among multiple people",
          "Optimizing facial tracking algorithms for available budget and hardware",
          "Managing large code collaboration within a mid-sized development team for the first time",
        ],
      },
      fr: {
        title: "Cody - Robot de Service IA",
        description:
          "Robot de service avec capacités de reconnaissance faciale et de suivi pour l'interaction homme-robot.",
        longDescription: `
            En tant que membre de Nano Stride, le club d'IA et de Robotique de Concordia, j'ai participé au développement de Cody - notre robot de service. Même si le club n'existe plus aujourd'hui, on avait presque terminé Cody. Notre but était d'en faire un guide interactif dans le pavillon principal de Concordia pour aider les étudiants et visiteurs à s'orienter.

            J'étais responsable du système de reconnaissance faciale et de suivi de Cody, que j'ai développé avec Python et OpenCV. C'était mon premier gros projet, et ça n'a pas été simple - surtout pour faire fonctionner le tout en temps réel et garder un suivi stable peu importe le nombre de personnes autour. Mon plus gros défi? Faire comprendre à Cody qui lui parlait quand il y avait plusieurs personnes. J'ai trouvé une solution en combinant un système TDOA (Timing Delay Of Arrival) avec une analyse de la parole. En gros, Cody pouvait repérer d'où venait le son et le connecter aux mouvements des lèvres qu'il voyait, ce qui lui permettait de savoir qui parlait.

            Ce projet m'a vraiment fait progresser en vision par ordinateur et en IA. Mais ce qui m'a le plus marqué, c'est de découvrir à quel point c'est complexe et fascinant de créer des systèmes d'IA qui interagissent naturellement avec les humains. Cette expérience a confirmé ma passion pour l'IA et la robotique, et ça m'a donné une super base pour la suite.
        `,
        keywords: ["Vision par Ordinateur", "Python", "OpenCV", "NumPy"],
        duration: "Oct 2023 - Jan 2024",
        challenges: [
          "Développer un système d'identification du locuteur principal parmi plusieurs personnes",
          "Optimiser les algorithmes de suivi facial selon le budget et le matériel disponible",
          "Gérer la collaboration de code dans une équipe de taille moyenne pour la première fois",
        ],
      },
    },
    coverImage: { img: "/images/projects/cody-robot-cover.png" },
    images: [
      "/images/projects/cody-robot-1.png",
      "/images/projects/cody-robot-3.png",
      "/images/projects/cody-robot-2.jpg",
    ],
  },
  {
    translations: {
      en: {
        title: "Personal Portfolio Website",
        description:
          "Portfolio website showcasing my projects, skills, and experience.",
        longDescription: `
          I built my portfolio website from scratch to display my work and skills in a simple way. I went with React and Tailwind CSS to make it look clean and modern while working smoothly on all devices. The site has all the essentials - a projects section where I break down what I've worked on, a skills page, and a bit about who I am. I made sure to add a contact form too, keeping things straightforward for anyone who wants to reach out.
        `,
        keywords: ["React", "Tailwind CSS"],
        duration: "Dec 2024",
        challenges: [
          "Implementing a responsive layout that looks good on all devices",
          "Supporting both English and French languages on the site",
        ],
      },
      fr: {
        title: "Site Web Portfolio Personnel",
        description:
          "Site web portfolio présentant mes projets, compétences et expérience.",
        longDescription: `
          J'ai créé mon site portfolio pour présenter mon travail et mes compétences de façon simple. J'ai choisi React et Tailwind CSS pour avoir un design épuré et moderne qui s'adapte bien à tous les écrans. Le site contient l'essentiel - une section projets où j'explique ce que j'ai fait, une page de compétences, et une partie qui parle un peu de moi. J'ai aussi ajouté un formulaire de contact pour que les gens puissent facilement me joindre.
        `,
        keywords: ["React", "Tailwind CSS"],
        duration: "Déc 2024",
        challenges: [
          "Créer une mise en page responsive adaptée à tous les appareils",
          "Supporter l'anglais et le français sur le site",
        ],
      },
    },
    images: [
      "/images/projects/personal-portfolio-1.png",
      "/images/projects/personal-portfolio-2.png",
    ],
    links: {
      github: "https://github.com/matlois75/Mathys-Loiselle-Portfolio",
      website: "https://mathys-loiselle-portfolio.netlify.app",
    },
  },
  {
    translations: {
      en: {
        title: "Board Game Catalog",
        description:
          "Full-stack web application for my family to browse, track, and add to our 400+ board game collection.",
        longDescription: `
        I built this app to help my family manage our huge board game collection (over 400 games!). Finding the right game used to be a hassle, so I made it easy to filter games by player count, style, and how long they take to play. To make adding new games simpler, I connected to the BoardGameGeek API which allows you to just start typing the name and it fills in all the details automatically. I used Firebase for the backend data storage and added the DeepL API so everything works in both English and French for the whole family. My favorite part is how the games show up as cards with tags, making it super easy to find the perfect game for game night.
      `,
        keywords: ["JavaScript", "HTML/CSS", "Firebase"],
        duration: "Aug 2024",
        challenges: [
          "Ensuring the correct games were being added to the database",
          "Creating an intuitive UI that worked well for all my family members",
        ],
      },
      fr: {
        title: "Catalogue de Jeux de Société",
        description:
          "Application web full-stack permettant à ma famille de parcourir, suivre et ajouter à notre collection de 400+ jeux de société.",
        longDescription: `
          J'ai créé cette app pour aider ma famille à gérer notre énorme collection de jeux de société (400 jeux et plus!). Comme ça prenait toujours beaucoup de temps à trouver le bon jeu, j'ai mis en place des filtres par nombre de joueurs, style de jeu et durée de partie. Pour faciliter l'ajout de nouveaux jeux, j'ai utilisé l'API de BoardGameGeek qui nous permet de commencer à taper le nom d'un jeux et tous les détails s'ajoutent automatiquement. J'ai choisi Firebase pour le backend stockage des données et ajouté l'API DeepL pour que tout soit disponible en anglais et en français pour toute la famille. Ce que j'aime bien, c'est comment les jeux s'affichent en cartes avec des tags, ce qui rend super facile de trouver le jeu parfait pour nos soirées.
        `,
        keywords: ["JavaScript", "HTML/CSS", "Firebase"],
        duration: "Août 2024",
        challenges: [
          "S'assurer que les bons jeux étaient ajoutés à la base de données",
          "Créer une interface intuitive adaptée à tous les membres de ma famille",
        ],
      },
    },
    images: [
      "/images/projects/board-game-catalog-2.png",
      "/images/projects/board-game-catalog-3.png",
    ],
    links: {
      github: "https://github.com/matlois75/Board-Game-Catalog",
      website: "https://cathysgames.netlify.app/",
    },
  },
];

export { calculateDuration };

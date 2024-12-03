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
        title: "Reinforcement Learning Rocket League Bot",
        description:
          "DQN-based reinforcement learning agent with custom reward functions and game state modeling.",
        longDescription: `Built a reinforcement learning agent that learns to play Rocket League using Deep Q-Learning.
      Implemented custom reward functions to encourage strategic gameplay and ball control.
      Designed comprehensive state representation capturing game physics and positioning.`,
        challenges: [
          "Designing effective reward functions for complex game scenarios",
          "Optimizing state representation for efficient learning",
          "Balancing exploration vs exploitation during training",
        ],
        keywords: ["Reinforcement Learning", "DQN", "Python", "TensorFlow"],
        duration: "Nov 2024 - Present",
      },
      fr: {
        title: "Bot Rocket League avec Apprentissage par Renforcement",
        description:
          "Agent d'apprentissage par renforcement basé sur DQN avec des fonctions de récompense personnalisées et modélisation de l'état du jeu.",
        longDescription:
          "Création d'un agent d'apprentissage par renforcement qui apprend à jouer à Rocket League en utilisant le Deep Q-Learning. Implémentation de fonctions de récompense personnalisées pour encourager un gameplay stratégique et le contrôle de la balle. Conception d'une représentation complète de l'état capturant la physique du jeu et le positionnement.",
        challenges: [
          "Conception de fonctions de récompense efficaces pour des scénarios de jeu complexes",
          "Optimisation de la représentation d'état pour un apprentissage efficace",
          "Équilibrage entre exploration et exploitation pendant l'entraînement",
        ],
        keywords: [
          "Apprentissage par Renforcement",
          "DQN",
          "Python",
          "TensorFlow",
        ],
        duration: "Nov 2024 - Présent",
      },
    },
    images: [
      "/images/projects/coming-soon.svg",
      // "/images/projects/rocket-league-bot-1.",
      // "/images/projects/rocket-league-bot-2.png",
    ],
    links: {
      github: "https://github.com/yourusername/rocket-league-bot",
      demo: "https://youtube.com/watch?v=demo",
    },
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
      website: "",
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

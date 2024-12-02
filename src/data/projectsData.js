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
        title: "Bot Rocket League par Apprentissage par Renforcement",
        description:
          "Agent d'apprentissage par renforcement basé sur DQN avec fonctions de récompense personnalisées.",
        longDescription: `Construction d'un agent d'apprentissage par renforcement qui apprend à jouer à Rocket League en utilisant le Deep Q-Learning.
      Implémentation de fonctions de récompense personnalisées pour encourager le jeu stratégique et le contrôle de balle.
      Conception d'une représentation d'état complète capturant la physique du jeu et le positionnement.`,
        challenges: [
          "Conception de fonctions de récompense efficaces pour des scénarios de jeu complexes",
          "Optimisation de la représentation d'état pour un apprentissage efficient",
          "Équilibrage entre exploration et exploitation pendant l'entraînement",
        ],
        keywords: [
          "Apprentissage Par Renforcement",
          "DQN",
          "Python",
          "TensorFlow",
        ],
        duration: "Nov 2024 - Présent",
      },
    },
    images: [
      "/images/projects/rocket-league-bot-1.jpg",
      "/images/projects/rocket-league-bot-2.png",
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
          "A smart, radio-controlled mobile platform featuring a marshmallow cannon powered by AI-driven auto-tracking and RF communication.",
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
        title: "Canon à Guimauves Intelligent Radiocommandé IEEE",
        description:
          "Une plateforme mobile radiocommandée intelligente équipée d'un canon à guimauves utilisant le suivi automatique par IA et la communication RF.",
        longDescription: `
          En tant que membre d'une équipe pluridisciplinaire d'étudiants en ingénierie, j'ai contribué à un projet innovant de voiture RC construit de zéro. Le véhicule comportait un lanceur de guimauves automatisé contrôlé par un système de ciblage alimenté par l'IA.

          Je me suis concentré spécifiquement sur le développement des composants de reconnaissance faciale et de suivi qui guidaient le système de ciblage du lanceur. En utilisant les bibliothèques Python, OpenCV et Dlib, j'ai implémenté un système de détection en temps réel qui contrôlait le mécanisme de visée.

          La solution combinait des classificateurs Haar Cascade pour la détection initiale des visages avec des algorithmes de suivi KCF (Kernelized Correlation Filters), choisis pour leur efficacité et leur faible charge de calcul. Cette implémentation a permis un ciblage précis tout en maintenant des performances réactives.
        `,
        keywords: ["Vision par Ordinateur", "Python", "OpenCV"],
        duration: "Juin 2024 - Août 2024",
        challenges: [
          "Trouver un modèle équilibrant précision et vitesse pour le suivi en temps réel sur un Raspberry Pi",
          "Mapper les données de suivi au mouvement de la tourelle pour un ciblage précis",
          "Intégrer le système de suivi avec les contrôles existants de la voiture RC",
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
            As a member of Nano Stride, Concordia University's premier AI and Robotics Club, I contributed to the development of Cody - an advanced service robot. Though the club later disbanded, we had nearly completed Cody's development. The robot was designed to serve as an interactive guide in Concordia's main Hall building, where it would help students and visitors with directions and information.

            As the lead developer of Cody's facial recognition and tracking system, I built the entire solution using Python and OpenCV. This was my first large-scale project, and it presented significant technical challenges - particularly in achieving real-time performance and maintaining reliable tracking across varying conditions and crowd sizes. One of our biggest hurdles was enabling Cody to identify who was speaking to it in group situations. I developed an innovative solution combining a Timing Delay of Arrival (TDOA) system with semantic speech analysis. This allowed Cody to pinpoint sound direction and match it with lip movements in that specific area, accurately identifying the speaking person.

            This project dramatically improved my expertise in computer vision and AI development. More importantly, it revealed the fascinating complexities of building AI systems that interact naturally with humans. The experience solidified my passion for AI and robotics, setting the foundation for my subsequent work in the field.
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
        title: "Robot de Service IA Cody",
        description:
          "Robot de service avec capacités de reconnaissance faciale et de suivi pour l'interaction homme-robot.",
        longDescription: `
            En tant que membre de Nano Stride, le principal club d'IA et de robotique de l'Université Concordia, j'ai contribué au développement de Cody - un robot de service avancé. Bien que le club se soit dissous plus tard, nous avions presque terminé le développement de Cody. Le robot était conçu pour servir de guide interactif dans le bâtiment principal Hall de Concordia, où il aiderait les étudiants et les visiteurs avec des directions et des informations.

            En tant que développeur principal du système de reconnaissance faciale et de suivi de Cody, j'ai construit la solution complète en utilisant Python et OpenCV. C'était mon premier projet à grande échelle, et il présentait des défis techniques importants - particulièrement pour atteindre des performances en temps réel et maintenir un suivi fiable dans diverses conditions et tailles de foule. L'un de nos plus grands obstacles était de permettre à Cody d'identifier qui lui parlait dans des situations de groupe. J'ai développé une solution innovante combinant un système de délai d'arrivée temporel (TDOA) avec une analyse sémantique de la parole. Cela permettait à Cody de localiser la direction du son et de la faire correspondre avec les mouvements des lèvres dans cette zone spécifique, identifiant avec précision la personne qui parle.

            Ce projet a considérablement amélioré mon expertise en vision par ordinateur et en développement d'IA. Plus important encore, il a révélé les fascinantes complexités de la construction de systèmes d'IA qui interagissent naturellement avec les humains. Cette expérience a solidifié ma passion pour l'IA et la robotique, jetant les bases de mon travail ultérieur dans le domaine.
        `,
        keywords: ["Vision par Ordinateur", "Python", "OpenCV", "NumPy"],
        duration: "Oct 2023 - Jan 2024",
        challenges: [
          "Développement d'un système pour identifier l'interlocuteur principal parmi plusieurs personnes",
          "Optimisation des algorithmes de suivi facial pour le budget et le matériel disponibles",
          "Gestion de la collaboration sur le code au sein d'une équipe de développement de taille moyenne pour la première fois",
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
        I designed and developed a personal portfolio website to showcase my projects, skills, and experience. The site features a clean, modern design with a focus on user experience. I used React for the frontend and Tailwind CSS for styling, ensuring a responsive and visually appealing layout. The site includes a project gallery with detailed descriptions, a skills section highlighting my technical expertise, and an about page with information about my background and interests. I also integrated a contact form to make it easy for visitors to reach out to me.
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
        J'ai conçu et développé un site web portfolio personnel pour présenter mes projets, compétences et expérience. Le site propose un design épuré et moderne axé sur l'expérience utilisateur. J'ai utilisé React pour le frontend et Tailwind CSS pour le style, assurant une mise en page responsive et visuellement attrayante. Le site comprend une galerie de projets avec des descriptions détaillées, une section compétences mettant en valeur mon expertise technique, et une page à propos contenant des informations sur mon parcours et mes centres d'intérêt. J'ai également intégré un formulaire de contact pour permettre aux visiteurs de me contacter facilement.
      `,
        keywords: ["React", "Tailwind CSS"],
        duration: "Déc 2024",
        challenges: [
          "Implémentation d'une mise en page responsive qui s'affiche bien sur tous les appareils",
          "Prise en charge des langues anglaise et française sur le site",
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
        I developed a web application to manage and organize my family's large board game collection (400+ games). The app streamlines game selection by filtering through player count, game style, and play duration. Using the BoardGameGeek API, it automates game data entry with an autocomplete feature that populates game details, minimizing manual input. I integrated Firebase for the backend and incorporated the DeepL API to provide seamless bilingual support (English/French) for family members. A key feature is the smart filtering system that displays games as interactive cards with relevant tags, making it easy to find games that match specific group preferences.
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
          "Application web full-stack permettant à ma famille de parcourir, suivre et ajouter à notre collection de plus de 400 jeux de société.",
        longDescription: `
          J'ai développé une application web pour gérer et organiser la vaste collection de jeux de société de ma famille (plus de 400 jeux). L'application simplifie la sélection des jeux en filtrant par nombre de joueurs, style de jeu et durée de partie. En utilisant l'API BoardGameGeek, elle automatise la saisie des données des jeux avec une fonction d'auto-complétion qui remplit les détails des jeux, minimisant la saisie manuelle. J'ai intégré Firebase pour le backend et incorporé l'API DeepL pour fournir un support bilingue fluide (anglais/français) pour les membres de la famille. Une fonctionnalité clé est le système de filtrage intelligent qui affiche les jeux sous forme de cartes interactives avec des tags pertinents, facilitant la recherche de jeux correspondant aux préférences spécifiques du groupe.
        `,
        keywords: ["JavaScript", "HTML/CSS", "Firebase"],
        duration: "Août 2024",
        challenges: [
          "S'assurer que les bons jeux étaient ajoutés à la base de données",
          "Créer une interface utilisateur intuitive qui fonctionnait bien pour tous les membres de ma famille",
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

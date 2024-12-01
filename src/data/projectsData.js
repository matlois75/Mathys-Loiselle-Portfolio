const calculateDuration = (duration) => {
  if (!duration.includes(' - ')) {
    return '(1 month)';
  }
  
  const [start, end] = duration.split(" - ");
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  
  const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
    (endDate.getMonth() - startDate.getMonth()) + 1;
    
  if (monthsDiff >= 12) {
    const years = Math.floor(monthsDiff / 12);
    return `(${years} ${years === 1 ? 'year' : 'years'})`;
  }
  return `(${monthsDiff} ${monthsDiff === 1 ? 'month' : 'months'})`;
};

export const projects = [
    {
      title: "Reinforcement Learning Rocket League Bot",
      description: "DQN-based reinforcement learning agent with custom reward functions and game state modeling.",
      longDescription: `
        Built a reinforcement learning agent that learns to play Rocket League using Deep Q-Learning.
        Implemented custom reward functions to encourage strategic gameplay and ball control.
        Designed comprehensive state representation capturing game physics and positioning.
      `,
      keywords: ["Reinforcement Learning", "DQN", "Python", "TensorFlow"],
      duration: "Nov 2024 - Present",
      challenges: [
        "Designing effective reward functions for complex game scenarios",
        "Optimizing state representation for efficient learning",
        "Balancing exploration vs exploitation during training"
      ],
      images: [
        "/images/projects/rocket-league-bot-1.png",
        "/images/projects/rocket-league-bot-2.png"
      ],
      links: {
        github: "https://github.com/yourusername/rocket-league-bot",
        demo: "https://youtube.com/watch?v=demo"
      }
    },
    {
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
          "Integrating the tracking system with the existing RC car controls"
        ],
        images: [
          "/images/projects/turret-rc-car-1.jpg",
          "/images/projects/turret-rc-car-2.jpg",
        ],
        links: {
          github: "https://github.com/BMathi9s/rc_car_project",
          website: "https://ieeeconcordia.notion.site/IEEE-Smart-and-Radio-Controlled-Marshmallow-Cannon-cb7912ac4bc54f8886a9f84cbfa6575f"
        }
    },
    {
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
          "Managing large code collaboration within a mid-sized development team for the first time"
          ],
        images: [
          "/images/projects/cody-robot-1.png",
          "/images/projects/cody-robot-3.png",
          "/images/projects/cody-robot-2.jpg",
        ],
    },
    {
      title: "Personal Portfolio Website",
      description:
      "Portfolio website showcasing my projects, skills, and experience.",
      longDescription: `
        I designed and developed a personal portfolio website to showcase my projects, skills, and experience. The site features a clean, modern design with a focus on user experience. I used React for the frontend and Tailwind CSS for styling, ensuring a responsive and visually appealing layout. The site includes a project gallery with detailed descriptions, a skills section highlighting my technical expertise, and an about page with information about my background and interests. I also integrated a contact form to make it easy for visitors to reach out to me.
      `,
      keywords: ["React", "Tailwind CSS"],
      duration: "December 2024",
      challenges: [
        ""
        ],
      images: [
        "/images/projects/personal-portfolio-1.png",
        "/images/projects/personal-portfolio-2.png",
      ],
      links: {
        github: "https://github.com/matlois75/Mathys-Loiselle-Portfolio",
        website: ""
      }
  },
    {
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
        "Creating an intuitive UI that worked well for all my family members"
        ],
      images: [
        "/images/projects/board-game-catalog-2.png",
        "/images/projects/board-game-catalog-3.png",
      ],
      links: {
        github: "https://github.com/matlois75/Board-Game-Catalog",
        website: "https://cathysgames.netlify.app/"
      }
  },
  ];

  export { calculateDuration };
import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi";

const LinkButton = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1 text-sm
         hover:bg-black/5"
    onClick={(e) => e.stopPropagation()} // belt and suspenders if you later move onClick higher up
  >
    {children}
    <span>{label}</span>
  </a>
);

const ButtonsRow = ({ links }) => {
  if (!links) return null;
  const { github, website, demo } = links;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {website && (
        <LinkButton href={website} label="Website">
          <FiGlobe />
        </LinkButton>
      )}
      {github && (
        <LinkButton href={github} label="GitHub">
          <FiGithub />
        </LinkButton>
      )}
      {demo && (
        <LinkButton href={demo} label="Demo">
          <FiYoutube />
        </LinkButton>
      )}
    </div>
  );
};

const projects = [
  {
    title: "ConUHacks X - Degree Requirement Visualizer",
    duration: "January 2026",
    imgSrc: "/images/projects/conuhacks-x-cover.png",
    alt: "Degree Requirement Visualizer",
    description:
      "At ConUHacks X, our team built a React/TypeScript & MySQL web app that uses the Gemini API to extract and visualize any university's degree requirements. The platform generates optimal prerequisite path visualizations and provides career alignment tracking, helping students map out their academic journey with AI-powered course planning.",
    links: {
      github: "https://github.com/matlois75/ConUHacks_X",
      website: "https://conuhacksx-thefrogs.netlify.app/",
      demo: "https://youtu.be/Zqe7ZSF1_hA",
    },
  },
  {
    title: "ConUHacks IX - Concordia Virtual Tour++",
    duration: "February 2025",
    imgSrc: "/images/projects/concordia-virtual-tour-cover.png",
    alt: "Concordia Virtual Tour++",
    description:
      "At ConUHacks IX, Quebec's largest hackathon, our team developed an innovative solution to revolutionize Concordia University's virtual campus tour experience. The project placed in the top 5 among 200+ submissions, demonstrating both technical excellence and practical utility. We leveraged 3D Gaussian Splatting, a cutting-edge machine learning technique in computer graphics, to transform traditional static images into a fully immersive 3D environment that visitors can freely explore.",
    links: {
      github: "https://github.com/matlois75/ConUHacks_2025",
      website: "https://concordia.design/",
      demo: "https://youtu.be/A_DX9EN-Qm8?si=9cySosMlBfppZ0zA",
    },
  },
  {
    title: "Reinforcement Learning Rocket League Agent",
    duration: "December 2024",
    imgSrc: "/images/projects/rocket-league-cover-1.jpg",
    alt: "Rocket League Agent Demo",
    description:
      "A reinforcement learning project that trains an agent to play Rocket League, a physics-based vehicular soccer game. The system implements a PPO (Proximal Policy Optimization) architecture to teach the AI agent complex 3D movement, ball control, positioning, and basic-to-intermediate strategy, effectively translating high-dimensional games states into meaningful actions.",
  },
  {
    title: "Smart Marshmallow RC Tank",
    duration: "June - August 2024 (3 months)",
    imgSrc: "/images/projects/turret-rc-car-1.jpg",
    alt: "Smart Marshmallow RC Tank",
    description:
      "As part of a multidisciplinary Concordia IEEE team, I helped build an innovative RC car from scratch. The vehicle included a marshmallow launcher guided by an automated targeting system using MediaPipe's pre-trained computer vision model for facial and object detection. The project was showcased at Concordia's Frosh 2024, where it playfully launched marshmallows into students' mouths on command.",
    links: {
      github: "https://github.com/BMathi9s/rc_car_project",
      website:
        "https://ieeeconcordia.notion.site/IEEE-Smart-and-Radio-Controlled-Marshmallow-Cannon-cb7912ac4bc54f8886a9f84cbfa6575f",
    },
  },
  {
    title: "Cody AI Service Robot",
    duration: "October 2023 - January 2024 (4 months)",
    imgSrc: "/images/projects/cody-robot-cover.png",
    alt: "Cody AI Service Robot",
    description:
      "At Nano Stride, Concordia's leading AI and robotics club at the time, I contributed to the development of Cody, a nearly 6-foot service robot designed to interact with passers-by. I focused on Cody's computer vision system, implementing detection of people, facial expressions, body pose, and other subtle cues. This experience not only deepened my technical skills but also sparked my passion for machine learning and the problem-solving mindset it demands.",
  },
];

const ProjectsSection = ({ sectionNumber }) => {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="container mx-auto space-y-12">
        {/* Section heading */}
        <h2 className="text-h1 uppercase tracking-wide">
          {sectionNumber}. Projects
        </h2>

        {/* Projects list */}
        <div className="space-y-24">
          {projects.map(({ title, duration, imgSrc, alt, links }, index) => {
            const isReversed = index % 2 !== 0;

            const currentText = projects[index].description;

            return (
              <div
                key={title}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-64 md:h-96 object-cover select-none"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className={`space-y-2 text-justify`}>
                    <p className="text-p font-bold">{title}</p>
                    <p className="text-h4">{duration}</p>
                    <div className="mt-4">
                      <p className="text-p text-justify">{currentText}</p>
                      <ButtonsRow links={links} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

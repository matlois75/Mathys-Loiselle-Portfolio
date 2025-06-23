const projects = [
  {
    title: "ConUHacks IX – Concordia Virtual Tour++",
    duration: "February 2025 (1 month)",
    imgSrc: "/images/projects/concordia-virtual-tour-cover.png",
    alt: "Concordia Virtual Tour++",
  },
  {
    title: "Reinforcement Learning Rocket League Agent",
    duration: "November - December 2024 (2 months)",
    imgSrc: "/images/projects/rocket-league-cover-1.jpg",
    alt: "Rocket League Agent Demo",
  },
  {
    title: "Smart Marshmallow RC Tank",
    duration: "June - August 2024 (3 months)",
    imgSrc: "/images/projects/turret-rc-car-1.jpg",
    alt: "Smart Marshmallow RC Tank",
  },
  {
    title: "Cody AI Service Robot",
    duration: "October 2023 - January 2024 (4 months)",
    imgSrc: "/images/projects/cody-robot-cover.png",
    alt: "Cody AI Service Robot",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4 space-y-12">
      {/* Section heading */}
      <h2 className="text-h1 uppercase tracking-wide">
        {projects.length} Projects
      </h2>

      {/* Projects list */}
      <div className="space-y-24">
        {projects.map(({ title, duration, imgSrc, alt }, index) => (
          <div
            key={title}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={imgSrc}
                  alt={alt}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p
                className={`text-p text-center ${
                  index % 2 !== 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {title}
              </p>
              <p
                className={`text-h4 text-center ${
                  index % 2 !== 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

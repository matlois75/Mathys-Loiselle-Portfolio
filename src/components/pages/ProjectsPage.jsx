const ProjectsPage = () => {
  const projects = [
    {
      title: "Reinforcement Learning Rocket League Bot",
      description:
        "DQN-based reinforcement learning agent with custom reward functions and game state modeling.",
      tech: ["Python", "TensorFlow", "DQN"],
      duration: "Nov 2024 - Present",
    },
    {
      title: "Turret RC Car",
      description:
        "Facial recognition and tracking system for marshmallow turret using Haar Cascade and KCF tracker.",
      tech: ["Python", "OpenCV", "Dlib"],
      duration: "Jun 2024 - Aug 2024",
    },
    {
      title: "Cody AI Robot",
      description:
        "Developed facial recognition and tracking for moving robot head.",
      tech: ["Python", "NumPy", "OpenCV", "Dlib"],
      duration: "Oct 2023 - Dec 2024",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">{project.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

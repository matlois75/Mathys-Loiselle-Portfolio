import { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import { projects } from "../../data/projectsData";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectsPage;

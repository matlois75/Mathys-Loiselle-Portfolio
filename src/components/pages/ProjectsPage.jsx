import { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import { projects } from "../../data/projectsData";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const ProjectsPage = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[language];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">{t.projects.title}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
            language={language}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />
    </div>
  );
};

ProjectsPage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ProjectsPage;

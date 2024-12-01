import PropTypes from "prop-types";
import { calculateDuration } from "../../data/projectsData";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4
          transition-all duration-300 ease-out cursor-pointer
          hover:transform hover:scale-[1.02] hover:-translate-y-1
          hover:bg-white/60 hover:shadow-lg hover:shadow-blue-100/50
          hover:backdrop-blur-none"
    >
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.keywords.map((keywords, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {keywords}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        {project.duration} <span>{calculateDuration(project.duration)}</span>
      </p>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    // Add other project properties you're using
    longDescription: PropTypes.string,
    challenges: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      github: PropTypes.string,
      demo: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;

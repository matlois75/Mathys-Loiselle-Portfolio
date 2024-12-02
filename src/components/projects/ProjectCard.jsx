import PropTypes from "prop-types";
import { calculateDuration } from "../../data/projectsData";

const ProjectCard = ({ project, onClick, language }) => {
  const translation = project.translations[language];

  return (
    <div
      onClick={onClick}
      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4
      transition-all duration-300 ease-out cursor-pointer
      hover:transform hover:scale-[1.02] hover:-translate-y-1
      hover:bg-white/60 dark:hover:bg-gray-700/60 hover:shadow-lg 
      hover:shadow-blue-100/50 dark:hover:shadow-blue-900/50
      hover:backdrop-blur-none"
    >
      <h2 className="text-xl font-semibold dark:text-white">
        {translation.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {translation.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {translation.keywords.map((keyword, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
          >
            {keyword}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {translation.duration}{" "}
        <span>{calculateDuration(translation.duration, language)}</span>
      </p>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    translations: PropTypes.shape({
      en: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.string.isRequired,
      }).isRequired,
      fr: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      github: PropTypes.string,
      demo: PropTypes.string,
      website: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ProjectCard;

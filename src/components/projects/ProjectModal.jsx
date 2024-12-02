import PropTypes from "prop-types";
import ImageCard from "../ui/ImageCard";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-gray-300"
          >
            ✕
          </button>
        </div>

        {project.images && (
          <div className="space-y-4 overflow-visible">
            <h3 className="font-semibold">Images</h3>
            {project.images.length === 1 ? (
              <div className="mx-auto w-4/5">
                <ImageCard
                  src={project.images[0]}
                  alt={`${project.title} screenshot 1`}
                  className="h-96"
                />
              </div>
            ) : project.images.length === 3 ? (
              <div className="flex gap-4">
                {project.images.map((img, i) => (
                  <ImageCard
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="flex-1 h-64"
                  />
                ))}
              </div>
            ) : project.images.length === 4 ? (
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <ImageCard
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="aspect-square"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <ImageCard
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-64"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-semibold dark:text-white">Overview</h3>
          <div className="text-gray-600 dark:text-gray-300 space-y-4">
            {project.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {project.challenges && (
          <div className="space-y-4">
            <h3 className="font-semibold dark:text-white">Challenges</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-semibold dark:text-white">Keywords</h3>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keywords, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {keywords}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.links && (
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                GitHub Repository
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
            {(project.links.demo || project.links.website) && (
              <a
                href={project.links.demo || project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                {project.links.demo ? "Live Demo" : "Website"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    challenges: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      github: PropTypes.string,
      demo: PropTypes.string,
      website: PropTypes.string,
    }),
  }), // Not required since it can be null when modal is closed
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;

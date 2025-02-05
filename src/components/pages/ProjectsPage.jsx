import { Link } from "react-router-dom";
import { projects, calculateDuration } from "../../data/projectsData";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const ProjectsPage = ({ language }) => {
  const t = translations[language];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">{t.projects.title}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const translation = project.translations[language];
          const urlFriendly = project.translations.en.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-");

          return (
            <Link
              key={urlFriendly}
              to={`/projects/${urlFriendly}`}
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 
              transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/50
              hover:transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg 
              hover:shadow-blue-100/50 dark:hover:shadow-blue-900/50"
            >
              {/* Project Preview Image */}
              {(project.coverImage?.img || project.images?.[0]) && (
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.coverImage?.img || project.images[0]}
                    alt={translation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project Info */}
              <h2 className="text-xl font-semibold dark:text-white mb-2">
                {translation.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {translation.description}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {translation.keywords.slice(0, 3).map((keyword, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                    px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
                {translation.keywords.length > 3 && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    +{translation.keywords.length - 3} more
                  </span>
                )}
              </div>

              {/* Duration */}
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {translation.duration}{" "}
                {calculateDuration(translation.duration, language)}
              </p>

              {/* View Details Button */}
              <p className="mt-3 text-sm text-blue-500 dark:text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                {language === "en" ? "View Details" : "Voir les détails"}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

ProjectsPage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ProjectsPage;

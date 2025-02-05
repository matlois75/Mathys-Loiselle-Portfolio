import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Github, ExternalLink, Youtube } from "lucide-react";
import { projects, calculateDuration } from "../../data/projectsData";
import { translations } from "../../data/translations";
import ImageCard from "../ui/ImageCard";
import MarkdownContent from "../ui/MarkdownContent";
import PropTypes from "prop-types";

const ProjectDetailPage = ({ language }) => {
  const { projectId } = useParams();
  const t = translations[language];

  // Find the project by matching the URL-friendly version of its title
  const project = projects.find((p) => {
    const urlFriendly = p.translations.en.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
    return urlFriendly === projectId;
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const translation = project.translations[language];

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>
          {language === "en" ? "Back to Projects" : "Retour aux Projets"}
        </span>
      </Link>

      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold dark:text-white">
          {translation.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {translation.description}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          {translation.duration}{" "}
          {calculateDuration(translation.duration, language)}
        </p>
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="space-y-6">
          <div
            className={`grid ${
              project.images.length === 1
                ? "place-items-center"
                : project.images.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            } gap-6`}
          >
            {project.images.map((img, i) => (
              <ImageCard
                key={i}
                src={img}
                alt={`${translation.title} ${i + 1}`}
                className={project.images.length === 1 ? "w-1/4" : "w-full"}
              />
            ))}
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="space-y-8">
        {/* Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            {t.projects.overview}
          </h2>
          <div className="space-y-6">
            <MarkdownContent
              content={translation.longDescription}
              className="text-gray-600 dark:text-gray-300 text-justify"
            />
          </div>
        </div>

        {/* Challenges */}
        {translation.challenges && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">
              {t.projects.challenges}
            </h2>
            <ul className="space-y-3">
              {translation.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            {t.projects.keywords}
          </h2>
          <div className="flex flex-wrap gap-2">
            {translation.keywords.map((keyword, i) => (
              <span
                key={i}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                px-4 py-2 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        {project.links && (
          <div className="flex flex-wrap gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>{language === "en" ? "Watch Demo" : "Voir la démo"}</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 
                text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 
                transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{t.projects.viewGithub}</span>
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white 
                rounded-lg hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 
                transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{t.projects.viewWebsite}</span>
              </a>
            )}
          </div>
        )}

        {/* Cover Image Credit */}
        {project.coverImage?.src && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            {language === "en" ? "Cover image from" : "Image de couverture de"}{" "}
            <a
              href={project.coverImage.src}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              {project.coverImage.src}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectDetailPage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ProjectDetailPage;

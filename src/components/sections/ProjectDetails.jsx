import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Github, ExternalLink, Youtube } from "lucide-react";
import { projects, calculateDuration } from "../../data/projectsData";
import { translations } from "../../data/translations";
import ImageCard from "../components/ui/ImageCard";
import MarkdownContent from "../components/ui/MarkdownContent";
import PropTypes from "prop-types";

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  // Find the project by matching the URL-friendly version of its title
  const project = projects.find((p) => {
    const urlFriendly = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return urlFriendly === projectId;
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-600 hover:text-blue-600"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>{"Back to Projects"}</span>
      </Link>

      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.description}</p>
        <p className="text-gray-500">
          {project.duration} {calculateDuration(project.duration)}
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
          <h2 className="text-2xl font-semibold">{t.projects.overview}</h2>
          <div className="space-y-6">
            <MarkdownContent
              content={project.longDescription}
              className="text-gray-600 text-justify"
            />
          </div>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.projects.challenges}</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-gray-600"
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
          <h2 className="text-2xl font-semibold">
            {content.projects.keywords}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.keywords.map((keyword, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 
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
                <span>{"Watch Demo"}</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 
                text-white rounded-lg hover:bg-gray-800 
                transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>{content.projects.viewGithub}</span>
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white 
                rounded-lg hover:bg-blue-500
                transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{content.projects.viewWebsite}</span>
              </a>
            )}
          </div>
        )}

        {/* Cover Image Credit */}
        {project.coverImage?.src && (
          <div className="text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
            {"Cover image from"}{" "}
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

export default ProjectDetailPage;

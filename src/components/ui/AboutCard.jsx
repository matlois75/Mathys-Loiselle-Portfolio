import PropTypes from "prop-types";

const AboutCard = ({ content }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 space-y-4 shadow-xl border border-gray-200/20 dark:border-gray-700/30">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {content.title}
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AboutCard;

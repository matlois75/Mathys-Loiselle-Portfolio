import PropTypes from "prop-types";

const MarkdownContent = ({ content, className = "" }) => {
  // Simple function to handle basic Markdown syntax
  const parseMarkdown = (text) => {
    // Handle bold text with ** or __
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

    // Handle italic text with * or _
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    text = text.replace(/_(.*?)_/g, "<em>$1</em>");

    // Split into paragraphs
    const paragraphs = text.split("\n\n");
    return paragraphs.map((p, i) => (
      <p
        key={i}
        className={className}
        dangerouslySetInnerHTML={{ __html: p.trim() }}
      />
    ));
  };

  return <>{parseMarkdown(content)}</>;
};

MarkdownContent.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MarkdownContent;

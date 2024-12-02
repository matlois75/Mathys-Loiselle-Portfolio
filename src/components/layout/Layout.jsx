import Navigation from "./Navigation";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children, language, ...props }) => {
  return (
    <div
      className={`min-h-screen flex flex-col ${props.isDarkMode ? "dark" : ""}`}
    >
      <Navigation {...props} language={language} />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 flex-grow w-full">
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default Layout;

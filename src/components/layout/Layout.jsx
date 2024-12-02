import Navigation from "./Navigation";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({
  children,
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
}) => {
  return (
    // Layout.jsx
    <div
      className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}
      bg-gradient-to-br from-blue-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800`}
    >
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 flex-grow w-full">
        {children}
      </main>
      <Footer />
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

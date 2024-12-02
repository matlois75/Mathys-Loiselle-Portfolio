import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { navigationItems } from "../../data/navigationItems";
import PropTypes from "prop-types";
import { translations } from "../../data/translations";

const Navigation = ({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
}) => {
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-[100]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={isDarkMode ? "/favicon-dark.svg" : "/favicon-light.svg"}
              alt="ML Logo"
              className="h-8 w-8 transition-opacity duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                  ${
                    currentPage === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{t.navigation[item.id]}</span>
              </button>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-4 mr-4">
            <button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("darkMode", (!isDarkMode).toString());
              }}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              type="button"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 
              dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
              aria-label={t.navigation.language}
            >
              <span className="w-5 h-5 inline-flex items-center justify-center font-medium">
                {language === "en" ? "FR" : "EN"}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Theme and Language Toggles */}
            <div className="flex items-center justify-around py-2 border-b">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span>{language === "en" ? "Français" : "English"}</span>
              </button>
            </div>

            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors
                  ${
                    currentPage === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default Navigation;

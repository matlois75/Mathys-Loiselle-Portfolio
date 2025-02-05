import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";

const App = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "en";
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage language={language} />;
      case "projects":
        return <ProjectsPage language={language} />;
      case "resume":
        return <ResumePage language={language} />;
      case "contact":
        return <ContactPage language={language} />;
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Content for {currentPage} page coming soon...
            </p>
          </div>
        );
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
      language={language}
      setLanguage={setLanguage}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;

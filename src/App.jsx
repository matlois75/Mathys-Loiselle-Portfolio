import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectDetailPage from "./components/pages/ProjectDetailPage";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "en";
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

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

  return (
    <Router>
      <ScrollToTop />
      <Layout
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      >
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route
            path="/projects"
            element={<ProjectsPage language={language} />}
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetailPage language={language} />}
          />
          <Route path="/resume" element={<ResumePage language={language} />} />
          <Route
            path="/contact"
            element={<ContactPage language={language} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

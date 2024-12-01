import { useState } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "resume":
        return <ResumePage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-gray-600">
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
    >
      {renderPage()}
    </Layout>
  );
};

export default App;

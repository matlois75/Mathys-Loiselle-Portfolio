import Layout from "./components/layout/Layout";
import AboutSection from "./components/sections/AboutSection";
import CVSection from "./components/sections/CVSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import LifeSection from "./components/sections/LifeSection";
import ResearchSection from "./components/sections/ResearchSection";

const App = () => {
  return (
    <Layout>
      <AboutSection />
      <CVSection />
      <ProjectsSection />
      <ResearchSection />
      <LifeSection />
      <ContactSection />
    </Layout>
  );
};

export default App;

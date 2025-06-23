import Layout from "./components/layout/Layout";
import AboutSection from "./components/sections/AboutSection";
import CVSection from "./components/sections/CVSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

const App = () => {
  return (
    <Layout>
      <AboutSection />
      <CVSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default App;

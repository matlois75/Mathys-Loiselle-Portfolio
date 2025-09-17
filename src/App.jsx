import Layout from "./components/layout/Layout";
import AboutSection from "./components/sections/AboutSection";
import CVSection from "./components/sections/CVSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import MiscSection from "./components/sections/MiscSection";

const App = () => {
  return (
    <Layout>
      <AboutSection />
      <CVSection />
      <ProjectsSection />
      <MiscSection />
      <ContactSection />
    </Layout>
  );
};

export default App;

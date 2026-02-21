import Layout from "./components/layout/Layout";
import AboutSection from "./components/sections/AboutSection";
import CVSection from "./components/sections/CVSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import LifeSection from "./components/sections/LifeSection";
import ResearchSection from "./components/sections/ResearchSection";
import VolunteeringSection from "./components/sections/VolunteeringSection";

const App = () => {
  return (
    <Layout>
      <AboutSection sectionNumber={1} />
      <CVSection sectionNumber={2} />
      <ResearchSection sectionNumber={3} />
      <ProjectsSection sectionNumber={4} />
      <VolunteeringSection sectionNumber={5} />
      <LifeSection sectionNumber={6} />
      <ContactSection sectionNumber={7} />
    </Layout>
  );
};

export default App;

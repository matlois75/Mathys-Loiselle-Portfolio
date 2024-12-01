import ProfileSection from "../ui/ProfileSection";
import AboutCard from "../ui/AboutCard";
import InterestCard from "../ui/InterestCard";

const HomePage = () => {
  const researchInterests = [
    "Machine Learning & Deep Learning",
    "Computer Vision",
    "Quantum Computing",
  ];

  const technicalFocus = [
    "Reinforcement Learning",
    "Neural Networks",
    "Robotics Systems",
  ];

  return (
    <div className="space-y-6">
      <ProfileSection />
      <AboutCard />
      <div className="grid md:grid-cols-2 gap-4">
        <InterestCard title="Research Interests" items={researchInterests} />
        <InterestCard title="Technical Focus" items={technicalFocus} />
      </div>
    </div>
  );
};

export default HomePage;

import ProfileSection from "../ui/ProfileSection";
import AboutCard from "../ui/AboutCard";
import InterestCard from "../ui/InterestCard";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const HomePage = ({ language }) => {
  const t = translations[language];

  return (
    <div className="space-y-6 dark:text-white">
      <ProfileSection role={t.profile.role} />
      <AboutCard content={t.about} />
      <div className="grid md:grid-cols-2 gap-4">
        <InterestCard
          title={t.interests.research.title}
          items={t.interests.research.items}
        />
        <InterestCard
          title={t.interests.technical.title}
          items={t.interests.technical.items}
        />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default HomePage;

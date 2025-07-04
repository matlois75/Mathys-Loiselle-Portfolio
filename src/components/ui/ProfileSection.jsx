import PropTypes from "prop-types";
import profilePic from "../../assets/LinkedIn-Profile-Pic.png";

const ProfileSection = ({ role }) => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold dark:text-white">Mathys Loiselle</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">{role}</p>
    </div>
  );
};

ProfileSection.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProfileSection;

import profilePic from "../../assets/Google-Profile-Pic.jpg";

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold">Mathys Loiselle</h1>
      <p className="text-xl text-gray-600">
        Computer Science Student & AI Enthusiast
      </p>
    </div>
  );
};

export default ProfileSection;
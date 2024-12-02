import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [emailTooltip, setEmailTooltip] = useState("");

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mathys.loiselle@gmail.com");
    setEmailTooltip("Copied!");
    setTimeout(() => setEmailTooltip(""), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mathys.loiselle@gmail.com",
      link: "#",
      onClick: copyEmail,
      isEmail: true,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/mathysloiselle/",
      link: "https://www.linkedin.com/in/mathysloiselle/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/matlois75",
      link: "https://github.com/matlois75",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out to me through any of these platforms.
            I&apos;m always interested in discussing new opportunities,
            collaborations, research projects, or just having a chat about
            technology and research.
          </p>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                onClick={method.isEmail ? method.onClick : undefined}
                target={method.isEmail ? undefined : "_blank"}
                rel={method.isEmail ? undefined : "noopener noreferrer"}
                className="relative group flex items-center space-x-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-colors"
              >
                <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h2 className="font-semibold dark:text-white">
                    {method.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {method.value}
                  </p>
                </div>
                {method.isEmail && emailTooltip && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] px-2 py-1 text-sm text-white bg-gray-800 rounded transition-opacity duration-200 whitespace-nowrap">
                    {emailTooltip}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Research Interests
          </h2>

          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-2">
              Core Machine Learning
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>Machine Learning & Deep Learning</li>
              <li>Reinforcement Learning</li>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-2">
              Applications & Systems
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>Multimodal Learning & AI Systems</li>
              <li>Natural Language Processing</li>
              <li>Robotics and Computer Vision</li>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-2">
              Interdisciplinary Research
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>Mathematics/Physics oriented research</li>
              <li>Neuroscience oriented research</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

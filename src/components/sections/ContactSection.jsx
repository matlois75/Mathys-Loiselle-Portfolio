import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { useState } from "react";

const ContactSection = () => {
  const [emailTooltip, setEmailTooltip] = useState("Copy Email");

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mathys.loiselle@gmail.com");
    setEmailTooltip("Email Copied!");

    // Reset tooltip after 2 seconds
    setTimeout(() => {
      setEmailTooltip("Copy Email");
    }, 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-h1 uppercase tracking-wide mb-8">5. Contact</h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-4 md:space-y-0">
          <div
            className="relative group"
            onMouseLeave={() => {
              // Only reset if it's not showing "Email Copied!"
              if (emailTooltip !== "Email Copied!") {
                setEmailTooltip("Copy Email");
              }
            }}
          >
            <a
              href="mailto:mathys.loiselle@gmail.com"
              onClick={handleEmailClick}
              className="flex items-center space-x-2 text-p text-gray-800 hover:underline cursor-pointer"
            >
              <FiMail className="w-6 h-6" />
              <span>mathys.loiselle@gmail.com</span>
            </a>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {emailTooltip}
            </div>
          </div>

          <a
            href="https://linkedin.com/in/mathysloiselle/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-p text-gray-800 hover:underline"
          >
            <FiLinkedin className="w-6 h-6" />
            <span>linkedin.com/in/mathysloiselle</span>
          </a>

          <a
            href="https://github.com/matlois75"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-p text-gray-800 hover:underline"
          >
            <FiGithub className="w-6 h-6" />
            <span>github.com/matlois75</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

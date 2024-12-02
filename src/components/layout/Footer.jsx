import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [emailTooltip, setEmailTooltip] = useState("Copy Email");

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mathys.loiselle@gmail.com");
    setEmailTooltip("Copied!");
  };

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6">
          <div className="relative group">
            <a
              href="https://github.com/matlois75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
              text-sm text-white bg-gray-800 dark:bg-gray-700 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              GitHub
            </div>
          </div>

          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/mathysloiselle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
              text-sm text-white bg-gray-800 dark:bg-gray-700 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              LinkedIn
            </div>
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setEmailTooltip("Copy Email")}
          >
            <a
              href="#"
              onClick={copyEmail}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
              text-sm text-white bg-gray-800 dark:bg-gray-700 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              {emailTooltip}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

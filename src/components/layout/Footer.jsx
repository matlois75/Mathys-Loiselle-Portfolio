import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const Footer = ({ language }) => {
  const t = translations[language];
  const [emailTooltip, setEmailTooltip] = useState(t.footer.copyEmail);

  // Manually set the last updated date
  const lastUpdated = new Date("03-31-2025"); // MM-DD-YYYY

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mathys.loiselle@gmail.com");
    setEmailTooltip(t.footer.copied);
  };

  useEffect(() => {
    setEmailTooltip(t.footer.copyEmail);
  }, [language, t.footer.copyEmail]);

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
            <div className="tooltip">{t.footer.github}</div>
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
            <div className="tooltip">{t.footer.linkedin}</div>
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setEmailTooltip(t.footer.copyEmail)}
          >
            <a
              href="#"
              onClick={copyEmail}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
            <div className="tooltip">{emailTooltip}</div>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          {language === "en" ? "Last updated" : "Dernière mise à jour"}:{" "}
          {lastUpdated.toLocaleDateString(
            language === "en" ? "en-US" : "fr-FR",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          )}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default Footer;

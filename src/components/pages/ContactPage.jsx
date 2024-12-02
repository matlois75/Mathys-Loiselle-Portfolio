import { Mail, Linkedin, Github, ChevronRight } from "lucide-react";
import { useState } from "react";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const ContactPage = ({ language }) => {
  const t = translations[language];
  const [emailTooltip, setEmailTooltip] = useState("");

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mathys.loiselle@gmail.com");
    setEmailTooltip(language === "en" ? "Copied!" : "Copié !");
    setTimeout(() => setEmailTooltip(""), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t.contact.email,
      value: "mathys.loiselle@gmail.com",
      link: "#",
      onClick: copyEmail,
      isEmail: true,
    },
    {
      icon: Linkedin,
      title: t.contact.linkedin,
      value: "linkedin.com/in/mathysloiselle/",
      link: "https://www.linkedin.com/in/mathysloiselle/",
    },
    {
      icon: Github,
      title: t.contact.github,
      value: "github.com/matlois75",
      link: "https://github.com/matlois75",
    },
  ];

  const researchSections = {
    en: {
      title: "Research Interests",
      sections: [
        {
          title: "Core Machine Learning",
          items: ["Machine Learning & Deep Learning", "Reinforcement Learning"],
        },
        {
          title: "Applications & Systems",
          items: [
            "Multimodal Learning & AI Systems",
            "Natural Language Processing",
            "Robotics and Computer Vision",
          ],
        },
        {
          title: "Interdisciplinary Research",
          items: [
            "Mathematics/Physics oriented research",
            "Neuroscience oriented research",
          ],
        },
      ],
    },
    fr: {
      title: "Intérêts de Recherche",
      sections: [
        {
          title: "Apprentissage Automatique Fondamental",
          items: [
            "Apprentissage automatique et apprentissage profond",
            "Apprentissage par renforcement",
          ],
        },
        {
          title: "Applications et Systèmes",
          items: [
            "Apprentissage multimodal et systèmes d'IA",
            "Traitement du langage naturel",
            "Robotique et vision par ordinateur",
          ],
        },
        {
          title: "Recherche Interdisciplinaire",
          items: [
            "Recherche orientée mathématiques/physique",
            "Recherche orientée neurosciences",
          ],
        },
      ],
    },
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">{t.contact.title}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
            {t.contact.subtitle}
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
            {researchSections[language].title}
          </h2>

          {researchSections[language].sections.map((section, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-2">
                {section.title}
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-200">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ContactPage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ContactPage;

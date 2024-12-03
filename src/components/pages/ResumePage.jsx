import { ExternalLink, ChevronRight } from "lucide-react";
import resumePDF from "../../assets/Mathys-Loiselle-Resume-Public.pdf";
import { calculateDuration } from "../../data/projectsData";
import { translations } from "../../data/translations";
import PropTypes from "prop-types";

const ResumePage = ({ language }) => {
  const t = translations[language];

  const sections = {
    en: [
      {
        title: "Education",
        items: [
          {
            title: "Bachelor of Science - Computer Science",
            location: "Concordia University - Montreal, QC",
            duration: "2022 - 2026 (Expected)",
            details: [
              "Dean's List: Fall 2023 - Summer 2024",
              "Relevant Courses: Data Structures & Algorithms (A+), Theoretical CS (A+), Computer Graphics (A), Operating Systems (A-)",
            ],
          },
          {
            title: "Minor in Mathematics and Statistics",
            location: "Concordia University - Montreal, QC",
            duration: "2022 - 2026 (Expected)",
            details: [
              "Relevant Courses: Multivariable Calculus (A+), Linear Algebra (A), Probability & Statistics (A)",
            ],
          },
          {
            title: "High School Diploma",
            location: "Mission Vista High School - Oceanside, California",
            duration: "2018 - 2022",
            details: ["GPA: 3.84"],
          },
        ],
      },
      {
        title: "Experience",
        items: [
          {
            title: "AI Software Developer - Internship",
            location: "TaylorMade Golf - Carlsbad, California, USA",
            duration: "Sep 2024 - Dec 2024",
            details: [
              "Implemented complete voice features for TaylorMade chatbot (Angular/C#/Azure)",
              "Built mahalanobis model for order processing anomaly detection (Python)",
              "Developed automatic color adjustment algorithm (Python/React)",
              "Research in CV, ML, and prompt engineering for POC development",
            ],
            keywords: [
              "Statistical Modeling",
              "AI/ML",
              "Angular",
              "C#",
              "Azure",
              "React",
            ],
          },
          {
            title: "Dataset Annotator",
            location: "Concordia Applied AI Institute - Montreal, QC",
            duration: "Nov 2023",
            details: [
              "Dataset annotation for ML model training/testing",
              "Collaborative team input for data optimization",
            ],
            keywords: ["Data Annotation", "Time Efficiency"],
          },
        ],
      },
      {
        title: "Interests",
        items: [
          {
            title: "Academic & Research",
            details: [
              "Computer Science: Machine Learning, Deep Learning, Computational Neuroscience",
              "Mathematics & Statistics",
              "Physics: Quantum Physics, Astrophysics",
            ],
            keywords: ["AI/ML", "Mathematics", "Physics", "Research"],
          },
          {
            title: "Sports & Athletics",
            details: [
              "Winter Sports: Ice Hockey, Snowboarding",
              "Racket Sports: Table Tennis, Badminton, Pickleball, Tennis",
              "Outdoor Activities: Rock Climbing, Biking, Soccer",
            ],
            keywords: ["Team Sports", "Outdoor Recreation"],
          },
          {
            title: "Travelling",
            details: [
              "Europe: France, Italy, Spain, United Kingdom",
              "Americas: Canada, United States, Mexico, Costa Rica",
              "Africa: Morocco",
              "Asia: Vietnam",
            ],
            keywords: ["International Travel", "Cultural Exchange"],
          },
        ],
      },
    ],
    fr: [
      {
        title: "Éducation",
        items: [
          {
            title: "Baccalauréat en Sciences - Informatique",
            location: "Université Concordia - Montréal, QC",
            duration: "2022 - 2026 (Prévu)",
            details: [
              "Tableau d'honneur : Automne 2023 - Été 2024",
              "Cours pertinents : Structures de données et algorithmes (A+), Informatique théorique (A+), Infographie (A), Systèmes d'exploitation (A-)",
            ],
          },
          {
            title: "Mineure en Mathématiques et Statistiques",
            location: "Université Concordia - Montréal, QC",
            duration: "2022 - 2026 (Prévu)",
            details: [
              "Cours pertinents : Calcul multivariable (A+), Algèbre linéaire (A), Probabilités et statistiques (A)",
            ],
          },
          {
            title: "Diplôme d'études secondaires",
            location: "Mission Vista High School - Oceanside, Californie",
            duration: "2018 - 2022",
            details: ["Moyenne : 3.84"],
          },
        ],
      },
      {
        title: "Expérience",
        items: [
          {
            title: "Développeur logiciel IA - Stage",
            location: "TaylorMade Golf - Carlsbad, Californie, États-Unis",
            duration: "Sept 2024 - Déc 2024",
            details: [
              "Implémentation vocale du chatbot TaylorMade (Angular/C#/Azure)",
              "Modèle Mahalanobis pour détection d'anomalies dans le traitement des commandes (Python)",
              "Algorithme d'ajustement automatique des couleurs (Python/React)",
              "Recherche en vision, ML et ingénierie de prompts pour POCs",
            ],
            keywords: [
              "Modélisation Statistique",
              "IA/ML",
              "Angular",
              "C#",
              "Azure",
              "React",
            ],
          },
          {
            title: "Annotateur de données",
            location: "Institut d'IA appliquée Concordia - Montréal, QC",
            duration: "Nov 2023",
            details: [
              "Annotation de données pour l'entraînement/test de modèles ML",
              "Contribution collaborative d'équipe pour l'optimisation des données",
            ],
            keywords: ["Annotation de Données", "Efficacité Temporelle"],
          },
        ],
      },
      {
        title: "Centres d'intérêt",
        items: [
          {
            title: "Académique & Recherche",
            details: [
              "Informatique : Apprentissage automatique, Apprentissage profond, Neuroscience computationnelle",
              "Mathématiques & Statistiques",
              "Physique : Physique quantique, Astrophysique",
            ],
            keywords: ["IA/ML", "Mathématiques", "Physique", "Recherche"],
          },
          {
            title: "Sports & Athlétisme",
            details: [
              "Sports d'hiver : Hockey sur glace, Planche à neige",
              "Sports de raquette : Tennis de table, Badminton, Pickleball, Tennis",
              "Activités de plein air : Escalade, Vélo, Soccer",
            ],
            keywords: ["Sports d'équipe", "Activités de plein air"],
          },
          {
            title: "Voyages",
            details: [
              "Europe : France, Italie, Espagne, Angleterre",
              "Amériques : Canada, États-Unis, Mexique, Costa Rica",
              "Afrique : Maroc",
              "Asie : Vietnam",
            ],
            keywords: ["Voyages Internationaux", "Échange Culturel"],
          },
        ],
      },
    ],
  };

  const handleDownload = () => {
    window.open(resumePDF, "_blank"); // TODO: Add French resume
  };

  return (
    <div className="space-y-8 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">{t.resume.title}</h1>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <span>{language === "en" ? "Open File" : "Ouvrir le fichier"}</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {sections[language].map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            {section.title}
          </h2>
          <div className="space-y-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.duration}
                  {section.title ===
                    (language === "en" ? "Experience" : "Expérience") &&
                    " " + calculateDuration(item.duration, language)}
                </p>
                <ul className="mt-2 space-y-1">
                  {item.details.map((detail, d) => (
                    <li
                      key={d}
                      className="text-gray-700 dark:text-gray-200 flex items-center" // Change items-start to items-center
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {item.keywords && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.keywords.map((keyword, t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ResumePage.propTypes = {
  language: PropTypes.oneOf(["en", "fr"]).isRequired,
};

export default ResumePage;

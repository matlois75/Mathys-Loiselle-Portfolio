import { ExternalLink, ChevronRight } from "lucide-react";
import resumeEnglishPDF from "../../assets/Mathys-Loiselle-Resume-EN.pdf";
import spaceHealthLogo from "../../assets/experience/space_health_logo.png";
import taylormadeLogo from "../../assets/experience/taylormade_logo.png";
import nanoStrideLogo from "../../assets/experience/nano_stride_logo.jpeg";
import milaLogo from "../../assets/experience/mila_logo.png";
import concordiaAppliedAIInstituteLogo from "../../assets/experience/concordia_applied_ai_institute_logo.jpeg";
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
            title: "Bachelor of Computer Science, Honours",
            location: "Concordia University - Montreal, QC",
            duration: "2022 - 2026 (Expected)",
            details: [
              "Dean's List: Fall 2023 - Fall 2024",
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
        ],
      },
      {
        title: "Experience",
        items: [
          {
            title: "Undergraduate Student Researcher",
            location: "Mila (Quebec AI Institute) - Montreal, QC",
            duration: "Mar 2025 - Present",
            details: [
              "Conducting research in Matthew Perich's sinthlab, focusing on improving neural decoding in brain-computer interfaces (BCIs)",
              "Developing multimodal transformer architectures to enhance BCI performance",
              "Exploring and implementing modality fusion techniques to improve information integration across modalities",
            ],
            keywords: [
              "Deep Learning",
              "Transformers",
              "Research",
              "Neuroscience",
            ],
            image: milaLogo,
            companyUrl: "https://mila.quebec/en",
          },
          {
            title: "Lead Machine Learning Engineer - Space Health",
            location: "Space Concordia - Montreal, QC",
            duration: "Feb 2025 - Present",
            details: [
              "Lead team of ~9 ML engineers developing models for space-induced neurological changes",
              "Conduct novel research at intersection of deep learning and neuroscience, focusing on brain structure prediction during long-duration spaceflight",
              "Drive development of scientific publication investigating ML applications in space neuroscience",
              "Create weekly tasks for team members and have weekly meetings to discuss progress and challenges",
            ],
            keywords: [
              "Machine Learning",
              "Research",
              "Neuroscience",
              "Team Leadership",
              "Space Health",
            ],
            image: spaceHealthLogo,
            companyUrl: "https://spaceconcordia.ca/space-health",
          },
          {
            title: "AI Software Developer - Internship",
            location: "TaylorMade Golf - Carlsbad, California",
            duration: "Sep 2024 - Dec 2024",
            details: [
              "Implemented complete voice features for TaylorMade chatbot including STT, TTS, hands-free conversation mode, and real-time waveform visualization (Angular/C#/Azure)",
              "Developed automatic color adjustment algorithm (Python/React)",
              "Researched and implemented order processing anomaly detection using Mahalanobis distance, achieving reliable outlier identification through multivariate statistical analysis (Python)",
              "Research in CV, ML, and prompt engineering for POC development",
            ],
            keywords: [
              "AI/ML",
              "Statistical Modeling",
              "Angular",
              "React",
              "Python",
              "C#",
              "Azure",
            ],
            image: taylormadeLogo,
            companyUrl: "https://www.taylormadegolf.com/",
          },
          {
            title: "Computer Vision Engineer",
            location: "Nano Stride - Montreal, QC",
            duration: "Oct 2023 - Jan 2024",
            details: [
              "Implemented real-time robotics head motion control algorithms",
              "Built computer vision pipeline using OpenCV/Dlib",
              "Collaborated with cross-functional engineering team",
            ],
            keywords: ["Computer Vision", "AI/ML", "Robotics", "Python"],
            image: nanoStrideLogo,
            companyUrl: "https://www.linkedin.com/company/nanostride/",
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
            image: concordiaAppliedAIInstituteLogo,
            companyUrl:
              "https://www.concordia.ca/research/applied-ai-institute.html",
          },
        ],
      },
      {
        title: "Technical Skills",
        items: [
          {
            title: "Programming Languages & Tools",
            details: [
              "Languages: Python, JavaScript, Java, C, C++, C#, TypeScript, Clojure, Erlang",
              "AI/ML: PyTorch, TensorFlow, Keras, OpenCV, Dlib",
              "Web & Cloud: React, Angular, Azure, Firebase, HTML/CSS",
              "Tools: VSCode, Git, JetBrains Products, Jupyter Notebook",
            ],
            keywords: ["Programming", "AI/ML", "Web Development", "Tools"],
          },
        ],
      },
      {
        title: "Interests",
        items: [
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
          },
        ],
      },
    ],
    fr: [
      {
        title: "Éducation",
        items: [
          {
            title: "Baccalauréat en Informatique, Honneurs",
            location: "Université Concordia - Montréal, QC",
            duration: "2022 - 2026 (Prévu)",
            details: [
              "Tableau d'honneur : Automne 2023 - Automne 2024",
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
        ],
      },
      {
        title: "Expérience",
        items: [
          {
            title: "Assistant de Recherche Étudiant",
            location: "Mila (Institut d'IA au Québec) - Montréal, QC",
            duration: "Mar 2025 - Présent",
            details: [
              "Mener des recherches dans le sinthlab de Matthew Perich, en se concentrant sur l'amélioration du décodage neuronal dans les interfaces cerveau-ordinateur (ICO)",
              "Développer des architectures de transformers multimodales pour améliorer les performances des ICO",
              "Explorer et mettre en œuvre des techniques de fusion de modalités pour améliorer l'intégration des informations à travers différentes modalités",
            ],
            keywords: [
              "Apprentissage Profond",
              "Transformers",
              "Recherche",
              "Neurosciences",
            ],
            image: milaLogo,
            companyUrl: "https://mila.quebec/fr",
          },
          {
            title:
              "Ingénieur Principal en Apprentissage Automatique - Santé Spatiale",
            location: "Space Concordia - Montréal, QC",
            duration: "Fév 2025 - Présent",
            details: [
              "Direction d'une équipe de ~9 ingénieurs ML développant des modèles pour les changements neurologiques spatiaux",
              "Recherche à l'intersection de l'apprentissage profond et des neurosciences, focus sur la prédiction cérébrale",
              "Développement d'une publication scientifique sur le ML en neurosciences spatiales",
              "Gestion des tâches d'équipe et des réunions hebdomadaires de suivi",
            ],
            keywords: [
              "Apprentissage Profond",
              "Recherche",
              "Neurosciences",
              "Leadership",
              "Santé Spatiale",
            ],
            image: spaceHealthLogo,
            companyUrl: "https://spaceconcordia.ca/space-health",
          },
          {
            title: "Développeur Logiciel IA - Stage",
            location: "TaylorMade Golf - Carlsbad, Californie",
            duration: "Sep 2024 - Déc 2024",
            details: [
              "Implémentation complète des fonctionnalités vocales pour le chatbot TaylorMade incluant STT, TTS, mode de conversation mains libres et visualisation des ondes en temps réel (Angular/C#/Azure)",
              "Développement d'un algorithme d'ajustement automatique des couleurs (Python/React)",
              "Recherche et implémentation de la détection d'anomalies dans le traitement des commandes utilisant la distance de Mahalanobis, permettant une identification fiable des valeurs aberrantes par analyse statistique multivariée (Python)",
              "Recherche en vision par ordinateur, ML et ingénierie de prompts pour développement de POCs",
            ],
            keywords: [
              "IA/ML",
              "Modélisation Statistique",
              "Angular",
              "React",
              "Python",
              "C#",
              "Azure",
            ],
            image: taylormadeLogo,
            companyUrl: "https://www.taylormadegolf.com/",
          },
          {
            title: "Ingénieur en Vision par Ordinateur",
            location: "Nano Stride - Montréal, QC",
            duration: "Oct 2023 - Jan 2024",
            details: [
              "Implémentation d'algorithmes de contrôle en temps réel des mouvements de tête robotique",
              "Développement d'un pipeline de vision par ordinateur avec OpenCV/Dlib",
              "Collaboration avec une équipe pluridisciplinaire d'ingénieurs",
            ],
            keywords: ["Vision par Ordinateur", "IA/ML", "Robotique", "Python"],
            image: nanoStrideLogo,
            companyUrl: "https://www.linkedin.com/company/nanostride/",
          },
          {
            title: "Annotateur de Données",
            location: "Institut d'IA Appliquée Concordia - Montréal, QC",
            duration: "Nov 2023",
            details: [
              "Annotation de données pour l'entraînement et les tests de modèles ML",
              "Contribution collaborative pour l'optimisation des données",
            ],
            keywords: ["Annotation de Données", "Efficacité Temporelle"],
            image: concordiaAppliedAIInstituteLogo,
            companyUrl:
              "https://www.concordia.ca/research/applied-ai-institute.html",
          },
        ],
      },
      {
        title: "Compétences Techniques",
        items: [
          {
            title: "Langages de Programmation & Outils",
            details: [
              "Langages : Python, JavaScript, Java, C, C++, C#, TypeScript, Clojure, Erlang",
              "IA/ML : PyTorch, TensorFlow, Keras, OpenCV, Dlib",
              "Web & Cloud : React, Angular, Azure, Firebase, HTML/CSS",
              "Outils : VSCode, Git, Produits JetBrains, Jupyter Notebook",
            ],
            keywords: ["Programmation", "IA/ML", "Développement Web", "Outils"],
          },
        ],
      },
      {
        title: "Intérêts",
        items: [
          {
            title: "Sports & Athlétisme",
            details: [
              "Sports d'hiver : Hockey, Planche à neige",
              "Sports de raquette : Tennis de table, Badminton, Pickleball, Tennis",
              "Activités de plein air : Escalade, Vélo, Soccer",
            ],
            keywords: ["Sports d'Équipe", "Activités de Plein Air"],
          },
          {
            title: "Voyages",
            details: [
              "Europe : France, Italie, Espagne, Royaume-Uni",
              "Amériques : Canada, États-Unis, Mexique, Costa Rica",
              "Afrique : Maroc",
              "Asie : Vietnam",
            ],
          },
        ],
      },
    ],
  };

  const handleDownload = () => {
    const pdfToDownload = resumeEnglishPDF;
    window.open(pdfToDownload, "_blank");
  };

  return (
    <div className="space-y-8 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">{t.resume.title}</h1>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <span>{t.resume.openFile}</span>
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
                className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 ${
                  section.title === "Experience" ||
                  section.title === "Expérience"
                    ? "md:grid md:grid-cols-[1fr,200px] md:gap-6 space-y-4 md:space-y-0"
                    : "space-y-4"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.location}
                    </p>
                  )}
                  {item.duration && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.duration}
                      {section.title ===
                        (language === "en" ? "Experience" : "Expérience") &&
                        " " + calculateDuration(item.duration, language)}
                    </p>
                  )}
                  <ul className="space-y-1">
                    {item.details.map((detail, d) => (
                      <li
                        key={d}
                        className="text-gray-700 dark:text-gray-200 flex items-center"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {item.keywords && (
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((keyword, k) => (
                        <span
                          key={k}
                          className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {(section.title === "Experience" ||
                  section.title === "Expérience") && (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-full flex items-center justify-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-[160px] w-auto h-auto object-contain rounded-lg"
                    />
                  </a>
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

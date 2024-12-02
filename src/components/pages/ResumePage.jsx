import { ExternalLink } from "lucide-react";
import resumePDF from "../../assets/Mathys-Loiselle-Resume-Public.pdf";
import { calculateDuration } from "../../data/projectsData";

const ResumePage = () => {
  const sections = [
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
            "Built voice mode system using Angular/C#/Azure cloud services",
            "Developed ML anomaly detection for order processing",
            "Build image processing model with Python/React",
          ],
          keywords: [
            "Artifical Intelligence",
            "Statistical Modeling",
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
  ];

  const handleDownload = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <div className="space-y-8 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Resume</h1>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <span>Open File</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {sections.map((section, index) => (
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
                  {section.title === "Experience" &&
                    " " + calculateDuration(item.duration)}
                </p>
                <ul className="mt-2 space-y-1">
                  {item.details.map((detail, d) => (
                    <li key={d} className="text-gray-700 dark:text-gray-200">
                      {detail}
                    </li>
                  ))}
                </ul>
                {item.keywords && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.keywords.map((keywords, t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md"
                      >
                        {keywords}
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

export default ResumePage;

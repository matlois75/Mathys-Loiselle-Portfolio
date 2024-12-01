import { Download } from "lucide-react";

const ResumePage = () => {
  const sections = [
    {
      title: "Education",
      items: [
        {
          title: "Bachelor of Science – Computer Science",
          location: "Concordia University - Montreal, QC",
          duration: "2022 - 2026 (Expected)",
          details: [
            "Relevant Courses: Data Structures & Algorithms (A+), Theoretical CS (A+)",
          ],
        },
        {
          title: "Minor in Mathematics and Statistics",
          location: "Concordia University - Montreal, QC",
          duration: "2022 - 2026 (Expected)",
          details: [
            "Relevant Courses: Linear Algebra (A), Multivariable Calculus (A+), Probability & Statistics (A)",
          ],
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          title: "AI Software Developer - Internship",
          location: "TaylorMade Golf – Carlsbad, California, USA",
          duration: "Sep 2024 – Dec 2024",
          details: [
            "Built voice mode system using Angular/C#/Azure cloud services",
            "Developed ML anomaly detection for order processing",
            "Build image processing model with Python/React",
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resume</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </button>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <div className="space-y-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-500">{item.duration}</p>
                <ul className="mt-2 space-y-1">
                  {item.details.map((detail, d) => (
                    <li key={d} className="text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumePage;

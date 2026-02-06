const volunteerExperiences = [
  {
    title: "HackDécouverte",
    date: "November 2025",
    organization: "Concordia University – Montréal, QC",
    responsibilities: [
      "Ensured smooth event logistics and positive participant experience for CEGEP and high school hackers",
      "Provided bilingual support for technical project questions and hackathon logistics",
    ],
  },
  {
    title: "Gina Cody School Open House",
    date: "October 2025",
    organization: "Concordia University – Montréal, QC",
    responsibilities: [
      "Ensured smooth presentation setup, assisted speakers with tech needs, and maintained session schedules",
    ],
  },
  {
    title: "Space Concordia Space Day",
    date: "September 2025",
    organization: "Concordia University – Montréal, QC",
    responsibilities: [
      "Represented Space Concordia's Space Health division, engaged visitors, and answered questions about the division & club",
    ],
  },
];

const VolunteeringSection = ({ sectionNumber }) => (
  <section id="volunteering" className="px-4 py-20">
    <div className="container mx-auto space-y-12">
      <h2 className="text-h1 uppercase tracking-wide">
        {sectionNumber}. Volunteering
      </h2>

      <div className="space-y-8">
        {volunteerExperiences.map((experience, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-h3 font-bold">{experience.title}</h3>
            <p className="text-h4">{experience.date}</p>
            <p className="text-p italic">{experience.organization}</p>
            <ul className="mt-2 space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start text-p text-justify"
                >
                  <span className="mr-2 mt-1">&#10022;</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VolunteeringSection;

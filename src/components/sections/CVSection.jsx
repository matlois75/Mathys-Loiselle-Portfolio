// Helper to calculate duration between two dates (returns e.g. "4 months", "1 year 2 months")
function calculateDuration(start, end = new Date()) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = [];
  if (years > 0) result.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) result.push(`${months} month${months > 1 ? "s" : ""}`);
  if (result.length === 0) return "Less than 1 month";
  return result.join(" ");
}
import { FiExternalLink } from "react-icons/fi";
import concordiaLogo from "../../assets/concordia_university_logo.png";
import milaLogo from "../../assets/experience/mila_logo.png";
import spaceLogo from "../../assets/experience/space_health_logo.png";
import taylorMadeLogo from "../../assets/experience/taylormade_logo.png";
import nanoStrideLogo from "../../assets/experience/nano_stride_logo.jpeg";
import appliedAiConcordiaLogo from "../../assets/experience/concordia_applied_ai_institute_logo.jpeg";

const CVSection = () => (
  <section id="cv" className="px-2 sm:px-4 py-8 sm:py-12 md:py-20">
    <div className="container mx-auto space-y-8 sm:space-y-12 md:space-y-20">
      {/* SECTION HEADING */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <h2 className="text-h1 uppercase tracking-wide">2. CV</h2>
        <a
          href="/Mathys-Loiselle-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 sm:px-4 py-2 border border-black rounded-full text-sm sm:text-base font-medium hover:bg-black/5 transition select-none flex items-center justify-center gap-2 w-fit"
        >
          Open PDF <FiExternalLink className="inline-block align-text-bottom" />
        </a>
      </div>

      {/* 2.1 EDUCATION */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-3 sm:gap-4">
        <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
          <h3 className="text-h2 uppercase tracking-wide">2.1 Education</h3>
          <div className="flex justify-center md:hidden">
            <a
              href="https://www.concordia.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={concordiaLogo}
                alt="Concordia University logo"
                className="w-40 sm:w-48 md:w-56"
                draggable={false}
              />
            </a>
          </div>
          <h4 className="text-h3 font-bold">
            Bachelor of Computer Science, Honours
          </h4>
          <p className="text-p italic">
            Concordia University - Montréal, Québec
          </p>
          <p className="text-h4">September 2022 - December 2026 (Expected)</p>
          <span className="inline-block w-8 border-b-2 border-black"></span>
          <p className="mt-4 text-p text-justify">
            Pursuing a Minor in Mathematics &amp; Statistics alongside my
            Honours degree. Recognized on the Dean's List from Summer 2023
            through Fall 2025, and awarded the Québec Perspective Scholarship
            ($5000, 2023-2024). Coursework includes Machine Learning, Computer
            Vision, Linear Algebra, and Multivariable Calculus I &amp; II.
          </p>
        </div>
        <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
          <a
            href="https://www.concordia.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={concordiaLogo}
              alt="Concordia University logo"
              className="w-40 md:w-[30em]"
              draggable={false}
            />
          </a>
        </div>
      </div>

      {/* 2.2 EXPERIENCE */}
      <div className="space-y-8 sm:space-y-12 md:space-y-20">
        {/* Entry 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
            {/* Only show the “2.2” on the first entry */}
            <h3 className="text-h2 uppercase tracking-wide">2.2 Experience</h3>
            <div className="flex justify-center md:hidden mb-2">
              <a
                href="https://mila.quebec/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={milaLogo}
                  alt="Mila logo"
                  className="w-56 md:w-[25em]"
                  draggable={false}
                />
              </a>
            </div>
            <h4 className="text-h3 font-bold">
              Undergraduate Student Researcher
            </h4>
            <p className="italic text-p">
              Mila (Quebec AI Institute) - Montréal, Québec
            </p>
            <p className="text-h4">
              March 2025 - Present ({calculateDuration("2025-03-01")})
            </p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <p className="mt-4 text-p text-justify">
              Extended the POYO neural decoding framework for multimodal neural
              decoding under Dr. Guillaume Lajoie and Dr. Matthew
              Perich,training models with multiple masking strategies for
              multi-session pretraining and single-session fine-tuning. Ran
              large-scale multi-GPU experiments on Mila's SLURM cluster with
              WandB tracking, and presented a poster at the NeurIPS 2025
              Workshop on Foundation Models for the Brain and Body (BrainBodyFM)
              and at the Montreal AI & Neuroscience (MAIN 2025) conference.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
            <a
              href="https://mila.quebec/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={milaLogo}
                alt="Mila logo"
                className="w-56 md:w-[25em]"
                draggable={false}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
            <div className="flex justify-center md:hidden mb-2">
              <a
                href="https://spaceconcordia.ca/space-health"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={spaceLogo}
                  alt="Space Concordia Space Health logo"
                  className="w-44 md:w-[17em]"
                  draggable={false}
                />
              </a>
            </div>
            <h4 className="text-h3 font-bold">
              Lead Machine Learning Engineer - Space Health
            </h4>
            <p className="italic text-p">Space Concordia - Montréal, Québec</p>
            <p className="text-h4">
              February 2025 - Present ({calculateDuration("2025-02-01")})
            </p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <p className="mt-4 text-p text-justify">
              Leading a team of 10 Bachelor's and Master's students on brain
              health research for long-duration spaceflight. Designed a
              transformer-CNN architecture for predicting structural brain
              changes from longitudinal MRI scans, and built the preprocessing
              and training infrastructure for multi-timepoint neuroimaging data.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
            <a
              href="https://spaceconcordia.ca/space-health"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={spaceLogo}
                alt="Space Concordia Space Health logo"
                className="w-44 md:w-[17em]"
                draggable={false}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
            <div className="flex justify-center md:hidden mb-2">
              <a
                href="https://www.taylormadegolf.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={taylorMadeLogo}
                  alt="TaylorMade logo"
                  className="w-40 md:w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </a>
            </div>
            <h4 className="text-h3 font-bold">
              AI Software Developer - Internship
            </h4>
            <p className="italic text-p">
              TaylorMade Golf - Carlsbad, California
            </p>
            <p className="text-h4">September - December 2024 (4 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <p className="mt-4 text-p text-justify">
              Built a full-stack chatbot with both text-to-speech and
              speech-to-text voice interface using Azure Speech Services
              (Angular/C#), and developed a color profile matching system to
              align RGB display output with CMYK printing (Python/React). Also
              built anomaly detection using Mahalanobis distance to flag invalid
              product configurations before manufacturing.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
            <a
              href="https://www.taylormadegolf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={taylorMadeLogo}
                alt="TaylorMade logo"
                className="w-40 md:w-[16em] rounded-[25%]"
                draggable={false}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
            <div className="flex justify-center md:hidden mb-2">
              <a
                href="https://www.linkedin.com/company/nanostride/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={nanoStrideLogo}
                  alt="Nano Stride logo"
                  className="w-40 md:w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </a>
            </div>
            <h4 className="text-h3 font-bold">Computer Vision Engineer</h4>
            <p className="italic text-p">Nano Stride - Montréal, Québec</p>
            <p className="text-h4">October 2023 - January 2024 (4 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <p className="mt-4 text-p text-justify">
              Led computer vision development for Cody, a 5'8" robot answering
              campus questions via natural interaction. Designed speaker
              identification combining timing delay of arrival (TDOA), natural
              language context, and pose estimation for multi-speaker scenarios,
              and built real-time head motion control using OpenCV and tiny-YOLO
              to direct robot gaze toward active speakers.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/company/nanostride/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={nanoStrideLogo}
                alt="Nano Stride logo"
                className="w-40 md:w-[16em] rounded-[25%]"
                draggable={false}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-justify md:w-3/4 md:pr-8 space-y-3 sm:space-y-4">
            <div className="flex justify-center md:hidden mb-2">
              <a
                href="https://www.concordia.ca/research/applied-ai-institute.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appliedAiConcordiaLogo}
                  alt="Applied AI Concordia logo"
                  className="w-40 md:w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </a>
            </div>
            <h4 className="text-h3 font-bold">Dataset Annotator</h4>
            <p className="italic text-p">
              Concordia Applied AI Institute - Montréal, Québec
            </p>
            <p className="text-h4">November 2023</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <p className="mt-4 text-p text-justify">
              Performed dataset annotation for ML model training and testing,
              collaborating with a team to optimize data quality and
              consistency.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/3 justify-center md:justify-end">
            <a
              href="https://www.concordia.ca/research/applied-ai-institute.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appliedAiConcordiaLogo}
                alt="Applied AI Concordia logo"
                className="w-40 md:w-[16em] rounded-[25%]"
                draggable={false}
              />
            </a>
          </div>
        </div>
      </div>

      {/* 2.3 TECHNICAL SKILLS */}
      <div>
        <h3 className="text-h2 uppercase tracking-wide">
          2.3 Technical Skills
        </h3>
        <div className="mt-6 flex flex-wrap justify-between text-p">
          {[
            {
              title: "Languages",
              items: ["Python", "JavaScript", "TypeScript", "Java", "C#/C++/C"],
            },
            {
              title: "AI/ML",
              items: ["PyTorch", "NumPy", "Scikit-learn", "TensorFlow"],
            },
            {
              title: "Web & Cloud",
              items: [
                "React",
                "Angular",
                "Node.js",
                "HTML/CSS",
                "Azure",
                "Firebase",
              ],
            },
            {
              title: "Tools",
              items: ["Git", "VSCode", "Jupyter", "SLURM", "WandB"],
            },
          ].map((col) => (
            <div key={col.title} className="w-1/2 md:w-1/4">
              <h4 className="text-p underline">{col.title}</h4>
              <ul>
                {col.items.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <span className="mr-2 text-p">&#10022;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 2.4 RESEARCH INTERESTS */}
      <div>
        <h3 className="text-h2 uppercase tracking-wide">
          2.4 Research Interests
        </h3>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
          {[
            {
              title: "Machine Learning",
            },
            {
              title: "Computational Neuroscience",
            },
            {
              title: "Neural Decoding",
            },
            {
              title: "Mathematics",
            },
            {
              title: "Robotics",
            },
            {
              title: "Natural Language Processing",
            },
          ].map((interest) => (
            <li key={interest.title} className="flex items-center min-h-[3rem]">
              <span className="mr-2 text-p">&#10022;</span>
              <span className="font-medium text-p">{interest.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CVSection;

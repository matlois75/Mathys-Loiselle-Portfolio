import { FiExternalLink } from "react-icons/fi";
import concordiaLogo from "../../assets/concordia_university_logo.png";
import milaLogo from "../../assets/experience/mila_logo.png";
import spaceLogo from "../../assets/experience/space_health_logo.png";
import taylorMadeLogo from "../../assets/experience/taylormade_logo.png";
import nanoStrideLogo from "../../assets/experience/nano_stride_logo.jpeg";
import appliedAiConcordiaLogo from "../../assets/experience/concordia_applied_ai_institute_logo.jpeg";

const CVSection = () => (
  <section id="cv" className="py-20">
    <div className="container mx-auto space-y-20">
      {/* SECTION HEADING */}
      <div className="flex items-center gap-4">
        <h2 className="text-h1 uppercase tracking-wide">2. CV</h2>
        <a
          href="/src/assets/Mathys-Loiselle-Resume-EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-black rounded-full text-base font-medium hover:bg-black/5 transition select-none flex items-center gap-2"
        >
          Open PDF <FiExternalLink className="inline-block align-text-bottom" />
        </a>
      </div>

      {/* 2.1 EDUCATION */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/4 space-y-4">
          <h3 className="text-h2 uppercase tracking-wide">2.1 Education</h3>
          <h4 className="text-h3">BCompSci Computer Science, Honours</h4>
          <p className="text-p italic">Concordia University - Montreal, QC</p>
          <p className="text-h4">2022 - 2026</p>
          <span className="inline-block w-8 border-b-2 border-black"></span>
          <ul className="mt-4 space-y-2 text-p">
            <li className="flex items-start">
              <span className="mr-2 text-p">&#10022;</span>
              Dean's List: Fall 2023 - Winter 2025
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-p">&#10022;</span>
              Minor in Mathematics &amp; Statistics
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-p">&#10022;</span>
              Data Structures &amp; Algorithms (A+), Theoretical CS (A+),
              Computer Graphics (A)
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-p">&#10022;</span>
              Multivariable Calculus I &amp; II (A+), Linear Algebra (A),
              Probability &amp; Statistics (A)
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <a
            href="https://www.concordia.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={concordiaLogo}
              alt="Concordia University logo"
              className="w-[30em]"
              draggable={false}
            />
          </a>
        </div>
      </div>

      {/* 2.2 EXPERIENCE */}
      <div className="space-y-20">
        {/* Entry 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            {/* Only show the “2.2” on the first entry */}
            <h3 className="text-h2 uppercase tracking-wide">2.2 Experience</h3>
            <h4 className="text-h3">Undergraduate Student Researcher</h4>
            <p className="italic text-p">
              Mila (Quebec AI Institute) - Montreal, QC
            </p>
            <p className="text-h4">Mar 2025 - Present (4 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Supervised by Dr. Guillaume Lajoie and Dr. Matthew Perich
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Conducting research focused on improving neural decoding in BCIs
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Developing multimodal transformer architectures to enhance BCI
                performance
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://mila.quebec/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={milaLogo}
                  alt="Mila logo"
                  className="w-[25em]"
                  draggable={false}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">
              Lead Machine Learning Engineer - Space Health
            </h4>
            <p className="italic text-p">Space Concordia - Montreal, QC</p>
            <p className="text-h4">Feb 2025 - Present (5 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Lead team of ~10 ML engineers developing models for
                space-induced neurological changes
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Conduct research at the intersection of deep learning and
                neuroscience
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Drive development of research publication on ML in space
                neuroscience
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Create weekly tasks and lead sync-up meetings for progress
                review
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://spaceconcordia.ca/space-health"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={spaceLogo}
                  alt="Space Concordia Space Health logo"
                  className="w-[17em]"
                  draggable={false}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">AI Software Developer - Internship</h4>
            <p className="italic text-p">
              TaylorMade Golf - Carlsbad, California
            </p>
            <p className="text-h4">September - December 2024 (4 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Implemented complete voice features for TaylorMade chatbot
                including STT, TTS, hands-free conversation mode, and real-time
                waveform visualization (Angular/C#/Azure)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Developed automatic color adjustment algorithm (Python/React)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Researched and implemented order processing anomaly detection
                using Mahalanobis distance, achieving reliable outlier
                identification through multivariate statistical analysis
                (Python)
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://www.taylormadegolf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={taylorMadeLogo}
                  alt="TaylorMade logo"
                  className="w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">Computer Vision Engineer</h4>
            <p className="italic text-p">Nano Stride - Montreal, QC</p>
            <p className="text-h4">October 2023 - January 2024 (4 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Implemented real-time robotics head motion control algorithms
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Built computer vision pipeline using OpenCV/Dlib
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Collaborated with cross-functional engineering team
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/company/nanostride/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={nanoStrideLogo}
                  alt="Nano Stride logo"
                  className="w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">Dataset Annotator</h4>
            <p className="italic text-p">
              Concordia Applied AI Institute - Montreal, QC
            </p>
            <p className="text-h4">November 2023 (1 month)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Dataset annotation for ML model training/testing
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Collaborative team input for data optimization
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://www.concordia.ca/research/applied-ai-institute.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={appliedAiConcordiaLogo}
                  alt="Applied AI Concordia logo"
                  className="w-[16em] rounded-[25%]"
                  draggable={false}
                />
              </div>
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
              title: "Programming",
              items: ["Python", "JavaScript", "Java", "C/C++/C#", "TypeScript"],
            },
            {
              title: "AI/ML",
              items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Dlib"],
            },
            {
              title: "Web & Cloud",
              items: ["React", "Angular", "Azure", "Firebase", "HTML/CSS"],
            },
            {
              title: "Other Tools",
              items: [
                "VSCode",
                "Git",
                "JetBrains Products",
                "Jupyter Notebook",
              ],
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
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          {[
            {
              title: "Artificial Intelligence & Machine Learning",
              desc: "Designing systems that learn from data, adapt to new information, and make reliable decisions.",
            },
            {
              title: "Neuro-AI",
              desc: "Studying how neuroscience and AI can inform one another to uncover principles of intelligence.",
            },
            {
              title: "Neural Decoding",
              desc: "Modeling and interpreting brain activity to predict meaningful information and enable actions.",
            },
            {
              title: "Mathematics",
              desc: "Exploring the beauty of pure mathematics while applying its rigor to problems in AI and machine learning.",
            },
            {
              title: "Reinforcement Learning",
              desc: "Developing agents that learn by interaction, balancing exploration and exploitation like biological systems.",
            },
            {
              title: "Natural Language Processing",
              desc: "Building models that capture, generate, and reason with human language.",
            },
          ].map((interest) => (
            <li
              key={interest.title}
              className="flex flex-col items-start min-h-[5.5rem]"
            >
              <div className="flex items-center mb-1">
                <span className="mr-1 text-p">&#10022;</span>
                <span className="font-medium text-p">{interest.title}</span>
              </div>
              <span className="ml-6 text-base md:text-lg opacity-80 leading-snug">
                {interest.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CVSection;

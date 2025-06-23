import concordiaLogo from "../../assets/concordia_university_logo.png";
import milaLogo from "../../assets/experience/mila_logo.png";
import spaceLogo from "../../assets/experience/space_health_logo.png";
import taylorMadeLogo from "../../assets/experience/taylormade_logo.png";
import nanoStrideLogo from "../../assets/experience/nano_stride_logo.jpeg";
import appliedAiConcordiaLogo from "../../assets/experience/concordia_applied_ai_institute_logo.jpeg";
const mapSrc = "../../assets/map.png";

const CVSection = () => (
  <section id="cv" className="py-20">
    <div className="container mx-auto space-y-20">
      {/* SECTION HEADING */}
      <h2 className="text-h1 uppercase tracking-wide">2 CV</h2>

      {/* 2.1 EDUCATION */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/4 space-y-4">
          <h3 className="text-h2 uppercase tracking-wide">2.1 Education</h3>
          <h4 className="text-h3">BCompSci Computer Science, Honours</h4>
          <p className="text-p italic">Concordia University – Montreal, QC</p>
          <p className="text-h4">2022 – 2026</p>
          <span className="inline-block w-8 border-b-2 border-black"></span>
          <ul className="mt-4 space-y-2 text-p">
            <li className="flex items-start">
              <span className="mr-2 text-p">&#10022;</span>
              Dean’s List: Fall 2023 – Winter 2025
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
          <div>
            <img
              src={concordiaLogo}
              alt="Concordia University logo"
              className="w-[25em]]"
            />
          </div>
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
              Mila (Quebec AI Institute) – Montreal, QC
            </p>
            <p className="text-h4">Mar 2025 – Present (4 months)</p>
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
            <div>
              <img src={milaLogo} alt="Mila logo" className="w-[25em]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">
              Lead Machine Learning Engineer – Space Health
            </h4>
            <p className="italic text-p">Space Concordia – Montreal, QC</p>
            <p className="text-h4">Feb 2025 – Present (5 months)</p>
            <span className="inline-block w-8 border-b-2 border-black"></span>
            <ul className="mt-4 space-y-2 text-p">
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Lead team of approx. 10 ML engineers developing models for
                space-induced neurological changes
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Conduct novel research at the intersection of deep learning and
                neuroscience
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-p">&#10022;</span>
                Drive development of scientific publication on ML in space
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
            <div>
              <img
                src={spaceLogo}
                alt="Space Concordia Space Health logo"
                className="w-[17em]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">AI Software Developer – Internship</h4>
            <p className="italic text-p">
              TaylorMade Golf – Carlsbad, California
            </p>
            <p className="text-h4">September – December 2024 (4 months)</p>
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
            <div>
              <img
                src={taylorMadeLogo}
                alt="TaylorMade logo"
                className="w-[16em] rounded-[25%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">Computer Vision Engineer</h4>
            <p className="italic text-p">Nano Stride – Montreal, QC</p>
            <p className="text-h4">October 2023 – January 2024 (4 months)</p>
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
            <div>
              <img
                src={nanoStrideLogo}
                alt="Nano Stride logo"
                className="w-[16em] rounded-[25%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/4 space-y-4">
            <h4 className="text-h3">Dataset Annotator</h4>
            <p className="italic text-p">
              Concordia Applied AI Institute – Montreal, QC
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
            <div>
              <img
                src={appliedAiConcordiaLogo}
                alt="Applied AI Concordia logo"
                className="w-[16em] rounded-[25%]"
              />
            </div>
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
              items: [
                "Python",
                "JavaScript",
                "Java",
                "C/C++/C#",
                "TypeScript",
                "Clojure",
                "Erlang",
              ],
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
              <ul className="mt-2 space-y-1">
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

      {/* 2.4 INTERESTS */}
      <div>
        <h3 className="text-h2 uppercase tracking-wide">2.4 Interests</h3>
        <div className="mt-6 space-y-8">
          {/* Sports */}
          <div>
            <h4 className="text-h3">Sports &amp; Athletics</h4>
            <ul className="mt-2 flex flex-wrap gap-4 text-p">
              {[
                "Ice Hockey",
                "Snowboarding",
                "Table Tennis",
                "Tennis",
                "Rock Climbing/Bouldering",
                "Biking",
                "Soccer",
                "Golf",
              ].map((sport) => (
                <li key={sport} className="flex items-center">
                  <span className="mr-1 text-p">&#10022;</span>
                  {sport}
                </li>
              ))}
            </ul>
          </div>
          {/* Traveling */}
          <div>
            <h4 className="text-h3">Traveling</h4>
            <div className="mt-4">
              <img
                src={mapSrc}
                alt="World map of places visited"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CVSection;

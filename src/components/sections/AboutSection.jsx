import profilePic from "../../assets/LinkedIn-Profile-Pic.png";

const AboutSection = () => (
  <section id="about">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="md:w-[100%] space-y-8">
        <h2 className="text-h1 uppercase tracking-wide">1. About</h2>
        <p className="text-p leading-relaxed text-gray-800">
          I am Mathys Loiselle, a Computer Science Honours student at Concordia
          University in Montreal with a minor in Mathematics &amp; Statistics.
          My focus lies in Machine Learning and Deep Learning, particularly in
          understanding the fundamental theory behind how models learn. I am
          deeply interested in Neuroscience and exploring how advanced brain
          structures can inspire breakthroughs in machine intelligence. With
          plans to pursue graduate studies in this field, I am committed to
          contributing significant research that advances both the academic
          community and human knowledge.
        </p>

        <div>
          <h3 className="text-h2 uppercase tracking-wide mb-4">
            1.1 Research Interests
          </h3>
          <div className="flex w-full border-2 border-black rounded-full px-6 py-2 text-p text-center justify-evenly">
            <span>AI for Science</span>
            <span>•</span>
            <span>Computational Neuroscience</span>
            <span>•</span>
            <span>Deep Learning</span>
            <span>•</span>
            <span>Representation Learning</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Mathys Loiselle"
          className="w-[30rem] h-[30rem] object-cover rounded-[2vw]"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;

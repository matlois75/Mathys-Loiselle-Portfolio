import profilePic from "../../assets/LinkedIn-Profile-Pic.png";

const AboutSection = () => (
  <section id="about">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="md:w-[100%] space-y-8">
        <h2 className="text-h1 uppercase tracking-wide">1. About</h2>
        <p className="text-p leading-relaxed text-gray-800">
          I am Mathys Loiselle, a Computer Science Honours student at Concordia
          University with a minor in Mathematics & Statistics. My research lies
          at the intersection of machine learning and neuroscience. I am
          currently an undergraduate researcher at Mila, working on multimodal
          neural decoding, and I lead the machine learning team for Space
          Concordia's Space Health division. I plan to pursue graduate studies
          to bridge insights from machine learning, computational neuroscience,
          and mathematics.
        </p>

        <div>
          <h3 className="text-h2 uppercase tracking-wide mb-4">
            1.1 Current Affiliations
          </h3>
          <div className="flex items-center w-full border-2 border-black rounded-full px-6 py-2 text-p text-center justify-evenly">
            <span>Concordia University</span>
            <span className="flex items-center text-p text-lg mx-2">
              &#10022;
            </span>
            <span>Mila - Quebec AI Institute</span>
            <span className="flex items-center text-p text-lg mx-2">
              &#10022;
            </span>
            <span>Space Concordia</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Mathys Loiselle"
          className="w-[30rem] h-[30rem] object-cover rounded-[2vw]"
          draggable={false}
        />
      </div>
    </div>
  </section>
);

export default AboutSection;

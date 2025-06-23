import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      {/* Section heading */}
      <h2 className="text-h1 uppercase tracking-wide mb-8">4 Contact</h2>

      {/* Links row */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-4 md:space-y-0">
        {/* Email */}
        <a
          href="mailto:mathys.loiselle@gmail.com"
          className="flex items-center space-x-2 text-p text-gray-800 hover:underline"
        >
          <FiMail className="w-6 h-6" />
          <span>mathys.loiselle@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/mathysloiselle/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-p text-gray-800 hover:underline"
        >
          <FiLinkedin className="w-6 h-6" />
          <span>linkedin.com/in/mathysloiselle/</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/matlois75"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-p text-gray-800 hover:underline"
        >
          <FiGithub className="w-6 h-6" />
          <span>github.com/matlois75</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            className="text-gray-600 hover:text-blue-600"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mathys.loiselle@gmail.com"
            className="text-gray-600 hover:text-blue-600"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

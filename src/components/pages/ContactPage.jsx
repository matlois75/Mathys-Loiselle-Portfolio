import { Mail, Linkedin, Github } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mathys.loiselle@gmail.com",
      link: "mailto:mathys.loiselle@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/mathysloiselle",
      link: "https://linkedin.com/in/mathysloiselle",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/mathysloiselle",
      link: "https://github.com/mathysloiselle",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <p className="text-gray-600">
            Feel free to reach out to me through any of these platforms.
            I&apos;m always interested in discussing new opportunities,
            collaborations, or just having a chat about technology and research.
          </p>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-colors"
              >
                <method.icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h2 className="font-semibold">{method.title}</h2>
                  <p className="text-gray-600">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Research Interests</h2>
          <p className="text-gray-600 mb-4">
            I&apos;m particularly interested in discussing:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Machine Learning & Deep Learning research</li>
            <li>• Quantum Computing applications</li>
            <li>• Robotics and Computer Vision projects</li>
            <li>• Academic collaboration opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

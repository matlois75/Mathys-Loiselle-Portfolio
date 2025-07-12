import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "ConUHacks IX – Concordia Virtual Tour++",
    duration: "February 2025 (1 month)",
    imgSrc: "/images/projects/concordia-virtual-tour-cover.png",
    alt: "Concordia Virtual Tour++",
    description:
      "At ConUHacks IX, Quebec's largest hackathon, our team developed an innovative solution to revolutionize Concordia University's virtual campus tour experience. The project placed in the top 5 among 180+ submissions, demonstrating both technical excellence and practical utility. We leveraged 3D Gaussian Splatting, a cutting-edge machine learning technique in computer graphics, to transform traditional static images into a fully immersive 3D environment that visitors can freely explore.",
  },
  {
    title: "Reinforcement Learning Rocket League Agent",
    duration: "November - December 2024 (2 months)",
    imgSrc: "/images/projects/rocket-league-cover-1.jpg",
    alt: "Rocket League Agent Demo",
    description:
      "A deep reinforcement learning project that trains an agent to play Rocket League, a physics-based vehicular soccer game. The system implements a PPO (Proximal Policy Optimization) architecture to teach the AI agent complex 3D movement, ball control, positioning, and basic-to-intermediate strategy, effectively translating high-dimensional games states into meaningful actions.",
  },
  {
    title: "Smart Marshmallow RC Tank",
    duration: "June - August 2024 (3 months)",
    imgSrc: "/images/projects/turret-rc-car-1.jpg",
    alt: "Smart Marshmallow RC Tank",
    description:
      "As part of a cross-functional team of engineering students, I contributed to an innovative RC car project built from scratch. The vehicle featured an automated marshmallow launcher controlled by an AI-powered targeting system.",
  },
  {
    title: "Cody AI Service Robot",
    duration: "October 2023 - January 2024 (4 months)",
    imgSrc: "/images/projects/cody-robot-cover.png",
    alt: "Cody AI Service Robot",
    description:
      "As a member of Nano Stride, Concordia's AI and Robotics Club, I worked on developing Cody, our service robot. Though the club doesn't exist anymore, we nearly finished Cody. Our goal was to create an interactive guide for Concordia's main Hall building to help students and visitors find their way around.",
  },
];

const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [displayedTexts, setDisplayedTexts] = useState({});
  const [isAnimating, setIsAnimating] = useState({});
  const intervalRefs = useRef({});
  const animationTargets = useRef({});

  const handleToggle = (index) => {
    const project = projects[index];
    const teaser = project.description.split(" ").slice(0, 5).join(" ") + "...";
    const fullText = project.description;
    const currentText = displayedTexts[index] || teaser;
    const isCurrentlyExpanded = expandedIndex === index;

    // If currently animating, skip to the end
    if (isAnimating[index]) {
      clearInterval(intervalRefs.current[index]);
      const targetText = animationTargets.current[index];

      setDisplayedTexts((prev) => ({
        ...prev,
        [index]: targetText,
      }));

      if (targetText === teaser) {
        setExpandedIndex(null);
      }

      setIsAnimating((prev) => ({ ...prev, [index]: false }));
      return;
    }

    setIsAnimating((prev) => ({ ...prev, [index]: true }));

    if (!isCurrentlyExpanded) {
      // Expanding: animate from teaser to full text
      setExpandedIndex(index);
      animateText(index, teaser, fullText, true);
    } else {
      // Collapsing: animate from full text to teaser
      animateText(index, currentText, teaser, false);
    }
  };

  const animateText = (index, startText, endText, isExpanding) => {
    // Clear any existing interval
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }

    // Store the target text for skip functionality
    animationTargets.current[index] = endText;

    let currentLength = startText.length;
    const targetLength = endText.length;
    const speed = 1; // milliseconds per character

    intervalRefs.current[index] = setInterval(() => {
      if (isExpanding) {
        if (currentLength < targetLength) {
          currentLength++;
          setDisplayedTexts((prev) => ({
            ...prev,
            [index]: endText.slice(0, currentLength),
          }));
        } else {
          clearInterval(intervalRefs.current[index]);
          setIsAnimating((prev) => ({ ...prev, [index]: false }));
        }
      } else {
        if (currentLength > targetLength) {
          currentLength--;
          setDisplayedTexts((prev) => ({
            ...prev,
            [index]: startText.slice(0, currentLength),
          }));
        } else {
          clearInterval(intervalRefs.current[index]);
          setDisplayedTexts((prev) => ({
            ...prev,
            [index]: endText,
          }));
          setExpandedIndex(null);
          setIsAnimating((prev) => ({ ...prev, [index]: false }));
        }
      }
    }, speed);
  };

  // Initialize displayed texts with teasers
  useEffect(() => {
    const initialTexts = {};
    projects.forEach((project, index) => {
      initialTexts[index] =
        project.description.split(" ").slice(0, 5).join(" ") + "...";
    });
    setDisplayedTexts(initialTexts);
  }, []);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 space-y-12">
        {/* Section heading */}
        <h2 className="text-h1 uppercase tracking-wide">3. Projects</h2>

        {/* Projects list */}
        <div className="space-y-24">
          {projects.map(({ title, duration, imgSrc, alt }, index) => {
            const isExpanded = expandedIndex === index;
            const isReversed = index % 2 !== 0;
            const currentText = displayedTexts[index] || "";

            return (
              <div
                key={title}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={alt}
                      className="w-full h-96 object-cover select-none"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div
                    className={`space-y-2 text-center ${
                      isReversed ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <p className="text-p">{title}</p>
                    <p className="text-h4">{duration}</p>
                    <div className="mt-4">
                      <p
                        className="text-p text-justify cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleToggle(index)}
                      >
                        {currentText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

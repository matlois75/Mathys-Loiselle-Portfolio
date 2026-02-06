import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "volunteering", label: "Volunteering" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionProgress, setSectionProgress] = useState({});

  const updateProgress = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const progress = {};

    for (let i = 0; i < navItems.length; i++) {
      const { id } = navItems[i];
      const el = document.getElementById(id);
      if (!el) {
        progress[id] = 0;
        continue;
      }

      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = el.offsetHeight;

      // How far the user has scrolled through this section
      // Section starts being "entered" when its top reaches the viewport top
      // Section is "complete" when its bottom leaves the viewport top
      const scrolledPast = scrollY - sectionTop + viewportHeight * 0.5;
      const ratio = Math.min(1, Math.max(0, scrolledPast / sectionHeight));

      progress[id] = ratio;
    }

    setSectionProgress(progress);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight * 0.05;
      window.scrollTo({
        top: Math.max(0, targetTop - offset),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-3 right-3 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 border-2 border-black rounded-lg shadow-lg transition-colors"
          style={{ backgroundColor: "#f1ebe2" }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {isOpen && (
          <div
            className="absolute top-14 right-0 border-2 border-black rounded-lg shadow-xl p-4 space-y-3 min-w-[140px]"
            style={{ backgroundColor: "#f1ebe2" }}
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="block text-gray-900 hover:text-gray-600 text-center py-2 px-3 rounded border-l-2 border-transparent hover:border-l-black transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Fixed Nav */}
      <nav className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 z-50">
        {navItems.map(({ id, label }) => {
          const progress = sectionProgress[id] || 0;
          const isActive = progress > 0 && progress < 1;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`relative pl-3 hover:text-gray-600 text-[1em] transition-colors ${
                isActive ? "text-gray-900" : "text-gray-400"
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {/* Background track */}
              <span className="absolute left-0 top-0 w-[2px] h-full bg-gray-300" />
              {/* Progress fill */}
              <span
                className="absolute left-0 top-0 w-[2px] bg-black transition-[height] duration-100 ease-out"
                style={{ height: `${progress * 100}%` }}
              />
              {label}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;

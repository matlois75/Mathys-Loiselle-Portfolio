import { useState, useEffect, useCallback, useRef } from "react";
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
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  // ME-4: Throttle scroll listener with requestAnimationFrame
  useEffect(() => {
    updateProgress();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateProgress]);

  // ME-1: Close mobile menu on Escape key and outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="p-3 border-2 border-black rounded-lg shadow-lg transition-colors"
          style={{ backgroundColor: "#f1ebe2" }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 right-0 border-2 border-black rounded-lg shadow-xl p-4 space-y-3 min-w-[140px]"
            style={{ backgroundColor: "#f1ebe2" }}
          >
            {navItems.map(({ id, label }) => {
              const progress = sectionProgress[id] || 0;
              const isActive = progress > 0 && progress < 1;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block text-center py-2 px-3 rounded transition-all ${
                    isActive
                      ? "text-gray-900 font-semibold border-l-2 border-black"
                      : "text-gray-500 border-l-2 border-transparent hover:border-l-black hover:text-gray-600"
                  }`}
                >
                  {label}
                </a>
              );
            })}
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

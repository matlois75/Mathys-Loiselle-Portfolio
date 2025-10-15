import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "misc", label: "Misc" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu on click
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
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
      <nav className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-8 z-50">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className="border-l-2 border-black pl-3 text-gray-900 hover:text-gray-600 text-[1.2em]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navigation;

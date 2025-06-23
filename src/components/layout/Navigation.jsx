const navItems = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
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
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 z-50">
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
  );
};

export default Navigation;

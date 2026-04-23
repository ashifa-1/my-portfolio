import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "skills", "projects", "CodingProfiles", "contact"];

  const labels = {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    CodingProfiles: "Coding Profiles",
    contact: "Contact",
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);

        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            current = sec;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative transition ${
                active === sec
                  ? "text-yellow-400"
                  : "hover:text-white"
              }`}
            >
              {labels[sec]}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300 ${
                  active === sec ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                active === sec ? "text-yellow-400" : "text-gray-300"
              } hover:text-white`}
            >
              {labels[sec]}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;
import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "projects", "CodingProfiles", "contact"];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`transition ${
                active === sec
                  ? "text-yellow-400"
                  : "hover:text-white"
              }`}
            >
              {sec === "home"
                ? "Home"
                : sec === "CodingProfiles"
                ? "Coding Profiles"
                : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
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
              className="block text-gray-300 hover:text-white"
            >
              {sec === "home"
                ? "Home"
                : sec === "CodingProfiles"
                ? "Coding Profiles"
                : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;
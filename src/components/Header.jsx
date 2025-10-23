import { useState } from "react";

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    if (onNavigate) onNavigate(section);
    setMenuOpen(false); // Close mobile menu
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div
          onClick={() => handleNavigate("home")}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          S&N AI Automations
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "services", "sectors", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigate(section)}
              className="text-gray-200 hover:text-white font-medium transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigate("contact")}
            className="bg-blue-600/80 hover:bg-blue-500/90 text-white px-4 py-2 rounded-md transition border border-white/20 backdrop-blur-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["home", "services", "sectors", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                className="block w-full text-left text-gray-200 hover:text-white px-3 py-2 rounded-md font-medium transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

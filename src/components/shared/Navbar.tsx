import { useState } from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="bg-white shadow-sm px-4 sticky top-0 z-50">
      <div className="container mx-auto h-20 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
            DS
          </span>
          <span className="font-extrabold text-lg text-[#0F172A]">
            Dev <span className="text-pink-500">Stack</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
          {links.map((link) => (
            <li
              key={link}
              className={`cursor-pointer transition ${
                link === "Home" ? "text-pink-500" : "hover:text-pink-500"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-medium text-[#374151] hover:text-pink-500 transition cursor-pointer">
            Sign In
          </button>
          <button className="bg-signup text-white text-sm py-2 px-5 rounded-full font-medium cursor-pointer">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-[#0F172A]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-2 pb-4">
          <ul className="flex flex-col gap-1 pt-3 text-sm font-medium text-[#374151]">
            {links.map((link) => (
              <li
                key={link}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-2.5 rounded-md cursor-pointer transition ${
                  link === "Home"
                    ? "text-pink-500 bg-pink-50"
                    : "hover:text-pink-500 hover:bg-gray-50"
                }`}
              >
                {link}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
            <button className="text-sm font-medium text-[#374151] hover:text-pink-500 transition cursor-pointer text-left px-2">
              Sign In
            </button>
            <button className="bg-signup text-white text-sm py-2.5 px-5 rounded-full font-medium cursor-pointer w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
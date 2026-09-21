import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white shadow-sm px-4 sticky top-0 z-50">
      <div className="container mx-auto h-full flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
            DS
          </span>
          <span className="font-extrabold text-lg text-[#0F172A]">
            Dev <span className="text-pink-500">Stack</span>
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
          <li className="text-pink-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-pink-500 transition">Technologies</li>
          <li className="cursor-pointer hover:text-pink-500 transition">Projects</li>
          <li className="cursor-pointer hover:text-pink-500 transition">About</li>
          <li className="cursor-pointer hover:text-pink-500 transition">Contact</li>
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-[#374151] hover:text-pink-500 transition cursor-pointer">
            Sign In
          </button>
          <button className="bg-signup text-white text-sm py-2 px-5 rounded-full font-medium cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
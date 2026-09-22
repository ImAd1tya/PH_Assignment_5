const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
              DS
            </span>
            <span className="font-extrabold text-lg text-[#0F172A]">
              Dev <span className="text-pink-500">Stack</span>
            </span>
          </div>
          <p className="text-sm text-[#6B7586] max-w-xs">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm text-[#0F172A] font-medium">
            <a href="#" className="hover:text-pink-500 transition cursor-pointer">
              GitHub
            </a>
            <a href="#" className="hover:text-pink-500 transition cursor-pointer">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-500 transition cursor-pointer">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-wide text-[#0F172A] mb-4">
            PRODUCT
          </h4>
          <ul className="space-y-2 text-sm text-[#6B7586]">
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-wide text-[#0F172A] mb-4">
            COMPANY
          </h4>
          <ul className="space-y-2 text-sm text-[#6B7586]">
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Careers
              </a>
            </li>
          </ul>
        </div>



        <div>
          <h4 className="text-xs font-bold tracking-wide text-[#0F172A] mb-4">
            LEGAL
          </h4>
          <ul className="space-y-2 text-sm text-[#6B7586]">
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition cursor-pointer">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6B7586]">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500 transition cursor-pointer">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500 transition cursor-pointer">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

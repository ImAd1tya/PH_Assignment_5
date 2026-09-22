import heroImg from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#0F172A] font-bold">Build Your Ideal</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-[#6B7586] text-lg leading-relaxed max-w-md">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold text-[#0F172A] border border-gray-300 hover:bg-gray-50 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
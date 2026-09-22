import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/TechnologiesSection/technologies";
import type { Technology } from "./components/types/Technologies";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <main>
        <section className="container mx-auto my-10">
          <Suspense
            fallback={
              <div className="text-center py-20 text-[#6B7586]">
                Loading technologies...
              </div>
            }
          >
            <Technologies technologiesPromise={technologiesPromise} />
          </Suspense>
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar closeOnClick />
    </div>
  );
};

export default App;
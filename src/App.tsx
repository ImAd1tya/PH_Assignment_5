import toast from "react-hot-toast";
import { FaBeer } from 'react-icons/fa';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (<div>
    <Navbar />
    <HeroSection />
    <Footer />
  </div>)
}
export default App;
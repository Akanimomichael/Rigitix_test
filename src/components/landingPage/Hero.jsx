import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero px-[120px]">
      <Navbar />
      <div className="py-[15px]">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;

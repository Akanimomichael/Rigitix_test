import Hero from "@/components/landingPage/Hero";
import EventCarousel from "@/components/landingPage/EventCarousel";
import Feature from "@/components/landingPage/Feature";
import Testimonial from "@/components/landingPage/Testimonial";
import FaqSection from "@/components/landingPage/FaqSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventCarousel />
      <Feature />
      <Testimonial />
      <FaqSection />
    </div>
  );
};

export default Home;

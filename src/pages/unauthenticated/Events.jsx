import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Hero from "@/components/AllEventPage/Hero";
import FeaturedEvent from "@/components/AllEventPage/FeaturedEvent";
import Trending from "@/components/AllEventPage/Trending";
import NearMe from "@/components/AllEventPage/NearMe";
import ExploreMore from "@/components/AllEventPage/ExploreMore";
const Events = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="px-[120px]">
        <Navbar />
      </div>
      <Hero />
      <FeaturedEvent />
      <Trending />
      <NearMe />
      <ExploreMore />
    </div>
  );
};

export default Events;

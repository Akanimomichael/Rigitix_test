import eventHero from "@/assets/icons/eventHero.png";

const Hero = () => {
  return (
    <div className="px-[120px] flex flex-col py-[52px] gap-[52px]">
      <img src={eventHero} alt="event banner" className="rounded-[30px]" />
      {/* <ul>
        <li></li>
      </ul> */}
    </div>
  );
};

export default Hero;

import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";
import { useEventContext } from "@/context/EventContext";
import FilterModal from "@/components/Modals/FilterModal";
import { useNavigate } from "react-router-dom";
const HeroContent = () => {
  const { onOpen, onClose, isFilterModalOpen } = useEventContext();
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-[50px] max-w-[90%] text-white font-bold mx-auto">
          Blockchain-powered all-in-one event ticketing and management solution
        </h1>
        <p className="max-w-[75%] text-white text-[20px] font-medium mx-auto">
          Discover, buy, and manage tickets with complete ownership and
          security. Enjoy interactive, personalized recommendations, and
          seamless crypto payments — all in one place.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            label="Create events"
            className="text-[16px] font-semibold cursor-pointer rounded-[12px] text-black bg-white border-none"
          />
          <Button
            label="Explore events"
            className="text-[16px] font-semibold cursor-pointer rounded-[12px] text-white bg-[#F87B07] border-none"
            onClick={() => navigate("/events")}
          />
        </div>
      </div>
      <div className="max-w-[90%] bg-[#22000066] p-8 rounded-[10px] flex items-center gap-2 mt-8 mx-auto">
        <div className="flex gap-2 items-center bg-white py-2 px-6 rounded-[8px] border border-[#E4E4E5] w-full h-[55px]">
          <img src={icons.searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search event"
            className="w-full h-full outline-none border-none placeholder:text-[#595D62] placeholder:text-[14px]"
          />
        </div>
        <div
          onClick={onOpen}
          className="h-[55px] w-[55px] rounded-[8px] cursor-pointer border border-[#E4E4E5] bg-white flex items-center justify-center"
        >
          <img src={icons.filterIcon} alt="filter" />
        </div>
      </div>

      {/* <div className="relative"> */}
      {isFilterModalOpen && (
        <FilterModal isOpen={isFilterModalOpen} onClose={onClose} />
      )}
      {/* </div> */}
    </div>
  );
};

export default HeroContent;

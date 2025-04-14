import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";
import { useState } from "react";

const StepThree = ({ handleNext, location, setLocation }) => {
  // const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-[26px] text-[#1B1818] font-bold">
          Set your location
        </h2>
        <p className="text-[12px] text-[#645D5D] font-normal">
          Set your location to explore unique experiences and connect with top
          organizers in your area.
        </p>
      </div>
      <div>
        <label className="flex flex-col gap-2">
          <p className="text-[16px] text-[#101928] font-medium">Search City</p>
          <div className="flex items-center w-full gap-3 border border-[#D0D5DD] p-3 rounded-[8px] justify-between">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Lagos"
              className="w-full h-full outline-none placeholder:text-[14px] placeholder-[#98A2B3]"
            />
            <img src={icons.locationIcon} alt="location icon" />
          </div>
        </label>
      </div>
      <Button
        label="Proceed"
        onClick={handleNext}
        disabled={!location}
        className="mt-4 px-5 w-full py-3 bg-[#F87B07] text-white font-medium rounded-[8px]"
      />
    </div>
  );
};

export default StepThree;

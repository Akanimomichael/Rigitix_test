import React from "react";
import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";

const StepOne = ({ location, setLocation, handleNext }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-center items-center mb-[16px]">
        <h2 className="text-[24px] text-[#1B1818] font-bold">
          Set your location
        </h2>
        <p className="text-[14px] text-[#645D5D] font-medium">
          Set your preferred location and explore your experience
        </p>
      </div>
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

      {/* Continue Button */}
      <Button
        label="Continue"
        onClick={handleNext}
        disabled={!location.trim()}
        className="w-full bg-orange-500 text-white py-3 mt-4 disabled:opacity-50"
      />
    </div>
  );
};

export default StepOne;

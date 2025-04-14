import { icons } from "@/assets/asset";
import React, { useState } from "react";
import Button from "@/components/buttons/Button";

const StepTwo = ({
  handleNext,
  selectedType,
  setSelectedType,
  eventSize,
  setEventSize,
  dropdownOpen,
  setDropdownOpen,
  eventCount,
  setEventCount,
}) => {
  

  const handleSelect = (selectedType) => {
    setSelectedType(selectedType);
  };

  const handleDropdownSelect = (size) => {
    setEventSize(size); // Update selected size
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <label>
          <p className="text-[14px] text-[#101928] font-medium">
            How many events do you plan to organize in the next year?*
          </p>
          <input
            type="text"
            placeholder="Members of the events"
            className="border border-[#D0D5DD] w-full p-4 rounded-[8px] placeholder:text-[#645D5D] placeholder:text-[14px] outline-[#F87B07] mt-1 mb-2"
            value={eventCount}
            onChange={(e) => setEventCount(e.target.value)}
          />
          <div className="flex items-center">
            <input type="checkbox" id="myEvent" />
            <label
              htmlFor="myEvent"
              className="text-[14px] text-[#645D5D] font-normal ml-2"
            >
              My event is a re-occuring event.
            </label>
          </div>
        </label>

        <label>
          <p className="text-[14px] text-[#101928] font-medium">
            On average, how big are your events?*
          </p>
          <div className="relative w-full">
            <div
              className="border border-[#D0D5DD] p-4 w-full text-[#645D5D] text-[14px] flex justify-between items-center rounded-[8px] mt-1 mb-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <p>{eventSize}</p>
              <img
                src={icons.leftArrow}
                className={`rotate-${dropdownOpen ? "[90deg]" : "[-90deg]"}`}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute w-full border border-[#D0D5DD] bg-white rounded-[8px] shadow-md mt-1 z-10">
                {["10 - 50", "50 - 100", "100 - 200"].map((size) => (
                  <p
                    key={size}
                    className="p-3 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleDropdownSelect(size + " persons")}
                  >
                    {size} persons
                  </p>
                ))}
              </div>
            )}
          </div>
        </label>
      </div>

      <div className="mt-6">
        <p className="mb-4 text-[14px] text-black font-normal">
          What matters most to you?
        </p>
        <div className="flex flex-col gap-4">
          {[
            "Something budget-friendly and easy to use",
            "To reach more people and keep them coming back",
            "Customer support and tools for professional event organizers",
          ].map((option) => (
            <div
              key={option}
              className={`border flex justify-between items-center w-full p-4 rounded-[18px] cursor-pointer ${
                selectedType === option.toLowerCase()
                  ? "border-[#F87B07]"
                  : "border-[#D0D5DD]"
              }`}
              onClick={() => handleSelect(option.toLowerCase())}
            >
              <div className="flex items-center gap-4 text-[14px] text-[#475467]">
                <img src={icons.FeaturedIcon} alt={option} />
                <p>{option}</p>
              </div>
              {selectedType === option.toLowerCase() && (
                <div>
                  <img src={icons.Checkbox} alt="active" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Button
        label="Next"
        className={`mt-4 px-5 w-full py-3 font-medium rounded-[8px] ${
          !selectedType || !eventSize || !eventCount
            ? "cursor-not-allowed"
            : "bg-[#F87B07] text-white"
        }`}
        onClick={handleNext}
        disabled={!selectedType || !eventSize || !eventCount}
      />
    </div>
  );
};

export default StepTwo;

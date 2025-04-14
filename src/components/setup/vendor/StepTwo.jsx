import { useState } from "react";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";

const StepTwo = ({ handleNext, selectBusiness, setSelectBusiness }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownSelect = (selectedBusiness) => {
    console.log("Selected business:", selectedBusiness); // Debugging line
    setSelectBusiness(selectedBusiness); // Store selected business
    setDropdown(false); // Close dropdown
  };

  const businessList = [
    "Audio & Lighting",
    "Entertainment & Performance",
    "Sports",
  ];

  const handleNextStep = () => {
    console.log("Business selected:", selectBusiness); // Debugging line
    if (selectBusiness) {
      // Store selectBusiness state and move to the next step
      handleNext(selectBusiness);
    }
  };

  return (
    <div>
      <h2 className="text-[32px] font-bold text-black">Business Category</h2>

      <div className="relative w-full">
        {/* Clickable div to open dropdown */}
        <div
          className="border border-[#D0D5DD] p-4 w-full text-[#645D5D] text-[14px] flex justify-between items-center rounded-[8px] mt-1 mb-2 cursor-pointer"
          onClick={() => setDropdown(!dropdown)}
        >
          <p>{selectBusiness || "Select Business"}</p>
          <img
            src={icons.leftArrow}
            className={`transform transition-transform ${
              dropdown ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>

        {/* Dropdown List */}
        {dropdown && (
          <div className="absolute left-0 top-full w-full border border-[#D0D5DD] bg-white shadow-md rounded-[8px] mt-1 z-10">
            {businessList.map((item, index) => (
              <div
                key={index}
                className="p-3 text-[14px] text-black hover:bg-gray-200 cursor-pointer"
                onClick={() => handleDropdownSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* "Next" Button (Disabled if no business is selected) */}
      <Button
        label="Next"
        onClick={handleNextStep}
        disabled={!selectBusiness}
        className={`mt-4 px-5 w-full py-3 font-medium rounded-[8px] ${
          selectBusiness
            ? "bg-[#F87B07] text-white"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      />
    </div>
  );
};

export default StepTwo;

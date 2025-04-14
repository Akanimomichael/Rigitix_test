import React, { useState } from "react";

const interests = [
  "Music",
  "Business",
  "Masterclasses",
  "Tech & Web3",
  "Arts & Culture",
  "Conferences & Seminars",
  "Fashion & Lifestyle",
  "Film & Media",
  "Charity & Fundraising",
  "Travel & Outdoor",
  "Community & Networking",
  "Family & Kids",
];

const StepTwo = ({ handleNext, selectedInterests, setSelectedInterests }) => {
  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Let's get to know you more</h2>
      <p className="text-gray-600 mb-4">
        Give us insight on the type of events you would love to attend
      </p>

      <div className="flex flex-wrap gap-3 w-full">
        {interests.map((interest) => (
          <label
            key={interest}
            className={`cursor-pointer flex items-center gap-2 border px-4 py-2 text-[14px] rounded-[10px] transition-all ${
              selectedInterests.includes(interest)
                ? "bg-orange-200 border-orange-500 text-[#F87B07]"
                : "bg-[#F87B070D]"
            }`}
            onClick={() => toggleInterest(interest)}
          >
            <input
              type="checkbox"
              checked={selectedInterests.includes(interest)}
              onChange={() => toggleInterest(interest)}
              className="hidden"
            />
            <span>{interest}</span>
          </label>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="mt-4 px-5 w-full py-3 bg-[#F87B07] text-white font-medium rounded-[8px]"
      >
        Continue
      </button>
    </div>
  );
};

export default StepTwo;

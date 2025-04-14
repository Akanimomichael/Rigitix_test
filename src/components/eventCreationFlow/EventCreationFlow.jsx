import React, { useState } from "react";
import StepOne from "./EventCreationFlow/StepOne";
import StepTwo from "./EventCreationFlow/StepTwo";
import StepThree from "./EventCreationFlow/StepThree";
import StepFour from "./EventCreationFlow/StepFour";
import { icons } from "@/assets/asset";
import { useNavigate } from "react-router-dom";

const EventCreationFlow = () => {
  const [step, setStep] = useState(1);
  // const [location, setLocation] = useState("");
  // const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 5) {
      navigate("/dashboard/Organizer"); // Redirect to Attendee Dashboard
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center h-full min-h-screen justify-center overflow-y-scroll hideScrollBar">
      <div className="flex flex-col items-start">
        <div className="mt-[100px] mb-[19px] flex justify-start">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="mb-4 flex gap-2 items-center cursor-pointer px-4 py-2  rounded-[8px]"
          >
            <img src={icons.arrow_left} />
            <span className="font-medium text-[16px] text-[#F87B07]">Back</span>
          </button>
        </div>
        <div
          className={`"border-[#00000040] border rounded-[16px] p-12  mt-[64px]" w-[500px]`}
        >
          {step === 1 && (
            <StepOne
              handleNext={handleNext}
              // selectedInterests={selectedInterests}
              // setSelectedInterests={setSelectedInterests}
            />
          )}
          {step === 2 && <StepTwo handleNext={handleNext} />}
          {step === 3 && <StepThree handleNext={handleNext} />}
          {step === 4 && <StepFour handleNext={handleNext} />}
          
        </div>
      </div>
    </div>
  );
};

export default EventCreationFlow;

import React, { useState } from "react";
import EventFormStepOne from "./EventFormStepOne";

const Events = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (dataFromStep) => {
    // Merge step data into the overall formData
    setFormData((prev) => ({ ...prev, ...dataFromStep }));
    // Go to next step
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = (dataFromStep) => {
    // Optionally merge or ignore data here
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (finalData) => {
    // This is where you’d send data to an API or handle final submission
    console.log("Final Form Data:", finalData);
    // e.g., fetch or axios POST request
  };
  return (
    <div>
      {currentStep === 1 && <EventFormStepOne onNext={handleNext} />}
      <div>Events</div>
    </div>
  );
};

export default Events;

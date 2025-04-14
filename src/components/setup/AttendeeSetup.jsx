import React, { useState } from "react";
import StepOne from "./atendeeSetup/StepOne";
import StepTwo from "./atendeeSetup/StepTwo";
import StepThree from "./atendeeSetup/StepThree";
import { icons } from "@/assets/asset";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


const AttendeeSetup = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  ///dashboard/attendee"

    const handleNext = async () => {
      console.log("start sub");
      if (step === 2) {
        // Fetch user details from cookies
        const storedUserDetails = Cookies.get("userDetails");
        const userDetails = storedUserDetails
          ? JSON.parse(storedUserDetails)
          : {};

        // Ensure necessary fields exist in userDetails
        if (!userDetails.name || !userDetails.email || !userDetails.phone) {
          setError("Incomplete user details.");
          console.log("incomplet detals " + error);
          return;
        }

        // Complete the payload
        const finalPayload = {
          ...userDetails,
          location,
          eventPreferences: selectedInterests,
        };

        console.log("Final payload:", finalPayload); // For debugging

        try {
          const response = await axios.post(
            "https://test2.coderigi.online/api/auth/complete-signup",
            finalPayload
          );
          console.log("Signup complete:", response.data);
          navigate("/dashboard/attendee");
        } catch (err) {
          console.error("Signup error:", err.response?.data || err.message);
          setError("Signup failed. Please try again.");
        }

        return;
      }

      // Proceed to next step if not step 3
      setStep((prev) => prev + 1);
    };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progressPercentage = step === 1 ? "30%" : step === 2 ? "60%" : "100%";

  return (
    <div className="w-full mx-auto flex flex-col items-center h-full min-h-screen justify-center overflow-y-scroll hideScrollBar">
      <div className="mt-[100px] mb-[61px]">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="mb-4 flex gap-2 items-center cursor-pointer px-4 py-2 border border-[#98A2B3] rounded-[8px]"
        >
          <img src={icons.leftArrow} alt="back" />
          <span className="font-medium text-[16px] text-[#98A2B3]">Back</span>
        </button>
        <p>Step {step} of 3 </p>
        {/* Progress Bar */}
        <div className=" bg-gray-200 h-2 rounded-full w-[500px]">
          <div
            className="h-2 bg-orange-500 rounded-full"
            style={{ width: progressPercentage }}
          ></div>
        </div>
      </div>
      <div
        className={`"border-[#00000040] border rounded-[16px] p-12  mt-[64px]" ${
          step === 3 ? "" : "w-[500px]"
        }`}
      >
        {step === 1 && (
          <StepTwo
            handleNext={handleNext}
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
          />
        )}
        {step === 2 && (
          <StepOne
            setLocation={setLocation}
            location={location}
            handleNext={handleNext}
          />
        )}
        {/* {step === 3 && <StepThree handleNext={handleNext} />} */}
      </div>
    </div>
  );
};

export default AttendeeSetup;

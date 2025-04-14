import React, { useState } from "react";
import StepOne from "./organizerSetup/StepOne";
import StepTwo from "./organizerSetup/StepTwo";
import StepThree from "./organizerSetup/StepThree";
import { icons } from "@/assets/asset";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const OrganizerSetup = () => {
  const [step, setStep] = useState(1);

  //STEP 1
  const [selectedInterests, setSelectedInterests] = useState([]);

  //STEP 3
  const [location, setLocation] = useState("");

  //STEP 2
  const [selectedType, setSelectedType] = useState("");
  const [eventSize, setEventSize] = useState("0-50 persons"); // Default text
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [eventCount, setEventCount] = useState("");
  const [loading, setLoading] = useState(false); // Loading state to manage API call status

 const handleNext = async () => {
   if (step === 3) {
     try {
       const token = Cookies.get("authToken"); // Get the token from cookies

       const payload = {
         brand_name: "Event Masters",
         event_types: selectedInterests, // Ensure this is an array of valid event types
         events_per_year: Number(eventCount),
         is_recurring: true,
         event_size: eventSize,
         priority: selectedType, // Check if this field is required or should be different
         country: "Nigeria",
         state: location,
         company_name:"rigitixs",
       };

       // Log payload for debugging
       console.log("Payload to be sent:", payload);

       // Add token to request headers
       const response = await axios.post(
         "https://test2.coderigi.online/api/organizer/onboard",
         payload,
         {
           headers: {
             Authorization: `Bearer ${token}`, // Add token in Authorization header
           },
         }
       );

       console.log("Onboarding submitted:", response.data);
       navigate("/organizer/dashboard"); // Redirect on success
     } catch (error) {
       console.error("Error submitting onboarding:", error);

       if (error.response) {
         console.log("Error details:", error.response.data); // Log the detailed error response
       }

       alert("Something went wrong while submitting your setup.");
       navigate("/");
     }
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
        <div className="border-[#00000040] border rounded-[16px] p-12 mt-[64px] w-[500px]">
          {step === 1 && (
            <StepOne
              handleNext={handleNext}
              selectedInterests={selectedInterests}
              setSelectedInterests={setSelectedInterests}
            />
          )}
          {step === 2 && (
            <StepTwo
              handleNext={handleNext}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              eventSize={eventSize}
              setEventSize={setEventSize}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              eventCount={eventCount}
              setEventCount={setEventCount}
            />
          )}
          {step === 3 && (
            <StepThree
              handleNext={handleNext}
              location={location}
              setLocation={setLocation}
            />
          )}
        </div>
      </div>
      {loading && <div className="loading-spinner">Submitting...</div>}{" "}
      {/* Optional loading state */}
    </div>
  );
};

export default OrganizerSetup;

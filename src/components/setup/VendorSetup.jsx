import React, { useState } from "react";
import StepOne from "./vendor/StepOne";
import StepTwo from "./vendor/StepTwo";
import StepThree from "./vendor/StepThree";
import { icons } from "@/assets/asset";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const VendorSetup = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [business, setBusiness] = useState("");
  const [selectBusiness, setSelectBusiness] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

   const handleNext = async () => {
     console.log("start sub");
     if (step === 3) {
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
         business_name: business,
         //  eventPreferences: [],
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
              handleNext={() => {
                if (business) setStep(step + 1); // Save business name and go to Step 2
              }}
              business={business}
              setBusiness={setBusiness}
            />
          )}
          {step === 2 && (
            <StepTwo
              handleNext={handleNext}
              selectBusiness={selectBusiness} // Pass selectBusiness
              setSelectBusiness={setSelectBusiness} // Pass the setter function
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
    </div>
  );
};

export default VendorSetup;

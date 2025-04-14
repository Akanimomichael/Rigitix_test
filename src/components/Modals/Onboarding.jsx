import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelect = (type) => {
    setSelectedType(type);
    setError(""); // Clear error when user makes a selection
  };

  const handleContinue = async () => {
    if (!selectedType) {
      setError("Please select a user type.");
      return;
    }
    setLoading(true); // Start loading

    // Fetch existing user details if available
    const storedUserDetails = Cookies.get("userDetails");
    const existingData = storedUserDetails ? JSON.parse(storedUserDetails) : {};

    const userDetails = {
      ...existingData,
      userType: selectedType,
    };

    // Update the user details in cookies with the selected type
    Cookies.set("userDetails", JSON.stringify(userDetails));
    //  navigate(`/setup/${selectedType}`);
   
    try {
      // Make the API request to complete the signup process
      const response = await axios.post(
        "https://test2.coderigi.online/api/auth/complete-signup",
        userDetails
      );

      // If API request is successful, navigate to the next page
      console.log("API Response:", response);
      // navigate(`/setup/${selectedType}`);
      // navigate("/organizer/dashboard");
      // Navigate based on the selected user type
      if (selectedType === "Attendee") {
        navigate("/dashboard/Attendee"); // Navigate to the homepage for Attendee
      } else if (selectedType === "Organizer") {
        navigate("/setup/Organizer"); // Navigate to the dashboard for Organizer
      }
    } catch (err) {
      // Handle errors from the API
      const backendError = err.response?.data?.errors;
      if (backendError) {
        const errorMessage = Object.values(backendError).flat().join(", ");
        setError(errorMessage);
      } else {
        setError(
          err.response?.data?.message || "An unexpected error occurred."
        );
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="fixed bg-white w-full h-screen">
      <div className="w-full h-full items-center justify-center flex">
        <div className="border border-[#00000040] p-12 rounded-[16px] max-h-[80%] h-auto min-h-[450px] w-[500px]">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-black text-[14px] font-normal">
              How would you like to start?
            </p>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* "Vendor" Has been removed but this should be added back once the end point is ready  */}
            {["Attendee", "Organizer"].map((option) => (
              <div
                key={option}
                className={`border flex justify-between items-center w-[404px] p-4 rounded-[18px] cursor-pointer ${
                  selectedType === option
                    ? "border-[#F87B07]"
                    : "border-[#D0D5DD]"
                }`}
                onClick={() => handleSelect(option)}
              >
                <div className="flex items-center gap-4">
                  <img src={icons.FeaturedIcon} alt={option} />
                  <p>{option}</p>
                </div>
                {selectedType === option && (
                  <div>
                    <img src={icons.Checkbox} alt="active" />
                  </div>
                )}
              </div>
            ))}
            {/* Continue Button */}
            <Button
              label={loading ? "Submitting..." : "Continue"}
              className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px] mt-4"
              onClick={handleContinue}
              disabled={!selectedType || loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

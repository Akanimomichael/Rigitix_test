import React from "react";
import Button from "@/components/buttons/Button";
import DOBPicker from "./DOBPicker";
import checkedIcon from "@/assets/icons/Checkbox.png";
import Cookies from "js-cookie";
import axios from "axios";

import { useState } from "react";
const BuyTicketSignUp = ({ onClose, setFormType }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    dob: null,
    password: "",
    password_confirmation: "",
    email: "", // Include email in userData
    gender: "",
    userType: "Attendee",
  });
  // State for errors
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const handleDateChange = (date) => {
    if (!date) return; // Ensure date is valid

    setUserData((prevUserData) => ({
      ...prevUserData,
      dob: date,
    }));

    document.activeElement.blur();
  };
  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleGenderSelect = (gender) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      gender,
    }));
  };

  // Validate inputs
  const validateInputs = () => {
    let newErrors = {};

    // Name validation (only letters, no numbers or special characters)
    if (!userData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(userData.name)) {
      newErrors.name = "Name must contain only letters.";
    }

    // Phone number validation (only numbers, no spaces or special characters)
    if (!userData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(userData.phone)) {
      newErrors.phone =
        "Phone number must contain only numbers, no spaces or special characters.";
    }

    // Date of Birth validation
    if (!userData.dob) {
      newErrors.dob = "Date of birth is required.";
    }

    // Gender validation
    if (!userData.gender) {
      newErrors.gender = "Gender is required.";
    }

    // Email validation
    if (!userData.email) {
      newErrors.email = "Email is required.";
    }

    // Password validation
    if (!userData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (userData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(userData.password)
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    // Confirm Password validation
    if (userData.password !== userData.password_confirmation) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Set errors and return validation result
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    if (!validateInputs()) {
      setLoading(false); // Stop loading if validation fails
      return;
    }
    const userDetails = userData;
    Cookies.set("userDetails", JSON.stringify(userDetails));
    try {
      const response = await axios.post(
        "https://test2.coderigi.online/api/auth/complete-signup",
        userDetails
      );
      console.log("API Response:", response);
      onClose();
    } catch (err) {
      const backendError = err.response?.data?.errors;
      if (backendError) {
        const errorMessage = Object.values(backendError).flat().join(", ");
        setGeneralError(errorMessage); // Store general error in state
      } else {
        setGeneralError(
          err.response?.data?.message || "An unexpected error occurred."
        );
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md w-[600px] h-[90vh] pb-14 overflow-y-scroll">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sign Up</h2>
          <p className="cursor-pointer text-[#F87B07]" onClick={() => setFormType("signIn")}>
            Sign in instead
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-full flex gap-3">
            {/* Email*/}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Email
              </p>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={userData.email}
                onChange={handleChange}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </label>
            {/* Full Name */}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Name
              </p>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={userData.name}
                onChange={handleChange}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </label>
          </div>
          <div className="w-full flex gap-3">
            {/* Phone Number */}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Phone Number
              </p>
              <input
                type="text"
                name="phone"
                placeholder="+234 90498 4389 334"
                value={userData.phone}
                onChange={handleChange}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </label>

            {/* Gender Selection */}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Gender
              </p>
              <div className="flex gap-4 py-4">
                <div
                  onClick={() => handleGenderSelect("Male")}
                  className={`flex gap-3 items-center cursor-pointer`}
                >
                  {userData.gender === "Male" && <img src={checkedIcon} />}
                  Male
                </div>
                <div
                  onClick={() => handleGenderSelect("Female")}
                  className={` flex gap-3 items-center cursor-pointer`}
                >
                  {userData.gender === "Female" && <img src={checkedIcon} />}
                  <p>Female</p>
                </div>
              </div>
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender}</span>
              )}
            </label>
          </div>

          {/* Date of Birth */}
          <label>
            <DOBPicker
              selectedDate={userData.dob}
              onChange={handleDateChange}
            />
            {errors.dob && (
              <span className="text-red-500 text-sm">{errors.dob}</span>
            )}
          </label>

          <div className="w-full flex gap-3">
            {/* Password */}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Create Password
              </p>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </label>

            {/* Confirm Password */}
            <label className="w-full flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Confirm Password
              </p>
              <input
                type="password"
                name="password_confirmation"
                value={userData.password_confirmation}
                onChange={handleChange}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </label>
          </div>

          {generalError && (
            <p className="text-red-500 text-sm font-semibold mb-3">
              {generalError}
            </p>
          )}

          {/* Continue Button */}
          <Button
            label={loading ? "Submitting..." : "Continue"}
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyTicketSignUp;

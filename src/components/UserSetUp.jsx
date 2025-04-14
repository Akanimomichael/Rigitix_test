import { useState } from "react";
import Cookies from "js-cookie"; // Import js-cookies
import Onboarding from "./Modals/Onboarding";
import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";
import DOBPicker from "./DOBPicker";
import checkedIcon from "@/assets/icons/Checkbox.png";
import axios from 'axios'

const UserSetUp = () => {
  const [onboard, setOnboard] = useState(false);

  // Retrieve email from js-cookies
  const storedEmail = Cookies.get("userEmail") || "";

  // State for user details
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    dob: null,
    password: "",
    password_confirmation: "",
    email: storedEmail, // Include email in userData
    gender: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    if (!date) return; // Ensure date is valid

    setUserData((prevUserData) => ({
      ...prevUserData,
      dob: date,
    }));

    document.activeElement.blur();
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

  // Handle form submission
  // const handleSubmit = () => {
  // if (!validateInputs()) return;
  // const formattedData = {
  //   name: userData.name,
  //   phone: userData.phone,
  //   dob: userData.dob ? userData.dob.toISOString().split("T")[0] : "", // Format dob
  //   password: userData.password,
  //   gender: userData.gender,
  //   password_confirmation: userData.password_confirmation,
  //   email: Cookies.get("userEmail"), // Retrieve stored email
  // };

  // // Store user data in cookies
  // Cookies.set("userDetails", JSON.stringify(formattedData), { expires: 7 }); // Expires in 7 days

  // Open Onboarding modal
  // setOnboard(true);
  // };
  // Handle form submission
  const handleSubmit = () => {
    if (!validateInputs()) return;

    const formattedData = {
      name: userData.name,
      phone: userData.phone,
      dob: userData.dob ? userData.dob.toISOString().split("T")[0] : "",
      password: userData.password,
      gender: userData.gender,
      password_confirmation: userData.password_confirmation,
      email: Cookies.get("userEmail"), // Use the email from cookies
    };

    // Store user data in cookies
    Cookies.set("userDetails", JSON.stringify(formattedData), { expires: 7 });

    // Open Onboarding modal
    setOnboard(true);
  };

  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col justify-between gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" alt="logo" />

        <div className="flex flex-col gap-[71px] justify-between h-full w-full">
          <h2 className="text-[37px] font-semibold tracking-[-2px] text-white max-w-[75%]">
            rig<span className="text-[#F87B07]">ti</span>
            <span className="text-[#F87B07]">X</span>: Where Events Go
            Next-Level with Blockchain Magic
          </h2>
          <p className="text-[#F0E6E6] font-normal text-[16px]">
            Rigitix revolutionizes events with blockchain-powered ticketing,
            management, and engagement—ensuring security, transparency, and a
            seamless experience. The future of events is here.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:basis-[55%] pt-10 lg:px-[133px] h-screen overflow-y-scroll hideScrollBar">
        <h2 className="text-[32px] text-[#1B1818] font-bold">
          Let's know About You
        </h2>

        <div className="flex flex-col gap-5">
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
            <div className="flex gap-4">
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
          </label>
          {errors.gender && (
            <span className="text-red-500 text-sm">{errors.gender}</span>
          )}

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

          {/* Continue Button */}
          <Button
            label="Continue"
            onClick={handleSubmit}
            className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
          />
        </div>
      </div>

      {onboard && <Onboarding userData={userData} setOnboard={setOnboard} />}
    </div>
  );
};

export default UserSetUp;

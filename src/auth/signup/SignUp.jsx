import React, { useState } from "react";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import OTP from "@/components/OTP";
import { useEmail } from "@/components/OTP";
import Cookies from "js-cookies";
import { GoogleLogin } from "@react-oauth/google"; 

 const googleButtonStyle = {
   color: "#344054",
   fontSize: "16px",
   fontWeight: "600", // font-semibold
   borderRadius: "18px",
   border: "1px solid #333333",
   padding: "16px", // p-4 equivalent
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   gap: "10px", // gap-[10px] equivalent
   width: "100%",
 };


const SignUp = () => {
  const navigate = useNavigate();

  const { email, setEmail } = useEmail();
  const [error, setError] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [loading, setLoading] = useState(false);



  const validateEmail = (email) => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailReg.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true); // Start loading

    if (!email) {
      setError("Email required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch(
        "https://test2.coderigi.online/api/auth/initiate-signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log("response", data);

      if (!response.ok) {
        if (data.error?.toLowerCase().includes("email already registered")) {
          setError("This email is already registered. Please sign in.");
        } else {
          setError(data.error || "Sign up failed");
        }
        return;
      }

      // Store email in js-cookies
      Cookies.setItem("userEmail", email, { expires: 1 }); // Expires in 1 day

      console.log("Sign up successful", data);
      setOpenOtp(true);
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  // Handle Google Sign-Up
  const handleGoogleSignUp = async (response) => {
    if (response.credential) {
      try {
        const userData = jwt_decode(response.credential); // Decode the Google JWT token
        console.log("Google User Data:", userData);

        // Send Google data to your backend for sign-up or login
        const res = await fetch(
          "https://test2.coderigi.online/api/auth/google-signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: userData.email,
              name: userData.name,
              googleId: userData.sub,
            }),
          }
        );

        const data = await res.json();
        console.log("Google Sign-Up Response:", data);

        if (res.ok) {
          Cookies.setItem("userEmail", userData.email, { expires: 1 }); // Store email in cookies
          navigate("/dashboard"); // Redirect after successful sign-up
        } else {
          setError(data.error || "Google sign-up failed");
        }
      } catch (error) {
        console.error("Google sign-up error:", error);
        setError("An error occurred during Google sign-up.");
      }
    }
  };
  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" alt="logo" />

        <div className="flex flex-col gap-[71px]">
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

      <div className="flex flex-col items-end gap-10 lg:basis-[55%] lg:px-[133px]">
        <p
          className="text-[#EB5017] font-bold cursor-pointer"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </p>
        <div className="flex flex-col gap-y-2 text-center">
          <h2 className="text-[32px] text-[#1B1818] font-bold">Get Started!</h2>
          <p className="text-[14px] text-[#645D5D] font-normal">
            Next-level event management with secure, blockchain-powered
            ticketing.
          </p>

          <div className="flex flex-col gap-10 mt-9">
            <label className="flex flex-col gap-4">
              <p className="text-[#101928] text-[14px] font-medium text-left">
                Email Address
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07]"
              />
              {error && (
                <p className="text-red-500 text-left text-[12px] transition-all duration-1000">
                  {error}
                </p>
              )}
            </label>

            <Button
              className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
              onClick={handleSignUp}
              label={loading ? "Submitting..." : "Continue"}
              disabled={loading}
            />
          </div>
          <div className="flex items-center mt-7 mb-6 gap-1">
            <div className="border border-[#F0F2F5] w-full h-[1px]"></div>
            <p className="text-[#101928] text-[14px] font-normal">Or</p>
            <div className="border border-[#F0F2F5] w-full h-[1px]"></div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            {/* <div className="text-[#344054] text-[16px] font-semibold rounded-[18px] border border-[#333333] gap-[10px] p-2 flex gap-3 items-center w-full justify-center"> */}
              <GoogleLogin
                onSuccess={handleGoogleSignUp}
                onError={() => console.log("Google Login failed")}
                text="Sign up with Google"
                theme="none"
              />
            {/* </div> */}

            <Button
              icon={icons.fb_logo}
              label="Facebook"
              className="text-[#344054] text-[16px] font-semibold rounded-[18px] border border-[#333333] gap-[10px] p-4 flex gap-3 items-center w-full justify-center"
            />
          </div>
        </div>
      </div>

      {openOtp && <OTP onClose={() => setOpenOtp(false)} />}
    </div>
  );
};

export default SignUp;

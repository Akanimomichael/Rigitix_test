import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";
import Cookies from "js-cookies";

const EmailContext = createContext();
export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
export const useEmail = () => useContext(EmailContext);

const OTP = ({ onClose }) => {
  const navigate = useNavigate();
  const { email } = useEmail();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  // Handle input change
  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) {
      setError("Numbers only");
      return;
    }

    setError(""); // Reset error if input is valid

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace behavior
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle pasting OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(""));
      setError("");
      inputRefs.current[5]?.focus(); // Move to last input
    } else {
      setError("Numbers only");
    }
  };

  // Resend OTP
  const sendOtp = async () => {
    try {
      setResending(true);
      setError("");
      await axios.post("https://test2.coderigi.online/api/auth/resend-otp", {
        email,
      });
      setCountdown(300); // Reset countdown to 5 minutes
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setResending(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      setVerifying(true);
      setError("");
      const storedEmail = Cookies.getItem("userEmail");
      if (!storedEmail) {
        setError("Email is missing. Please request OTP again.");
        return;
      }
      const response = await axios.post(
        "https://test2.coderigi.online/api/auth/verify-otp",
        {
          email: storedEmail,
          otp: otp.join(""),
        }
      );

      if (response.data.success || response.status === 200) {
        onClose();
        navigate("/setup-user");
      } else {
        setError(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="fixed z-50 h-screen overflow-hidden bg-white h-screen w-full left-0 top-0">
      <div className="p-5 h-full flex items-center">
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
        <div className="flex flex-col items-center gap-6 lg:basis-[55%] lg:px-[133px]">
          <h2 className="text-[32px] text-[#1B1818] font-bold">
            OTP Verification
          </h2>
          <p className="text-[14px] text-[#645D5D] font-normal">
            We've sent a verification code to {email}
          </p>
          <div className="flex gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center border rounded text-xl font-bold outline-[#F87B07]"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <Button
            label={verifying ? "Verifying..." : "Continue"}
            onClick={verifyOtp}
            disabled={otp.join("").length !== 6 || verifying}
            className="py-y px-6 rounded-[12px] w-full bg-[#F87B07] text-white"
          />

          <div className="flex justify-between  items-center gap-4 w-full">
            <div className="flex items-center gap-1 text-[#645D5D] text-[14px] ">
              Didn't receive the OTP? click to{" "}
              <p
                onClick={sendOtp}
                disabled={resending || countdown > 0}
                className={`border-none p-0 text-[#F87B07] bg-white ${
                  resending || countdown > 0
                    ? "text-[#F87B07] bg-white cursor-not-allowed"
                    : "bg-white"
                }`}
              >
                {resending ? "Sending..." : "Resend"}
              </p>
            </div>
            <div className="text-gray-700 text-lg font-semibold">
              {countdown > 0
                ? `Resend OTP in ${Math.floor(countdown / 60)}:${String(
                    countdown % 60
                  ).padStart(2, "0")}`
                : "You can resend OTP now."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;

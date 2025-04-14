import { useState } from "react";
import Button from "@/components/buttons/Button";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";

const BuyTicketLogin = ({ onClose, setFormType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSignin = async () => {
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://test2.coderigi.online/api/login",
        { email, password }
      );

      const token = response.data.token; // Ensure this matches API response
      const user = response.data.user;
      const userType = response.data.user.user_type; // Ensure the API provides this

      Cookies.set("authToken", token);
      Cookies.set("userType", userType); // Store userType in cookies

      login(user, userType); // Pass userType to login function

      onClose(); // Close modal
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md w-[430px]">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-xl font-bold ">Sign in to Buy ticket</h2>
          <p
            className="cursor-pointer text-[#F87B07]"
            onClick={() => setFormType("signUp")}
          >
            Sign up instead
          </p>
        </div>
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
          </label>

          <label className="flex flex-col gap-4">
            <p className="text-[#101928] text-[14px] font-medium text-left">
              Password
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07]"
            />
            {error && <p className="text-red-500">{error}</p>}
          </label>
          <Button
            label={loading ? "Signing in..." : "Sign in"}
            className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
            onClick={handleSignin}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default BuyTicketLogin;

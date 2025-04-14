import React, { useState } from "react";
import BuyTicketLogin from "../BuyTicketLogin";
import BuyTicketSignUp from "../BuyTicketSignUp";

const Registration = ({ onClose }) => {
  const [formType, setFormType] = useState("signIn"); // Default is Sign In

  const renderForm = () => {
    switch (formType) {
      case "signIn":
        return <BuyTicketLogin onClose={onClose} setFormType={setFormType} />;

      case "signUp":
        return <BuyTicketSignUp onClose={onClose} setFormType={setFormType} />;

      default:
        return null;
    }
  };

  return (
    <div className="fixed w-full left-0 top-0 bg-white py-8 flex flex-col items-center justify-center z-50 overflow-y-hidden h-full">
      {/* Toggle Buttons */}
      {/* <div className="mb-4 flex gap-4">
        <button
          className={`py-2 px-4 rounded-md ${
            formType === "signIn" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFormType("signIn")}
        >
          Sign In
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            formType === "signUp" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFormType("signUp")}
        >
          Sign Up
        </button>
      </div> */}

      {/* Render Form Based on State */}
      {renderForm()}
    </div>
  );
};

export default Registration;

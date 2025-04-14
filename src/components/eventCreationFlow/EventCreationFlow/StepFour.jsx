import { CalendarDays } from "lucide-react";
import React, { useState } from "react";

const StepFour = ({ handleNext }) => {
  const [activeTab, setActiveTab] = useState("crypto");
  return (
    <div className="w-[432px] mx-auto font-inter space-y-4">
      {/* Header */}
      <h1 className="text-left font-semibold text-[18px] leading-[28px]">
        Create a new event
      </h1>

      {/* Subtext */}
      <p className="text-left font-normal text-[14px] leading-[20px]">
        Narrow down your search and find the perfect event faster.
      </p>

      {/* Page Counter */}
      <div className="text-right font-normal text-[16px] leading-[20px]">
        1 of 3
      </div>

      {/* Tab Buttons */}
      <div className="flex gap-2 h-[57px] pt-[10px] pb-[10px]">
        <button
          onClick={() => setActiveTab("crypto")}
          className={`w-full border rounded-[10px] px-4 py-2 text-[14px] font-medium ${
            activeTab === "crypto"
              ? "bg-[#F87B07] text-white"
              : "bg-white border-[#ccc] text-[#333]"
          }`}
        >
          Crypto
        </button>
        <button
          onClick={() => setActiveTab("bank")}
          className={`w-full border rounded-[10px] px-4 py-2 text-[14px] font-medium ${
            activeTab === "bank"
              ? "bg-[#F87B07] text-white"
              : "bg-white border-[#ccc] text-[#333]"
          }`}
        >
          Bank Transfer
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "crypto" ? (
        <form className="space-y-5">
          {/* Wallet Address */}
          <div>
            <label
              htmlFor="wallet"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              Blockchain network
            </label>
            <input
              type="text"
              id="wallet"
              name="wallet"
              placeholder="Select network"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="Wallet_address"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              Wallet address
            </label>
            <input
              type="text"
              id="Wallet_address"
              name="Wallet_address"
              placeholder="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>

          {/* Continue Button */}
          <button
            onClick={handleNext}
            className="w-full h-[56px] bg-[#F87B07] rounded-[8px] px-6 py-4 font-medium text-white"
          >
            Create event
          </button>
        </form>
      ) : (
        <form className="space-y-5">
          {/* Account name*/}
          <div>
            <label
              htmlFor="location"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              Account name
            </label>
            <input
              type="text"
              id="account_name"
              name="account_name"
              placeholder="123 Bob strt"
              className="w-full h-[56px] rounded-[18px] border border-[#666666]  px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>
          {/* Venue */}
          <div>
            <label
              htmlFor="Bank_name"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              Bank name
            </label>
            <div className="relative mt-1">
              <select
                id="Bank_name"
                name="Bank_name"
                className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px] appearance-none bg-white text-[#333] cursor-pointer"
              >
                {/* <option value="physical" className="text-sm p-2">
                  Physical
                </option> */}
                <option value="virtual" className="text-sm p-2">
                  Bank name
                </option>
              </select>
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#666]"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Ticket Price */}
          <div>
            <label
              htmlFor="FBNINGLA"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              SWIFT/BIC Code
            </label>
            <input
              type="text"
              id="FBNINGLA"
              name="FBNINGLA"
              placeholder="$ 60000"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />

           
          </div>

          {/* NG29FBNX12345678901234567890 */}
          <div>
            <label
              htmlFor="BAN"
              className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              BAN
            </label>
            <input
              type="text"
              id="NG29FBNX12345678901234567890"
              name="NG29FBNX12345678901234567890"
              placeholder="600"
              className="w-full h-[56px] rounded-[18px] border border-[#666666]  px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>

          {/* Continue */}
          <button
            onClick={handleNext}
            className="w-full h-[56px] bg-[#F87B07] rounded-[8px] px-6 py-4 font-medium text-white"
          >
            Create Event
          </button>
        </form>
      )}
    </div>
  );
};

export default StepFour;

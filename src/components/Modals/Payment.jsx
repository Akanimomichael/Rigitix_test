import { useState } from "react";
import payment from "@/assets/icons/payment.png";
import croseIcon from "@/assets/icons/croseIcon.png";
import Button from "@/components/buttons/Button";

const Payment = ({ onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="shadow-lg bg-white absolute w-[341px] bottom-[0px] rounded-[18px] px-6 py-5">
      {/* Header */}
      <div className="w-full justify-between flex items-center mt-1">
        <img src={payment} alt="payment" />
        <img
          src={croseIcon}
          alt="close"
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Title */}
      <h2 className="text-[18px] text-[#101828] font-semibold mt-4">
        Choose your payment method
      </h2>

      {/* Payment Options */}
      <div className="mt-4 flex flex-col gap-3">
        <button
          className={`flex items-center justify-between border rounded-lg px-4 py-3 ${
            selectedMethod === "crypto"
              ? "border-[#F87B07] bg-[#F87B070D] text-[#F87B07]"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedMethod("crypto")}
        >
          <span className="text-[#101828] font-medium">Pay with crypto</span>
          {selectedMethod === "crypto" && (
            <span className="text-orange-500">✔</span>
          )}
        </button>

        <button
          className={`flex items-center justify-between border rounded-lg px-4 py-3 ${
            selectedMethod === "fiat"
              ? "border-[#F87B07]  bg-[#F87B070D] text-[#F87B07]"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedMethod("fiat")}
        >
          <span className="text-[#101828] font-medium">Pay with fiat</span>
          {selectedMethod === "fiat" && (
            <span className="text-[#F87B07]0">✔</span>
          )}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 gap-[10px]">
        <button
          className="px-6 py-2 border border-gray-500 rounded-lg text-gray-700 w-full "
          onClick={onClose}
        >
          Cancel
        </button>
        <Button
          className={`px-6 py-2 rounded-lg text-white font-semibold  bg-gray-300 w-full bg-[#F87B07]
          `}
          disabled={!selectedMethod}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default Payment;

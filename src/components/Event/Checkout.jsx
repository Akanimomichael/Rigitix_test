import { useState, useEffect, useRef } from "react";
import Button from "@/components/buttons/Button";
import add from "@/assets/icons/checkOutAdd.png";
import minus from "@/assets/icons/checkOutMinus.png";
import Payment from "@/components/Modals/Payment";
import Cookies from "js-cookie";
import Registration from "../Modals/Registration";

const Checkout = () => {
  const [registrationModal, setRegistrationModae] = useState(false);
  const ticketData = [
    { type: "Regular", price: 10 },
    { type: "VIP", price: 15 },
    { type: "VVIP", price: 30 },
  ];

  const [quantities, setQuantities] = useState(
    ticketData.reduce((acc, ticket) => ({ ...acc, [ticket.type]: 0 }), {})
  );

  const handleQuantityChange = (type, change) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + change),
    }));
  };

  const subtotal = Object.entries(quantities).reduce(
    (total, [type, qty]) =>
      total + qty * ticketData.find((t) => t.type === type).price,
    0
  );

  const platformFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + platformFee;

  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const modalRef = useRef(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenPaymentModal(false);
      }
    };

    if (openPaymentModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPaymentModal]);

  const handleBuyTicket = () => {
    const token = Cookies.get("authToken");
    if (token) {
      setOpenPaymentModal(true);
    } else {
      setRegistrationModae(true);
    }
  };
  return (
    <div ref={modalRef} className="relative w-full">
      <div className=" w-[400px] bg-white flex flex-col gap-4">
        {ticketData.map((ticket) => (
          <div
            key={ticket.type}
            className="flex justify-start items-center border border-[#D6D6D6] py-4 px-8 rounded-[10px] text-left"
          >
            <p className="text-[#585163] text-[16px] font-semibold basis-[25%] ">
              {ticket.type}
            </p>
            <p className="text-[#585163] font-medium basis-[25%] justify-center flex">
              ${ticket.price.toFixed(2)}
            </p>
            <div className="flex items-center justify-end gap-5 basis-[50%]">
              <button onClick={() => handleQuantityChange(ticket.type, -1)}>
                <img src={minus} alt="" />
              </button>
              <span className="text-[#333333] font-semibold">
                {quantities[ticket.type]}
              </span>
              <button onClick={() => handleQuantityChange(ticket.type, 1)}>
                <img src={add} />
              </button>
            </div>
          </div>
        ))}

        <div className="p-4 border border-[#D6D6D6] flex flex-col gap-6 rounded-[10px]">
          <p className="text-[#333333] text-[14px]">
            rigitiX platform fee is <strong>$2</strong>
          </p>

          <div className="flex justify-between items-center font-bold text-[24px]">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <Button
            label="Checkout"
            className="w-full py-3 bg-[#F87B07] text-white rounded-[18px] font-semibold text-[16px]"
            onClick={handleBuyTicket}
            disabled={subtotal === 0}
          />
        </div>
      </div>
      {openPaymentModal && (
        <Payment onClose={() => setOpenPaymentModal(false)} />
      )}
      {registrationModal && <Registration onClose={setRegistrationModae} />}
    </div>
  );
};

export default Checkout;

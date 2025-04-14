import phoneIcon from "@/assets/icons/phone.png";
import usFlag from "@/assets/icons/usFlag.png";
import arrowDown from "@/assets/icons/dropdownArrow.png";

const Header = () => {
  return (
    <div className="w-full py-4 px-[120px] bg-[#F87B07] justify-between items-center flex">
      <div className="flex items-center gap-1">
        <img src={phoneIcon} alt="phone" />
        <p className="text-sm text-white font-medium">+1 2345 56768</p>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-white opacity-[0.7] text-[12px] font-medium">
          Get 50% Off on ticket purchase
        </p>
        <p className="text-white text-[13px] font-medium cursor-pointer">
          Buy Now
        </p>
      </div>
      <div className="relative">
        <div className="flex items-center gap-6">
          <img src={usFlag} alt="country" />
          <p className="text-white opacity-[0.7] text-[12px] font-medium">
            United States
          </p>
          <img src={arrowDown} alt="arrow down" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import rigitixLogo from "@/assets/icons/rigitix-blue-logo.png";
import { Link } from "react-router-dom";
import Button from "@/components/buttons/Button";

const Footer = () => {
  return (
    <div className="px-[112px] bg-[#F87B070D] py-[64px] flex flex-col gap-[64px] w-full">
      <div className="flex items-start gap-8 w-full justify-between">
        <div className="flex flex-col gap-8">
          <Link to="/#">
            <img src={rigitixLogo} className="" />
          </Link>
          <p className="text-[#344054]">
            1234 Akwa-Ibom, Cross River State, Nigeria
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="border border-[#D0D5DD] py-2 px-4 outline-[#F87B07] rounded-[12px] placeholder:text-[#98A2B3] placeholder:text-[14px]"
            />
            <Button
              label="Subscribe"
              className="bg-[#F87B07] rounded-[12px] py-2 px-[10px] text-white w-[131px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#98A2B3] font-normal text-[16px]">Quick links</p>
          <ul className="flex flex-col gap-4">
            <Link to="/events">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Explore events
              </li>
            </Link>
            <Link to="/features">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Key features
              </li>
            </Link>
            <Link to="/about_us">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                About us
              </li>
            </Link>
            <Link to="/contact_us">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Contact us
              </li>
            </Link>
            <Link to="/support">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Support
              </li>
            </Link>
            <Link to="/developer_hub">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Developer Hub
              </li>
            </Link>
            <Link to="/docs">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                How it works
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#98A2B3] font-normal text-[16px]">
            Legal information
          </p>
          <ul className="flex flex-col gap-4">
            <Link to="/privacy_policy">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Privacy policy
              </li>
            </Link>
            <Link to="/terms_of_service">
              <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
                Terms of service
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#98A2B3] font-normal text-[16px]">Social links</p>
          <ul className="flex flex-col gap-4">
            <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
              facebook
            </li>

            <li className="text-[14px] text-[#667185] font-normal hover:text-black hover:underline cursor-pointer">
              Twitter
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 w-full border-t border-t-[#E4E7EC] flex justify-center">
        <p className="text-[#98A2B3] text-[13px] font-medium">
          &copy; 2025 Rigitix. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

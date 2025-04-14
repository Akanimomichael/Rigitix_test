import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";

const ForgotPassword = () => {
  return (
    <div className="p-5 flex h-screen overflow-hidden items-center">
      <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col gap-[79px] rounded-[30px] h-full basis-[45%]">
        <img src={icons.rigitix} className="w-[105px]" />

        <div className="flex flex-col gap-[71px]">
          <h2 className="text-[37px] font-semibold tracking-[-2px] text-white max-w-[75%]">
            rig<span className="text-[#F87B07]">ti</span>
            <span className="text-[#F87B07]">X</span>: Where Events Go
            Next-Level with Blockchain Magic
          </h2>
          <p className="text-[#F0E6E6] font-normal text-[16px]">
            Rigitix revolutionizes events with blockchain-powered ticketing,
            management, and engagement—ensuring security, transparency, and a
            seamless experience. The future of events is here
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:basis-[55%] lg:px-[133px] ">
        <div className="flex flex-col gap-y-2 text-center">
          <h2 className="text-[32px] text-[#1B1818] font-bold">
            Welcome back!
          </h2>
          <p className="text-[14px] text-[#645D5D] font-normal">
            Sign in to access your account and manage your events seamlessly
          </p>
        </div>
        <div className="flex flex-col gap-10 mt-9 w-full">
          <label className="flex flex-col gap-4">
            <p className="text-[#101928] text-[14px] font-medium text-left">
              Email Address
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 placeholder:text-[#BEBEBE] placeholder:text-[12px] outline-[#F87B07] w-full"
            />
          </label>
          <Button
            label="Forget password"
            className="w-full bg-[#F87B07] text-white py-4 px-6 rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

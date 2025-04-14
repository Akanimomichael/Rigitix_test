import Button from "@/components/buttons/Button";

const StepOne = ({ handleNext, setBusiness, business }) => {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-[26px] text-[#1B1818] font-bold">
          Become a Vendor
        </h2>
        <p className="text-[12px] text-[#645D5D] font-normal">
          Join our marketplace and connect with event organizers & attendees
          effortlessly
        </p>
      </div>
      <div>
        <input
          type="text"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder="What is your business"
          className="w-full h-full outline-none placeholder:text-[14px] placeholder-[#98A2B3] border border-[#D0D5DD] p-3 rounded-[8px]"
        />
      </div>
      <Button
        label="Get Started"
        onClick={handleNext}
        disabled={!business}
        className="mt-4 px-5 w-full py-3 bg-[#F87B07] text-white font-medium rounded-[8px]"
      />
    </div>
  );
};

export default StepOne;

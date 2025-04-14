import "./feature.css";
import { icons } from "@/assets/asset";

const Feature = () => {
  return (
    <div className="bg-[#F87B070D] py-12 px-[105px] flex flex-col gap-[64px]">
      <div className="flex flex-col gap-5">
        <p className="text-[16px] text-[#F87B07] font-semibold">Features</p>
        <h1 className="text-[36px] text-[#181D27] font-bold lg:max-w-[380px]">
          Events have never been simpler
        </h1>
      </div>
      <div className="flex flex-wrap gap-y-[64px] gap-x-11">
        <div className="feature1 w-[333px] h-[533px] rounded-[8px] py-[68px] px-[50px] flex flex-col gap-y-2">
          <h2 className="text-[20px] text-[#181D27] font-bold">
            Create events
          </h2>
          <p className="text-[14px] text-[#535862]">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </div>
        <div className="bg-[#F87B071A] w-[333px] h-[533px] rounded-[8px] py-[68px] px-[50px] flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[20px] text-[#181D27] font-bold">
              Generate #confirm design
            </h2>
            <p className="text-[14px] text-[#535862]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <img src={icons.feature2} />
        </div>
        <div className="bg-[#5226721A] w-[333px] h-[533px] rounded-[8px] pt-[68px] px-[30px] flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[20px] text-[#181D27] font-bold">
              Swag & mech store
            </h2>
            <p className="text-[14px] text-[#535862]">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <img src={icons.feature3} />
        </div>
        <div className="bg-[#EB018E1A] w-[333px] h-[533px] rounded-[8px] py-[68px] px-[30px] flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[20px] text-[#181D27] font-bold">
              Vendor marketplace
            </h2>
            <p className="text-[14px] text-[#535862]">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <img src={icons.feature4} />
        </div>
        <div className="bg-[#F4E8B51A] w-[333px] h-[533px] rounded-[8px] pt-[68px] px-[30px] flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[20px] text-[#181D27] font-bold">
              Host pagaent & awards
            </h2>
            <p className="text-[14px] text-[#535862]">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <img src={icons.feature5} />
        </div>
        <div className="bg-[#F5F5F5] w-[333px] h-[533px] rounded-[8px] pt-[68px] px-[30px] flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[20px] text-[#181D27] font-bold">
              Earn tasks reward
            </h2>
            <p className="text-[14px] text-[#535862]">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <img src={icons.feature6} className="mb-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Feature;

import Button from "@/components/buttons/Button";
import { icons } from "@/assets/asset";

const StepThree = ({ handleNext }) => {
  const event = [
    {
      image: icons.asake,
      artist: "wiskid",
      title: "Wizkid made tour in lagos",
      location: "The Landmark Hotel And Beach Resort",
      date: "Sat, Mar 6 • 06:00 PM",
      ticketSold: "2.1K ticket sold",
    },
    {
      image: icons.tems,
      artist: "Tems",
      title: "Wizkid made tour in lagos",
      location: "The Landmark Hotel And Beach Resort",
      date: "Sat, Mar 6 • 06:00 PM",
      ticketSold: "2.1K ticket sold",
    },

    {
      image: icons.asake,
      artist: "wiskid",
      title: "Wizkid made tour in lagos",
      location: "The Landmark Hotel And Beach Resort",
      date: "Sat, Mar 6 • 06:00 PM",
      ticketSold: "2.1K ticket sold",
    },
  ];
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-[26px] text-[#1B1818] font-bold">See Organizers</h2>
        <p className="text-[12px] text-[#645D5D] font-normal">
          Connect with the best event organizers and discover amazing
          experiences in Lagos
        </p>
      </div>
      <div>
        <div className="p-3 gap-4 bg-[#F9FAFB]">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] text-[#101828] font-semibold">
              Events By Cage{" "}
            </h2>
            <Button
              label="Follow"
              icon={icons.plusIcon}
              className="flex items-center px-3 py-3 border border-[#000000] rounded-[8px] gap-2 text-[#333333] font-semibold w-[131px] justify-center"
            />
          </div>
          <div className="flex items-center gap-3 mt-4">
            {event.map((items, index) => (
              <card className="w-[250px]" key={index}>
                <div className="mt-3 gap-2 flex flex-col">
                  <img src={items.image} className="w-full rounded-[30px]" />
                  <div className="gap-1.5">
                    <p className="text-[#101828] font-semibold">
                      {items.artist}
                    </p>
                    <h2 className="text-[18px] text-[#101828] font-bold">
                      {items.title}
                    </h2>
                    <p className="text-[15px] text-[#475467] font-normal">
                      {items.location}
                    </p>
                    <p className="text-[14px] text-[#475467] font-normal">
                      {items.date}
                    </p>
                  </div>
                  <div className="flex justify-between items-center   ">
                    <p className="text-[12px] text-[#151518] font-bold">
                      {items.ticketSold}
                    </p>
                    <button className="text-[18px] text-[#F87B07] flex items-center justity-center gap-2 border border-[#F87B07] rounded-[8px] py-2 px-4">
                      {" "}
                      <img src={icons.sendIcon} /> <span>Buy Ticket</span>
                    </button>
                  </div>
                </div>
              </card>
            ))}
          </div>
        </div>
      </div>
      <Button
        label="Proceed"
        onClick={handleNext}
        className="mt-4 px-5 w-full py-3 bg-[#F87B07] text-white font-medium rounded-[8px]"
      />
    </div>
  );
};

export default StepThree;

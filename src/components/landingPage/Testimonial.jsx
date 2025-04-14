import { icons } from "@/assets/asset";

const Testimonial = () => {
  const clients = [
    {
      name: "Hassan U.",
      work: "Event Organizer",
      image: icons.customer1,
      star: icons.star,
      remark:
        "RigitiX exceeded my expectations! The platform's efficiency in handling ticket sales and event management is unparalleled. A reliable choice for any event enthusiast.",
    },
    {
      name: "Joshua S.",
      work: "Event Organizer",
      image: icons.customer2,
      star: icons.star,
      remark:
        "RigitiX transformed my event game! Seamless ticketing and booking made my life easy. Kudos to the team for a fantastic platform!",
    },
    {
      name: "Joshua S.",
      work: "Event Organizer",
      image: icons.customer2,
      star: icons.star,
      remark:
        "RigitiX transformed my event game! Seamless ticketing and booking made my life easy. Kudos to the team for a fantastic platform!",
    },
    {
      name: "Mfoniso Ime",
      work: "Event Organizer",
      image: icons.customer3,
      star: icons.star,
      remark:
        "RigitiX made my event planning stress-free! From setting up to ticket sales, it's a breeze. A must-have for any event organizer in Nigeria",
    },
  ];

  return (
    <div className="relative w-full py-[137px]">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full opacity-[0.3]">
        <div className="flex w-full">
          <div className="bg-[#F87B07] basis-[33%] h-[303px] z-[-1] blur-[50px] opacity-[0.3]"></div>
          <div className="bg-[#EB018E] basis-[33%] h-[303px] z-[-1] blur-[50px] opacity-[0.3]"></div>
          <div className="bg-[#522672] basis-[33%] h-[303px] z-[-1] blur-[50px] opacity-[0.3]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="max-w-[60%] mx-auto text-[46px] text-[#101828] font-bold text-center leading-[50px]">
          Our clients have shared their experiences using this application
        </h2>

        {/* Scrollable Cards */}
        <div className="flex overflow-x-scroll hideScrollBar gap-6 flex-nowrap">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-[#333333] min-w-[388px] h-[308px] rounded-[20px] bg-white pt-[39px] px-[26px] pb-[35px] gap-4 flex flex-col items-start"
            >
              <div className="flex items-center gap-[6px]">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-[60px] w-[60px] rounded-full"
                />
                <div>
                  <p className="text-[18px] text-black font-semibold">
                    {client.name}
                  </p>
                  <p className="text-[14px] text-[#475467] font-semibold">
                    {client.work}
                  </p>
                </div>
              </div>
              <img src={client.star} alt="rating" />
              <p className="text-black font-normal">{client.remark}</p>
            </div>
          ))}
        </div>
        <div className="flex overflow-x-scroll hideScrollBar gap-6 flex-nowrap">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-[#333333] min-w-[388px] h-[308px] rounded-[20px] bg-white pt-[39px] px-[26px] pb-[35px] gap-4 flex flex-col items-start"
            >
              <div className="flex items-center gap-[6px]">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-[60px] w-[60px] rounded-full"
                />
                <div>
                  <p className="text-[18px] text-black font-semibold">
                    {client.name}
                  </p>
                  <p className="text-[14px] text-[#475467] font-semibold">
                    {client.work}
                  </p>
                </div>
              </div>
              <img src={client.star} alt="rating" />
              <p className="text-black font-normal">{client.remark}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import { icons } from "@/assets/asset";
import { useState } from "react";
const ExploreMore = () => {
  const [moreCat, setMoreCat] = useState([
    {
      cate: "AI",
      image: icons.explore6,
      totalEvent: "1k Events",
    },
    {
      cate: "Art & culture",
      image: icons.explore5,
      totalEvent: "77 Events",
    },
    {
      cate: "Climate",
      image: icons.explore4,
      totalEvent: "464 Events",
    },
    {
      cate: "Fitness",
      image: icons.explore3,
      totalEvent: "1k Events",
    },

    {
      cate: "Wellness",
      image: icons.explore2,
      totalEvent: "900 Events",
    },
    {
      cate: "Cryto",
      image: icons.explore1,
      totalEvent: "1k Events",
    },
  ]);
  return (
    <div className="px-[130px] py-[52px] flex flex-col gap-5">
      <h2 className="text-[32px] text-[#131517] font-semibold">
        Explore other categories
      </h2>
      <div className="flex flex-wrap gap-4">
        {moreCat.map((item, idx) => (
          <div
            key={idx}
            className="w-[252px] flex flex-col cursor-pointer hover:scale-[1.07] transition-all duration-500 text-left"
          >
            <img
              src={item.image}
              alt={item.cate}
              className="w-[60px] h-[60px]"
            />
            <h2 className="text-[18px] text-[#131517] font-medium">
              {item.cate}
            </h2>
            <p className="text-[14px] text-[#1315175C] font-normal">
              {item.totalEvent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;

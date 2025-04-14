import { useState } from "react";
import { icons } from "@/assets/asset";
import Button from "@/components/buttons/Button";
import avatarGroup from "@/assets/icons/AvatarGroup.png";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What makes rightX better than the others?",
    answer: "RightX provides better features and customer support.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime before the next billing cycle.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F87B070D] py-[96px] px-20 flex flex-col gap-[64px]">
      <div className="flex flex-col gap-5 items-center text-center">
        <h2 className="text-[36px] text-[#181D27] font-semibold">
          Frequently asked questions
        </h2>
        <p className="text-[20px] text-[#535862] font-normal">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:w-[50%] mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 flex flex-col gap-2"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between gap-6 items-center py-4 text-[18px] font-semibold text-[#181D27] cursor-pointer"
            >
              <p>{item.question}</p>
              <img
                src={
                  openIndex === index ? icons.dropdownOpen : icons.dropdownClose
                }
                alt=""
              />
            </div>
            {openIndex === index && (
              <p className="text-[#535862] text-[16px] py-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 justify-center items-center py-[31px] bg-[#F5F5F5] ">
        <img src={avatarGroup} alt="" />
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-[20px] text-[#181D27] font-medium">
            Still have questions?
          </h2>
          <p className="text-[#010204] text-[18px] font-normal">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <Button
          label="Contact us"
          className="bg-[#F87B07] py-3 px-6 rounded-[12px] text-white"
        />
      </div>
    </div>
  );
};

export default FaqSection;

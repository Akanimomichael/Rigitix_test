import { useParams } from "react-router-dom";
import { useEventContext } from "@/context/EventContext";
import Checkout from "@/components/Event/Checkout";
import MoreEvent from "@/components/Event/MoreEvent";
import Navbar from "@/components/Navbar";
import calender from "@/assets/icons/calendar.png";
import eventLocation from "@/assets/icons/event_location.png";
import Button from "@/components/buttons/Button";
import { useEffect } from "react";
const EventDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const { events } = useEventContext();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <p className="text-center text-gray-500 mt-10">Event not found.</p>;
  }
  const getOrganizerInitials = (name) => {
    if (!name) return ""; // Handle empty case
    const words = name.split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  return (
    <div>
      <div className="px-[120px]">
        <Navbar />
      </div>
      <div className="px-[202px] flex flex-col gap-7 mt-[52px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[379px] object-cover rounded-[20px]"
        />
        <div className="flex justify-between align-start gap-[75px]">
          <div className="flex flex-col gap-6 w-full basis-[65%]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] text-black font-bold">
                About this event
              </h2>
              <p className="text-[#333333] font-normal">{event.about}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] text-black font-bold">
                Date and Time
              </h2>
              <div className="flex items-start gap-3">
                <img src={calender} alt="" />

                <div className="flex gap-6">
                  <div className="flex flex-col items-center text-[#333333] text-[15px] font-normal gap-1">
                    <div className="rounded-[8px] flex border border-[#BBBBBB]">
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold bg-[#EDEDED] w-[44px] h-[44px]">
                        {event.month}
                      </div>
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold w-[44px] h-[44px]">
                        {event.day1}
                      </div>
                    </div>
                    <p>{event.startTime}</p>
                  </div>
                  {/* <div className="flex flex-col items-center text-[#333333] text-[15px] font-normal gap-1">
                    <div className="rounded-[8px] flex border border-[#BBBBBB]">
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold bg-[#EDEDED] w-[44px] h-[44px]">
                        {event.month}
                      </div>
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold  w-[44px] h-[44px]">
                        {event.day2}
                      </div>
                    </div>
                    <p>{event.startTime}</p>
                  </div>
                  <div className="flex flex-col items-center text-[#333333] text-[15px] font-normal gap-1">
                    <div className="rounded-[8px] flex border border-[#BBBBBB]">
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold bg-[#EDEDED] w-[44px] h-[44px]">
                        {event.month}
                      </div>
                      <div className="p-[10px] text-[16px] text-[#333333] font-semibold w-[44px] h-[44px]">
                        {event.day3}
                      </div>
                    </div>
                    <p>{event.startTime}</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] text-black font-bold">Location</h2>
              <div className="flex items-center gap-3">
                <img src={eventLocation} />
                <p className="text-[#333333] text-[14px] font-normal">
                  {event.location}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] text-black font-bold">
                Refund Policy
              </h2>

              <p className="text-[#333333] text-[14px] font-normal">
                Contact the organizer to request a refund.{" "}
                <strong>rigitiX</strong> platform fee is non-refundable.
              </p>
            </div>
            <div className="bg-[#F9FAFB] py-6 px-[30px] w-full flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#E5E5EA] text-[#333333] font-bold rounded-full text-[15px]">
                  {getOrganizerInitials(event.organizer)}
                </div>
                <p className="text-[#333333] font-bold">{event.organizer}</p>
              </div>
              <Button
                label="Follow"
                className="py-3 px-6 bg-[#F87B07] text-white rounded-[12px] text-white font-semibold text-[16px] border-none w-[206px]"
              />
            </div>
          </div>
          <div className="w-full basis-[30%]">
            <Checkout />
          </div>
        </div>
      </div>
      <MoreEvent />
    </div>
  );
};

export default EventDetails;

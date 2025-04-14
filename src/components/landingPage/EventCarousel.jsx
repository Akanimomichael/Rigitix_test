import { useEventContext } from "@/context/EventContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import people from "@/assets/icons/people.png";
import virtual from "@/assets/icons/virtual.png";
import heartIcon from "@/assets/icons/heart.png";
import ticket from "@/assets/icons/ticket-2.png";
import { useNavigate } from "react-router-dom";
import "./carousel.css";
import Button from "@/components/buttons/Button";

const EventCarousel = () => {
  const { events } = useEventContext();
  const navigate = useNavigate();

  console.log(event.image);

  return (
    <div className="w-full px-[105px] py-12">
      <div className="flex items-center justify-between mb-[64px]">
        <div className="flex flex-col gap-y-3">
          <p className="text-[16px] text-[#F87B07] font-semibold">Events</p>
          <h2 className="text-[36px] text-[#101828] font-semibold">
            Find events you're interested in
          </h2>
          <p className="text-[#475467] text-[18px]">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <Button
          label="See all"
          className="text-[16px] font-semibold cursor-pointer rounded-[12px] text-white bg-[#F87B07] border-none w-[175px]"
          onClick={() => navigate("/events")}
        />
      </div>
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1 }, // Small screens (sm)
          768: { slidesPerView: 2 }, // Medium screens (md)
          1024: { slidesPerView: 4 }, // Large screens (lg)
        }}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper pb-3"
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            className="bg-white shadow-md rounded-lg w-[286px] cursor-pointer h-[420px]"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[180px] object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2">
                <button className=" bg-white p-2 h-[36px] w-[36px] rounded-[10px] flex items-center justify-center">
                  <img src={heartIcon} alt="favourite" />
                </button>
              </div>
            </div>
            <div className="px-2 py-6 w-full">
              <h3 className="font-semibold text-[20px] text-[#101828] mt-2">
                {event.title}
              </h3>
              <p className="text-sm text-[#475467] font-normal mt-2">
                {event.location}
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="text-[12px] text-[#475467]">{event.time}</p>
                <div className="flex gap-1 items-center">
                  <img
                    src={event.viewTpe === "virtual" ? virtual : people}
                    alt="event"
                  />
                  <p className="text-[12px] font-medium">{event.viewType}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[12px] font-semibold">{event.price}</p>
                <p
                  className={`" font-semibold text-[12px]" ${
                    event.ticketStatus === "tickets available"
                      ? "text-[#2DBC66]"
                      : "text-[#F85A5A]"
                  }`}
                >
                  {event.ticketStatus}
                </p>
              </div>
              <button
                className={`mt-5 w-full p-[10px] text-white rounded rounded-[10px] bg-[#F87B07] flex justify-center gap-2 items-center`}
              >
                {event.buttonLabel === "Buy ticket" && (
                  <img src={ticket} alt="ticket" />
                )}
                {event.buttonLabel}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;

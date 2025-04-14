import { CalendarDays } from 'lucide-react'
import React from 'react'

const StepTwo = ({ handleNext }) => {
  return (
    <div className="w-[432px] mx-auto space-y-6 font-inter">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-left font-semibold text-[18px] leading-[28px]">
          Create a new event
        </h1>
        <p className="text-left font-normal text-[14px] leading-[20px]">
          Narrow down your search and find the perfect event faster.
        </p>
        <div className="text-right text-[16px] leading-[20px] font-normal">
          2 of 6
        </div>
      </div>

      {/* Actual form starts here */}
      <form className="space-y-5">
        {/* Name of Event */}
        <div>
          <label
            htmlFor="eventVenue"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            Venue of event
          </label>
          <div className="relative mt-1">
            <select
              id="eventVenue"
              name="eventVenue"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px] appearance-none bg-white text-[#333] cursor-pointer"
            >
              <option value="physical" className="text-sm p-2">
                Physical
              </option>
              <option value="virtual" className="text-sm p-2">
                Virtual
              </option>
            </select>

            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#666]"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Event Date */}
        <div>
          <label
            htmlFor="eventDate"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            Enter location
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="eventDate"
              name="eventDate"
              placeholder="123 Bob strt"
              className="w-full h-[56px] rounded-[18px] border border-[#666666]  px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>
        </div>

        {/* Ticket Price */}
        <div>
          <label
            htmlFor="ticketPrice"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            How much is a ticket?
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="ticketPrice"
              name="ticketPrice"
              placeholder="$ 60000"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>

          {/* Toggle Switch for Free Event */}
          <div className="mt-4 flex items-center gap-4">
            <label
              htmlFor="freeEvent"
              className="font-['Rota'] font-medium text-[14px] leading-[145%]"
            >
              My event is free
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="freeEvent"
                name="freeEvent"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#F87B07] transition-all duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Countdown (optional)*/}
        <div>
          <label
            htmlFor="eventDate"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            Event capacity (Total number of tickets to be sold)
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="Countdown"
              name="Countdown"
              placeholder="600"
              className="w-full h-[56px] rounded-[18px] border border-[#666666]  px-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          // type="submit"
          onClick={handleNext}
          className="w-full h-[56px] bg-[#F87B07] rounded-[8px] px-6 py-4 font-medium text-white"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default StepTwo
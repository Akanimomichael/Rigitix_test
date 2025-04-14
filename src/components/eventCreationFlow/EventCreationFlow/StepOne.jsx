import React from "react";
import { CalendarDays, Clock } from "lucide-react";

const StepOne = ({ handleNext }) => {
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
          1 of 6
        </div>
      </div>

      {/* Actual form starts here */}
      {/* <form className="space-y-5"> */}
      {/* Name of Event */}
      <div>
        <label
          htmlFor="eventName"
          className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
        >
          Name of event
        </label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          placeholder="Enter event name"
          className="w-full h-[56px] mt-1 rounded-[18px] border border-[#666666] px-4 py-4 font-['Rota'] font-medium text-[14px]"
        />
      </div>

      {/* Event Date */}
      <div>
        <label
          htmlFor="eventDate"
          className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
        >
          Date of event
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            placeholder="01/01/2025"
            className="w-full h-[56px] rounded-[18px] border border-[#666666] pl-10 pr-4 py-4 font-['Rota'] font-medium text-[14px]"
          />
          <CalendarDays
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={18}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Countdown (optional)*/}
      <div>
        <label
          htmlFor="eventDate"
          className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
        >
          Countdown (optional)
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            id="Countdown"
            name="Countdown"
            placeholder="01/01/2025"
            className="w-full h-[56px] rounded-[18px] border border-[#666666] pl-10 pr-4 py-4 font-['Rota'] font-medium text-[14px]"
          />
          <CalendarDays
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={18}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Start & End TIME Side-by-Side */}
      <div className="flex gap-3">
        <div className="w-1/2">
          <label
            htmlFor="startDate"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            Start time
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="startDate"
              name="startDate"
              placeholder="00:00:00                     pm "
              className="w-full h-[56px] rounded-[18px] border border-[#666666] pl-10 pr-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
            <Clock
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              size={18}
              strokeWidth={2}
            />
          </div>
        </div>

        <div className="w-1/2">
          <label
            htmlFor="endDate"
            className="block font-['Rota'] font-medium text-[14px] leading-[145%]"
          >
            End time
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="endDate"
              name="endDate"
              placeholder="00:00:00                     pm"
              className="w-full h-[56px] rounded-[18px] border border-[#666666] pl-10 pr-4 py-4 font-['Rota'] font-medium text-[14px]"
            />
            <Clock
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              size={18}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        // type="submit"
        onClick={() => {
          console.log("Going to next step...");
          handleNext();
        }}
        className="w-full h-[56px] bg-[#F87B07] rounded-[8px] px-6 py-4 font-medium text-white"
      >
        Next
      </button>
      {/* </form> */}
    </div>
  );
};

export default StepOne;

import { CalendarDays, CloudUpload } from 'lucide-react';
import React from 'react'

const StepThree = ({ handleNext }) => {
  return (
    <div className="w-[432px] mx-auto space-y-4 font-inter">
      {/* Header */}
      <h1 className="text-left font-semibold text-[18px] leading-[28px] tracking-[0%]">
        Create a new event
      </h1>

      {/* Subtext */}
      <p className="text-left font-normal text-[14px] leading-[20px] tracking-[0%]">
        Narrow down your search and find the perfect event faster.
      </p>

      {/* Page Counter */}
      <div className="text-right text-[16px] leading-[20px] font-normal tracking-[0%]">
        1 of 3
      </div>

      {/* Event Banner Upload */}
      <div>
        <label
          htmlFor="bannerUpload"
          className="block font-['Rota'] font-medium text-[14px] leading-[145%] mb-1"
        >
          Event banner
        </label>

        <label
          htmlFor="bannerUpload"
          className="flex flex-col items-center justify-center gap-1 w-full h-[180px] border border-dashed border-[#999] rounded-[18px] cursor-pointer text-center hover:bg-gray-50 transition-all px-4"
        >
          <CloudUpload className="text-[#666]" size={32} />
          <span className="text-[14px] text-[#333] font-medium">
            Click to upload
          </span>
          <span className="text-[12px] text-[#666] font-normal">
            or drag and drop, SVG, PNG, or JPG (max. 800x400px)
          </span>
          <input
            type="file"
            id="bannerUpload"
            name="bannerUpload"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
            className="hidden"
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="bannerUpload"
          className="block font-['Rota'] font-medium text-[14px] leading-[145%] mb-1"
        >
          Confirm design
        </label>

        <label
          htmlFor="bannerUpload"
          className="flex flex-col items-center justify-center gap-1 w-full h-[180px] border border-dashed border-[#999] rounded-[18px] cursor-pointer text-center hover:bg-gray-50 transition-all px-4"
        >
          <CloudUpload className="text-[#666]" size={32} />
          <span className="text-[14px] text-[#333] font-medium">
            Click to upload
          </span>
          <span className="text-[12px] text-[#666] font-normal">
            or drag and drop, SVG, PNG, or JPG (max. 800x400px)
          </span>
          <input
            type="file"
            id="bannerUpload"
            name="bannerUpload"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
            className="hidden"
          />
        </label>
      </div>

      {/* Submit Button */}
      <button
        // type="submit"
        onClick={handleNext}
        className="w-full h-[56px] bg-[#F87B07] rounded-[8px] px-6 py-4 font-medium text-white"
      >
        Next
      </button>
    </div>
  );
};

export default StepThree
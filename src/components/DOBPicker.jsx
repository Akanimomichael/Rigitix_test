import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DOBPicker.css";

const DOBPicker = ({ onChange, selectedDate }) => {
  const datePickerRef = useRef(null);

  // Get yesterday's date to disable today and future dates
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const handleDateChange = (date) => {
    if (!date) return;

    onChange(date);

    // Close the date picker manually
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Date of Birth</label>
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        shouldCloseOnSelect={true}
        maxDate={yesterday}
        placeholderText="Select Date of Birth"
        className="text-[#101928] text-[14px] font-medium border border-[#D0D5DD] rounded-[12px] p-4 outline-[#F87B07] w-full cursor-pointer"
      />
      {selectedDate && (
        <p className="text-sm text-gray-600">
          Selected: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default DOBPicker;

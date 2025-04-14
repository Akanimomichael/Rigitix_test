import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

// Font Awesome (if you want to use icons inline)
import "@fortawesome/fontawesome-free/css/all.min.css";

const EventFormStepOne = ({ onNext }) => {
  // State for the fields
  const [eventName, setEventName] = useState("");
  const [eventDateRange, setEventDateRange] = useState([null, null]);
  const [countdownDateRange, setCountdownDateRange] = useState([null, null]);
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");

  // Destructure date range values
  const [eventStartDate, eventEndDate] = eventDateRange;
  const [countdownStartDate, countdownEndDate] = countdownDateRange;

  const handleNext = () => {
    // Here you can handle validation or pass the data up to a parent component.
    // For example:
    const formData = {
      eventName,
      eventStartDate,
      eventEndDate,
      countdownStartDate,
      countdownEndDate,
      startTime,
      endTime,
    };

    // Call onNext or store formData somewhere
    if (onNext) {
      onNext(formData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Progress Indicator (Top Right) */}
        <div className="absolute top-4 right-6 text-sm text-gray-500">
          1 of 3
        </div>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Create a new event
        </h2>
        <p className="text-gray-500 mb-6">
          Narrow down your search and find the perfect event faster.
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name of Event */}
          <div>
            <label
              htmlFor="eventName"
              className="block text-gray-700 font-medium mb-1"
            >
              Name of event
            </label>
            <input
              id="eventName"
              type="text"
              placeholder="Example event"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          {/* Date of Event (Range) */}
          <div>
            <label
              htmlFor="eventDate"
              className="block text-gray-700 font-medium mb-1"
            >
              Date of event
            </label>
            <div className="relative">
              <i className="fas fa-calendar-alt absolute left-3 top-3 text-gray-400"></i>
              <DatePicker
                id="eventDate"
                className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
                placeholderText="01/01/2025 - 03/01/2025"
                selectsRange
                startDate={eventStartDate}
                endDate={eventEndDate}
                onChange={(update) => {
                  setEventDateRange(update);
                }}
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>

          {/* Countdown (Optional) (Range) */}
          <div>
            <label
              htmlFor="countdownDate"
              className="block text-gray-700 font-medium mb-1"
            >
              Countdown (optional)
            </label>
            <div className="relative">
              <i className="fas fa-calendar-alt absolute left-3 top-3 text-gray-400"></i>
              <DatePicker
                id="countdownDate"
                className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
                placeholderText="01/01/2025 - 03/01/2025"
                selectsRange
                startDate={countdownStartDate}
                endDate={countdownEndDate}
                onChange={(update) => {
                  setCountdownDateRange(update);
                }}
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>

          {/* Start Time & End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startTime"
                className="block text-gray-700 font-medium mb-1"
              >
                Start time
              </label>
              <div className="relative">
                <i className="fas fa-clock absolute left-3 top-3 text-gray-400"></i>
                <TimePicker
                  id="startTime"
                  className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
                  onChange={setStartTime}
                  value={startTime}
                  format="hh:mm a"
                  clearIcon={null}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="endTime"
                className="block text-gray-700 font-medium mb-1"
              >
                End time
              </label>
              <div className="relative">
                <i className="fas fa-clock absolute left-3 top-3 text-gray-400"></i>
                <TimePicker
                  id="endTime"
                  className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:border-blue-500"
                  onChange={setEndTime}
                  value={endTime}
                  format="hh:mm a"
                  clearIcon={null}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-6">
          <button
            onClick={handleNext}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFormStepOne;

import React, { useState } from "react";
import Cookies from "js-cookie";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate, faArrowTurnDown, faBackward, faBackwardStep, faPlus } from "@fortawesome/free-solid-svg-icons";


const steps = ["Event Info", "Location & Media", "Tickets", "Schedule"];

const EventForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    event_category: "",
    venue: "",
    location: "",
    isFree: false,
    banner: null,
    eventDate: "",
    eventTime: "",
    tickets: [{ categoryName: "", price: "", capacity: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      banner: file,
    });
  };

  const handleTicketChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTickets = [...formData.tickets];
    updatedTickets[index][name] = value;
    setFormData({
      ...formData,
      tickets: updatedTickets,
    });
  };

  const addTicket = () => {
    setFormData({
      ...formData,
      tickets: [
        ...formData.tickets,
        { categoryName: "", price: "", capacity: "" },
      ],
    });
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return (
          formData.eventName && formData.description && formData.event_category
        );
      case 1:
        return formData.venue && formData.location && formData.banner;
      case 2:
        return formData.tickets.every(
          (t) => t.categoryName && t.price && t.capacity
        );
      case 3:
        return formData.eventDate && formData.eventTime;
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("authToken");

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "tickets") formDataToSubmit.append(key, value);
    });

    formData.tickets.forEach((ticket, index) => {
      formDataToSubmit.append(
        `tickets[${index}][categoryName]`,
        ticket.categoryName
      );
      formDataToSubmit.append(`tickets[${index}][price]`, ticket.price);
      formDataToSubmit.append(`tickets[${index}][capacity]`, ticket.capacity);
    });

    try {
      const res = await fetch("https://test2.coderigi.online/api/events", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formDataToSubmit,
      });

      const result = await res.json();
        if (res.ok) {
          toast.success("Event created successfully!");

          // ✅ Reset form fields
          setFormData({
            eventName: "",
            description: "",
            event_category: "",
            venue: "",
            location: "",
            isFree: false,
            banner: null,
            eventDate: "",
            eventTime: "",
            tickets: [{ categoryName: "", price: "", capacity: "" }],
          });

          setCurrentStep(0); // Optional: go back to first step
        } else {
          toast.error(result.message || "Something went wrong");
        }
    } catch (error) {
      alert("Error creating event");
      console.error(error);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label>Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              className="input"
            />
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="input"
            />
            <label>Category</label>
            <input
              type="text"
              name="event_category"
              value={formData.event_category}
              onChange={handleInputChange}
              className="input"
            />
          </>
        );
      case 1:
        return (
          <>
            <label>Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              className="input"
            />
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="input"
            />
            <label>Event Banner</label>
            <input
              type="file"
              name="banner"
              onChange={handleFileChange}
              className="input"
            />
          </>
        );
      case 2:
        return (
          <>
            {formData.tickets.map((ticket, index) => (
              <div key={index} className="space-y-2  p-4 rounded-md">
                <label>Category Name</label>
                <input
                  type="text"
                  name="categoryName"
                  value={ticket.categoryName}
                  onChange={(e) => handleTicketChange(index, e)}
                  className="input"
                />
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={ticket.price}
                  onChange={(e) => handleTicketChange(index, e)}
                  className="input"
                />
                <label>Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={ticket.capacity}
                  onChange={(e) => handleTicketChange(index, e)}
                  className="input"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addTicket}
              className="btn-secondary mt-4 btn-secondary flex items-center gap-2"
            >
              Add More Tickets{" "}
              
                <Plus className="h-5 w-5 text-[#F87B07]" />
              
            </button>
            
          </>
        );
      case 3:
        return (
          <>
            <label>Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              className="input"
            />
            <label>Time</label>
            <input
              type="time"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleInputChange}
              className="input"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className=" flex justify-end py-6">
        <Link to={"register-event"}>
          <button className="mt-3 md:mt-0 inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
            {/* <FontAwesomeIcon icon={faArrowLeftRotate} className="mr-2" /> */}
            Back
          </button>
        </Link>
      </div>

      {/* Step Progress */}

      <div className="  mb-6 flex justify-around ml-20 items-center text-sm font-medium text-gray-500">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex items-center  ">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                index <= currentStep ? "bg-[#F87B07]" : "bg-[#F87B0733]"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 bg-[#F87B0733] mx-2">
                <div
                  className={`h-full ${
                    index < currentStep ? "bg-[#F87B07]" : ""
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 overflow-hidden  ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            className="space-y-4"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-6">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="btn-costume "
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              disabled={!isCurrentStepValid()}
              onClick={() => setCurrentStep(currentStep + 1)}
              className={`btn-primary ${
                !isCurrentStepValid() && "opacity-50 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isCurrentStepValid()}
              className="btn-primary"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EventForm;

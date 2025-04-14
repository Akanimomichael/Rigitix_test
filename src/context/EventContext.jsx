import { createContext, useContext, useEffect, useState } from "react";
import { icons } from "@/assets/asset";
import axios from "axios";
// import { useOrganizersContext } from "./OrganizersContext";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  //  const { organizers } = useOrganizersContext();

  //  console.log(organizers)

  // Fetch and transform event data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://test2.coderigi.online/api/get_events"
        );
        const apiEvents = response.data?.events || [];

        // ✅ Log raw data from API
        console.log("Raw events from API:", apiEvents);

        const transformed = apiEvents.map((event, index) => ({
          id: event.id,
          title: event.event_name,
          organizer: "rigitix", // Replace with actual organizer if available
          location: event.location || "Unknown venue",
          viewType: "physical", // Assuming it's physical for now
          time: formatDateTime(event.eventDate, event.eventTime),
          price: event.isFree ? "Free entry" : "Paid entry",
          image: `https://test2.coderigi.online/${event.banner}`,
          buttonLabel: event.isFree ? "Get ticket" : "Buy ticket",
          ticketStatus: "tickets available",
          about: event.description || "No description provided.",
          month: getMonthAbbreviation(event.eventDate),
          startTime: event.eventTime,
          day1: getDayFromDate(event.eventDate),
          day2: getDayFromDate(event.eventDate),
          day3: getDayFromDate(event.eventDate),
          tickets: event.tickets || [],
        }));

        // console.log(transformed);

        setEvents(transformed);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  const onClose = () => setIsFilterModalOpen(false);
  const onOpen = () => setIsFilterModalOpen(true);

  return (
    <EventContext.Provider
      value={{ events, setEvents, onOpen, onClose, isFilterModalOpen }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);

// Helpers
const getMonthAbbreviation = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "short" }); // e.g., "Apr"
};

const formatDateTime = (dateString, timeString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return `${formattedDate} | ${timeString}`; // e.g., "Apr 30 | 06:00 PM"
};

const getDayFromDate = (dateString) => {
  const date = new Date(dateString);
  return String(date.getDate()).padStart(2, "0"); // e.g., "30"
};




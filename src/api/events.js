// src/api/events.js
import fetchData from "./api";

// Fetch all events
export const getEvents = async () => {
  return await fetchData("get_events");
};

// Fetch event by ID
export const getEventById = async (eventId) => {
  return await fetchData(`get_events/${eventId}`);
};

// src/api/organizer.js
import fetchData from "./api";

// Fetch organizer details
export const getOrganizerDetails = async (organizerId) => {
  return await fetchData(`organizer/details/${organizerId}`);
};

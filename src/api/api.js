// src/api/api.js
const API_URL = process.env.REACT_APP_API_URL; // Store API URL in .env file

// Helper function to handle fetch requests
const fetchData = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json(); // Return JSON response
  } catch (error) {
    console.error("API Request failed:", error);
    throw error; // Pass error to be handled in the component
  }
};

export default fetchData;

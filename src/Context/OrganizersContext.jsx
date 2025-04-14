// import { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";

// // Create the context
// const OrganizersContext = createContext();

// // Provider component
// export const OrganizersProvider = ({ children,  }) => {
//   const [organizers, setOrganizers] = useState([]);
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

//   const token = Cookies.get("authToken");
//      const user_id = Cookies.get("userId");

//     //  console.log('from auth')
//     //  console.log(token)

//   // Fetch and transform organizer data
//   useEffect(() => {
//     const fetchOrganizers = async () => {
//       try {
//         const response = await axios.get(
//           `https://test2.coderigi.online/api/organizer/details?user_id=${user_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const apiOrganizers = response.data || [];

//         const transformed = apiOrganizers.map((org) => ({
//           id: org.id,
//           userId: org.user_id,
//           companyName: org.company_name,
//           brandName: org.brand_name || "N/A",
//           eventTypes: org.event_types.join(", "), // e.g. "Music, Business"
//           eventsPerYear: org.events_per_year,
//           isRecurring: org.is_recurring,
//           eventSize: org.event_size,
//           priority: org.priority,
//           country: org.country,
//           state: org.state,
//           createdAt: formatDate(org.created_at),
//           updatedAt: formatDate(org.updated_at),
//         }));

//         setOrganizers(transformed);
//         console.log(`this is console ${transformed}`)
//       } catch (error) {
//         console.error("Failed to fetch organizers:", error);
//       }
//     };

//     if (user_id && token) {
//       fetchOrganizers();
//     }
//   }, [user_id, token]);

//   const onClose = () => setIsFilterModalOpen(false);
//   const onOpen = () => setIsFilterModalOpen(true);

//   return (
//     <OrganizersContext.Provider
//       value={{ organizers, setOrganizers, onOpen, onClose, isFilterModalOpen }}
//     >
//       {children}
//     </OrganizersContext.Provider>
//   );
// };

// // Hook to consume the context
// export const useOrganizersContext = () => useContext(OrganizersContext);

// // Helpers
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   }); // e.g., "Apr 12, 2025"
// };



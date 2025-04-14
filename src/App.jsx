import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./auth/signup/SignUp";
import Signin from "./auth/signin/Signin";
import LandingPage from "./pages/unauthenticated/LandingPage";
import EventDetails from "./pages/unauthenticated/EventDetails";
import Events from "./pages/unauthenticated/Events";
import Home from "./pages/unauthenticated/Home";
import UserSetUp from "@/components/UserSetUp";
import ForgottenPassword from "./auth/PasswordReset/ForgottenPassword";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./components/UserDashboard/Dashboard";
import UserTicketsEmpty from "./components/UserDashboard/UserTicketsEmpty";
import UserTickets from "./components/UserDashboard/UserTickets";
import OrganizerDashboard from "./components/OrganizerDashboard/Dashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

import VendorSetup from "@/components/setup/VendorSetup";
import AttendeeSetup from "@/components/setup/AttendeeSetup";
import OrganizerSetup from "@/components/setup/OrganizerSetup";
import EventCreationFlow from "./components/eventCreationFlow/EventCreationFlow";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
import EventForm from "./components/eventCreationFlow/CreateEventDemo";
import { AuthProvider } from "./Context/AuthContext";
// import TicketSalesOverview from "./components/OrganizerDashboard/Dashboard/TicketSalesOverview";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { loginSuccess } from "./redux/slice/authSlice";


const USER_TYPES = {
  ORGANISER: 'organiser User',
  VENDOUR: 'vendor User',
  ATTENDEE: 'attendee User',
  PUBLIC: 'public User'
}

const CURRENT_USER_TYPE = USER_TYPES.PUBLIC

const App = () => {
  // const dispatch = useDispatch();

  // Load authentication state on mount
  // useEffect(() => {
  //   const token = Cookies.get("authToken");
  //   const userData = Cookies.get("userData");

  //   if (token && userData) {
  //     dispatch(loginSuccess(JSON.parse(userData))); // Restore authentication state
  //   }
  // }, [dispatch]);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);




  return (
    // <Router>
    //   <Routes>
    //     {/* Public Routes (Unauthenticated) */}
    //     <Route
    //       path="/sign-up"
    //       element={
    //         <PublicRoute>
    //           <SignUp />
    //         </PublicRoute>
    //       }
    //     />
    //     <Route
    //       path="/sign-in"
    //       element={
    //         <PublicRoute>
    //           <Signin />
    //         </PublicRoute>
    //       }
    //     />
    //     <Route path="/forgotten-password" element={<ForgottenPassword />} />
    //     <Route path="/setup-user" element={<UserSetUp />} />
    //     <Route path="/setup/Attendee" element={<AttendeeSetup />} />
    //     <Route path="/setup/Organizer" element={<OrganizerSetup />} />
    //     <Route path="/setup/vendor" element={<VendorSetup />} />

    //     {/* Landing and Event Pages (Public) */}
    //     <Route path="/" element={<LandingPage />}>
    //       <Route index element={<Home />} />
    //       <Route path="event/:id" element={<EventDetails />} />
    //       <Route path="events" element={<Events />} />
    //     </Route>

    //     {/* Attendee Dashboard (Protected with Role) */}
    //     <Route
    //       path="dashboard/Attendee"
    //       element={
    //         <ProtectedRoute allowedRoles={["Attendee"]}>
    //           <UserDashboard />
    //         </ProtectedRoute>
    //       }
    //     >
    //       <Route index element={<Dashboard />} />
    //       <Route path="ticket-empty" element={<UserTicketsEmpty />} />
    //       <Route path="my-tickets" element={<UserTickets />} />
    //     </Route>

    //     {/* Organizer Dashboard (Protected with Role) */}
    //     <Route
    //       path="dashboard/Organizer"
    //       element={
    //         <ProtectedRoute allowedRoles={["Organizer"]}>
    //           <UserDashboard />
    //         </ProtectedRoute>
    //       }
    //     >
    //       <Route index element={<OrganizerDashboard />} />
    //       {/* <Route path="register-event" element={<EventCreationFlow />} /> */}
    //       <Route path="register-event" element={<EventForm />} />
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {/* Public Routes (Unauthenticated) */}
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/setup-user" element={<UserSetUp />} />
        <Route path="/setup/Attendee" element={<AttendeeSetup />} />
        <Route path="/setup/Organizer" element={<OrganizerSetup />} />

        {/* Landing and Event Pages (Public) */}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="event/:id" element={<EventDetails />} />
          <Route path="events" element={<Events />} />
        </Route>

        {/* Attendee Dashboard (Protected) */}
        <Route
          path="dashboard/Attendee"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="ticket-empty" element={<UserTicketsEmpty />} />
          <Route path="my-tickets" element={<UserTickets />} />
        </Route>

        {/* Organizer Dashboard (Protected) */}
        <Route
          path="dashboard/Organizer"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<OrganizerDashboard />} />
          <Route path="register-event" element={<EventForm />} />
        </Route>
      </Routes>
    </Router>

    ///////////////////////
    // <Routes>
    //   {/* Public Routes (Unauthenticated) */}
    //   <Route
    //     path="/sign-up"
    //     element={
    //       <PublicRoute>
    //         <SignUp />
    //       </PublicRoute>
    //     }
    //   />
    //   <Route
    //     path="/sign-in"
    //     element={
    //       <PublicRoute>
    //         <Signin />
    //       </PublicRoute>
    //     }
    //   />
    //   <Route path="/forgotten-password" element={<ForgottenPassword />} />
    //   <Route path="/setup-user" element={<UserSetUp />} />
    //   <Route path="/setup/Attendee" element={<AttendeeSetup />} />
    //   <Route path="/setup/Organizer" element={<OrganizerSetup />} />
    //   <Route path="/setup/vendor" element={<VendorSetup />} />

    //   {/* Landing and Event Pages (Public) */}
    //   <Route path="/" element={<LandingPage />}>
    //     <Route index element={<Home />} />
    //     <Route path="event/:id" element={<EventDetails />} />
    //     <Route path="events" element={<Events />} />
    //   </Route>

    //   {/* Attendee Dashboard */}
    //   <Route
    //     path="dashboard/Attendee"
    //     element={
    //       <ProtectedRoute allowedRoles={["Attendee"]}>
    //         <UserDashboard />
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route index element={<Dashboard />} />
    //     <Route path="ticket-empty" element={<UserTicketsEmpty />} />
    //     <Route path="my-tickets" element={<UserTickets />} />
    //   </Route>

    //   {/* Organizer Dashboard */}
    //   <Route
    //     path="dashboard/Organizer"
    //     element={
    //       <ProtectedRoute allowedRoles={["Organizer"]}>
    //         <UserDashboard />
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route index element={<OrganizerDashboard />} />
    //     <Route path="register-event" element={<EventForm />} />
    //   </Route>

    //   {/* Vendor Dashboard */}
    //   <Route
    //     path="dashboard/Vendor"
    //     element={
    //       <ProtectedRoute allowedRoles={["Vendour"]}>
    //         <UserDashboard />
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route index element={<div>Vendor Dashboard Placeholder</div>} />
    //   </Route>
    // </Routes>

   

    ///////////////////////

    // <Router>
    //   <Routes>
    //     {/* Unauthenticated Routes */}
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/sign-in" element={<Signin />} />
    //     <Route path="/forgotten-password" element={<ForgottenPassword />} />
    //     <Route path="/setup-user" element={<UserSetUp />} />
    //     {/* Different setup pages */}
    //     {/* <Route path="/setup/vendor" element={<VendorSetup />} /> */}
    //     <Route path="/setup/Attendee" element={<AttendeeSetup />} />
    //     <Route path="/setup/Organizer" element={<OrganizerSetup />} />
    //     {/* Default Route */}
    //     <Route path="/" element={<LandingPage />}>
    //       <Route index element={<Home />} />
    //       <Route path="event/:id" element={<EventDetails />} />
    //       <Route path="events" element={<Events />} />
    //     </Route>
    //     <Route path="dashboard/Attendee" element={<UserDashboard />}>
    //       <Route path="" element={<Dashboard />} />
    //       <Route path="ticket-empty" element={<UserTicketsEmpty />} />
    //       <Route path="my-tickets" element={<UserTickets />} />
    //     </Route>
    //     <Route path="dashboard/Organizer" element={<UserDashboard />}>
    //       <Route path="" element={<OrganizerDashboard />} />
    //       {/* <Route path="" element={<TicketSalesOverview />} /> */}
    //       {/* <Route path="register-event" element={<EventCreationFlow />} /> */}
    //       <Route path="register-event" element={<EventForm />} />

    //       {/* <Route path="transactions" element={<TicketSalesOverview />} /> */}
    //     </Route>
    //   </Routes>
    // </Router>
  );
};

function PublicElement({childern}) {
  return<>{childern}</>
}
export default App;

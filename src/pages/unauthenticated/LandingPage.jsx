import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Header from "@/components/landingPage/Header";

import Footer from "@/components/landingPage/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <p>
        <Link to="dashboard">Link to user dashboard</Link>
      </p>
      <p>
        <Link to="dashboard/ticket-empty">Empty tickets</Link>
      </p>
      <p>
        <Link to="dashboard/my-tickets">My tickets</Link>
      </p>
      <p>
        <Link to="dashboard/Organizer">Organizer Dashboard</Link>
      </p>
    </div>
  );
};

export default LandingPage;

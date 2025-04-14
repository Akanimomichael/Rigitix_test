import React from "react";
import Sidebar from "../components/UserDashboard/Sidebar";
import Header from "../components/UserDashboard/Header";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* The rest of your app goes here */}
      <div className="flex-1 p-4">
        <Header />
        <div className="mt-5 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

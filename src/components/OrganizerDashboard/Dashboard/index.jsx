import React from "react";
import DashboardOverview from "./DashboardOverview";
import TicketSalesOverview from "./TicketSalesOverview";

const OrganizerDashboard = () => {
  return (
    <div className="space-y-3">
      <DashboardOverview />
      <TicketSalesOverview />
    </div>
  );
};

export default OrganizerDashboard;

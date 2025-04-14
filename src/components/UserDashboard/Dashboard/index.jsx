import React from "react";
import DashboardOverview from "./DashboardOverview";
import UpcomingEventsQuickAction from "./UpcomingEventsQuickAction";
import RecommendedOrganizers from "./RecommendedOrganizers";

const Dashboard = () => {
  return (
    <div className="space-y-12">
      <DashboardOverview />
      <UpcomingEventsQuickAction />
      <RecommendedOrganizers />
    </div>
  );
};

export default Dashboard;

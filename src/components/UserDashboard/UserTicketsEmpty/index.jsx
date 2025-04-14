import React from "react";
import MyTicketsEmptyState from "./MyTicketsEmptyState";
import EventsRow from "./EventsRow";

const UserTicketsEmpty = () => {
  return (
    <div className="space-y-8">
      <MyTicketsEmptyState />
      <EventsRow />
    </div>
  );
};

export default UserTicketsEmpty;

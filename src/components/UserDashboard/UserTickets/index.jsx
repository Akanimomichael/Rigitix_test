import React from "react";
import MyTicketsHeader from "./MyTicketsHeader";
import TicketList from "./TicketList";

const UserTickets = () => {
  return (
    <div className="space-y-8">
      <MyTicketsHeader />
      <TicketList />
    </div>
  );
};

export default UserTickets;

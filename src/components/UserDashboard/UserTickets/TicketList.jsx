import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { ArrowUpDown } from "lucide-react";
import image80 from "../../../assets/icons/image 80.png";
import qrcode from "../../../assets/icons/qr-code.png";
import TransferModal from "./TransferModal";
import ReceiptModal from "./ReceiptModal";

const tickets = [
  {
    id: "TKT-20250322-001",
    event: "Storm the yard",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:32AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-002",
    event: "Web3 Rants",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:24AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-003",
    event: "Storm the yard",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:32AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-004",
    event: "Web3 Rants",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:24AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-005",
    event: "Storm the yard",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:32AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-006",
    event: "Web3 Rants",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:24AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-008",
    event: "Storm the yard",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:32AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  {
    id: "TKT-20250322-009",
    event: "Web3 Rants",
    organizer: "furs&paws events",
    date: "Apr 12, 2025 09:24AM",
    qrCode: qrcode, // Placeholder for QR code
    image: image80,
  },
  // Add more tickets here...
];

export default function TicketList() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const toggleTransferModal = () =>
    setIsTransferModalOpen(!isTransferModalOpen);
  const toggleReceiptModal = () => setIsReceiptModalOpen(!isReceiptModalOpen);

  return (
    <div className="w-full bg-white">
      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={toggleTransferModal}
        onConfirm={toggleTransferModal}
      />
      <ReceiptModal isOpen={isReceiptModalOpen} onClose={toggleReceiptModal} />
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        {/* Tabs */}
        <div className="flex space-x-6 text-lg font-medium">
          {["Upcoming", "Past", "Canceled"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 text-black font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Transfer Ticket Button */}
        <button className="flex items-center gap-2 border border-black rounded-lg px-4 py-2 text-black">
          <ArrowUpDown size={18} />
          Transfer ticket
        </button>
      </div>
      <div className="flex border-b p-4 text-gray-600 rounded-tl-lg rounded-tr-lg bg-[#F0F2F5] font-medium">
        <span className="w-1/2">Event</span>
        <span className="w-1/4">Ticket ID</span>
        <span className="w-1/6">QR Code</span>
        <span className="w-1/6">Date</span>
      </div>
      {tickets.map((ticket, index) => (
        <div
          key={ticket.id}
          className={`flex items-center p-4 border-b ${
            selected === index ? "bg-orange-100" : ""
          }`}
        >
          <input type="checkbox" className="mr-2" />
          <img
            src={ticket.image}
            alt={ticket.event}
            className="w-12 h-12 rounded-md mr-4"
          />
          <div className="w-1/2">
            <p className="text-gray-900 font-medium">{ticket.event}</p>
            <p className="text-gray-500 text-sm">{ticket.organizer}</p>
          </div>
          <div className="w-1/4 text-gray-600">{ticket.id}</div>
          <div className="w-1/6">
            <img src={ticket.qrCode} alt="QR Code" className="w-6 h-6" />
          </div>
          <div className="w-1/6 text-gray-600">{ticket.date}</div>
          <Menu as="div" className="relative">
            <Menu.Button onClick={() => setSelected(index)}>
              <DotsVerticalIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } w-full text-left px-4 py-2 text-sm text-gray-700`}
                      onClick={toggleTransferModal}
                    >
                      View Ticket
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } w-full text-left px-4 py-2 text-sm text-gray-700`}
                      onClick={toggleReceiptModal}
                    >
                      Download
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button className="px-3 py-1 border rounded-md">&lt;</button>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border rounded-md ${
              page === 3 ? "bg-orange-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 border rounded-md">&gt;</button>
      </div>
    </div>
  );
}

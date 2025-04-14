import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import image80 from "../../../assets/icons/image 80.png";
import qrcodePurple from "../../../assets/icons/qr-code-purple.png";

const ReceiptModal = ({
  isOpen,
  onClose,
  // You can pass ticket data, attendee info, etc., as props if needed
}) => {
  const printRef = useRef(null);

  // Function to download the modal content as PDF (excluding the download button)
  const handleDownloadPdf = async () => {
    if (!printRef.current) return;

    try {
      // Hide the download button temporarily for the screenshot
      const downloadButton = document.getElementById("download-btn");
      if (downloadButton) {
        downloadButton.style.display = "none";
      }

      // Use html2canvas to convert the modal content to a canvas
      const canvas = await html2canvas(printRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      // Restore the download button after capturing
      if (downloadButton) {
        downloadButton.style.display = "inline-flex";
      }

      // Create a new jsPDF instance
      const pdf = new jsPDF({
        orientation: "p", // portrait
        unit: "pt",
        format: "a4",
      });

      // Calculate image dimensions to fit the PDF page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("ticket-receipt.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-4">
      {/* Scrollable Container */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-lg">
        {/* Close Button (top-right) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon size="xl" icon={faTimes} />
        </button>

        {/* Content to Print (wrapped in ref) */}
        <div ref={printRef} className="py-6 pt-10 px-3">
          {/* Header Section */}
          <div className="text-white bg-[#522672] rounded-tr-lg rounded-tl-lg px-4 py-6">
            <h2 className="font-medium">Event Ticket Receipt</h2>
            <p className="text-sm">#TKT-2025-WIZ-00123</p>
          </div>

          {/* Purple Banner */}
          <div className="mb-4 w-full bg-[#E9D5FF] p-3 flex flex-col items-center space-y-3">
            <img
              src={image80}
              alt="Ticket Image"
              className="w-14 h-14 object-cover rounded"
            />
            <h3 className="text-base font-semibold text-purple-900">
              Wizkid Live Concert 2025
            </h3>
          </div>
          <div className="divide-y-2 divide-dashed px-4">
            {/* Recipient Details */}
            <div className="pb-6">
              <h4 className="mb-4 font-semibold text-[#8B949E]">
                Recipient Details
              </h4>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  <strong className="text-[#8B949E]">Attendee:</strong> Tena
                  Gopregha
                </p>
                <p>
                  <strong className="text-[#8B949E]">Email Address:</strong>{" "}
                  tena@digitX.dev
                </p>
                <p>
                  <strong className="text-[#8B949E]">Date &amp; Time:</strong>{" "}
                  April 15, 2025 | 7:00 PM
                </p>
                <p>
                  <strong className="text-[#8B949E]">Venue:</strong> Convention
                  Center, Lagos
                </p>
                <p>
                  <strong className="text-[#8B949E]">Ticket Type:</strong> VIP
                </p>
                <p>
                  <strong className="text-[#8B949E]">Amount:</strong> $20
                </p>
                <p>
                  <strong className="text-[#8B949E]">Payment Method:</strong>{" "}
                  Crypto (USDT - TRC20)
                </p>
                <p>
                  <strong className="text-[#8B949E]">Receipt ID:</strong>{" "}
                  REC-20250322-001
                </p>
              </div>
            </div>

            {/* QR Code (Placeholder) */}
            <div className="py-4 flex justify-center">
              <img
                src={qrcodePurple}
                alt="qr code"
                className="w-20 h-20 object-cover"
              />
            </div>

            {/* Important Information */}
            <div className="pt-6">
              <h4 className="mb-2 font-medium text-gray-800">
                Important Information
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>This ticket is non-refundable.</li>
                <li>Please arrive 30 minutes early for check-in.</li>
                <li>Scan the QR code at the entrance for access.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button (excluded from PDF) */}
        <div className="sticky bottom-0 flex justify-center pb-4">
          <button
            id="download-btn"
            onClick={handleDownloadPdf}
            className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TransferModal = ({
  isOpen,
  onClose,
  onConfirm,
  // Optional: you can pass ticket info, or other props if needed
}) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal Container */}
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col items-start space-y-2">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="text-gray-700 border p-3 rounded"
            />
            <h2 className="text-lg font-medium text-gray-900">
              Add a new recipient
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-600">
          Your ticket for <strong>Stomp the yard</strong> will be transferred to
          the recipient whose details you will input.
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="recipientName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Recipient&apos;s Name
            </label>
            <input
              type="text"
              id="recipientName"
              placeholder="Enter recipient's name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="emailAddress"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Enter recipient's email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="recipientPhone"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Recipient&apos;s Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="recipientPhone"
              placeholder="Enter recipient's phone number (Optional)"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="transferReason"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Reason for Transfer (Optional)
            </label>
            <input
              type="text"
              id="transferReason"
              placeholder="Enter reason for transfer (Optional)"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Confirm transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;

import { useState, useEffect } from "react";

const FilterModal = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    popularity: [],
    categories: [],
  });

  const popularityOptions = [
    "Trending now",
    "Featured",
    "Most booked",
    "Most discussed",
  ];
  const categoryOptions = [
    "Music & Entertainment",
    "Conferences & Business",
    "Workshops & Learning",
    "Sports & Fitness",
    "Arts & Culture",
    "Nightlife & Social",
    "Web3 & Tech Events",
    "Community & Charity",
    "Travel & Outdoor",
    "Virtual & Hybrid Events",
  ];

  // Close modal on clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.id === "modal-overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, onClose]);

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const updatedList = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];

      return { ...prev, [type]: updatedList };
    });
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50 top-0 left-0"
    >
      <div className="bg-white p-6 rounded-lg w-[350px] shadow-lg max-h-[95vh] overflow-y-scroll mr-[50px]">
        <h2 className="text-lg text-left font-bold mb-2">Filter Options</h2>
        <p className="text-sm text-left text-gray-500 mb-4">
          Narrow down your search and find the perfect event faster.
        </p>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Price</h3>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Minimum amount"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
              className="border p-2 rounded w-full text-sm"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Maximum amount"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
              className="border p-2 rounded w-full text-sm"
            />
          </div>
        </div>

        {/* Popularity */}
        <div className="mb-4">
          <h3 className="font-semibold">Popularity</h3>
          {popularityOptions.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.popularity.includes(item)}
                onChange={() => handleCheckboxChange("popularity", item)}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Event Categories */}
        <div className="mb-4">
          <h3 className="font-semibold">Event Category</h3>
          {categoryOptions.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.categories.includes(item)}
                onChange={() => handleCheckboxChange("categories", item)}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className=" mt-8">
          <button className="bg-[#F87B07] text-white text-[14px] px-4 py-3 rounded-[8px] w-full">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

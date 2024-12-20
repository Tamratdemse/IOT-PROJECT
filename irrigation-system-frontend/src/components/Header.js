import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      <input
        type="text"
        placeholder="Search any content"
        className="px-4 py-2 border rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search content"
      />

      <div className="flex items-center space-x-4">
        <Link
          to="notification"
          className="relative bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </Link>

        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <Link to="viewprofile">
            <img
              src="/asset/farmer1.png"
              alt="User Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

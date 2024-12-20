import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function Settings() {
  const getNavLinkClass = (isActive, activeClass, defaultClass) =>
    isActive
      ? `${activeClass} font-bold`
      : `${defaultClass} hover:text-blue-600`;
  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="w-full md:w-1/4 flex flex-col items-start shadow-lg p-4 bg-gray-100">
        <nav className="w-full space-y-4">
          <div className="flex items-center gap-3">
            <IoPersonSharp
              className="text-2xl cursor-pointer"
              aria-label="Account Settings"
            />
            <NavLink
              to=""
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  "text-blue-600 text-xl",
                  "text-gray-700 text-xl"
                )
              }
            >
              Account
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <IoIosNotificationsOutline
              className="text-2xl cursor-pointer"
              aria-label="Notifications Settings"
            />
            <NavLink
              to="notification"
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  "text-blue-600 text-xl",
                  "text-gray-700 text-xl"
                )
              }
            >
              Notifications
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <MdDeleteOutline
              className="text-2xl cursor-pointer"
              aria-label="Delete Account"
            />
            <NavLink
              to="delete"
              className={({ isActive }) =>
                getNavLinkClass(
                  isActive,
                  "text-red-600 text-xl",
                  "text-gray-700 text-xl"
                )
              }
            >
              Delete Account
            </NavLink>
          </div>

          <div className="border-t-2 pt-4 mt-4 w-full">
            <NavLink
              to="view"
              className={({ isActive }) =>
                getNavLinkClass(isActive, "text-blue-500", "text-gray-700")
              }
            >
              View Profile
            </NavLink>
          </div>
        </nav>
      </div>

      <div className="w-full md:w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;

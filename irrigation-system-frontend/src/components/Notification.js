import React, { useState } from "react";

function Notification() {
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const handleToggle = () => {
    setIsNotificationOn((prevState) => !prevState);
    console.log(`Notifications turned ${!isNotificationOn ? "On" : "Off"}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        IoT-Enabled Agriculture: Notification Settings
      </h2>
      <p className="mb-4 text-gray-700">
        Manage your real-time notifications for updates from IoT sensors, such
        as soil moisture levels, temperature changes, or equipment status.
      </p>
      <div className="flex items-center gap-6">
        <span className="text-lg font-medium">
          Notifications:{" "}
          <span
            className={`${
              isNotificationOn ? "text-green-600" : "text-gray-500"
            }`}
          >
            {isNotificationOn ? "On" : "Off"}
          </span>
        </span>
        <button
          onClick={handleToggle}
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isNotificationOn
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          {isNotificationOn ? "Turn Off" : "Turn On"}
        </button>
      </div>

      {isNotificationOn && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            Recent Notifications
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Soil moisture below threshold in Field A.</li>
            <li>Temperature sensor in Greenhouse 1 exceeded 35°C.</li>
            <li>Water pump status: Operational.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;

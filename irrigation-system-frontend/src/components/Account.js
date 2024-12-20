import React, { useState } from "react";

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChangePasswordClick = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleCancelPasswordChange = () => {
    setIsChangingPassword(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Account Settings
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          {isEditing ? (
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-1/4">
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg w-1/4"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">First Name: John</p>
              <p className="text-gray-600 mb-2">Middle Name: Doe</p>
              <p className="text-gray-600 mb-2">Last Name: Smith</p>
              <p className="text-gray-600 mb-2">Email: john.doe@example.com</p>
              <p className="text-gray-600 mb-4">Phone: 0918058980</p>
              <button
                onClick={handleEditClick}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-1/4"
              >
                Edit
              </button>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Change Password
          </h2>
          {isChangingPassword ? (
            <div className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Current Password"
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-1/4">
                  Change
                </button>
                <button
                  onClick={handleCancelPasswordChange}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg w-1/4"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-4">******</p>
              <button
                onClick={handleChangePasswordClick}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-1/4"
              >
                Change Password
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Account;

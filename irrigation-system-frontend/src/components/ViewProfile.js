import React from "react";

const ViewProfile = () => {
  const user = {
    firstName: "Sam",
    lastName: "Lanson",
    username: "@samlanson",
    email: "sam@abc.com",
    phoneNumber: "0918058980",
    birthday: "12/12/1990",
    profilePicture: "/path/to/profile-picture.jpg",
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h1>
      <div className="flex items-center mb-6">
        <img
          src="/asset/farmer1.png"
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">{user.username}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center">
          <span className="font-medium w-1/3 text-gray-600">Email:</span>
          <span className="text-gray-800">{user.email}</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-medium w-1/3 text-gray-600">Phone Number:</span>
          <span className="text-gray-800">{user.phoneNumber}</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="font-medium w-1/3 text-gray-600">Birthday:</span>
          <span className="text-gray-800">{user.birthday}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

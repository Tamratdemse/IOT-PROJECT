import React, { useState } from "react";
import {
  FaRegSadTear,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState({
    backup: false,
    dataLoss: false,
    agree: false,
  });
  const allChecked = isChecked.backup && isChecked.dataLoss && isChecked.agree;

  const handleCheckboxChange = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.name]: e.target.checked,
    });
  };

  const handleClick = () => {
    alert("Your Account has been deleted successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
        <h1 className="font-mono text-6xl text-center text-gray-800 mb-5">
          We are sorry to see you go!{" "}
          <FaRegSadTear className="inline-block text-red-500" />
        </h1>
        <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
          Before you go...
        </h2>

        <div className="flex flex-col gap-4 mb-6">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="backup"
              checked={isChecked.backup}
              onChange={handleCheckboxChange}
              className="mr-3 accent-blue-500"
            />
            <span className="text-lg">
              Take a backup of your data!{" "}
              <FaCheckCircle className="inline-block text-green-500" />
            </span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="dataLoss"
              checked={isChecked.dataLoss}
              onChange={handleCheckboxChange}
              className="mr-3 accent-red-500"
            />
            <span className="text-lg">
              If you delete your account, you will lose all your data!{" "}
              <FaExclamationCircle className="inline-block text-yellow-500" />
            </span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="agree"
              checked={isChecked.agree}
              onChange={handleCheckboxChange}
              className="mr-3 accent-green-500"
            />
            <span className="text-lg">Agree to delete the account.</span>
          </label>
        </div>

        <div className="flex justify-between gap-5 pt-4">
          <button className="bg-green-500 text-white rounded-xl w-40 h-12 hover:bg-green-600 transition duration-300">
            Back
          </button>
          <button
            className={`bg-red-700 text-white rounded-xl w-40 h-12 hover:bg-red-800 transition duration-300 ${
              !allChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!allChecked}
            onClick={handleClick}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;

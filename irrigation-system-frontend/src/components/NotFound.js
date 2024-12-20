import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you requested does not exist.
        </p>
        <a
          href="/"
          className="inline-block text-blue-500 hover:text-blue-700 text-lg font-semibold"
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;

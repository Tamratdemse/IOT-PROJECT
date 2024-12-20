import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FieldsView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const field = location.state?.field;

  if (!field) {
    return <div>Field not found</div>;
  }
  const imgURL = "http://localhost:5000";

  const handleBack = () => {
    navigate("/fields");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{field.name} - Details</h2>
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <p className="text-lg">Crop: {field.crop}</p>
          <p className="text-lg">Area: {field.area}</p>
          <p className="text-lg">Status: {field.status}</p>
          {field.overview && <p className="mt-4 text-lg">{field.overview}</p>}
        </div>
        {field.photo && (
          <div className="flex-shrink-0">
            <img
              src={imgURL + field.photo}
              alt={field.name}
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
      <button
        onClick={handleBack}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
      >
        Back to Fields
      </button>
    </div>
  );
};

export default FieldsView;

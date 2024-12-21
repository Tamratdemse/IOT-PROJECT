import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

const BASE_URL = "http://localhost:5000/api";
const CropDetails = () => {
  const { id } = useParams();
  const [cropDetails, setCropDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCropDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/crop/${id}`);
        console.log("Response data:", response.data);
        setCropDetails(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch crop details");
      }
    };

    fetchCropDetails();
  }, [id]);

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (!cropDetails) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {cropDetails.name} Details
      </h2>
      <div className="p-6">
        <WeatherForecast location={cropDetails.fields[0].location} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <p>
            <strong>Temperature:</strong> {cropDetails.temperature}
          </p>
          <p>
            <strong>Water Level:</strong> {cropDetails.waterLevel}
          </p>
          <p>
            <strong>Soil pH:</strong> {cropDetails.soilPH}
          </p>
          <p>
            <strong>Light Intensity:</strong> {cropDetails.light}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h3 className="text-2xl font-bold mb-4">Fields</h3>
          {cropDetails.fields.map((field) => (
            <div key={field._id} className="p-4 border rounded-lg">
              <p>
                <strong>Field Name:</strong> {field.name}
              </p>
              <p>
                <strong>Location:</strong> {field.location}
              </p>
              <p>
                <strong>Area:</strong> {field.area}
              </p>
              <p>
                <strong>Soil Type:</strong> {field.soilType}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropDetails;

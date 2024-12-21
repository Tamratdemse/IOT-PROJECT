import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FieldsView from "./FieldsView";

const imgURL = "http://localhost:5000";
const BASE_URL = "http://localhost:5000/api";

const Fields = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]); // Initialize as an empty array
  const [newField, setNewField] = useState({
    name: "",
    crop: "",
    area: "",
    location: "",
    status: "Active",
    photo: null,
  });
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch fields data from the database
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/fields`);
        setFields(response.data);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchFields();
  }, []);

  const handleView = (field) => {
    navigate("/view", { state: { field } });
  };

  const handleDelete = async (fieldId) => {
    try {
      await axios.delete(`${BASE_URL}/fields/${fieldId}`);
      setFields(fields.filter((field) => field.id !== fieldId));
      // auto refration the components after deleting
      const response = await axios.get(`${BASE_URL}/fields`);
      setFields(response.data);
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };

  const handleChangeNewField = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setNewField({ ...newField, photo: files[0] });
    } else {
      setNewField({ ...newField, [name]: value });
    }
  };

  const handleAddNewField = async () => {
    const formData = new FormData();

    if (
      !newField.name ||
      !newField.crop ||
      !newField.area ||
      !newField.location ||
      !newField.status ||
      !newField.photo
    ) {
      alert("All fields are required!");
      return;
    }

    formData.append("name", newField.name);
    formData.append("crop", newField.crop);
    formData.append("area", newField.area);
    formData.append("location", newField.location);
    formData.append("status", newField.status);
    formData.append("photo", newField.photo);

    try {
      const response = await axios.post(`${BASE_URL}/fields`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        const addedField = response.data;
        setFields([...fields, addedField]);
        setNewField({
          name: "",
          crop: "",
          area: "",
          location: "",
          status: "Active",
          photo: null,
        });
        setShowAddForm(false);
      } else {
        console.error("Error adding new field:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding new field:", error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Fields Management</h2>

      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-6"
      >
        {showAddForm ? "Cancel" : "Add New Field"}
      </button>

      {showAddForm && (
        <div className="bg-gray-100 p-6 rounded shadow-md mt-6">
          <h3 className="text-2xl font-bold mb-4">Add New Field</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Field Name
            </label>
            <input
              type="text"
              name="name"
              value={newField.name}
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Crop
            </label>
            <input
              type="text"
              name="crop"
              value={newField.crop}
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Area
            </label>
            <input
              type="text"
              name="area"
              value={newField.area}
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={newField.location}
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={newField.status}
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChangeNewField}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAddNewField}
          >
            Add New Field
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.id} className="border rounded p-4 shadow-md">
            <img
              src={imgURL + field.photo}
              alt={field.name}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold">{field.name}</h3>
            <p>{field.crop}</p>
            <p>{field.area}</p>
            <p>{field.status}</p>
            <button
              onClick={() => handleView(field)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
            >
              View
            </button>
            <button
              onClick={() => handleDelete(field._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-2 ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fields;

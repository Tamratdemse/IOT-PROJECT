import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const imgURL = "http://localhost:5000";

const Dashboard = () => {
  const [crops, setCrops] = useState([]);

  // Fetch crops data from the backend when the component mounts
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/fields`);
        setCrops(response.data);
      } catch (error) {
        console.error("Error fetching crops data:", error);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <motion.div
          className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          {crops.map((crop) => (
            <Link
              to={{
                pathname: `/crop/${crop._id}`, // Navigate to crop detail page
                state: { crop }, // Passing the entire crop object here
              }}
              key={crop._id}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                }}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out"
              >
                <motion.img
                  src={imgURL + crop.photo} // Dynamically set image source based on the crop's image URL
                  alt={`${crop.name} crop`}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
                <motion.h3 className="absolute bottom-4 left-4 text-lg font-medium text-white group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
                  {crop.name}
                </motion.h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;

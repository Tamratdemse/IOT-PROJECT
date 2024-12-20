import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const cropData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Wheat (tons)",
        data: [30, 40, 55, 50, 70, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Rice (tons)",
        data: [20, 30, 40, 45, 60, 80],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Maize (tons)",
        data: [25, 35, 45, 40, 50, 65],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const temperatureData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [20, 22, 25, 28, 30, 32],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const waterLevelData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Water Level (cm)",
        data: [100, 95, 90, 85, 80, 75],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Analytics Dashboard
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Crop Production
        </h2>
        <Bar
          data={cropData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Temperature Trends
        </h2>
        <Line
          data={temperatureData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Water Level Trends
        </h2>
        <Line
          data={waterLevelData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;

import React from "react";
import { Chart } from "react-google-charts";

export default function Analytics() {
  const data = [
    ["User Type", "Collaborations"],
    ["Investors", 11],
    ["Land Owners", 7],
    ["Farmers", 25],
    ["Agritech Experts", 18],
    ["Graduates", 15],
    ["Buyers", 20],
  ];

  const options = {
    title: "Collaborations by User Type",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} />
    </div>
  );
}

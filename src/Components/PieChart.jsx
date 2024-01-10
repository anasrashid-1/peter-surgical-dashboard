import React from "react";
import { Box } from "@chakra-ui/react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const PieChart = ({ db }) => {
  const adaniData = db.filter((item) => item.suppliRE === 'Adani');
  const totalAdaniRevenue = adaniData.reduce((total, item) => {
    return total + (isNaN(item.revenue) ? 0 : item.revenue);
  }, 0);

  const relianceData = db.filter((item) => item.suppliRE === 'Reliance');
  const totalRelianceRevenue = relianceData.reduce((total, item) => {
    return total + (isNaN(item.revenue) ? 0 : item.revenue);
  }, 0);

  const rezData = db.filter((item) => item.suppliRE === 'Rezicure');
  const totalRezRevenue = rezData.reduce((total, item) => {
    return total + (isNaN(item.revenue) ? 0 : item.revenue);
  }, 0);

  const ruzData = db.filter((item) => item.suppliRE === 'Ruzette');
  const totalRuzRevenue = ruzData.reduce((total, item) => {
    return total + (isNaN(item.revenue) ? 0 : item.revenue);
  }, 0);

  console.log(totalAdaniRevenue);

  const data = {
    labels: ['Adani', 'Reliance', 'Rezicure', 'Ruzette'],
    datasets: [
      {
        data: [totalAdaniRevenue, totalRelianceRevenue, totalRezRevenue, totalRuzRevenue ],
        backgroundColor: ["green", "blue", "purple", "pink" ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <Box>
      <Pie data={data} options={options} />
    </Box>
  );
};

export default PieChart;

import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJs,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJs.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BarChart = ({ db }) => {
  const test = db.filter((item) => item.year === 2023).map((item) => item.emissions);
  console.log(test);

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
    ],
    datasets: [
    
      // {
      //   type: "line",
      //   label: "RE-2023",
      //   data: db.filter((item) => item.year === 2023).map((item) => item.revenue),
      //   borderColor: "orange",
      //   borderWidth: 2,
      //   pointRadius: 5,
      // },
      {
        type: "bar",
        label: "Emissions-2022",
        data: db.filter((item) => item.year === 2022).map((item) => item.emissions),
        backgroundColor: "purple",
        borderWidth: 2,
        borderRadius: 0,
      },
      {
        type: "bar",
        label: "Emissions-2023",
        data: db.filter((item) => item.year === 2023).map((item) => item.emissions),
        backgroundColor: "green",
        borderWidth: 2,
        borderRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max:30000,
      },
    },
  };


  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;


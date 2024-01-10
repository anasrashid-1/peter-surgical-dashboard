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

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "line",
        label: "369",
        data: [3, 6, 9],
        fill: false,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 5,
      },
      {
        type: "bar",
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  };

  const options = {};

  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;

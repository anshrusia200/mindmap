import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Positive", "Negative", "Comments"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [11212, 10453, 10212],
      borderColor: "#00CADC",
      backgroundColor: "#00CADC",
    },
  ],
};

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

export default function Modal() {
  return (
    <div className="modal">
      <Bar data={data} options={options} />
      <p className="modal-p">Total reviews</p>
      <p className="modal-p">Positive reviews</p>
      <p className="modal-p">Negative reviews</p>
      <p className="modal-p">Comment reviews</p>
    </div>
  );
}

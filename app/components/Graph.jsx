import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  annotationPlugin
);

const ComparisonGraph = ({ percentile, averagePercentile = 72 }) => {
  const data = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [
      {
        label: "Number of Students",
        data: [5, 10, 15, 40, 70, 90, 50, 30, 20, 4, 2],
        fill: false,
        borderColor: "#6366F1",
        pointBackgroundColor: "white",
        pointBorderColor: "#6366F1",
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `Number of Students: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          autoSkip: true,
        },
        grid: {
          display: false,
          drawBorder: true,
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const labelPosition = (percentile / 100) * 100;

  return (
    <div className="p-6 bg-white border-[1px] rounded-lg">
      <h2 className="text-[1rem] font-bold mb-6">Comparison Graph</h2>
      <div className="flex justify-between">
        <p className="text-gray-700 mb-8">
          <span className="font-bold">You scored {percentile}% percentile</span>{" "}
          which is lower than the
          <br />
          average percentile of {averagePercentile}% for engineers who took this
          assessment
        </p>
        <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gray-100 text-[1.3rem]">
          📈
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-4">
        <Line data={data} options={options} />
        <div
          className="absolute"
          style={{
            left: `${labelPosition}%`,
            top: 0,
            height: "90%",
            width: "1px",
            backgroundColor: "lightgray",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="absolute text-gray-500 text-sm"
          style={{
            left: `${labelPosition}%`,
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Your Percentile
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;

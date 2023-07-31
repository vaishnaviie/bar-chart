import "./App.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function App() {
  const obj = {
    labels: [2015, 2016, 2017, 2018, 2019, 2020],
    datasets: [
      {
        label: "Profit chartBar",
        data: [1000, 500, 300, 800, 10, 900],
        borderWidth: 1,
      },
    ],
  };

  const obj2 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="App">
      <Bar data={obj} options={obj2} />
    </div>
  );
}

export default App;

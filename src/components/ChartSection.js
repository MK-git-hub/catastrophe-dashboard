import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartSection({ regionData }) {
  // Prepare data for chart
  const labels = regionData.map((item) => item.region);
  const counts = regionData.map((item) => item.count);

  const data = {
    labels,
    datasets: [
      {
        label: 'Number of Catastrophes',
        data: counts
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Catastrophes by Region'
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartSection;

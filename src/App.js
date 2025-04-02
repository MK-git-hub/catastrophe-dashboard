import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CatastropheTable from './components/CatastropheTable';
import ChartSection from './components/ChartSection';
import Pagination from './components/Pagination';
import PowerPointEmbed from './components/PowerPointEmbed';

function App() {
  const [catastrophes, setCatastrophes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); // items per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCatastrophes = async (page) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.example.com/disasters`, {
        params: {
          page: page,
          limit: perPage
        }
      });

      setCatastrophes(response.data.results || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCatastrophes(currentPage);
  }, [currentPage]);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Demo data for the charts
  // In a real scenario, you would parse the fetched data to produce
  // region-level aggregates, counts, and other metrics
  const regionData = [
    { region: 'North America', count: 25 },
    { region: 'South America', count: 12 },
    { region: 'Europe', count: 18 },
    { region: 'Africa', count: 30 },
    { region: 'Asia', count: 40 },
    { region: 'Australia', count: 10 },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>National Geographical Catastrophes Dashboard</h1>
      </header>

      <main>

        {loading && <p>Loading catastrophes...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}


        <CatastropheTable data={catastrophes} loading={loading} />


        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          hasNextPage={catastrophes.length === perPage}
        // Add logic or props for total pages if your API returns total count
        />


        <ChartSection regionData={regionData} />

        <PowerPointEmbed />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Disaster Watch</p>
      </footer>
    </div>
  );
}

export default App;

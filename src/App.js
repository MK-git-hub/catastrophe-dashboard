import axios from 'axios';
import { useEffect, useState } from 'react';
import CatastrophePieChart from './components/CatastrophePChart';
import CatastropheTable from './components/CatastropheTable';
import ChartSection from './components/ChartSection';
import Pagination from './components/Pagination';

function App() {
  const [catastrophes, setCatastrophes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCatastrophes = async (page) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
          page: page,
          limit: perPage
        }
      });

      const startIdx = (page - 1) * perPage;
      const endIdx = startIdx + perPage;
      setCatastrophes(response.data.slice(startIdx, endIdx));
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

  // Demo numbers
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
          hasNextPage={catastrophes.length >= perPage}
        />


        <ChartSection regionData={regionData} />

        <CatastrophePieChart />

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Disaster Watch</p>
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrend } from '../../services/API';

export const Home = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    try {
      getTrend().then(response => setTrend(response.data.results));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main style={{ marginLeft: '25px' }}>
      {trend && (
        <>
          <h1>Trending today</h1>
          <ul>
            {trend &&
              trend.map(({ id, title, name }) => (
                <li key={id}>
                  <Link to={`movies/${id}`}>{title || name}</Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </main>
  );
};

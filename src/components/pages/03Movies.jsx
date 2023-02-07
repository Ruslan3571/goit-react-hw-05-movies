import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/API';
import Notiflix from 'notiflix';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query?.trim()) return;
    try {
      getMovie(query).then(response => {
        if (response.data.results.length === 0) {
          Notiflix.Notify.warning(`No results for ${query}`, {
            position: 'center-top',
          });
        }
        setMovie(response.data.results);
      });
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  const handlerSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.search;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div style={{ marginLeft: '25px' }}>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="search" placeholder="Search... " />
        <button type="submit">Search</button>
      </form>

      {movie.length > 0 && (
        <ul>
          {movie.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                {original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

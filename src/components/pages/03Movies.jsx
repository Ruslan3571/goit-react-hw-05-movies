import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/API';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query?.trim()) return;
    try {
      getMovie(query).then(response => {
        if (response.data.results.length === 0) {
          alert(`No results for ${query}`);
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
              <NavLink to={`${id}`}>{original_title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
//  if (response.data.results === []) {
//    alert('error');
//  }
//  setMovie(response.data.results);

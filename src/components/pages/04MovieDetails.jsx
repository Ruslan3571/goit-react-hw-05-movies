import { Suspense, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieDetails(movieId).then(response => setMovie(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const getGenres = genres => {
    const setArray = [];
    for (let genre of genres) {
      setArray.push(genre.name);
    }
    return setArray.join(', ');
  };

  return (
    <div style={{ marginLeft: '25px' }}>
      <NavLink to={location.state?.from ?? '/'}>Go back</NavLink>

      {movie && (
        <>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div>
              <LazyLoadImage
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/3/35/Waiting_Room_-_The_Noun_Project.svg'
                }
                alt=""
              />
            </div>
            <div style={{ marginLeft: '25px' }}>
              <p>
                <b>{movie.original_title}</b>
              </p>
              <p>User Score: {movie.vote_average.toFixed(2) * 10 + `%`}</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{movie.overview}</p>

              <p>
                <b>Genres </b>
              </p>
              <p>{getGenres(movie.genres)}</p>
            </div>
          </div>
          <div>
            <hr />
            <p>Additional information:</p>
          </div>
        </>
      )}
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="review" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={'Завантаження...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};

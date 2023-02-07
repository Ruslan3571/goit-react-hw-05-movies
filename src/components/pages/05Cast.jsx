import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieCredits(movieId).then(response => setCast(response.data.cast));
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  return (
    <div>
      <hr />
      {cast && (
        <ul>
          {cast.map(({ name, profile_path, id }) => (
            <li key={id}>
              <LazyLoadImage
                effect="blur"
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/3/35/Waiting_Room_-_The_Noun_Project.svg'
                }
                alt="Actor avatar"
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

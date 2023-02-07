import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieReview(movieId).then(response =>
        setReviews(response.data.results)
      );
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  return (
    <>
     
      <hr />
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content, author_details }) => (
            <li key={id}>
              <p>
                <b>{author}</b>
              </p>

              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'We dont have any reviews for this movie'
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoResultsMsg } from './styled';

import * as API from 'components/API/API';

export function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId).then(response => {
      setReviews(prevState => [...response.results]);
    });
  }, [movieId]);

  return (
    <>
      {reviews === null || reviews.length === 0 ? (
        <NoResultsMsg>We don't have any reviews for this movie.</NoResultsMsg>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

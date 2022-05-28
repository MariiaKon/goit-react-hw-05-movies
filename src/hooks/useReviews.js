import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/API/API';

export function useReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    API.getMovieReviews(movieId).then(response => {
      setReviews(prevState => [...response.results]);
    });
  }, [movieId]);
  return reviews;
}

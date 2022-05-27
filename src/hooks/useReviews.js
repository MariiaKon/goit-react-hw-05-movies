import { useState, useEffect } from 'react';
import * as API from 'components/API/API';

export function useReviews(id) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    API.getMovieReviews(id).then(response => {
      setReviews(prevState => [...response.results]);
    });
  }, [id]);
  return reviews;
}

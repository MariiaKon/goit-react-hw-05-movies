import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom;
import * as API from 'components/API/API';

export function useMovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return movie;
}

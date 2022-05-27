import { useState, useEffect } from 'react';
import * as API from 'components/API/API';

export function useMovieDetails(id) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(id).then(setMovie);
  }, [id]);

  return movie;
}

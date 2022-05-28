import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from 'components/API/API';

export function useCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getMovieCast(movieId).then(response => {
      setCast(prevState => [...response.cast]);
    });
  }, [movieId]);

  return cast;
}

import { useState, useEffect } from 'react';
import * as API from 'components/API/API';

export function useCast(id) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getMovieCast(id).then(response => {
      setCast(prevState => [...response.cast]);
    });
  }, [id]);

  return cast;
}

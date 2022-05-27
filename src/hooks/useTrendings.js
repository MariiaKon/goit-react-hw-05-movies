import { useState, useEffect } from 'react';
import * as API from 'components/API/API';

export function useTrendings() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(response => {
      setMovies(prevState => [...response.results]);
    });
  }, []);

  return movies;
}

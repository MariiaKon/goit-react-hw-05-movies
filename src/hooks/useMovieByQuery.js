import { useEffect, useState } from 'react';
import * as API from 'components/API/API';
// import { useLocation } from 'react-router-dom';

export function useMovieByQuery(query) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query === '') {
      setMovies(prevState => null);
      return;
    }

    API.getMovieByQuery(query).then(response => {
      if (response.total_results === 0) {
        setMovies(prevState => null);
        return;
      }

      setMovies(prevState => [...response.results]);
    });
  }, [query]);

  return movies;
}

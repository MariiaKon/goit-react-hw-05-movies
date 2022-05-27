import { useState, useEffect } from 'react';
import * as API from 'components/API/API';
import { MovieList } from 'components/CommonComponents/List/MovieList';
import { HomeTitle } from './styled';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(response => {
      setMovies(prevState => [...response.results]);
    });
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

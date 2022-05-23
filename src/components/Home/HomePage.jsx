import { useState, useEffect } from 'react';
import { GetMoviesAPI } from 'components/API';
import { MovieList } from 'components/List/MovieList';
import { HomeTitle } from './styled';

const API = new GetMoviesAPI();

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

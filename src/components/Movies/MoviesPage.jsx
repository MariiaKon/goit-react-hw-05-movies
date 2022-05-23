import { Outlet } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { GetMoviesAPI } from 'components/API';
import { MovieList } from 'components/List/MovieList';
import { Form, Input, SearchBtn } from './styled';

const API = new GetMoviesAPI();

export function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

  useEffect(() => {
    if (query === '') {
      setMovies(prevState => []);
      return;
    }

    API.getMovieByQuery(query).then(response => {
      setMovies(prevState => [...response.results]);
    });
  }, [query]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movie" />
        <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>
      </Form>

      {movies && <MovieList movies={movies} />}

      <Outlet />
    </>
  );
}

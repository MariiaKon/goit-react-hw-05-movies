import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import * as API from 'components/API/API';
import { MovieList } from 'components/views/List/MovieList';
import { Form, Input, SearchBtn } from './styled';

export function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movie" />
        <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>
      </Form>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

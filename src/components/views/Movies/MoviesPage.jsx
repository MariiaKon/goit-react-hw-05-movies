import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import * as API from 'components/API/API';
import { MovieList } from 'components/CommonComponents/List/MovieList';
import { Form, Input } from './styled';
import { Button } from 'components/CommonComponents/Button/Button.styled';

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
        <Button type="submit" className="search">
          <BsSearch />
        </Button>
      </Form>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

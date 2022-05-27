import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { MovieList } from 'components/CommonComponents/List/MovieList';
import { Form, Input } from './styled';
import { Button } from 'components/CommonComponents/Button/Button.styled';
import { useMovieByQuery } from 'hooks/useMovieByQuery';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const movies = useMovieByQuery(query);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

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

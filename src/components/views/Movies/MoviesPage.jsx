import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MovieList } from 'components/CommonComponents/List/MovieList';
import { Button } from 'components/CommonComponents/Button/Button.styled';
import { NoInfoMsgComponent } from 'components/CommonComponents/NoMoviesMsg/NoInfoMsg';
import { Form, Input } from './styled';
import { useMovieByQuery } from 'hooks/useMovieByQuery';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const movies = useMovieByQuery(query);
  const navigate = useNavigate();
  const location = useLocation();
  const regex = new RegExp(`[a-z0-9]+$`, '');
  const queryStr = regex.exec(location.search);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value.trim());
    navigate(`?query=${e.target.elements.query.value.trim().toLowerCase()}`);
    e.target.elements.query.value = '';
  };

  useEffect(() => {
    if (location.search === '') {
      setQuery('');
      return;
    }

    if (queryStr === null) {
      return;
    }

    setQuery(queryStr[0]);
  }, [queryStr, location]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movie" />
        <Button type="submit" className="search">
          <BsSearch />
        </Button>
      </Form>

      {movies?.length === 0 && (
        <NoInfoMsgComponent
          text={"We don't have movies for "}
          query={`"${query}".`}
        ></NoInfoMsgComponent>
      )}

      {movies && <MovieList movies={movies} />}
    </>
  );
}

import { MovieList } from 'components/CommonComponents/List/MovieList';
import { HomeTitle } from './styled';
import { useTrendings } from 'hooks/useTrendings';

export default function HomePage() {
  const movies = useTrendings();

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>

      {movies && <MovieList movies={movies} />}
    </>
  );
}

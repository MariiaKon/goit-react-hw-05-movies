import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'components/views/Home/HomePage';
import { MoviesPage } from 'components/views/Movies/MoviesPage';
import { MovieDetailsPage } from 'components/views/Details/MovieDetailsPage';
import { Cast } from 'components/views/Details/Cast';
import { Reviews } from 'components/views/Details/Reviews';
import { NoResults } from 'components/views/NoResults/NoResults';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NoResults />} />
      </Routes>
    </>
  );
}

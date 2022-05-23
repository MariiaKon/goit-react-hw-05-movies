import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from './Home/HomePage';
import { MoviesPage } from './Movies/MoviesPage';
import { MovieDetailsPage } from './Details/MovieDetailsPage';
import { Cast } from './Details/Cast';
import { Rewiews } from './Details/Reviews';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Rewiews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

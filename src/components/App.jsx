import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Loading = lazy(() => import('components/CommonComponents/Loader/Loader'));
const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('components/views/Home/HomePage'));
const MoviesPage = lazy(() => import('components/views/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('components/views/Details/MovieDetailsPage')
);
const Cast = lazy(() => import('components/views/Details/Cast'));
const Reviews = lazy(() => import('components/views/Details/Reviews'));
const NoResults = lazy(() => import('components/views/NoResults/NoResults'));

export function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<Loading />}>
                <MoviesPage />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<Loading />}>
                <MovieDetailsPage />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loading />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Loading />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NoResults />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}{' '}
              {movie.release_date ? (
                <>({movie.release_date.split('-', 1)})</>
              ) : (
                <></>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
    })
  ),
};

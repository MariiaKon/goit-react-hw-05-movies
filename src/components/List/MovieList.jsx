import { Link } from 'react-router-dom';

export function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to=""> {movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

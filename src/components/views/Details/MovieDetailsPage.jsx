import { Outlet, Link } from 'react-router-dom';
import { Details, Poster, Desription, MoreInfo } from './styled';
import { useMovieDetails } from 'hooks/useMovieDetails';
import placeholder from 'components/placeholders/no-poster.png';

export default function MovieDetailsPage() {
  const movie = useMovieDetails();

  return (
    <>
      {movie && (
        <>
          <Details>
            <Poster>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : placeholder
                }
                alt={movie.title}
              />
            </Poster>
            <Desription>
              <h2>
                {movie.title} ({movie.release_date.split('-', 1)})
              </h2>
              <p>
                Rating: {movie.vote_average} (Votes: {movie.vote_count})
              </p>
              <h3>Overwiew</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </Desription>
            <MoreInfo>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`reviews`}>Reviews</Link>
                </li>
              </ul>
            </MoreInfo>
          </Details>
        </>
      )}

      <Outlet />
    </>
  );
}

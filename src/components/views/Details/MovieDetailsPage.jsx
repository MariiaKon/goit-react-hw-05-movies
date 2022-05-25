import { Outlet, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/API/API';
import { Details, Poster, Desription, MoreInfo } from './styled';

export function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <Details>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
                  <Link to={`reviews`}>Rewiews</Link>
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

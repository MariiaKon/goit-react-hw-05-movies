import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Details, Poster, Desription, MoreInfo } from './styled';
import { useMovieDetails } from 'hooks/useMovieDetails';
import placeholder from 'components/placeholders/no-poster.png';
import { ButtonComponent } from 'components/CommonComponents/Button/Button';
import PropTypes from 'prop-types';

export default function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const movie = useMovieDetails(movieId);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <ButtonComponent className="goBack" onClick={handleClick}>
        Go back
      </ButtonComponent>
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
                {movie.title}{' '}
                {movie.release_date ? (
                  <>({movie.release_date.split('-', 1)})</>
                ) : (
                  <></>
                )}
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
                  <Link
                    to={`cast`}
                    state={{ from: location?.state?.from ?? '/' }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={`reviews`}
                    state={{ from: location?.state?.from ?? '/' }}
                  >
                    Reviews
                  </Link>
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

MovieDetailsPage.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string,

    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

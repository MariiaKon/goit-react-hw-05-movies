import { CastList, ActorPhoto, CastItem } from './styled';
import { useCast } from 'hooks/useCast';
import Loading from 'components/CommonComponents/Loader/Loader';
import { NoInfoMsgComponent } from 'components/CommonComponents/NoMoviesMsg/NoInfoMsg';
import placeholder from 'components/placeholders/no-poster.png';
import PropTypes from 'prop-types';

export default function Cast() {
  const cast = useCast();

  return (
    <>
      {cast === null && <Loading />}

      {cast?.length === 0 && (
        <NoInfoMsgComponent text={"We don't have information"} />
      )}

      {cast && (
        <CastList>
          {cast.map(actor => {
            return (
              <CastItem key={actor.cast_id}>
                <ActorPhoto>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : placeholder
                    }
                    alt={actor.name}
                  />
                </ActorPhoto>

                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

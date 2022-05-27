import { useParams } from 'react-router-dom';
import { CastList, ActorPhoto, CastItem } from './styled';
import { useCast } from 'hooks/useCast';
import { Loader } from 'components/CommonComponents/Loader/Loader.styled';

export default function Cast() {
  const { movieId } = useParams();
  const cast = useCast(movieId);

  return (
    <>
      {cast === null ? (
        <Loader />
      ) : (
        <CastList>
          {cast.map(actor => {
            return (
              <CastItem key={actor.cast_id}>
                <ActorPhoto>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
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

import { CastList, ActorPhoto, CastItem } from './styled';
import { useCast } from 'hooks/useCast';
import { Loader } from 'components/CommonComponents/Loader/Loader.styled';
import placeholder from 'components/placeholders/no-poster.png';

export default function Cast() {
  const cast = useCast();

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

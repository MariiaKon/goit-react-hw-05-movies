import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/API/API';
import { CastList, ActorPhoto, CastItem } from './styled';

export function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieCast(movieId).then(response => {
      setCast(prevState => [...response.cast]);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
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

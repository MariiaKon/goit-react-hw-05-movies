import { NoResultsMsg } from './styled';
import { useReviews } from 'hooks/useReviews';
import Loading from 'components/CommonComponents/Loader/Loader';

export default function Reviews() {
  const reviews = useReviews();

  return (
    <>
      {reviews === null && <Loading />}

      {reviews && reviews.length === 0 && (
        <NoResultsMsg>We don't have any reviews for this movie.</NoResultsMsg>
      )}

      {reviews && reviews.length !== 0 && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

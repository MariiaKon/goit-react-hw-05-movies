import { NoInfoMsgComponent } from 'components/CommonComponents/NoMoviesMsg/NoInfoMsg';
import { useReviews } from 'hooks/useReviews';
import Loading from 'components/CommonComponents/Loader/Loader';
import PropTypes from 'prop-types';

export default function Reviews() {
  const reviews = useReviews();

  return (
    <>
      {reviews === null && <Loading />}

      {reviews?.length === 0 && (
        <NoInfoMsgComponent
          text={"We don't have any reviews for this movie."}
        ></NoInfoMsgComponent>
      )}

      {reviews && (
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

import { useAuth } from "../../autocontext/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";
import { ReviewContainer } from "../review/review-container";
import { Text } from "../text/text";
import styles from "../ul/ul.module.css";
export const Reviews = ({ reviews, onAddReview, onEditReview }) => {
  const { auth } = useAuth();
  return (
    <div>
      <Text type="h3">Reviews</Text>
      <ul className={styles.ul}>
        {reviews.map(({ id, text, userId }) => (
          <li key={id}>
            {/* <ReviewContainer id={id} /> */}
            <Review text={text} userId={userId} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && (
        <ReviewForm onSubmit={onAddReview} onSubmitEdit={onEditReview} />
      )}
    </div>
  );
};

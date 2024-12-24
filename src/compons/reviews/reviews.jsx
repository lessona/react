import { useAuth } from "../../autocontext/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";
import { Text } from "../text/text";
import styles from "../ul/ul.module.css";
export const Reviews = ({ reviews, onAddReview }) => {
  const { auth } = useAuth();
  return (
    <div>
      <Text type="h3">Reviews</Text>
      <ul className={styles.ul}>
        {reviews.map(({ id, text, userId, rating }) => (
          <li key={id}>
            <Review text={text} userId={userId} rating={rating} />
          </li>
        ))}
      </ul>

      {auth.isAuthorized && (
        <ReviewForm onSubmit={onAddReview} userId={auth.id} />
      )}
    </div>
  );
};

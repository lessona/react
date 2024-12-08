import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review?.text) {
    return null;
  }
  const { text, user } = review;

  return <Review text={text} userId={user} />;
};

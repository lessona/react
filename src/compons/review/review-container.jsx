import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }
  const { text, userId } = review;

  return <Review text={text} userId={userId} />;
};

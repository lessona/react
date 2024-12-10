import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../reviews/reviews-container";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();
  return <ReviewsContainer restaurantId={restaurantId} />;
};

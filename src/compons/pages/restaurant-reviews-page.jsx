// import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../reviews/reviews-container";

export const RestaurantReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <ReviewsContainer restaurantId={restaurantId} />;
};

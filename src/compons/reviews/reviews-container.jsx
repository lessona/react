import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

import { Reviews } from "./reviews";
import { REQUEST_PENDING_STATUS } from "../../redux/ui/request/constants";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-jd";
import { getUsers } from "../../redux/entities/users/get-users";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const getReviewsStatus = useRequest(getReviewsByRestaurantId, restaurantId);
  const getUsersStatus = useRequest(getUsers);
  const isLoading =
    getReviewsStatus === REQUEST_PENDING_STATUS ||
    getUsersStatus === REQUEST_PENDING_STATUS;
  if (isLoading) {
    return "...loading";
  }
  if (!restaurant?.reviews) {
    return null;
  }

  return <Reviews reviewsIds={restaurant.reviews} />;
};

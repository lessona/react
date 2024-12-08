import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

import { Reviews } from "./reviews";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant?.reviews) {
    return null;
  }

  return <Reviews reviewsIds={restaurant.reviews} />;
};

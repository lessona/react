import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Restaurant } from "./restaurant";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";

export const RestaurantContainer = ({ id }) => {
  const requestStatus = useRequest(getRestaurant, id);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (requestStatus === REQUEST_PENDING_STATUS) {
    return "loading restaurant..";
  }
  if (requestStatus === REQUEST_REJECTED_STATUS) {
    return "error restaurant";
  }
  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant
      restaurant={restaurant}
      reviews={restaurant.reviews}
      codecs={restaurant.codecs}
      id={id}
    />
  );
};

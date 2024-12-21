import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Restaurant } from "./restaurant";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  // const requestStatus = useRequest(getRestaurant, id);
  // const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
    }),
  });
  // if (requestStatus === REQUEST_PENDING_STATUS) {
  if (isLoading) {
    return "loading restaurant..";
  }
  // if (requestStatus === REQUEST_REJECTED_STATUS) {
  if (isError) {
    return "error restaurant";
  }
  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant
      restaurant={restaurant}
      reviews={restaurant.reviews}
      menu={restaurant.menu}
      id={id}
    />
  );
};

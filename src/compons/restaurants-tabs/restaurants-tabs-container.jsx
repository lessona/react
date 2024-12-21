import { RestaurantsTabs } from "./restaurants-tab";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

import { useRequest } from "../../redux/hooks/use-request";
import { useSelector } from "react-redux";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";
import { useGetRestaurantsQuery } from "../../redux/services/api";
export const RestaurantsTabsContainer = () => {
  // const restaurantsIds = useSelector(selectRestaurantsIds);

  const { data, isLoading, isError } = useGetRestaurantsQuery();
  // const requestStatus = useRequest(getRestaurants);
  //if (requestStatus === REQUEST_PENDING_STATUS) {
  if (isLoading) {
    return "loading ...";
  }
  //if (requestStatus === REQUEST_REJECTED_STATUS) {
  if (isError) {
    return "error";
  }

  //if (!restaurantsIds.length) {
  if (!data.length) {
    return null;
  }
  //return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
  return <RestaurantsTabs restaurants={data} />;
};

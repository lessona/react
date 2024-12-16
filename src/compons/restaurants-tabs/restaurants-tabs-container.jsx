import { RestaurantsTabs } from "./restaurants-tab";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

import { useRequest } from "../../redux/hooks/use-request";
import { useSelector } from "react-redux";
import {
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "../../redux/ui/request/constants";
export const RestaurantsTabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);
  if (requestStatus === REQUEST_PENDING_STATUS) {
    return "loading ...";
  }
  if (requestStatus === REQUEST_REJECTED_STATUS) {
    return "error";
  }

  if (!restaurantsIds.length) {
    return null;
  }
  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};

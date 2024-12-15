import { useDispatch, useSelector } from "react-redux";
//import { useRequest } from "../../redux/hooks/use-request";
import { RestaurantsTabs } from "./restaurants-tab";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useEffect } from "react";
export const RestaurantsTabsContainer = () => {
  const dispatch = useDispatch();
  const restaurantsIds = useSelector(selectRestaurantsIds);

  // const requestStatus = useRequest(getRestaurants);
  // if (requestStatus === "pending") {
  //   return "loading ...";
  // }
  // if (requestStatus === "rejected") {
  //   return "error";
  // }
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  if (!restaurantsIds.length) {
    return null;
  }
  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};

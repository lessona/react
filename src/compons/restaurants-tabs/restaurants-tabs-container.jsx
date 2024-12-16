import { useDispatch, useSelector } from "react-redux";
import { RestaurantsTabs } from "./restaurants-tab";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useEffect } from "react";
export const RestaurantsTabsContainer = () => {
  const dispatch = useDispatch();
  const restaurantsIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  if (!restaurantsIds.length) {
    return null;
  }
  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};

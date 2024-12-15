import { useSelector } from "react-redux";

import { RestaurantsTabs } from "./restaurants-tab";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
export const RestaurantsTabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  if (!restaurantsIds.length) {
    return null;
  }
  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};

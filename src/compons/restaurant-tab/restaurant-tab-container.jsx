import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTab } from "./restaurant-tab";
//import { Tab } from "../tab/tab";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return (
    <RestaurantTab
      title={restaurant.name}
      id={id}
      // onClick={onClick}
      // isActive={isActive}
    />
  );
};

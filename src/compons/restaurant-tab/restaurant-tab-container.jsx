import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return <TabLink title={restaurant.name + "aaa"} to={id} />;
};

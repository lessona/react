import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "./menu";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant?.menu) {
    return null;
  }

  return Boolean(restaurant.menu.length) && <Menu menu={restaurant.menu} />;
};

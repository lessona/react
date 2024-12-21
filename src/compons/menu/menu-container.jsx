import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "./menu";
import { getMenuByRestaurantId } from "../../redux/entities/menu/get-menu-by-restaurant-id";
import { useRequest } from "../../redux/hooks/use-request";
import { REQUEST_PENDING_STATUS } from "../../redux/ui/request/constants";
export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const getCodecsStatus = useRequest(getMenuByRestaurantId, restaurantId);
  if (getCodecsStatus === REQUEST_PENDING_STATUS) {
    return "...loading menu";
  }
  if (!restaurant?.menu) {
    return null;
  }

  return Boolean(restaurant.menu.length) && <Menu menu={restaurant.menu} />;
};

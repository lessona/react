import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "./menu";
//import { getMenuByRestaurantId } from "../../redux/entities/menu/get-menu-by-restaurant-id";
import { useRequest } from "../../redux/hooks/use-request";
import { REQUEST_PENDING_STATUS } from "../../redux/ui/request/constants";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";
export const MenuContainer = ({ restaurantId }) => {
  // const restaurant = useSelector((state) =>
  //   selectRestaurantById(state, restaurantId)
  // );
  const {
    data: menu,
    isLoading,
    isError,
  } = useGetMenuByRestaurantIdQuery(restaurantId);
  //const getCodecsStatus = useRequest(getMenuByRestaurantId, restaurantId);
  // if (getCodecsStatus === REQUEST_PENDING_STATUS) {
  if (isLoading) {
    return "...loading menu";
  }

  if (isError) {
    return "...error menu";
  }
  // if (!restaurant?.menu) {
  if (!menu.length) {
    return null;
  }

  // return Boolean(restaurant.menu.length) && <Menu menu={restaurant.menu} />;
  return <Menu menu={menu} />;
};

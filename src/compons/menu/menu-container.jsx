import { Menu } from "./menu";

import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";
export const MenuContainer = ({ restaurantId }) => {
  const {
    data: menu,
    isLoading,
    isError,
  } = useGetMenuByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return "...loading menu";
  }

  if (isError) {
    return "...error menu";
  }

  if (!menu.length) {
    return null;
  }

  return <Menu menu={menu} />;
};

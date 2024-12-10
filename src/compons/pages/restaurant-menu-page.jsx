import { useParams } from "react-router-dom";
import { MenuContainer } from "../menu/menu-container";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  return <MenuContainer restaurantId={restaurantId} />;
};

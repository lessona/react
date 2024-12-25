// import { useParams } from "react-router-dom";
import { MenuContainer } from "../menu/menu-container";

// export const RestaurantMenuPage = () => {
//   const { restaurantId } = useParams();
export const RestaurantMenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <MenuContainer restaurantId={restaurantId} />;
};

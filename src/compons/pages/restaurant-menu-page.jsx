import { MenuContainer } from "../menu/menu-container";

export const RestaurantMenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <MenuContainer restaurantId={restaurantId} />;
};

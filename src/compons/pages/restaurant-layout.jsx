import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;
  return (
    <div>
      <RestaurantContainer id={restaurantId} />
      {children}
    </div>
  );
};

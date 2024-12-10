import { Outlet, useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return (
    <div>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </div>
  );
};

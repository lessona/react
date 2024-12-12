import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantTabContainer />
      <Outlet />
    </div>
  );
};

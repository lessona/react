import { Restaurant } from "./restaurant";

import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
    }),
  });

  if (isLoading) {
    return "loading restaurant..";
  }

  if (isError) {
    return "error restaurant";
  }
  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant
      restaurant={restaurant}
      reviews={restaurant.reviews}
      menu={restaurant.menu}
      id={id}
    />
  );
};

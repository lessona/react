import { RestaurantsTabs } from "./restaurants-tab";

import { useGetRestaurantsQuery } from "../../redux/services/api";
export const RestaurantsTabsContainer = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data.length) {
    return null;
  }

  return <RestaurantsTabs restaurants={data} />;
};

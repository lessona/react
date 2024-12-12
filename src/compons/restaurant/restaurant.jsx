import { useAuth } from "../../autocontext/use-auth";
import { RestaurantCounter } from "../count/restaurant-count";
import { Text } from "../text/text";

import { TabLink } from "../tab-link/tab-link";

export const Restaurant = ({ restaurant }) => {
  const { auth } = useAuth();
  const { name, id } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <section>
      <Text type="h2">{name} bbb </Text>
      {auth.isAuthorized && <RestaurantCounter id={restaurant.id} />}
      <TabLink to={`/restaurants/${id}/reviews`} title="Reviews" />
      <TabLink to={`/restaurants/${id}/menu`} title="Menu" />
    </section>
  );
};

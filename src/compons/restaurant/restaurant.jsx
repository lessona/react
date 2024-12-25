import { useAuth } from "../../autocontext/use-auth";
import { RestaurantCounter } from "../count/restaurant-count";
import { Text } from "../text/text";

import { TabLink } from "../tab-link/tab-link";

export const Restaurant = ({ restaurant }) => {
  const { auth } = useAuth();
  const { name } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <section>
      <Text type="h2">{name}</Text>
      {auth.isAuthorized && <RestaurantCounter id={restaurant.id} />}
      <TabLink href={`/restaurants/${restaurant.id}/reviews`} title="Reviews" />
      <TabLink href={`/restaurants/${restaurant.id}/menu`} title="Menu" />
      {/* <TabLink to="reviews" title="Reviews" />
      <TabLink to="menu" title="Menu" /> */}
    </section>
  );
};

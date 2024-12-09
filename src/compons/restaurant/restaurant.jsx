import { useAuth } from "../../autocontext/use-auth";
import { RestaurantCounter } from "../count/restaurant-count";
import { ReviewForm } from "../review-form/review-form";
import { Text } from "../text/text";
import { MenuContainer } from "../menu/menu-container";
import { ReviewsContainer } from "../reviews/reviews-container";

export const Restaurant = ({ restaurant }) => {
  const { auth } = useAuth();
  const { name } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <div>
      <Text type="h2">{name} </Text>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />

      {auth.isAuthorized && (
        <>
          <ReviewForm />

          <RestaurantCounter id={restaurant.id} />
        </>
      )}
    </div>
  );
};

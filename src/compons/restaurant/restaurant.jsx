import { useSelector } from "react-redux";
import { useAuth } from "../../autocontext/use-auth";
import { RestaurantCounter } from "../count/restaurant-count";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Text } from "../text/text";
import { MenuContainer } from "../menu/menu-container";

export const Restaurant = ({ restaurant }) => {
  const { auth } = useAuth();
  const { name, menu, reviews } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <div>
      <Text type="h2">{name} </Text>
      <MenuContainer restaurantId={restaurant.id} />
      {Boolean(menu.length) && <Menu menu={menu} />}

      {reviews.length ? (
        <Reviews reviews={reviews} />
      ) : (
        <div>empty reviews</div>
      )}
      {auth.isAuthorized && (
        <>
          <ReviewForm />

          <RestaurantCounter />
        </>
      )}
    </div>
  );
};

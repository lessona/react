import { useAuth } from "../../autocontext/use-auth";
import { RestaurantCounter } from "../count/restaurant-count";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Text } from "../text/text";

export const Restaurant = ({ restaurant }) => {
  const { auth } = useAuth();
  const { name, id, menu, reviews } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <div key={id}>
      <Text type="h2">{name}</Text>
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

import { RestaurantCounter } from "../count/restaurant-count";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, id, menu, reviews } = restaurant;
  if (!name) {
    return null;
  }
  return (
    <div key={id}>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {reviews.length ? (
        <Reviews reviews={reviews} />
      ) : (
        <div>empty reviews</div>
      )}
      <ReviewForm />

      <RestaurantCounter />
    </div>
  );
};

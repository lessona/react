import { Count } from "../count/count";
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
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <ReviewForm />
      <Count />
    </div>
  );
};

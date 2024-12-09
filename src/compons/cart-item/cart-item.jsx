import { useSelector } from "react-redux";
import { RestaurantCounter } from "../count/restaurant-count";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const CartItem = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant.name) {
    return null;
  }
  return (
    <div>
      {restaurant.name}
      <RestaurantCounter id={id} />
    </div>
  );
};

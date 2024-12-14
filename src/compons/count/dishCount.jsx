import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice.js";
import { Button } from "../button/button.jsx";

export const DishCounter = ({ id }) => {
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      {amount}
    </div>
  );
};

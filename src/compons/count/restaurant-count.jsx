import { useDispatch, useSelector } from "react-redux";
import { Count } from "./count";

import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice";

export const RestaurantCounter = ({ id }) => {
  const dispatch = useDispatch();
  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;
  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));
  return <Count value={amount} increment={increment} decrement={decrement} />;
};

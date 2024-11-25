import { Count } from "./count";
import { useCount } from "./use-count";

export const RestaurantCounter = () => {
  const { value, increment, decrement } = useCount();

  return <Count value={value} increment={increment} decrement={decrement} />;
};

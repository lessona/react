import { useSelector } from "react-redux";
import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { selectDishById } from "../../redux/entities/menu/menu-slice";
import { useGetDishByIdQuery } from "../../redux/services/api";
import { MenuItem } from "../menuI-item/menu-item";

export const CartItem = ({ id }) => {
  //const dish = useSelector((state) => selectDishById(state, id));
  // const { data: dish } = useGetDishesQuery(undefined, {
  //   selectFromResult: (result) => ({
  //     ...result,
  //     data: result?.data?.find(({ id: dishId }) => dishId === id),
  //   }),
  // });
  const { data: dish, isLoading, isError } = useGetDishByIdQuery(id);
  if (isLoading) {
    return "loading cart";
  }

  if (isError) {
    return "error cart";
  }

  if (!dish) {
    return null;
  }
  return (
    <div>
      <MenuItem id={id} name={dish.name} />
    </div>
  );
};

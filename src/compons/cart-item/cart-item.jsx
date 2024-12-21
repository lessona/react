import { useSelector } from "react-redux";
import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { selectDishById } from "../../redux/entities/menu/menu-slice";
import { useGetDishesQuery } from "../../redux/services/api";

export const CartItem = ({ id }) => {
  //const dish = useSelector((state) => selectDishById(state, id));
  const { data: dish } = useGetDishesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: dishId }) => dishId === id),
    }),
  });
  if (!dish) {
    return null;
  }
  return (
    <div>
      <MenuItemContainer key={id} id={id} />
    </div>
  );
};

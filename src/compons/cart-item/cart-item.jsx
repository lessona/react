import { useSelector } from "react-redux";
import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { selectDishById } from "../../redux/entities/menu/menu-slice";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  return (
    <div>
      <MenuItemContainer key={id} id={id} />
    </div>
  );
};

import { useSelector } from "react-redux";

import { MenuItem } from "./menu-item";
import { selectDishById } from "../../redux/entities/menu/menu-slice";

export const MenuItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <MenuItem name={name} />;
};

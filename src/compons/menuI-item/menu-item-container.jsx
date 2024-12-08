import { useSelector } from "react-redux";

import { selectDisheById } from "../../redux/entities/menu/menu-slice";
import { MenuItem } from "./menu-item";

export const MenuItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDisheById(state, id));

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return <MenuItem name={name} id={id} ingredients={ingredients} />;
};

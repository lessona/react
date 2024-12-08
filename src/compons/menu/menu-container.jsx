import { useSelector } from "react-redux";
import { selectDishesIds } from "../../redux/entities/menu/menu-slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const menu = useSelector((state) => selectDishesIds(state, id));

  if (!menu) {
    return null;
  }

  return <Menu type={menu.name} />;
};

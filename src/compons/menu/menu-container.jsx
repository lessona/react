import { useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/menu/menu-slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const menu = useSelector((state) => selectMenuById(state, id));

  if (!menu?.type) {
    return null;
  }

  return <Menu type={menu.name} />;
};

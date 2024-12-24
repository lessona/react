import { MenuItem } from "./menu-item";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const MenuItemContainer = ({ id }) => {
  const { data: dish, isLoading, isError } = useGetDishByIdQuery(id);

  if (isLoading) {
    return "loading dish";
  }

  if (isError) {
    return "error dish";
  }
  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <MenuItem name={name} id={id} />;
};

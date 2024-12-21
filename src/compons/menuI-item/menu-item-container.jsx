import { useSelector } from "react-redux";

import { MenuItem } from "./menu-item";
import { selectDishById } from "../../redux/entities/menu/menu-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getDish } from "../../redux/entities/menu/get-menu-item";
import { REQUEST_REJECTED_STATUS } from "../../redux/ui/request/constants";
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuItemContainer = ({ id }) => {
  // const requestStatus = useRequest(getDish, id);
  // const dish = useSelector((state) => selectDishById(state, id));
  // const { data: dish, isLoading, isError } = useGetDishByIdQuery(id);
  const {
    data: dish,
    isLoading,
    isError,
  } = useGetDishesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: dishId }) => dishId === id),
    }),
  });
  // if (requestStatus === REQUEST_REJECTED_STATUS) {
  if (isLoading) {
    return "loading dish";
  }

  // if (requestStatus === REQUEST_REJECTED_STATUS) {
  if (isError) {
    return "error dish";
  }
  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <MenuItem name={name} id={id} />;
};

"use client";
import { useGetDishByIdQuery } from "../../redux/services/api";
import { MenuItem } from "../menu-item/menu-item";

export const CartItem = ({ id }) => {
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

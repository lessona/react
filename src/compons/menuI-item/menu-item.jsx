"use client";
import Link from "next/link";
import { DishCounter } from "../count/dishCount";

export const MenuItem = ({ name, id }) => {
  return (
    <div>
      <Link href={`/dish/${id}`}>{name}</Link>
      {<DishCounter id={id} />}
    </div>
  );
};

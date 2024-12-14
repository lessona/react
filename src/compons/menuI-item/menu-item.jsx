import { NavLink } from "react-router-dom";
import { DishCounter } from "../count/dishCount";

export const MenuItem = ({ name, id }) => {
  return (
    <div>
      <NavLink to={`/dish/${id}`}>{name}</NavLink>
      {<DishCounter id={id} />}
    </div>
  );
};

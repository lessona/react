import { MenuItem } from "../menuI-item/menu-item";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>menu</h3>
      <ul>
        {menu?.map(({ name, id, ingredients }) => (
          <li key={id}>
            <MenuItem name={name} ingredients={ingredients} />
          </li>
        ))}
      </ul>
    </div>
  );
};

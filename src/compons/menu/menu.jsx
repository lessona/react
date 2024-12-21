import { MenuItem } from "../menuI-item/menu-item";
import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { Text } from "../text/text";

export const Menu = ({ menu }) => {
  return (
    <div>
      <Text type="h3">Menu</Text>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            <MenuItem id={id} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

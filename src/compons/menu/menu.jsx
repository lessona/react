import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { Text } from "../text/text";

export const Menu = ({ menu }) => {
  return (
    <div>
      <Text type="h3">Menu</Text>
      <ul>
        {menu?.map((id) => (
          <li key={id}>
            <MenuItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

import { MenuItem } from "../menuI-item/menu-item";
import { Text } from "../text/text";
export const Menu = ({ menu }) => {
  return (
    <div>
      <Text type={3}>Menu</Text>
      <ul>
        {menu?.map(({ name, id }) => (
          <li key={id}>
            <MenuItem name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

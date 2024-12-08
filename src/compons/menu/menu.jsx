import { MenuItem } from "../menuI-item/menu-item";
import { MenuItemContainer } from "../menuI-item/menu-item-container";
import { Text } from "../text/text";
//import { MenuContainer } from "./menu-container";

// export const Menu = ({ dishesIds }) => {
//   return (
//     <div>
//       <Text type="h3">Menu</Text>
//       <ul>
//         {dishesIds.map((id) => (
//           <li key={id}>
//             <MenuItemContainer name={dishesIds.name} id={id} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
export const Menu = ({ menu }) => {
  return (
    <div>
      <Text type="h3">Menu</Text>
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

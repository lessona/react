import { useParams } from "react-router-dom";

import { MenuItemContainer } from "../menuI-item/menu-item-container.jsx";
import { useAuth } from "../../autocontext/use-auth.jsx";

export const DishPage = () => {
  const { id } = useParams();
  const { auth } = useAuth();

  return <MenuItemContainer id={id} isAuthenticated={auth.isAuthenticated} />;
};

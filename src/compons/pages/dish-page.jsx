"use client";

import { useAuth } from "../../autocontext/use-auth.jsx";
import { MenuItemContainer } from "../menuI-item/menu-item-container.jsx";

import { useParams } from "next/navigation";
export const DishPage = () => {
  const { id } = useParams();

  const { auth } = useAuth();
  return <MenuItemContainer id={id} isAuthenticated={auth.isAuthenticated} />;
};

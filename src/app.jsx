"use client";
import { Layout } from "./compons/layout/layout";
import "./App.css";
import { ThemeContextProvider } from "./compons/theme-context/theme-context";
import { AuthContextProvider } from "./autocontext/auth-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { RestaurantMenuPage } from "./compons/pages/restaurant-menu-page";
import { RestaurantReviewsPage } from "./compons/pages/restaurant-reviews-page";
import { HomePage } from "./compons/pages/home-page";
import { DishPage } from "./compons/pages/dish-page";
import { RestaurantsLayout } from "./compons/pages/restaurants-layout";
import { RestaurantLayout } from "./compons/pages/restaurant-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "restaurants",
        element: <RestaurantsLayout />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantLayout />,
            children: [
              { path: "reviews", element: <RestaurantReviewsPage /> },
              { path: "menu", element: <RestaurantMenuPage /> },
            ],
          },
        ],
      },
      {
        path: "dish/:id",
        element: <DishPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
export default App;

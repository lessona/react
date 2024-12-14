import { Layout } from "./compons/layout/layout";
//import { RestaurantsPage } from "./compons/restaurants-page/restaurants-page";
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
//import { RestaurantPage } from "./compons/restaurant-page/restaurant-page";
import { RestaurantMenuPage } from "./compons/pages/restaurant-menu-page";
import { RestaurantReviewsPage } from "./compons/pages/restaurant-reviews-page";
import { HomePage } from "./compons/pages/home-page";
import { DishPage } from "./compons/pages/dish-page";
import { RestaurantsPage } from "./compons/pages/restaurants-page";
import { RestaurantPage } from "./compons/pages/restaurant-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              {
                index: true,
                element: <Navigate to="menu" replace />,
              },
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

export const App = () => {
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

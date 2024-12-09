import { Layout } from "./compons/layout/layout";
import { RestaurantsPage } from "./compons/restaurants-page/restaurants-page";
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
import { RestaurantPage } from "./compons/restaurant-page/restaurant-page";

const router = createBrowserRouter([
  // { path: "/about", element: <div>about</div> },
  // {
  //   path: "/",
  //   element: <div>home page</div>,
  //   errorElement: <div>not found</div>,
  // },
  {
    path: "/",
    element: <RestaurantsPage title="restaurants app home page" />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantPage />,
      },
      {
        path: "restaurant/custom",
        element: <div>custom</div>,
      },
    ],
  },
  { path: "/about", element: <div>about</div> },
  { path: "blocked", element: <Navigate to="/about" replace /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router}>
            <Layout sidebar={<div>sidebar</div>}>
              {/* <RestaurantsPage /> */}

              <RouterProvider router={router} />
            </Layout>
          </RouterProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

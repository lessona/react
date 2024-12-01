import { Layout } from "./compons/layout/layout";
import { RestaurantsPage } from "./compons/restaurants-page/restaurants-page";
import "./App.css";
import { ThemeContextProvider } from "./compons/theme-context/theme-context";
import { AuthContextProvider } from "./autocontext/auth-context";
//import { AuthContextProvider } from "./autocontext/auth-context";

export const App = () => {
  return (
    // <Layout sidebar={<div>sidebar</div>}>
    //   <RestaurantsPage />
    // </Layout>
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout sidebar={<div>sidebar</div>}>
          <RestaurantsPage />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

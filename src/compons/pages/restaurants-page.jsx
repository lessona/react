import { Outlet } from "react-router-dom";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";
import { Text } from "../text/text";
import styles from "../restaurants-page/restaurant-page.module.css";

export const RestaurantsPage = ({ title }) => {
  return (
    <div>
      <h1 className={styles.headline}>Restaurants {title}</h1>
      <Text type="h3">Restaurant</Text>

      <RestaurantsTabsContainer />
      <Outlet />
    </div>
  );
};

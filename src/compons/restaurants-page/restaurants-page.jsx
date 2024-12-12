import { useState } from "react";
import { Text } from "../text/text";
import styles from "./restaurant-page.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { useSelector } from "react-redux";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { Link, Outlet } from "react-router-dom";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";
// export const RestaurantsPage = ({ title }) => {
//   return (
//     <div>
//       <h1 className={styles.headline}>Restaurants {title}</h1>
//       <Text type="h3">Restaurant</Text>

//       <RestaurantsTabsContainer />
//       <Outlet />
//     </div>
//   );
// };

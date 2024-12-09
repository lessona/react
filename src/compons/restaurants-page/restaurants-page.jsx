import { useState } from "react";
import { Text } from "../text/text";
import styles from "./restaurant-page.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { useSelector } from "react-redux";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { Link, Outlet } from "react-router-dom";
export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  // const [activeRestaurantId, setActiveRestaurantId] = useState(
  //   restaurantsIds[0].id
  // );

  // const handleSetActiveRestaurantId = (id) => {
  //   if (activeRestaurantId === id) {
  //     return;
  //   }

  //   setActiveRestaurantId(id);
  // };
  return (
    <div>
      <h1 className={styles.headline}>Restaurants {title}</h1>
      <Text type="h3">Restaurant</Text>
      {restaurantsIds.map((id) => (
        // <RestaurantTabContainer
        //   key={id}
        //   id={id}
        //   onClick={() => handleSetActiveRestaurantId(id)}
        //   isActive={id === activeRestaurantId}
        // />
        <RestaurantTabContainer key={id} id={id} />
      ))}

      {/* {activeRestaurantId && (
        <RestaurantContainer id={activeRestaurantId} key={activeRestaurantId} />
      )} */}
      <Link to="blocked">blocked</Link>
      <Outlet />
    </div>
  );
};

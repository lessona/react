import { useState } from "react";
import { Text } from "../text/text";
import styles from "./restaurant-page.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { useSelector } from "react-redux";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { Restaurant } from "../restaurant/restaurant";
export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0].id
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };
  return (
    <div>
      <h1 className={styles.headline}>Restaurants</h1>
      <Text type="h3">Restaurant</Text>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          id={id}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}

      {activeRestaurantId && (
        <RestaurantContainer id={activeRestaurantId} key={activeRestaurantId} />
      )}
    </div>
  );
};

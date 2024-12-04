//import { useState } from "react";
// import { restaurants } from "../../mock";
// import { Restaurant } from "../restaurant/restaurant";
// import { Tab } from "../tab/tab";
import { useSelector } from "react-redux";
import { Text } from "../text/text";
import styles from "./restaurant-page.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTabContainer } from "../tab/tab-container";
export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  // const [activeRestaurantId, setActiveRestaurantId] = useState(
  //   restaurants[0].id
  // );
  // const activeRestaurant = restaurants.find(
  //   ({ id }) => id === activeRestaurantId
  // );
  // const handleSetActiveRestaurantId = (id) => {
  //   if (activeRestaurantId === id) {
  //     return;
  //   }
  //   setActiveRestaurantId(id);
  // };
  return (
    <div>
      <h1 className={styles.headline}>Restaurants</h1>
      <Text type="h3">Restaurant</Text>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          title={name}
          //onClick={() => handleSetActiveRestaurantId(restaurant.id)}
          //isActive={restaurant.id === activeRestaurantId}
        />
      ))}
      {/* {activeRestaurant && (
        <Restaurant
          restaurant={activeRestaurant}
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )} */}
    </div>
  );
};

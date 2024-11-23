import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };
  return (
    <div>
      <h1 style={{ color: "brown", background: "lightyellow" }}>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => handleSetActiveRestaurantId(restaurant.id)}
          isActive={restaurant.id === activeRestaurantId}
        />
      ))}

      {activeRestaurant && (
        <Restaurant
          restaurant={activeRestaurant}
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}

      {/* {activeRestaurant && (
        <Restaurant
          restaurant={activeRestaurant}
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}

      {activeRestaurant && (
        <Restaurant
          restaurant={activeRestaurant}
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}

      {activeRestaurant && (
        <Restaurant
          restaurant={activeRestaurant}
          key={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}

      {activeRestaurant && (
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

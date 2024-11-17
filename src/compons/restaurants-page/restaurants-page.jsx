import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage = () => {
  return (
    <div>
      <h1 style={{ color: "brown", background: "lightyellow" }}>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>
      ))}
    </div>
  );
};

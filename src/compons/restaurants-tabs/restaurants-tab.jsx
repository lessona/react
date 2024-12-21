import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div>
      <h3>Choose restaurant </h3>
      {/* {restaurantsIds.map((id) => (
        <RestaurantTabContainer key={id} id={id} /> */}
      {restaurants.map(({ name, id }) => (
        <TabLink title={name} to={id} key={id} />
      ))}
    </div>
  );
};

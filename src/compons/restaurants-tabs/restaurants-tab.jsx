import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";

export const RestaurantsTabs = ({ restaurantsIds }) => {
  return (
    <div>
      <h3>Choose restaurant </h3>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer key={id} id={id} />
      ))}
    </div>
  );
};

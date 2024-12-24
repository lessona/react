"use client";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div>
      <h3>Choose restaurant </h3>

      {restaurants.map(({ name, id }) => (
        <TabLink title={name} href={`/headphones/${id}`} key={id} />
      ))}
    </div>
  );
};

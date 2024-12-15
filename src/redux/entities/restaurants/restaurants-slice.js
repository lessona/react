import { createSlice , createEntityAdapter} from "@reduxjs/toolkit";
//import { normalizedRestaurants } from "../../../constants/normalized-mock";
import { getRestaurants } from "./get-restaurants";

// const initialState = {
//   entities: normalizedRestaurants.reduce((acc, restaurant) => {
//     acc[restaurant.id] = restaurant;

//     return acc;
//   }, {}),
//   ids: normalizedRestaurants.map(({ id }) => id),
// };
const entityAdapter = createEntityAdapter();
export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectHeadphonesRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const {
   selectRestaurantById, 
  selectRestaurantsIds,
  selectHeadphonesRequestStatus, 
} =
restaurantsSlice.selectors;
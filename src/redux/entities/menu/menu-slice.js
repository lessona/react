import { createSlice } from "@reduxjs/toolkit";
//import { normalizedDishes } from "../../../constants/normalized-mock";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getMenuByRestaurantId } from "./get-menu-by-restaurant-id";
// const initialState = {
//   entities: normalizedDishes.reduce((acc, menu) => {
//     acc[menu.id] = menu;

//     return acc;
//   }, {}),
//   ids: normalizedDishes.map(({ id }) => id),
// };
const entityAdapter = createEntityAdapter();
export const menuSlice = createSlice({
  name: "menu",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getMenuByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

// export const { selectDishesIds, selectDishById } = menuSlice.selectors;
export const { selectById: selectDishById, selectIds: selectDishesIds } =
  entityAdapter.getSelectors((state) => state.menu);
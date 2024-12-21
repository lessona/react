import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getMenuByRestaurantId } from "./get-menu-by-restaurant-id";

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


export const { selectById: selectDishById, selectIds: selectDishesIds } =
  entityAdapter.getSelectors((state) => state.menu);
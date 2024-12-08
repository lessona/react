import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, menu) => {
    acc[menu.id] = menu;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishesIds, selectDishById } = menuSlice.selectors;
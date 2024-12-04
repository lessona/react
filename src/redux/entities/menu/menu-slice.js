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
    selectCodecsIds: (state) => state.ids,
    selectCodecById: (state, id) => state.entities[id],
  },
});

export const { selectCodecsIds, selectCodecById } = menuSlice.selectors;
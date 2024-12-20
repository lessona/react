import { createSlice } from "@reduxjs/toolkit";

import { createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-jd";

const entityAdapter = createEntityAdapter();
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});


export const { selectById: selectReviewById, selectIds: selectReviewsIds } =
  entityAdapter.getSelectors((state) => state.reviews);
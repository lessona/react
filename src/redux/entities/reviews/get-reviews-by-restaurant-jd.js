import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from "./reviews-slice";
export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("reviews/getReviewsByRestaurantId");
      return;
    }
    return result;
  },
 
);
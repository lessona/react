import { createAsyncThunk } from "@reduxjs/toolkit";
export const getMenuByRestaurantId = createAsyncThunk(
  "menu/getMenuByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?estaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("menu/getMenuByRestaurantId");
      return;
    }
    return result;
  }
);
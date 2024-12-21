import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishById } from './menu-slice.js';

export const getDish = createAsyncThunk(
  'dishes/getDish',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);

    const result = await response.json();

    if (!result) {
      return rejectWithValue('dishes/getDish no data');
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return selectDishById(getState(), id) === undefined;
    },
  }
);

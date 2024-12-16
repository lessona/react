import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
//import { normalizedUsers } from "../../../constants/normalized-mock";

// const initialState = {
//   entities: normalizedUsers.reduce((acc, user) => {
//     acc[user.id] = user;

//     return acc;
//   }, {}),
//   ids: normalizedUsers.map(({ id }) => id),
// };
const entityAdapter = createEntityAdapter();
export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

// export const { selectUsersIds, selectUserById } = usersSlice.selectors;
export const { selectById: selectUserById, selectIds: selectUsersIds } =
  entityAdapter.getSelectors((state) => state.users);
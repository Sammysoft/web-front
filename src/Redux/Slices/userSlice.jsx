// src/redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthDataService from "../../Services/AuthDataService";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, { dispatch, getState }) => {
    const response = await AuthDataService.fetchDetails();
    console.log(response.data.data);
    // getState().user = response.data.data;
    dispatch(setUser(response.data.data));
  }
);

export default userSlice.reducer;

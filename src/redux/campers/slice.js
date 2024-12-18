import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const campersReducer = campersSlice.reducer;

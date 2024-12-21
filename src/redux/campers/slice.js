import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchOneCamper } from "./operations.js";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  likes: JSON.parse(localStorage.getItem("likes")) || [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      const isLike = state.likes.includes(id);
      if (isLike) {
        state.likes = state.likes.filter((likeId) => likeId !== id);
      } else {
        state.likes.push(id);
      }
      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
  },
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
      })
      .addCase(fetchOneCamper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchOneCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { toggleLike } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

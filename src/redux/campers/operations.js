import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get("campers");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `campers?page=${page}&limit=${limit}`
      );
      // console.log("operations", data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  "campers/fetchOneCamper",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

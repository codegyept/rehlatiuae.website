import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

interface DataState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ endpoint, key }: { endpoint: string; key: string }) => {
    const response = await axios.get(endpoint);
    if (key) {
      return response.data.data[key];
    } else {
      return response.data;
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export default dataSlice.reducer;

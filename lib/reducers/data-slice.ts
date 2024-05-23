import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

interface DataState {
  data: {
    message: string;
    status: boolean;
    data: {
      categories: any[];
      topDestinations: any[];
      bestOffers: any[];
      bestTrips: any[];
      popularExperiencetrips: any[];
      blogs: any[];
      ourPartners: any[];
    } | null;
  };

  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: {
    data: null,
    status: false,
    message: "",
  },
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (endpoint: string) => {
    const response = await axios.get(endpoint);
    return response.data;
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

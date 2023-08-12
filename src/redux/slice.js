import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchData",
  async ({ status = "", type = "", originalDate = "" }) => {
    let requestURL = "https://api.spacexdata.com/v3/capsules";
    let queryParams = {
      status,
      type,
      originalDate,
    };

    // console.log(queryParams)
    const { data } = await axios.get(requestURL, { params: queryParams });
    // console.log(data);
    return data;
  }
);

const dataSlice = createSlice({
  name: "dataslice",
  initialState: {
    data: [],
    isLoding: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoding = false;
      state.data = action.payload;
    });

    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoding = true;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default dataSlice.reducer;

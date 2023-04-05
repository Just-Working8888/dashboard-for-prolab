import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./actions";

const userSlice = createSlice({
  name: "userData",
  initialState: { data: null, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingState: false,
};

export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    display: (state, action) => {
      state.loadingState = true;
    },
    hidden: (state) => {
      state.loadingState = false;
    },
  },
});

export const { hidden, display } = LoadingSlice.actions;

export default LoadingSlice.reducer;

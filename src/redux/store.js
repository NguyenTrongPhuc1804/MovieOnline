import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./reducer/LoadingSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";

export const store = configureStore({
  reducer: {
    ManagementFilmSlice,
    LoadingSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";

export const store = configureStore({
  reducer: {
    ManagementFilmSlice,
  },
});

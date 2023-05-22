import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

const initialState = {
  count: 1,
  homeFilm: [],
};

const ManagementFilmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmHomePage.fulfilled, (state, action) => {
      state.homeFilm = action.payload;
    });
  },
});
export const getFilmHomePage = createAsyncThunk(
  "film/getFilmHomePage",
  async () => {
    try {
      const { data } = await requestMovie.get("v1/api/home");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { setCount } = ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;

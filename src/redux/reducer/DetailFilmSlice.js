import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { display, hidden } from "./LoadingSlice";

const initialState = {
  detailFilm: {},
};

export const DetailFilm = createSlice({
  name: "detail",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailFilm.fulfilled, (state, action) => {
      state.detailFilm = action.payload;
    });
  },
});
export const getDetailFilm = createAsyncThunk(
  "film/getDetailFilm",
  async (name, { dispatch }) => {
    dispatch(display());
    try {
      const data = await requestMovie.get(`/phim/${name}`);
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { reducerName } = DetailFilm.actions;

export default DetailFilm.reducer;

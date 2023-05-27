import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { display, hidden } from "./LoadingSlice";

const initialState = {
  count: 1,
  homeFilm: [],
  PhimLe: {},
  PhimMoi: {},
  PhimBo: {},
  HoatHinh: {},
};

const ManagementFilmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmHomePage.fulfilled, (state, action) => {
      state.homeFilm = action.payload.arrFilm;
      state.PhimMoi = action.payload.data;
    });
    builder.addCase(getPhimLe.fulfilled, (state, action) => {
      console.log(action);
      state.PhimLe = action.payload;
    });
    builder.addCase(getPhimBo.fulfilled, (state, action) => {
      state.PhimBo = action.payload;
    });
    builder.addCase(getPhimHoatHinh.fulfilled, (state, action) => {
      state.HoatHinh = action.payload;
    });
  },
});
export const getFilmHomePage = createAsyncThunk(
  "film/getFilmHomePage",
  async (info, { dispatch }) => {
    dispatch(display());
    try {
      let arrFilm = [];
      const { data } = await requestMovie.get("v1/api/home");
      for (let i in data.items.slice(0, 5)) {
        let film = await requestMovie.get(`/phim/${data.items[i].slug}`);
        arrFilm.push(film.movie);
      }
      dispatch(hidden());
      return { arrFilm, data };
    } catch (err) {
      console.log(err);
    }
  }
);

export const getPhimLe = createAsyncThunk(
  "film/getPhimLe",
  async (page = "", { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/phim-le?page=${page}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPhimBo = createAsyncThunk(
  "film/getPhimBo",
  async (page = "", { dispatch }) => {
    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/phim-bo?page=${page}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPhimHoatHinh = createAsyncThunk(
  "film/getPhimHoatHinh",
  async (page = "", { dispatch }) => {
    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/hoat-hinh?page=${page}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { setCount } = ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;

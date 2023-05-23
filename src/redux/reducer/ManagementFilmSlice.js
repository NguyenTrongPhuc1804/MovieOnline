import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

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
  async (info, { getState }) => {
    try {
      let arrFilm = [];
      const { data } = await requestMovie.get("v1/api/home");
      for (let i in data.items.slice(0, 5)) {
        let film = await requestMovie.get(`/phim/${data.items[i].slug}`);
        arrFilm.push(film.movie);
      }
      return { arrFilm, data };
    } catch (err) {
      console.log(err);
    }
  }
);

export const getPhimLe = createAsyncThunk(
  "film/getPhimLe",
  async (page = "") => {
    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/phim-le?page=${page}`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPhimBo = createAsyncThunk(
  "film/getPhimBo",
  async (page = "") => {
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
  async (page = "") => {
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

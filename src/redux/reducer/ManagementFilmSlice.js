import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";

const initialState = {
  count: 1,
  homeFilm: [],
  PhimLe: [],
};

const ManagementFilmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmHomePage.fulfilled, (state, action) => {
      state.homeFilm = action.payload;
    });
    // builder.addCase(getPhimLe.fulfilled, (state, action) => {
    //   // state.PhimLe = action.payload;
    //   console.log(state.PhimLe);
    // });
  },
});
export const getFilmHomePage = createAsyncThunk(
  "film/getFilmHomePage",
  async (info, { getState }) => {
    try {
      let arrFilm = [];
      const { data } = await requestMovie.get("v1/api/home");
      for (let i in data.items) {
        let film = await requestMovie.get(`/phim/${data.items[i].slug}`);
        arrFilm.push(film.movie);
      }
      return arrFilm;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const getPhimLe = createAsyncThunk("film/getPhimLe", async (slug) => {
//   try {
//     const data = await requestMovie.get(`/v1/api/danh-sach/phim-le`);

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// });
export const { setCount } = ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;

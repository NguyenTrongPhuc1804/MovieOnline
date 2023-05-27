import "./App.css";
import Home from "./page/Home/Home";
import HomeThemePlate from "./theme/HomeThemplate/HomeThemePlate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import DetailFiml from "./page/DetailFilm/DetailFiml";
import PlayerVideo from "./components/PlayerVideo/PlayerVideo";
import AllFilmByCategory from "./page/AllFilmByCategory/AllFilmByCategory";

function App() {
  return (
    <>
      <Loading />

      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeThemePlate />}>
            <Route path="/" element={<Home />} />
            <Route path="/phim/:name" element={<DetailFiml />} />
            <Route path="/phim/xem/:name" element={<PlayerVideo />} />
            <Route path="/list" element={<AllFilmByCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

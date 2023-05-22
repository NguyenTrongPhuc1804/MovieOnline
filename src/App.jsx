import "./App.css";
import Card from "./components/Card/Card";
import GirdFiml from "./components/GridFilm/GirdFiml";
import Home from "./page/Home/Home";
import SlideCard from "./components/SlideCard/SlideCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SlideBanner from "./components/SlideBanner/SlideBanner";
import SlidePricing from "./components/SlidePricing/SlidePricing";
import HomeThemePlate from "./theme/HomeThemplate/HomeThemePlate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeThemePlate />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

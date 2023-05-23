import "./App.css";
import Home from "./page/Home/Home";
import HomeThemePlate from "./theme/HomeThemplate/HomeThemePlate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <>
      <Loading />

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

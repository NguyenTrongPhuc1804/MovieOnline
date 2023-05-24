import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function HomeThemePlate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#181616]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeThemePlate;

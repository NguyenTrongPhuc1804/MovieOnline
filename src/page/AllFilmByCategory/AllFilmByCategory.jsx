import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/SlideCard/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  getAllCategoryFilm,
  getFilmHomePage,
  getPhimLe,
} from "../../redux/reducer/ManagementFilmSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
function AllFilmByCategory() {
  //get data list new film
  const dispatch = useDispatch();
  const { catg } = useParams();
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);
  const PhimLe = useSelector((state) => state.ManagementFilmSlice.PhimLe);
  const { AllCategoryFilm } = useSelector((state) => state.ManagementFilmSlice);
  console.log(AllCategoryFilm);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const totalPage = Math.floor(
    AllCategoryFilm?.params?.pagination?.totalItems /
      AllCategoryFilm?.params?.pagination?.totalItemsPerPage
  );
  const handleChange = (event, value) => {
    dispatch(getAllCategoryFilm({ catg, page: value }));

    window.scrollTo(0, 0);
  };
  useEffect(() => {
    dispatch(getFilmHomePage());
    dispatch(getPhimLe(1));
    dispatch(getAllCategoryFilm({ catg }));
  }, [catg]);
  return (
    <div className="sm:px-[8%] px-[2%] sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem] ">
      <div className="pt-[2%]">
        <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
          <p>{AllCategoryFilm?.seoOnPage.descriptionHead}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2  gap-4">
        {AllCategoryFilm?.items?.map((item, i) => (
          <div key={i} className="sm:h-[350px] rounded-md overflow-hidden">
            <Card film={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[2%]">
        <ThemeProvider theme={darkTheme}>
          <Stack spacing={2}>
            <Pagination
              onChange={handleChange}
              defaultPage={1}
              color="secondary"
              shape="rounded"
              count={totalPage}
              showFirstButton
              showLastButton
              variant="outlined"
            />
          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default AllFilmByCategory;

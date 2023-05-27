import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/SlideCard/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  getFilmHomePage,
  getPhimLe,
} from "../../redux/reducer/ManagementFilmSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";
function AllFilmByCategory() {
  //get data list new film
  const dispatch = useDispatch();
  const PhimMoi = useSelector((state) => state.ManagementFilmSlice.PhimMoi);
  const PhimLe = useSelector((state) => state.ManagementFilmSlice.PhimLe);
  console.log(PhimLe);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const totalPage = Math.floor(
    PhimLe?.params?.pagination?.totalItems /
      PhimLe?.params?.pagination?.totalItemsPerPage
  );
  console.log(totalPage);
  const handleChange = (event, value) => {
    console.log(value);
    dispatch(getPhimLe(value));
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    dispatch(getFilmHomePage());
    dispatch(getPhimLe(1));
  }, []);
  return (
    <div className="sm:px-[8%] px-[2%] sm:mt-[5rem] mt-[5rem] lg:mt-[6.3rem] ">
      <div className="pt-[2%]">
        <div className="relative px-5 py-2 text-3xl font-bold my-5 text-white">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-red-700"></div>
          <p>Hoạt Hình</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2  gap-4">
        {PhimLe?.items?.map((item, i) => (
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

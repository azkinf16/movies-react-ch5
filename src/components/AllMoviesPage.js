import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function AllMoviesPage() {
  const [page, setPage] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  const getData = async () => {
    try {
      const res = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          include_adult: false,
          page: `${page}`,
        },
      });
      setData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, [page]);

  return (
    <>
      <div className="Header">
        <div className="absolute w-1/2 h-[50vh] bg-gradient-to-r from-black"></div>
        <img
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          className="block w-full h-[50vh] object-cover"
          alt=""
        />
        <div className="absolute w-1/2 top-[25%] p-5 ml-5">
          <h1 className="text-5xl font-bold text-white">All Movies</h1>
        </div>
      </div>
      <div className="mt-24 mx-11 flex items-end justify-between">
        <h1 className="text-4xl font-bold">Result of All Movies</h1>
        <Stack spacing={2} className="">
          <Pagination
            count={5}
            variant="outlined"
            color="primary"
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </div>
      <div className="grid gap-6 grid-cols-4 mx-9 mt-12">
        {data &&
          data.map((item, index) => (
            <div
              className="w-full cursor-pointer relative p-2"
              onClick={() => navigate(`/detail/${item.id}`)}
              key={index}
            >
              <img
                className="w-full h-[520px] rounded-lg"
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                    : unavailable
                }
                alt={item.name}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100 text-white rounded-lg">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="white-space-normal text-xs md:text-sm font-bold">
                      {item.title}
                    </p>
                    <p className="white-space-normal text-xs md:text-sm font-bold mt-2">
                      {Math.round(item.vote_average)} / 10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllMoviesPage;

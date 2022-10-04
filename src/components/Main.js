import React, { useEffect, useState } from "react";
import axios from "axios";

import requests from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const movie2 = movies[Math.floor(Math.random() * movies.length)];
  const movie3 = movies[Math.floor(Math.random() * movies.length)];
  console.log("movies", movies);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center pb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <div className="absolute w-3/12 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              class="block w-full h-screen object-cover"
              alt={movie?.title}
            />
            <div className="absolute w-1/2 top-[25%] p-5">
              <h1 className="text-8xl font-semibold text-white">
                {movie?.title}
              </h1>
              <p className="text-white font-normal pt-5 pl-1">
                {movie?.overview}
              </p>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 rounded-full">
                Watch Trailer
              </button>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div className="absolute w-3/12 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie2?.backdrop_path}`}
              class="block w-full h-screen object-cover"
              alt={movie2?.title}
            />
            <div className="absolute w-1/2 top-[25%] p-5">
              <h1 className="text-8xl font-semibold text-white w-full">
                {movie2?.title}
              </h1>
              <p className="text-white font-normal pl-1 pt-5">
              {movie2?.overview}
              </p>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 rounded-full">
                Watch Trailer
              </button>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div className="absolute w-3/12 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie3?.backdrop_path}`}
              class="block w-full h-screen object-cover"
              alt={movie3?.title}
            />
            <div className="absolute w-1/2 top-[25%] p-5">
              <h1 className="text-8xl font-semibold text-white w-full">
                {movie3?.title}
              </h1>
              <p className="text-white font-normal pl-1 pt-5">
              {movie3?.overview}
              </p>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-10 rounded-full">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

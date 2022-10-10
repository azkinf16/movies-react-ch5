import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

import { AiOutlinePlayCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import ButtonCategory from "./ButtonCategory";

function Main() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoss, setVideoss] = useState([]);
  const [videosss, setVideosss] = useState([]);
  const navigate = useNavigate();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "15a77a373cab542d1f99af813fbc9979";
  const movie = trending[0];
  const movie2 = trending[1];
  const movie3 = trending[2];

  const getTrending = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          page: 1,
        },
      });
      setTrending(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopular = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          page: 2,
        },
      });
      setPopular(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos1 = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${movie.id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      setVideos(
        res.data.results.find(({ name }) => name === "Official Trailer")
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos2 = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${movie2.id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      setVideoss(
        res.data.results.find(({ name }) => name === "Official Trailer")
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos3 = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${movie3.id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      setVideosss(
        res.data.results.find(({ name }) => name === "Official Trailer")
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
    getPopular();
    getVideos1();
    getVideos2();
    getVideos3();
    window.scroll(0, 0);
  }, [trending]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

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
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <div className="absolute w-1/2 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="block w-full h-screen object-cover"
              alt={movie?.title}
            />
            <div className="absolute w-2/5 top-[25%] p-5 ml-5">
              <h1 className="text-7xl font-bold text-white">{movie?.title}</h1>
              <p className="text-white font-normal text-lg pt-5 pl-1">
                {truncateString(movie?.overview, 200)}
              </p>
              <div className="flex pt-5 pl-1 text-base items-center">
                <BsStar className="text-yellow-500" />
                <p className="text-white ml-4">
                  {Math.round(movie?.vote_average)} / 10
                </p>
              </div>
              <a href={`https://www.youtube.com/watch?v=${videos.key}`}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 mt-10 rounded-full inline-flex items-center">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div className="absolute w-1/2 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie2?.backdrop_path}`}
              className="block w-full h-screen object-cover"
              alt={movie2?.title}
            />
            <div className="absolute w-2/5 top-[25%] p-5 ml-5">
              <h1 className="text-7xl font-bold text-white w-full">
                {movie2?.title}
              </h1>
              <p className="text-white font-normal text-lg pl-1 pt-5">
                {truncateString(movie2?.overview, 200)}
              </p>
              <div className="flex pt-5 pl-1 text-base items-center">
                <BsStar className="text-yellow-500" />
                <p className="text-white ml-4">
                  {Math.round(movie2?.vote_average)} / 10
                </p>
              </div>
              <a href={`https://www.youtube.com/watch?v=${videoss.key}`}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 mt-10 rounded-full inline-flex items-center">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div className="absolute w-1/2 h-screen bg-gradient-to-r from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie3?.backdrop_path}`}
              className="block w-full h-screen object-cover"
              alt={movie3?.title}
            />
            <div className="absolute w-2/5 top-[25%] p-5 ml-5">
              <h1 className="text-7xl font-bold text-white w-full">
                {movie3?.title}
              </h1>
              <p className="text-white font-normal text-lg pl-1 pt-5">
                {truncateString(movie3?.overview, 200)}
              </p>
              <div className="flex pt-5 pl-1 text-base items-center">
                <BsStar className="text-yellow-500" />
                <p className="text-white ml-4">
                  {Math.round(movie3?.vote_average)} / 10
                </p>
              </div>
              <a href={`https://www.youtube.com/watch?v=${videosss.key}`}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 mt-10 rounded-full inline-flex items-center">
                  <AiOutlinePlayCircle className="mr-2" />
                  <span>Watch Trailer</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mx-11 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Popular Movies</h1>
        <h6
          className="text-red-600 hover:text-red-400 text-lg pt-2 flex items-center cursor-pointer"
          onClick={() => navigate("/all-movies")}
        >
          See All Movie
          <AiOutlineArrowRight className="ml-1" />
        </h6>
      </div>
      <div className="my-16 mx-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {popular.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="w-full inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-[500px] rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-24 mx-11 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Browser by Category</h1>
        <h6
          className="text-red-600 hover:text-red-400 text-lg pt-2 flex items-center cursor-pointer"
          onClick={() => navigate("/all-movies")}
        >
          See All Movie
          <AiOutlineArrowRight className="ml-1" />
        </h6>
      </div>
      <ButtonCategory />
      <div className="my-16 mx-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {popular.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="w-full inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-[500px] rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Main;

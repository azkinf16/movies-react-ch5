import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

function Detail() {
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
  const noPicture =
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg";
  const noData =
    "https://financialadvisors.com/media/no-images/nodata-found.png";

  const getDetails = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCasts = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
        },
      });

      setCast(res.data.cast.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${id}/reviews`, {
        params: {
          api_key: API_KEY,
        },
      });

      setReview(res.data.results.slice(0, 2));
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos = async () => {
    try {
      const res = await axios.get(`${API_URL}/movie/${id}/videos`, {
        params: {
          api_key: API_KEY,
        },
      });
      setVideo(
        res.data.results.find(
          (video) =>
            video.name === "Official Trailer" ||
            video.name === "Official Teaser" ||
            video.name === "Trailer" ||
            video.name === "Teaser"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
    getCasts();
    getReviews();
    getVideos();
    window.scroll(0, 0);
  }, [id]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="header">
        <div className="absolute w-1/2 h-screen bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          className="block w-full h-screen object-cover"
          alt={details.title}
        />
        <div className="absolute w-1/2 top-[25%] p-5 ml-5">
          <h1 className="text-5xl font-bold text-white">{details.title}</h1>
          <div className="flex">
            {details.genres &&
              details.genres.map((item, index) => {
                return (
                  <p className="text-white mr-2 pl-1 font-light" key={index}>
                    {item.name}
                  </p>
                );
              })}
          </div>
          <p className="text-white pt-4 pl-1 font-semibold">
            Release at {details.release_date}
          </p>
          <p className="text-white text-base font-normal pl-1">
            {truncateString(details.overview, 400)}
          </p>
          <div className="flex pt-5 pl-1 ">
            <BsStar className="text-yellow-500 mt-1" />
            <p className="text-white ml-4">
              {Math.round(details.vote_average)} / 10
            </p>
          </div>
          <a href={video ? `https://www.youtube.com/watch?v=${video.key}` : "https://www.youtube.com/watch?v=undefined"}>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 ml-1 mt-7 rounded-full inline-flex items-center">
              <AiOutlinePlayCircle className="mr-2" />
              <span>Watch Trailer</span>
            </button>
          </a>
        </div>
      </div>
      <div className="pt-16 mx-11 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Cast & Crew</h1>
      </div>
      <div className="py-16 mx-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {cast.length ? (
            cast.length >= 0 &&
            cast.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full inline-block cursor-pointer relative p-2">
                  <img
                    className="w-full h-full rounded-lg"
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                        : noPicture
                    }
                    alt={item.name}
                  />
                  <h1 className="pt-4 font-bold text-xl">{item.name}</h1>
                  <h2 className="text-xs text-gray-500">{item.character}</h2>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <img src={noData} className="mx-auto" />
          )}
        </Swiper>
      </div>
      <div className="pt-8 mx-11 pb-7 text-center">
        <h1 className="text-3xl font-bold">What People Says ?</h1>
      </div>
      <div className="mx-10 pt-10 pb-10 flex justify-evenly">
        {review.length ? (
          review.length >= 0 &&
          review.map((item, index) => (
            <div className="max-w-lg h-full" key={index}>
              <div className="border border-gray-400 rounded-lg p-4 flex flex-col justify-between leading-normal">
                <div className="mb-2 pt-3">
                  <img
                    className="w-20 h-20 rounded-full mx-auto"
                    src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                    alt="avatar"
                  />
                  <div className="text-gray-900 font-bold text-xl my-3 text-center">
                    <p>{item.author}</p>
                  </div>
                  <p className="text-sm text-gray-600 flex">
                    <BsStar className="text-yellow-500 mt-1" />
                    <p className="ml-2">
                      {item.author_details.rating} / 10
                    </p>
                  </p>
                  <p className="text-gray-700 text-xs text-justify">
                    {item.content}
                  </p>
                </div>
                <p className="text-gray-400 text-xs pt-4">
                  Release at : {item.created_at}
                </p>
              </div>
            </div>
          ))
        ) : (
          <img src={noData} />
        )}
      </div>
    </>
  );
}

export default Detail;

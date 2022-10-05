import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

function Detail() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "15a77a373cab542d1f99af813fbc9979";

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

  useEffect(() => {
    getDetails();
  }, []);

  console.log(details);
  console.log(details.vote_average);

  console.log(Math.round(details.vote_average));

  return (
    <>
      <div className="absolute w-1/2 h-screen bg-gradient-to-r from-black"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        className="block w-full h-screen object-cover"
        alt=""
      />
      <div className="absolute w-1/2 top-[25%] p-5 ml-5">
        <h1 className="text-5xl font-bold text-white">{details.title}</h1>
        <div className="flex pt-4">
          {details.genres &&
            details.genres.map((item, id) => {
              return (
                <p className="text-white mr-2 pl-1 font-light" key={id}>
                  {item.name}
                </p>
              );
            })}
        </div>
        <p className="text-white text-base font-normal pt-8 pl-1">
          {details.overview}
        </p>
        <div className="flex pt-5 pl-1 text-base items-center">
          <BsStar className="text-yellow-500" />
          <p className="text-white ml-4">{Math.round(details.vote_average)} / 10</p>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 ml-1 mt-10 rounded-full inline-flex items-center">
          <AiOutlinePlayCircle className="mr-2" />
          <span>Watch Trailer</span>
        </button>
      </div>
    </>
  );
}

export default Detail;

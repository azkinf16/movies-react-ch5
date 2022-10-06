import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonCategory() {
  const navigate = useNavigate();

  return (
    <div className="my-16 mx-12 flex items-center justify-between">
      <button onClick={() => navigate("/category/horror")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Horror
      </button>
      <button onClick={() => navigate("/category/drama")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Drama
      </button>
      <button onClick={() => navigate("/category/animation")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Animation
      </button>
      <button onClick={() => navigate("/category/thriller")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Thriller
      </button>
      <button onClick={() => navigate("/category/family")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Family
      </button>
      <button onClick={() => navigate("/category/adventure")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Adventure
      </button>
      <button onClick={() => navigate("/category/fantasy")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Fantasy
      </button>
      <button onClick={() => navigate("/category/comedy")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Comedy
      </button>
    </div>
  );
};

export default ButtonCategory;

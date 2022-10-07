import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonCategory() {
  const navigate = useNavigate();

  return (
    <div className="my-16 mx-12 flex items-center justify-between">
      <button onClick={() => navigate("/category/horror/27")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Horror
      </button>
      <button onClick={() => navigate("/category/drama/18")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Drama
      </button>
      <button onClick={() => navigate("/category/animation/16")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Animation
      </button>
      <button onClick={() => navigate("/category/thriller/53")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Thriller
      </button>
      <button onClick={() => navigate("/category/family/10751")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Family
      </button>
      <button onClick={() => navigate("/category/adventure/12")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Adventure
      </button>
      <button onClick={() => navigate("/category/fantasy/14")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Fantasy
      </button>
      <button onClick={() => navigate("/category/comedy/35")} className="w-[160px] bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mr-2">
        Comedy
      </button>
    </div>
  );
};

export default ButtonCategory;

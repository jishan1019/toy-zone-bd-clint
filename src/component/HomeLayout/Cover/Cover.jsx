import React from "react";

const Cover = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://htmldemo.net/toyqo/toyqo/assets/images/slider/slider1-1.png"
          className="w-full h-48 md:h-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div>
            <h1 className="text-2xl font-semibold md:text-5xl mb-4 ml-2 ">
              Get -30% Off
            </h1>
            <div className="md:text-lg text-xs mt-2 mb-2 ml-2 font-semibold">
              <p>Discover a world of fun and imagination</p>
              <p>with our kids toy website.</p>
              <p>Shop now for endless joy!</p>
            </div>
            <button className="pt-2 ml-2 pb-2 pl-4 pr-4 bg-orange-600 font-semibold rounded-md mt-3 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

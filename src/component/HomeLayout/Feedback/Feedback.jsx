import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feedback = () => {
  return (
    <>
      <div className="mt-12">
        <h1 className="font-semibold text-center lg:text-2xl">
          Empowering Growth Through Constructive Feedback.
        </h1>
        <p className="text-center mt-3 mb-6 text-orange-800">What they say</p>
      </div>
      <div className="flex bg-rose-100 justify-center items-center flex-col border-2 lg:flex-row  w-full p-4">
        <div className="lg:w-[50%] w-full rounded  mb-8 border-r-2">
          <img
            src="https://thumbs.dreamstime.com/b/baby-toddler-playing-toy-car-boy-40768227.jpg"
            alt=""
          />
        </div>

        <div className=" lg:w-[50%]  w-full mt-8 mb-12  ">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full flex-col">
              <div className="w-20 mx-auto">
                <img
                  className="rounded-full  "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5Ts2Vj3ggGDIeYe1jHYvNcMPZNwlRjmCRA&usqp=CAU"
                />
              </div>
              <h1 className="text-center font-semibold text-2xl mt-3">
                "Amazing selection of toys, my <br />
                kids love browsing through the website!"
              </h1>
              <p className="text-center mt-4 mb-4 text-orange-800">
                Jhon Kim,London
              </p>
            </div>

            <div id="item2" className="carousel-item w-full flex-col">
              <div className="w-20 mx-auto">
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFo20EC41e62zUIHcCB6zfafIs5ysBwPg3w&usqp=CAU"
                />
              </div>
              <h1 className="text-center font-semibold text-2xl mt-3">
                "The ordering process was seamless, and the toys arrived
                quickly. Highly recommended!"
              </h1>
              <p className="text-center mt-4 mb-4 text-orange-800">
                Lara Tom,London
              </p>
            </div>

            <div id="item3" className="carousel-item w-full flex-col">
              <div className="w-20 mx-auto">
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAjn8jjdH4fa2ZGlOY4z_cQAXFskvZfbTwQ&usqp=CAU"
                />
              </div>
              <h1 className="text-center font-semibold text-2xl mt-3">
                "The website offers great discounts and deals, making it
                affordable to keep my kids entertained."
              </h1>
              <p className="text-center mt-4 mb-4 text-orange-800">
                Sadhin Ahamed,Dhaka
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

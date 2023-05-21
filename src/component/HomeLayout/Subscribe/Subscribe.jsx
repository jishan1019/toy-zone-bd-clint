import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="mt-20 text-center mb-6 ">
        <h1 className="md:text-3xl text-2xl font-semibold mb-8 text-center ml-3 mr-3">
          Limited Time Offer get 30% Offer <br /> Prise Join Now
        </h1>
        <p className="text-red-700">
          Limited time offer for this month. No credit card required.
        </p>

        <div className="mt-6 mb-12">
          <input
            className="border-gray-300 rounded border-4 p-3 mr-4 font-semibold text-orange-800"
            type="email"
            placeholder="Enter your eamil adress"
          />
          <button className="bg-orange-600 hover:bg-orange-400 p-4 mt-4 lg:mt-0 text-white hover:text-black font-bold rounded  ">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;

import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="mt-20 text-center mb-6 ">
        <h1 className="md:text-3xl text-2xl font-semibold mb-8 text-center ml-3 mr-3">
          For any feedback or Contact Send Here
        </h1>
        <p className="text-red-700">
          For more improve our website contact with us
        </p>

        <div className="mt-6 mb-12">
          <input
            className="border-gray-300 rounded border-4 p-6 mr-4 font-semibold text-orange-800"
            type="email"
            placeholder="Enter your Feedback Here"
          />
          <button className="bg-orange-600 hover:bg-orange-400 p-4 mt-4 lg:mt-0 text-white hover:text-black font-bold rounded  ">
            Feedback Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;

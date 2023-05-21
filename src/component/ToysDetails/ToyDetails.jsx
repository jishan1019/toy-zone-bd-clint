import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";

const ToyDetails = () => {
  useDynamicTitle("Toy Zone | Toy Details");

  return (
    <div className="border-2 p-8 w-[80%] flex flex-col lg:flex-row  mx-auto mt-16 mb-16 rounded-lg lg:mb-0">
      <div className="w-full lg:w-[60%]">
        <h1 className="lg:mt-10  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta et
          iure perferendis cum placeat corrupti dolore modi odio repudiandae
          aperiam labore, quidem facilis consequuntur fugiat unde laudantium
          sapiente, cumque ratione?
        </h1>

        <div className="mt-6 text-gray-600">
          <p>Toy name: Hello Car</p>
          <p className="mt-1">Seller name: Jishan</p>
          <p className="mt-1">Seller email: T@GMAIL.COM</p>
          <p className="mt-1">Price: $12.00</p>
          <p className="mt-1">Rating: 4.0</p>
          <p className="mt-1">Available quantity: 320</p>
        </div>
      </div>
      <div className="w-full lg:h-72 lg:w-[30%] mt-8 lg:mt-12 mx-auto">
        <img
          src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE="
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ToyDetails;

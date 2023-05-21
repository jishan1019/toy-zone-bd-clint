import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopByCatagoryCard from "./ShopByCatagoryCard";

const ShopByCatagoryIcon = () => {
  const [catagory, setCatagory] = useState("");
  const [singleCatagory, setSingleCatagory] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/toysByCategory/${catagory}`)
      .then((res) => res.json())
      .then((singleData) => setSingleCatagory(singleData));
  }, [catagory]);

  const handelCatagiry = (name) => {
    setCatagory(name);
  };

  const handleCategory = () => {
    setCatagory(inputValue);
  };

  return (
    <div className="p-4 bg-slate-50  mt-20">
      <h1 className="text-2xl font-semibold text-center">
        Shop With Us in Defferent Catagory
      </h1>

      <div className="grid grid-col-1 gap-6 mt-8 lg:grid-cols-4">
        <div
          onClick={() => handelCatagiry("Car Toy")}
          className="card  bg-base-100 shadow"
        >
          <div className="card-body mx-auto">
            <img
              className="h-16  text-center"
              src="https://i.ibb.co/xzf8KBz/icons8-car-100.png"
              alt=""
            />
            <p className="text-center">Car Catagory</p>
          </div>
        </div>

        <div
          onClick={() => handelCatagiry("Bus Toy")}
          className="card  bg-base-100 shadow"
        >
          <div className="card-body mx-auto">
            <img
              className="h-16  text-center"
              src="https://i.ibb.co/pPVgvbL/icons8-bus-100.png"
              alt=""
            />
            <p className="text-center">Bus Catagory</p>
          </div>
        </div>

        <div
          onClick={() => handelCatagiry("Bus Toy")}
          className="card  bg-base-100 shadow"
        >
          <div className="card-body mx-auto">
            <img
              className="h-16  text-center"
              src="https://i.ibb.co/mNj36pH/icons8-truck-100.png"
              alt=""
            />
            <p className="text-center">Truck Catagory</p>
          </div>
        </div>

        <div
          onClick={() => handelCatagiry("Truck Toy")}
          className="card  bg-base-100 shadow"
        >
          <div className="card-body mx-auto">
            <input
              className="border-2 p-3"
              type="text"
              placeholder="Search by Catagory name"
              name="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => handleCategory()}
              className="text-center bg-orange-600 p-3 rounded-md text-white"
            >
              Search Catagory
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {singleCatagory?.map((singleDataCatagory) => (
          <ShopByCatagoryCard singleDataCatagory={singleDataCatagory} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCatagoryIcon;

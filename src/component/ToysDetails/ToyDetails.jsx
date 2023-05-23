import React, { useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToyDetails = () => {
  useDynamicTitle("Toy Zone | Toy Details");
  const { id } = useParams();
  const [singleDetails, setSengelDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch(`https://jisan-repo-production.up.railway.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((singleData) => {
        setSengelDetails(singleData);
        setLoading(false);
      });
  }, [id]);

  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    rating,
    price,
    quantity,
    description,
    _id,
  } = singleDetails || {};

  return (
    <div className="border-2 p-8 w-[80%] flex flex-col lg:flex-row  mx-auto mt-16 mb-16 rounded-lg lg:mb-0">
      <div className="w-full lg:w-[60%]">
        <h1 className="lg:mt-10  ">{description}</h1>

        {loading ? (
          <div className="text-center mb-4 mt-4">
            <div
              className="radial-progress bg-primary text-primary-content border-4 border-primary"
              style={{ "--value": 70 }}
            >
              <small className="text-[10px]">Loading..</small>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="mt-6 text-gray-600">
          <p>Toy name: {name}</p>
          <p className="mt-1">Seller name: {sellerName}</p>
          <p className="mt-1">Seller email: {sellerEmail}</p>
          <p className="mt-1">Price: ${price}</p>
          <p className="mt-1">Rating: {rating}</p>
          <p className="mt-1">Available quantity: {quantity}</p>
        </div>
      </div>
      <div className="w-full  lg:w-[30%] mt-8 lg:mt-12 mx-auto">
        <img src={pictureURL} alt="" className="rounded-lg" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default ToyDetails;

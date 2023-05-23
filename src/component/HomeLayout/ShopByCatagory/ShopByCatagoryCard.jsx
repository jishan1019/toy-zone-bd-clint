import React from "react";
import { Link } from "react-router-dom";

const ShopByCatagoryCard = ({ singleDataCatagory }) => {
  console.log(singleDataCatagory);

  const { name, price, rating, pictureURL, _id } = singleDataCatagory || {};

  return (
    <>
      <div className="card w-full bg-base-100 shadow rounded-none">
        <figure>
          <img className="h-40" src={pictureURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name: {name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>

          <div className="card-actions justify-end">
            <Link to={`/toyDetails/${_id}`}>
              <button className="btn btn-primary bg-orange-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCatagoryCard;

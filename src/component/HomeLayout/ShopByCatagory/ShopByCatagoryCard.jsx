import React from "react";
import { Link } from "react-router-dom";

const ShopByCatagoryCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow rounded-none">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PCv5Rr74A7QMS3RN064lIh52796r1FI8xQ&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name: Spreed Car</h2>
          <p>Price: 1200</p>
          <p>Rating: 4.0</p>
          <div className="card-actions justify-end">
            <Link to="toyDetails">
              <button className="btn btn-primary bg-orange-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCatagoryCard;

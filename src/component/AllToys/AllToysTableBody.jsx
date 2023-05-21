import React from "react";
import { Link } from "react-router-dom";

const AllToysTableBody = ({ singleToy }) => {
  const { pictureURL, name, sellerName, category, price, quantity, _id } =
    singleToy || {};

  return (
    <>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>

      <td>{sellerName}</td>
      <td>{category}</td>

      <td>$:{price}</td>
      <td>{quantity}</td>

      <th>
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-ghost btn-xs pl-4 pr-4 pt-3 pb-6 text-white font-semibold bg-orange-600">
            details
          </button>
        </Link>
      </th>
    </>
  );
};

export default AllToysTableBody;

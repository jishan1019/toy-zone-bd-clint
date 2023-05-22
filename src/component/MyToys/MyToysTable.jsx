import React from "react";
import { Link } from "react-router-dom";

const MyToysTable = ({ singleMyToy }) => {
  const {
    toyPhotoUrl,
    toyName,
    sellerName,
    sellerEmail,
    subCatagoryName,
    toyPrise,
    toyQuentitiy,
    _id,
  } = singleMyToy || {};

  return (
    <>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toyPhotoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>

      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCatagoryName}</td>

      <td>$:{toyPrise}</td>
      <td>{toyQuentitiy}</td>
      <th>
        <Link to="/updateToy">
          <button className="btn btn-ghost btn-xs pl-4 pr-4 pt-3 pb-6 text-white font-semibold bg-orange-600">
            Update
          </button>
        </Link>
        <button className="btn btn-ghost btn-xs outline pl-4 ml-4 pr-4 pt-3 pb-6  font-semibold bg-white">
          Delete
        </button>
      </th>
    </>
  );
};

export default MyToysTable;

import React from "react";
import { Link, json } from "react-router-dom";

const MyToysTable = ({ singleMyToy, handelDeleteNew }) => {
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
        </div>
      </td>

      <td className="font-bold">{toyName}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCatagoryName}</td>

      <td>$:{toyPrise}</td>
      <td>{toyQuentitiy}</td>
      <th>
        <Link to={`/updateToy/${_id}`}>
          <button className="btn btn-ghost btn-xs pl-4 pr-4 pt-3 pb-6 text-white font-semibold bg-orange-600">
            Update
          </button>
        </Link>
        <button
          onClick={() => handelDeleteNew(_id)}
          className="btn btn-ghost btn-xs outline pl-4 ml-4 pr-4 pt-3 pb-6  font-semibold bg-white"
        >
          Delete
        </button>
      </th>
    </>
  );
};

export default MyToysTable;

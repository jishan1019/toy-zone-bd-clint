import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import AllToysTableBody from "./AllToysTableBody";

const AllToys = () => {
  useDynamicTitle("Toy Zone | All Toy");
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <AllToysTableBody />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

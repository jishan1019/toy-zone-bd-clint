import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import AllToysTableBody from "./AllToysTableBody";

const AllToys = () => {
  useDynamicTitle("Toy Zone | All Toy");
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="mt-8 mb-8 ml-4 mr-4">
          <div className="flex">
            <input
              className="p-4 border-2 border-gray-400 flex-grow rounded-md"
              type="text"
              placeholder="Search By Name......."
            />
            <button className="p-4 bg-orange-600 -ml-2 text-white font-semibold rounded-md border-t-2 border-r-2 border-b-2 border-gray-400">
              Search
            </button>
          </div>
        </div>

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

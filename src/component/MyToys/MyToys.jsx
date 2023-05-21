import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
  useDynamicTitle("Toy Zone | My Toys");
  return (
    <div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Seller</th>
            <th>Gmail</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <MyToysTable />
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

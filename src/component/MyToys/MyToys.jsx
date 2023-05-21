import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";

const MyToys = () => {
  useDynamicTitle("Toy Zone | My Toys");
  return <div>my toys</div>;
};

export default MyToys;

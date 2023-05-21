import React from "react";
import Cover from "./Cover/Cover";
import Gallary from "./Gallary/Gallary";
import Feedback from "./Feedback/Feedback";
import OnSellProduct from "./OnSellProduct/OnSellProduct";
import Subscribe from "./Subscribe/Subscribe";
import MoreOurProduct from "./MoreOurProduct/MoreOurProduct";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import ShopByCatagoryIcon from "./ShopByCatagory/ShopByCatagoryIcon";

const Home = () => {
  useDynamicTitle("Toy Zone | Home");
  return (
    <div className="mb-16">
      <Cover />
      <Gallary />
      <ShopByCatagoryIcon />
      <OnSellProduct />
      <Feedback />
      <Subscribe />
      <MoreOurProduct />
    </div>
  );
};

export default Home;

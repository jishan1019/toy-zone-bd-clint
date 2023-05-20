import React from "react";
import Cover from "./Cover/Cover";
import Gallary from "./Gallary/Gallary";
import Feedback from "./Feedback/Feedback";
import OnSellProduct from "./OnSellProduct/OnSellProduct";
import Subscribe from "./Subscribe/Subscribe";
import MoreOurProduct from "./MoreOurProduct/MoreOurProduct";

const Home = () => {
  return (
    <div className="mb-16">
      <Cover />
      <Gallary />
      <OnSellProduct />
      <Feedback />
      <MoreOurProduct />
      <Subscribe />
    </div>
  );
};

export default Home;

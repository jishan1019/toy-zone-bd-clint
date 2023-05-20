import React from "react";
import Cover from "./Cover/Cover";
import Gallary from "./Gallary/Gallary";
import Feedback from "./Feedback/Feedback";
import OnSellProduct from "./OnSellProduct/OnSellProduct";

const Home = () => {
  return (
    <div className="mb-16">
      <Cover />
      <Gallary />
      <OnSellProduct />
      <Feedback />
    </div>
  );
};

export default Home;

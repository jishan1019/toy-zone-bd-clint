import React from "react";
import Cover from "./Cover/Cover";
import Gallary from "./Gallary/Gallary";
import Feedback from "./Feedback/Feedback";

const Home = () => {
  return (
    <div className="mb-16">
      <Cover />
      <Gallary />
      <Feedback />
    </div>
  );
};

export default Home;

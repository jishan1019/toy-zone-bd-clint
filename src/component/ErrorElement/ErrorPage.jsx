import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";

const ErrorPage = () => {
  useDynamicTitle("Toy Zone | 404");
  return <div>errpr</div>;
};

export default ErrorPage;

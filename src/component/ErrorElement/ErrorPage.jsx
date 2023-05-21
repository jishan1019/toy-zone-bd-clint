import React from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  useDynamicTitle("Toy Zone | 404");
  return (
    <div>
      <div className="mt-12">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_pNx6yH.json"
          style={{ height: "300px", width: "400px" }}
        ></Player>
      </div>

      <h1 className="text-center  mt-12">
        <span className="text-3xl">Eroor 404 Not Found</span> <br />
        <p>Dear user this page not found please go back</p>
        <br />
        <span>
          <Link to="/">
            <button className="bg-orange-600 text-white p-3 rounded-md mx-auto text-center">
              Go Back
            </button>
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default ErrorPage;

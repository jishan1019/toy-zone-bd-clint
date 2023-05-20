import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[50%] hidden lg:block mt-8 mb-8">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
          alt=""
        />
      </div>
      <div className=" lg:w-[50%] w-full mt-8 mb-12 ">
        <div className="bg-base-200 lg:w-1/2 w-[80%] mx-auto pt-12 pb-12 pl-4 pr-4 rounded-md text-center">
          <h1 className="font-bold text-3xl">Login Now</h1>
          <p className="mt-3 text-sm">Dear user please logiin to continue.</p>
          <form className="mt-8" action="">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Name"
              className="p-4 rounded-md"
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              className="p-4 rounded-md mt-4"
            />
            <br />
            <p className="mt-4 text-sm">
              Didn't have account
              <Link to="/regestation"> Signup here</Link>
            </p>

            <input
              type="submit"
              value="Login Now"
              className="p-4 rounded-md mt-4 bg-orange-700 text-white font-semibold"
            />
          </form>

          <div className="divider">OR</div>
          <div>
            <img
              className="mb-4 w-[200px] mx-auto"
              src="https://i.ibb.co/gSTHXZJ/google-btn.png"
              alt=""
            />
            <img
              className="mb-6 w-[200px] mx-auto"
              src="https://i.ibb.co/g9f4P0S/github-btn.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

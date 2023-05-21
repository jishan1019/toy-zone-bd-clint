import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, loginGoogle, loginGithub } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.from?.pathname || "/";

  console.log(email, password);

  const notify = (massage) => {
    toast(massage);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          notify("Login Success");
          navigate(form, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          notify(error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    loginGoogle()
      .then((result) => {
        notify("Login Success");
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        notify(error.message);
      });
  };

  const handleGithubSignIn = () => {
    loginGithub()
      .then((result) => {
        notify("Login Success");
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        notify(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[50%] hidden lg:block mt-8 mb-8">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
          alt=""
        />
      </div>
      <div className=" lg:w-[50%] w-full  mb-12 ">
        <div className="bg-base-200 lg:w-[60%] w-[80%] mx-auto pt-12 pb-12 pl-4 pr-4 rounded-md text-center">
          <h1 className="font-bold text-3xl">Login Now</h1>
          <p className="mt-3 text-sm">Please login to continue</p>
          <form className="mt-8" action="">
            <input
              required
              type="email"
              name="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="p-3 rounded-md w-[80%]"
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              className="p-3 rounded-md mt-4 w-[80%]"
            />
            <br />
            <p className="mt-4 text-sm">
              Didn't have account
              <Link to="/regestation"> Signup here</Link>
            </p>

            <input
              type="submit"
              value="Login Now"
              onClick={handleLogin}
              className="p-4 rounded-md mt-4 bg-orange-700 text-white font-semibold"
            />
          </form>

          <div className="divider">OR</div>
          <div>
            <img
              className="mb-4 w-[200px] mx-auto"
              src="https://i.ibb.co/gSTHXZJ/google-btn.png"
              alt=""
              onClick={handleGoogleSignIn}
            />
            <img
              className="mb-6 w-[200px] mx-auto"
              src="https://i.ibb.co/g9f4P0S/github-btn.png"
              alt=""
              onClick={handleGithubSignIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

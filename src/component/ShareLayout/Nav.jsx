import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar bg-white">
        <div className="flex-1">
          <img
            className="h-[80px] ml-4"
            src="https://i.ibb.co/8XPhZ5V/images-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end hidden md:block">
            <div className="indicator">
              <Link to="/">Home</Link>
              <Link className="ml-4" to="/">
                Blog
              </Link>
              <Link className="ml-4" to="/">
                All Toys
              </Link>
              <Link className="ml-4 mr-4" to="/">
                My Toys
              </Link>
            </div>
          </div>
          <div className="dropdown dropdown-end mr-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">All Toys</Link>
              </li>
              <li>
                <Link to="/">My Toys</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

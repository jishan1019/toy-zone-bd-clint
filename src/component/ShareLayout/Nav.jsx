import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar bg-white">
        <div className="flex-1">
          <img
            className="h-[60px] md:h-[80px]  ml-4"
            src="https://i.ibb.co/8XPhZ5V/images-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end hidden md:block">
            <div className="indicator text-orange-800 font-semibold">
              <div className="w-8 h-8 btn-circle avatar mr-4">
                <img
                  className="rounded-full"
                  src="https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg"
                />
              </div>

              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "active font-semibold" : " ml-4 font-semibold"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) =>
                  isActive ? "active font-semibold ml-4" : " ml-4 font-semibold"
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/"
                aria-label=" All Toys"
                title=" All Toys"
                className={({ isActive }) =>
                  isActive ? "active font-semibold ml-4" : " ml-4 font-semibold"
                }
              >
                All Toys
              </NavLink>

              <NavLink
                to="/"
                aria-label=" All Toys"
                title=" All Toys"
                className={({ isActive }) =>
                  isActive ? "active font-semibold ml-4" : " ml-4 font-semibold"
                }
              >
                Add a Toys
              </NavLink>

              <NavLink
                to="/login"
                aria-label="Login"
                title="Login"
                className={({ isActive }) =>
                  isActive ? "active font-semibold ml-4" : " ml-4 font-semibold"
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/regestation"
                aria-label="Regestation"
                title="Regestation"
                className={({ isActive }) =>
                  isActive ? "active font-semibold ml-4" : " ml-4 font-semibold"
                }
              >
                Regestation
              </NavLink>

              <NavLink
                to="/"
                aria-label="My Toys"
                title="My Toys"
                className={({ isActive }) =>
                  isActive
                    ? "active font-semibold ml-4 mr-4"
                    : " ml-4 mr-4 font-semibold"
                }
              >
                My Toys
              </NavLink>
            </div>
          </div>
          <div className="dropdown dropdown-end mr-4 block md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  aria-label="All Toys"
                  title="All Toys"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  aria-label="Add a Toys"
                  title="Add a Toys"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  Add a Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  aria-label="My Toys"
                  title="My Toys"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  aria-label="Login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold mb-2" : " font-semibold"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/regestation"
                  aria-label="Regestation"
                  title="Regestation"
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : " font-semibold"
                  }
                >
                  Regestation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

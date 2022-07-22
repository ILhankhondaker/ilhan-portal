import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div class="navbar  bg-white  px-12 nav  sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-50 rounded-box w-52 navText font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="aboutus">About US </Link>
            </li>



            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl text-white font-bold ">
          {/* ===========menu logo ======= */}
          <img className="logo" src="https://samsapply.co.uk/landrick/images/SAMS-Apply-Logo-[208x32].svg" alt="" srcset="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 navText font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="aboutus">About US</Link>
          </li>

          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

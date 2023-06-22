import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

const Nav = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4   bg-[#e2d5c0] font-bold font-8xl text-black rounded-b-3xl ">
      <div>
        <Link to="Home" smooth={true} duration={500}>
          <p className="text-black font-bold text-4xl cursor-pointer">
            <img src={Logo} alt="logo" style={{ height: "100px" }} />
          </p>
        </Link>
      </div>
      {/* Navbar */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Explore Courses
          </Link>
        </li>

        <li>
          <Link to="Testimonals" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Humburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile ui */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#e9cfd0]  font-black flex flex-col justify-center items-center "
        }
      >
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Explore Courses
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link
            onClick={handleClick}
            to="Testimonals"
            smooth={true}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

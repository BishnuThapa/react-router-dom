import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <strong>Home</strong>
      </Link>
      <Link to="/about-us">
        <strong>About Us</strong>
      </Link>
      <Link to="/contact">
        <strong>Contact Us </strong>
      </Link>
    </>
  );
};

export default Navbar;

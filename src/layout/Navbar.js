import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import "./Navbar.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <FaHome />
      </Link>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">
        <h2>Logo</h2>
      </Link>

      <nav>
        <ul>
          <NavLink
            className='different'
            to="/"
            exact='true'
            activestyle={{ color: "green", textDecoration: "underline" }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" activestyle={{ color: "green" }}>
            <li>About</li>
          </NavLink>
          <NavLink to="/products" activeclassname="red">
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

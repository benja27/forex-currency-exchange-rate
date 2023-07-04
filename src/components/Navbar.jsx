import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar text-white main-color">
      <div className="container">
        <Link to={"/"} >
          <h2>Crypto-Merca</h2>
        </Link>
        <Link to="/">
          <img
            className="rounded rounded-circle"
            style={{ width: "50px" }}
            src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

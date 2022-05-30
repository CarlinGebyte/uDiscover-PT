import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
            <ul></ul>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

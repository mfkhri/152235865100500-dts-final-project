import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="flex gap-4">
      <li className="hover:font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:font-bold">
        <Link to="/all">all Receipt</Link>
      </li>
    </ul>
  );
};

export default Menu;

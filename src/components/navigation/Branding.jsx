import React from "react";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

const Branding = ({ brandName }) => {
  return (
    <Link to="/">
      <span className="flex hover:scale-105 items-center justify-center">
        <div className="basis-4 grow-1 self-center">
          <MdFoodBank />
        </div>
        <p className="grow-1 font-bold">{brandName}</p>
      </span>
    </Link>
  );
};

export default Branding;

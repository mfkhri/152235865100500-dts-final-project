import React from "react";


const Footer = () => {
  return (
    <footer className="w-full min-h-full mt-48 bg-lime-300 flex justify-center">
      <div className="container w-4/5 p-4 flex gap-2 justify-between">
        <div className="grid grid-cols-2">
          <div className="self-center font-bold">DTS Final Project</div>
        </div>
        <div className="self-center font-bold flex text-start gap-4">
          <div>Final Project:</div>
          <div>Muhammad Fakhri</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

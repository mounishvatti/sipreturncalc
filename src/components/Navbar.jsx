import React from "react";
import moneysvgrepo from "/src/assets/moneysvgrepo.svg";

function Navbar() {
  return (
    <div className="flex items-center w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img src={moneysvgrepo} alt="moneysvgrepo" width="50" height="50" />
          <span className="text-xl text-white/90 font-semibold font-serif">Returns Calculator</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

const Header = () => {
  return (
    <header>
      <div className="h-16 px-4 bg-zinc-900 flex items-center justify-between text-zinc-100">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/4YJYRdJ/LOGO2.png"
            alt=""
            className="h-10"
          />
        </div>

        <div className="flex-1 flex justify-center pl-2 items-center">
          <input
            type="text"
            className="bg-zinc-600 h-10 border-2 border-r-0 border-emerald-500 w-80 px-2 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:w-full transition-all ease-in-out duration-300"
            placeholder="Search"
          />
          <button className="bg-gradient-to-r from-emerald-500 to-green-500 h-10 flex items-center px-4 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600">
            SEARCH
          </button>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <div>Cart</div>
          <div>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

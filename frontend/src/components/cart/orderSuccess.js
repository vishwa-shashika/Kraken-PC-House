import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const orderSuccess = () => {
  return (
    <Fragment>
      <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100%] custom-home-bg relative">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center z-10 w-96 bg-zinc-900 px-4 py-8 hover:shadow hover:shadow-green-500 hover:w-[32rem] transition-all ease-in-out duration-300">
            <div className="text-2xl font-semibold mb-1">
              Order is Sucessful!
            </div>
            <div className="text-[8rem] text-green-500 mt-2 mb-2">
              <BsFillCartCheckFill />
            </div>
            <div className="text-zinc-400 text-lg font-medium">
              Your Order hab been placed successfully
            </div>
            <Link
              to="orders/me"
              className="text-emerald-500 font-medium hover:cursor-pointer"
            >
              {" "}
              Go To My Orders
            </Link>
          </div>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default orderSuccess;

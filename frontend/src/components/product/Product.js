import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Fragment>
      {/*Single Card=============================================================================================*/}
      <Link to={`product/${product._id}`}>
        <div className="w-72 h-96 py-2 border-4 border-zinc-500 shadow-lg flex flex-col items-stretch group overflow-hidden relative transition ease-in-out hover:scale-105 hover:cursor-pointer duration-300">
          <div className="z-0 absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 top-1/2 left-1/2 group-hover:scale-[6000%] group-hover:visible transition ease-in-out duration-300"></div>

          <img
            src={product.images[0].url}
            alt=""
            className="object-contain h-56 w-auto z-10"
          />
          <div className="font-bold text-xl bg-zinc-500 flex justify-center mt-4 py-2 z-10 text-zinc-100">
            {product.name}
          </div>
          <div className="flex justify-center font-semibold text-lg mt-2 z-10 text-zinc-100 group-hover:text-zinc-900 group-hover:border-zinc-900 transition ease-in-out duration-300">
            - {product.price}.00 -
          </div>
          <div className="text-xs font-semibold flex justify-center mt-2 z-10">
            <div
              className={`border-2 ${
                product.stock
                  ? "border-green-500 text-green-500"
                  : "border-amber-500 text-amber-500"
              } py-0.5 px-1 group-hover:text-zinc-900 group-hover:border-zinc-900 transition ease-in-out duration-300`}
            >
              {product.stock ? "IN STOCK" : "OUT OF STOCK"}
            </div>
          </div>
        </div>
      </Link>
      {/*Card Ends==================================================================================================*/}
    </Fragment>
  );
}

export default Product;

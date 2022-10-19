import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import Slider from "rc-slider"
// import 'rc-slider/assets/index.css';
//import { Triangle } from "react-loader-spinner";
//import ReactPaginate from "react-paginate";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

//import MetaData from "./layouts/MetaData";
//import { getProducts } from "../actions/productActions";
//import Product from "./product/Product.js";
//import SideBar from "./SideBar";

import { GiComputerFan } from "react-icons/gi";

import { getAdminProducts } from "../../actions/productActions";

const items = [
  "PROCESSORS",
  "GRAPHIC CARDS",
  "MOTHERBOARDS",
  "RAM",
  "HARD DRIVES",
  "SSD",
  "COOLERS",
  "POWER SUPPLIES",
  "OTHERS",
];

const Dashbord = () => {
  //const [price, setPrice] = useState([100,800000])  //Price Slider Will Not Implemented
  const [category, setCategory] = useState("");
  const categories = ["Products", "Orders", "Users"];

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={`flex bg-zinc-800 relative overflow-x-hidden`}>
        {/*SideBard Content=============*/}
        <div className="w-64 text-zinc-100 bg-zinc-900 shadow-2xl">
          <div className="h-32 px-4 flex flex-col justify-center items-center font-semibold text-lg border-l-8 border-l-emerald-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="relative text-center">Welcome to Admin Area</div>
          </div>

          <div
            onClick={() => setCategory("")}
            className="h-12 px-4 flex items-center bg-zinc-900 group relative overflow-hidden"
          ></div>

          {categories.map((cat) => {
            return (
              <div
                onClick={() => setCategory(cat)}
                className="h-12 px-4 flex items-center bg-zinc-900 border-b-2 border-black group relative overflow-hidden"
                key={cat}
              >
                {category == cat ? (
                  <div className="z-0 absolute h-12 bg-gradient-to-r  from-emerald-500 to-green-500 top-0 left-0 w-[17rem] visible border-l-8 border-l-emerald-900  "></div>
                ) : (
                  <div className="z-0 absolute h-12 w-0 bg-gradient-to-r  from-emerald-500 to-green-500 top-0 left-0 group-hover:w-[17rem] group-hover:visible group-hover:border-l-8 group-hover:border-l-emerald-900 group-hover:cursor-pointer  transition-all ease-in-out duration-200"></div>
                )}
                <div className="z-10 group-hover:cursor-pointer flex items-center gap-2">
                  <GiComputerFan />
                  {cat}
                </div>
              </div>
            );
          })}
        </div>

        {/*Main Conent Area=========*/}
        <div className="relative w-[calc(100vw-16rem)] min-h-[60vh] flex flex-wrap gap-6 px-6 py-6">
          <Link
            to="/dashbord/products"
            className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer"
          >
            <div>All Products</div>
            <div className="font-medium text-lg">
              {products && products.length} Products Available
            </div>
          </Link>
          <Link
            to="/admin/product"
            className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer"
          >
            <div>+ Add New Product</div>
            <div className="font-medium text-lg">Go to Add Product</div>
          </Link>
          <div className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer">
            <div>Item</div>
            <div className="font-medium text-lg">Value</div>
          </div>
          <div className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer">
            <div>Item</div>
            <div className="font-medium text-lg">Value</div>
          </div>
          <div className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer">
            <div>Item</div>
            <div className="font-medium text-lg">Value</div>
          </div>
          <div className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer">
            <div>Item</div>
            <div className="font-medium text-lg">Value</div>
          </div>
          <div className="bg-zinc-300 flex-1 min-w-[250px] flex flex-col justify-center items-center text-2xl font-semibold hover:scale-105 hover:cursor-pointer">
            <div>Item</div>
            <div className="font-medium text-lg">Value</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashbord;

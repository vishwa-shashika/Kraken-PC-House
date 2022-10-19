import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Slider from "rc-slider"
// import 'rc-slider/assets/index.css';
import { Triangle } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product.js";
import SideBar from "./SideBar";

import { GiComputerFan } from "react-icons/gi";
import { Link } from "react-router-dom";

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

const Home = ({ match }) => {
  //const [price, setPrice] = useState([100,800000])  //Price Slider Will Not Implemented
  const [category, setCategory] = useState("");
  const categories = [
    "Processors",
    "Graphic Cards",
    "Mother Boards",
    "RAM",
    "HDD",
    "SSD",
    "Power Supply",
    "Casings",
    "Coolers",
    "Pre-Builts",
    "Flash Drives",
    "Laptops",
    "Others",
  ];

  const notify = (msg) =>
    toast.error(msg, {
      theme: "light",
    });

  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword;

  console.log(productsCount, products, error, loading);

  useEffect(() => {
    if (error) {
      return notify(error);
    }
    dispatch(getProducts(keyword, category));
  }, [dispatch, error, keyword, category]);

  //Pagination Related Code===================================
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(products.length / productsPerPage);
  let displayProducs = null;

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  if (products) {
    displayProducs = products
      .slice(pagesVisited, pagesVisited + productsPerPage)
      .map((product) => {
        return <Product key={product._id} product={product} />;
      });
  }

  return (
    <Fragment>
      <MetaData title={"Home"} />
      <div
        className={`flex bg-zinc-800 relative overflow-x-hidden ${
          loading ? "h-[calc(100vh-4rem)]" : null
        }`}
      >
        {/*SideBard Content=============*/}
        <div className="w-64 text-zinc-100 bg-zinc-900 shadow-2xl">
          <div className="h-32 px-4 flex flex-col justify-center items-center font-semibold text-lg border-l-8 border-l-emerald-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <Link
              to="/pc-builder"
              className="relative text-zinc-100 text-center"
            >
              TRY OUR NEW PC BUILDER
              <div className="absolute top-[-2px] right-[-12px] w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="absolute top-[-2px] right-[-12px] w-3 h-3 rounded-full bg-yellow-500 animate-ping"></div>
            </Link>
          </div>

          <div
            onClick={() => setCategory("")}
            className="h-12 px-4 flex items-center bg-zinc-900 group relative overflow-hidden"
          >
            {category == "" ? (
              <div className="z-0 absolute h-12 bg-gradient-to-r  from-emerald-500 to-green-500 top-0 left-0 w-[17rem] visible border-l-8 border-l-emerald-900  "></div>
            ) : (
              <div className="z-0 absolute h-12 w-0 bg-gradient-to-r  from-emerald-500 to-green-500 top-0 left-0 group-hover:w-[17rem] group-hover:visible group-hover:border-l-8 group-hover:border-l-emerald-900 group-hover:cursor-pointer  transition-all ease-in-out duration-200"></div>
            )}
            <div className="z-10 group-hover:cursor-pointer">
              {"All Products"}
            </div>
          </div>

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
        <div className="BACKGROUND-IMAGE-CONTAINER custom-home-bg w-full relative">
          <div className="grid grid-cols-4 gap-5 px-4 mx-auto pt-5 pb-24">
            {/*Card Loop=============================================================================================*/}
            {loading ? (
              <div className="absolute top-0 left-0 w-[100vw] h-[calc(100vh-4rem)] bg-zinc-900/[.8] z-[100] flex justify-center items-center">
                <Triangle
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : (
              <Fragment>{displayProducs}</Fragment>
            )}

            {/*Card Loop End Ends====================================================================================*/}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName={
              "pagination_container absolute bottom-4 left-[50%] translate-x-[-50%] flex text-zinc-200 justify-center items-center bg-zinc-900"
            }
            previousLinkClassName={"pagination_previous"}
            nextLinkClassName={"pagination_next"}
            disabledClassName={"pagination_disabled"}
            activeClassName={"pagination_active border-t-2 border-emerald-500"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

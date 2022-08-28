import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Triangle } from "react-loader-spinner";

import ReactPaginate from "react-paginate";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product.js";
import SideBar from "./SideBar";

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

const Home = () => {
  const notify = (msg) =>
    toast.error(msg, {
      theme: "light",
    });

  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  console.log(productsCount, products, error, loading);

  useEffect(() => {
    if (error) {
      return notify(error);
    }
    dispatch(getProducts());
  }, [dispatch, error]);

  //Pagination Related Code
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
        <SideBar items={items} />

        {/*Main Conent Area=========*/}
        <div className="BACKGROUND-IMAGE-CONTAINER custom-home-bg w-full relative">
          <div className="grid grid-cols-4 gap-5 px-4 mx-auto pt-5 pb-24">
            {/*Single Card=============================================================================================*/}
            <div className="w-72 h-96 py-2 border-4 border-zinc-500 shadow-lg flex flex-col items-stretch group overflow-hidden relative transition ease-in-out hover:scale-105 duration-300">
              <div className="z-0 absolute h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 top-1/2 left-1/2 group-hover:scale-[6000%] group-hover:visible transition ease-in-out duration-300"></div>

              <img
                src="https://i.ibb.co/TR0qkD6/827-20220429161718-nx290-pdt01.png"
                alt=""
                className="object-contain h-56 w-auto z-10"
              />
              <div className="font-bold text-xl bg-zinc-500 flex justify-center mt-4 py-2 z-10 text-zinc-100">
                INTEL CORE I5-10400F
              </div>
              <div className="flex justify-center font-semibold text-lg mt-2 z-10 text-zinc-100 group-hover:text-zinc-900 group-hover:border-zinc-900 transition ease-in-out duration-300">
                - LKR 54000.00 -
              </div>
              <div className="text-xs font-semibold flex justify-center mt-2 z-10">
                <div className="border-2 border-green-500 text-green-500 py-0.5 px-1 group-hover:text-zinc-900 group-hover:border-zinc-900 transition ease-in-out duration-300">
                  IN STOCK
                </div>
              </div>
            </div>
            {/*Card Ends=============================================================================================*/}

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

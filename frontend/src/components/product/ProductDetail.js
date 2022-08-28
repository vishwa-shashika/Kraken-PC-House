import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Triangle } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getProductDetails, clearErrors } from "../../actions/productActions";

const ProductDetail = ({ match }) => {
  const notify = (msg) =>
    toast.error(msg, {
      theme: "light",
    });

  const dispatch = useDispatch();
  const { loading, product, error, productsCount } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    if (error) {
      console.log(error);
      notify(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, match.params.id]);
  return (
    <div
      className={`relative overflow-x-hidden custom-home-bg w-full ${
        loading ? "h-[calc(100vh-4rem)]" : null
      }`}
    >
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
        <div className="bg-zinc-800 text-zinc-200 flex flex-col items-center justify-center py-8 relative custom-home-bg w-full">
          <div className="w-[1200px]">
            <div className="flex h-[32rem] gap-8">
              <div className="flex-1 flex justify-center items-center border-4 border-zinc-500 group bg-zinc-900/[0.5]">
                <img
                  src={product.images ? product.images[0].url : null}
                  className="h-[80%] w-auto object-contain group-hover:scale-[115%] transition ease-in-out duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 px-8 bg-zinc-900/[0.8] py-6">
                <div className="text-3xl font-medium">{product.name}</div>
                <div className="border-b-[1px] border-zinc-400 mb-1 mt-1"></div>
                <div className="text-lg font-medium">
                  Availability :{" "}
                  <span
                    className={`${
                      product.stock ? "text-emerald-500" : "text-amber-500"
                    }`}
                  >
                    {product.stock ? "In Stock" : "Out Of Stock"}
                  </span>
                </div>
                <div className="text-lg font-medium">
                  Brand : {product.brand}
                </div>
                <div className="text-lg font-medium">
                  Category : {product.category}
                </div>
                <div className="border-b-[1px] border-zinc-400 mb-1 mt-1"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="text-sm w-[30%]">
                      {product.feature2 ? product.feature1[0] : null} :
                    </div>
                    <div className="texw-[70%]">
                      {product.feature2 ? product.feature1[1] : null}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-sm w-[30%]">
                      {product.feature2 ? product.feature2[0] : null} :
                    </div>
                    <div className="texw-[70%]">
                      {product.feature2 ? product.feature2[1] : null}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-sm w-[30%]">
                      {product.feature2 ? product.feature3[0] : null} :
                    </div>
                    <div className="texw-[70%]">
                      {product.feature2 ? product.feature3[1] : null}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-sm w-[30%]">
                      {product.feature2 ? product.feature4[0] : null} :
                    </div>
                    <div className="texw-[70%]">
                      {product.feature2 ? product.feature4[1] : null}
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-zinc-400 mb-1 mt-1"></div>
                <div className="text-xl font-bold text-emerald-500">
                  LKR {product.price}.00
                </div>
                <div className="text-lg">Quantity : + 01 -</div>

                <button className="text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 p-2 mt-4 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition hover:scale-[104%] ease-in-out duration-200">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="bg-zinc-900/75 mt-8 min-h-[400px] p-4">
              <div className="text-xl font-semibold mb-2">Description</div>
              <div className="py-2">{product.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

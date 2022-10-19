import React, { Fragment } from "react";
import { useEffect } from "react";

import { FiDelete } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  let totalPrice = 0;
  cartItems.forEach((cartItem, index) => {
    let currentPrice = parseInt(cartItem.price) * parseInt(cartItem.quantity);
    console.log("Current Tital price = ", currentPrice);
    console.log("Current price = ", cartItem.price);
    console.log("Quantity = ", cartItem.quantity);
    totalPrice = parseInt(currentPrice) + totalPrice;
  });
  console.log("Total Price = ", totalPrice);

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  console.log(cartItems);

  return (
    <div className="bg-zinc-800 text-zinc-100 py-8">
      <div className="flex px-2 ">
        <div className="px-2 w-4/6 flex flex-col gap-4">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-10 flex items-center px-4">
            <div className="w-6/12">Product</div>
            <div className="w-2/12 flex justify-center">Quantity</div>
            <div className="w-3/12 flex justify-center">Total</div>
            <div className="w-1/12 flex justify-center">Remove</div>
          </div>
          {cartItems.length === 0 ? (
            <h2>NO ITEMS IN CART</h2>
          ) : (
            <Fragment>
              {cartItems.map((item) => (
                <Fragment key={item.product}>
                  <div className="bg-zinc-900 h-24 flex items-center px-4 border-x-4 border-zinc-400 hover:shadow-green-500 hover:shadow hover:scale-[101%] transition ease-in-out duration-200">
                    <div className="w-6/12 flex items-center gap-8">
                      <img
                        src={item.image}
                        alt=""
                        className="object-contain h-20 w-auto"
                      />
                      <div>
                        <div className="text-lg font-semibold">{item.name}</div>
                        <div className="text-emerald-500">LKR {item.price}</div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="border-2 border-emerald-500 w-fit px-1">
                        {item.quantity}X
                      </div>
                    </div>
                    <div className="w-3/12 text-xl text-emerald-500 flex justify-center">
                      LKR {item.price}
                    </div>
                    <div
                      onClick={() => removeCartItemHandler(item.product)}
                      className="w-1/12 text-xl text-amber-500 flex justify-center cursor-pointer hover:scale-110 hover:text-red-500"
                    >
                      <FiDelete />
                    </div>
                  </div>
                </Fragment>
              ))}
            </Fragment>
          )}
        </div>

        <div className="px-2 w-2/6">
          <div className="bg-zinc-900 px-4 py-4">
            <div className="text-xl font-semibold mb-4">ORDER SUMMERY</div>
            <div className="flex flex-col gap-3 text-zinc-400 text-sm">
              <div className="flex justify-between">
                <div>ITEMS</div>
                <div>{cartItems.length}</div>
              </div>
              <div className="flex justify-between">
                <div>SHIPPING FEE</div>
                <div>TBD</div>
              </div>
              <div className="flex justify-between">
                <div>SUB TOTAL</div>
                <div>LKR {totalPrice}.00</div>
              </div>
              <div className="border-b-[1px] border-zinc-500"></div>
              <div className="flex justify-between font-semibold text-lg text-zinc-100">
                <div>TOTAL</div>
                <div>LKR {totalPrice}.00</div>
              </div>
              <button
                onClick={checkoutHandler}
                className="block py-2 text-zinc-100 text-md font-semibold bg-gradient-to-r from-emerald-500 to-green-500"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

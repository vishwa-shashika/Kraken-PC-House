import React, { Fragment, useEffect } from "react";

//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from "react-redux";
import { createOrder, clearErrors } from "../../actions/orderActions";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import axios from "axios";

const options = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      color: "#f59e0b",
    },
  },
};

const Payment = ({ history }) => {
  //const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const order = {
    orderItems: cartItems,
    shippingInfo,
  };

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.additionalCosts = 0;
    //order.taxPrice = orderInfo.taxPrice;
    order.totalPrice = orderInfo.totalPrice;
    order.hasCustomPc = false;
    order.customPc = null;
  }

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    document.querySelector("#pay_btn").disabled = true;

    let res;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      res = await axios.post("/api/v1/payment/process", paymentData, config);

      const clientSecret = res.data.client_secret;

      console.log(clientSecret);

      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

      if (result.error) {
        //alert.error(result.error.message);
        document.querySelector("#pay_btn").disabled = false;
      } else {
        // The payment is processed or not
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          history.push("/success");
        } else {
          //alert.error('There is some issue while payment processing')
        }
      }
    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      //alert.error(error.response.data.message)
      console.log(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100%] custom-home-bg relative">
        <div className="h-full w-full flex items-center justify-center">
          <div className="z-10 w-96 bg-zinc-900 px-4 py-8 hover:shadow hover:shadow-green-500 hover:w-[32rem] transition-all ease-in-out duration-300">
            <div className="text-2xl font-semibold mb-1">
              Payment Information
            </div>
            <div className="text-zinc-400">Enter Your Card Inofrmations</div>
            <form className="" onSubmit={submitHandler}>
              <div className="mt-2">
                <label htmlFor="card_num_field" className="block mb-1">
                  Card Number
                </label>
                <CardNumberElement
                  type="text"
                  id="card_num_field"
                  className="w-full py-2 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  options={options}
                />
              </div>

              <div className="mt-2">
                <label htmlFor="card_exp_field" className="block mb-1">
                  Card Expiry
                </label>
                <CardExpiryElement
                  type="text"
                  id="card_exp_field"
                  className="w-full py-2 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  options={options}
                />
              </div>

              <div className="mt-2">
                <label htmlFor="card_cvc_field" className="block mb-1">
                  Card CVC
                </label>
                <CardCvcElement
                  type="text"
                  id="card_cvc_field"
                  className="w-full py-2 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  options={options}
                />
              </div>

              <button
                id="pay_btn"
                type="submit"
                className="block font-semibold w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 mt-6"
              >
                Pay ${`${orderInfo && orderInfo.totalPrice}`}
              </button>
            </form>
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

export default Payment;

import React, { Fragment, useState } from "react";
//import { countries } from 'countries-list'

//import CheckoutSteps from './CheckoutSteps'

import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartActions";

const Shipping = ({ history }) => {
  //const countriesList = Object.values(countries);

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  //const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ address, city, phoneNo, postalCode, country });

    dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country }));
    history.push("/confirm");
  };

  let totalPrice = 0;
  cartItems.forEach((cartItem, index) => {
    let currentPrice = parseInt(cartItem.price) * parseInt(cartItem.quantity);
    totalPrice = parseInt(currentPrice) + totalPrice;
  });

  const processToPayment = () => {
    const data = {
      itemsPrice: totalPrice,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    history.push("/payment");
  };

  return (
    <Fragment>
      <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100%] custom-home-bg relative">
        <div className="h-full w-full flex items-center justify-center">
          <div className="z-10 w-[38rem] bg-zinc-900 px-4 py-8 hover:shadow hover:shadow-green-500 hover:w-[42rem] transition-all ease-in-out duration-300">
            <div className="text-2xl font-semibold mb-1">Shipping Info</div>
            <div className="text-zinc-400">
              Enter Your Shipphing Infor Befor Proceed Further
            </div>
            {/*Form Starts Here =======================================================================================*/}
            <form className="mt-4 flex flex-col gap-4" onSubmit={submitHandler}>
              <div>
                <label htmlFor="address_field" className="block mb-1">
                  Address <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="address_field"
                  name="address_field"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <br />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label htmlFor="city_field" className="block mb-1">
                    City <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city_field"
                    name="city_field"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="pastalCode_field" className="block mb-1">
                    Postal Code <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pastalCode_field"
                    name="pastalCode_field"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone_field" className="block mb-1">
                  Phone Number <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone_field"
                  name="phone_field"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="password_field" className="block mb-1">
                  Country <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="password_field"
                  name="password_field"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <button
                onClick={processToPayment}
                type="submit"
                value="LOGIN"
                className="block font-semibold w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 mt-4"
              >
                {" "}
                PROCEED TO CHECKOUT{" "}
              </button>
            </form>
            {/*Form ENDs Here =======================================================================================*/}
          </div>
        </div>
        <div class="area">
          <ul class="circles">
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

export default Shipping;

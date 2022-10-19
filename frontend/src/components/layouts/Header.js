import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaUserNinja, FaShoppingCart } from "react-icons/fa";

import { logout } from "../../actions/userActions";
import Search from "./Search";

const Header = () => {
  const [userModel, setUserModel] = useState(false);
  console.log(userModel);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  console.log("Use=", user);
  const logoutHandler = () => {
    dispatch(logout());
    console.log("Logout Success");
  };
  return (
    <header>
      <div className="h-16 px-4 bg-zinc-900 flex items-center justify-between text-zinc-100">
        <Link to="/">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/4YJYRdJ/LOGO2.png"
              alt=""
              className="h-10"
            />
          </div>
        </Link>

        <Route render={({ history }) => <Search history={history} />} />

        <div className="flex-1 flex justify-end gap-4">
          <div>
            {user
              ? user && (
                  <div
                    className="relative flex items-center gap-1 hover:cursor-pointer"
                    onClick={() => setUserModel(!userModel)}
                  >
                    <FaUserNinja className="text-emerald-500" />
                    {user.name}
                    {userModel ? (
                      <div className="absolute right-[50%] translate-x-1/2 top-[25px] w-36 bg-zinc-800 z-[1000] flex flex-col items-center">
                        {user && user.role == "admin" ? (
                          <Link
                            to="/dashbord"
                            class="border-b-2 border-zinc-900 px-2 py-3 w-full justify-self-center hover:bg-emerald-500 transition-all ease-in-out duration-200"
                          >
                            Admin Dashboard
                          </Link>
                        ) : null}
                        <Link
                          to="/orders/me"
                          class="border-b-2 border-zinc-900 px-2 py-3 w-full justify-self-center hover:bg-emerald-500 transition-all ease-in-out duration-200"
                        >
                          Orders
                        </Link>

                        <Link
                          to="/me"
                          class="border-b-2 border-zinc-900 px-2 py-3 w-full justify-self-center hover:bg-emerald-500 transition-all ease-in-out duration-200"
                        >
                          Profile
                        </Link>
                        <Link
                          onClick={logoutHandler}
                          class="border-b-2 border-zinc-900 px-2 py-3 w-full justify-self-center hover:bg-emerald-500 transition-all ease-in-out duration-200"
                        >
                          Log Out
                        </Link>
                      </div>
                    ) : null}
                  </div>
                )
              : !loading && (
                  <Link to="/login">
                    <div className="flex items-center gap-1 hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-200">
                      <FaUserNinja className="text-emerald-500" />
                      Login
                    </div>
                  </Link>
                )}
          </div>
          <Link to="/cart">
            <div className="flex items-center gap-1 hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-200">
              <FaShoppingCart className="text-emerald-500" />
              Cart
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

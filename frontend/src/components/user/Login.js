import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const notifyx = (msg) =>
    toast.error(msg, {
      theme: "dark",
    });

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log("authenticated");
      history.push(redirect);
    }
    if (error) {
      //console.log("MF error: " + error);
      notifyx(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100%] custom-home-bg relative">
      <ToastContainer />
      {loading ? (
        <Fragment>
          <div className="absolute h-[calc(100vh-4rem)] w-[100%] top-0 left-0 bg-zinc-900/[.8] z-50 flex items-center justify-center">
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
        </Fragment>
      ) : null}

      <div className="h-full w-full flex items-center justify-center">
        <div className="z-10 w-96 bg-zinc-900 px-4 py-8 hover:shadow hover:shadow-green-500 hover:w-[30rem] transition-all ease-in-out duration-300">
          <div className="text-2xl font-semibold mb-1">LOGIN</div>
          <div className="text-zinc-400">
            Login if you are a returning customer
          </div>
          {/*Form Starts Here =======================================================================================*/}
          <form className="mt-4 flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <label htmlFor="email_field" className="block mb-1">
                Email Address <span className="text-emerald-500">*</span>
              </label>
              <input
                type="email"
                id="email_field"
                name="email_field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <br />
            </div>
            <div>
              <label htmlFor="password_field" className="block mb-1">
                Password <span className="text-emerald-500">*</span>
              </label>
              <input
                type="password"
                id="password_field"
                name="password_field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="remember"
                />
                <label htmlFor="remember"> Rememer Me</label>
              </div>
              <Link to="/password/fogot" className="text-emerald-500">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              value="LOGIN"
              className="block font-semibold w-full py-1 bg-gradient-to-r from-emerald-500 to-green-500"
            >
              {" "}
              LOGIN{" "}
            </button>
          </form>
          {/*Form ENDs Here =======================================================================================*/}
          <div className="flex items-center mt-3">
            <div className="flex-1 h-[1px] bg-zinc-400"></div>
            <div className="px-2 text-sm">OR LOGIN WITH</div>
            <div className="flex-1 h-[1px] bg-zinc-400"></div>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-blue-500 flex-1 py-1">Facebook</button>
            <button className="bg-yellow-500 flex-1 py-1">Google</button>
          </div>
          <Link to="/register" className="flex justify-center mt-4">
            Don't Have an Account?
            <span className="pl-2 text-emerald-500"> Register Now</span>
          </Link>
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
  );
};

export default Login;

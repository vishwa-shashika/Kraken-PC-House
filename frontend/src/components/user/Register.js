import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { register, clearErrors } from "../../actions/userActions";

const Register = ({ history }) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  let name = `${fname} ${lname}`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const notifyx = (msg) =>
    toast.error(msg, {
      theme: "dark",
    });

  useEffect(() => {
    //console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log("authenticated");
      history.push("/");
    }
    if (error) {
      console.log("MF error: " + error);
      notifyx(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100vw] custom-home-bg relative overflow-x-hidden">
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
          <div className="text-2xl font-semibold mb-1">REGISTER</div>
          <div className="text-zinc-400">
            Register if you are a new customer
          </div>
          {/*<!-- Form Start Here =======================================================================================-->*/}
          <form className="mt-4 flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex gap-2 w-full">
              <div className="flex-1">
                <label htmlFor="fname" className="block mb-1">
                  First Name <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="fname"
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <br />
              </div>
              <div className="flex-1">
                <label htmlFor="lname" className="block mb-1">
                  Last Name <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="lname"
                  id="lname"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <br />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                E-Mail <span className="text-emerald-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="password_field" className="block mb-1">
                Password <span className="text-emerald-500">*</span>
              </label>
              <input
                type="passworord_field"
                id="password_field"
                name="password_field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-1">
              <input
                className="block"
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
              />
              <label htmlFor="remember">
                I Agree to the
                <span className="text-emerald-500">Terms & Conditions</span>
              </label>
            </div>
            <button
              type="submit"
              value="REGISTER"
              className="block font-semibold w-full py-1 bg-gradient-to-r from-emerald-500 to-green-500"
            >
              REGISTER
            </button>
          </form>
          {/*<!-- Form ENDS Here =======================================================================================-->*/}
          <div className="flex items-center mt-3">
            <div className="flex-1 h-[1px] bg-zinc-400"></div>
            <div className="px-2 text-sm">OR LOGIN WITH</div>
            <div className="flex-1 h-[1px] bg-zinc-400"></div>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-blue-500 flex-1 py-1">Facebook</button>
            <button className="bg-yellow-500 flex-1 py-1">Google</button>
          </div>
          <div className="flex justify-center mt-4">
            Already Have an Account?
            <Link to="/login" className="pl-2 text-emerald-500">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
      {/*<!-- Only for Background animation ========================================================================-->*/}
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
  );
};

export default Register;

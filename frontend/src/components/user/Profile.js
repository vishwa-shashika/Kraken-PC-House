import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <Fragment>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="bg-zinc-800 text-zinc-200 flex p-8 relative  w-full">
          <div className="w-[50%] h-[100%] flex flex-col justify-center items-center">
            <div className="h-[412px] w-[412px] border rounded-full">
              <img
                src={user.avatar.url}
                alt=""
                className="w-[100%] h-[100%] object-cover  border rounded-full"
              />
            </div>
            <button className="w-[512px] block text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-500 p-2 mt-8 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 transition hover:scale-[104%] ease-in-out duration-200">
              UPDATE PROFILE
            </button>
          </div>
          <div className="w-[30%] flex flex-col">
            <div className="text-2xl font-semibold text-zinc-400">Name</div>
            <div className="text-md border-b border-zinc-600 pb-1">
              {user.name}
            </div>
            <div className="text-2xl font-semibold mt-4 text-zinc-400">
              E-Mail
            </div>
            <div className="text-md border-b border-zinc-600 pb-1">
              {user.email}
            </div>
            <div className="text-2xl font-semibold mt-4 text-zinc-400">
              Role
            </div>
            <div className="text-md border-b border-zinc-600 pb-1">
              {user.role}
            </div>
            <div className="text-2xl font-semibold mt-4 text-zinc-400">
              Created At
            </div>
            <div className="text-md border-b border-zinc-600 pb-1">
              {user.createdAt}
            </div>

            <div className="flex flex-col mt-4">
              {user.role === "user" ? (
                <button className="text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 p-2 mt-4 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 transition hover:scale-[104%] ease-in-out duration-200">
                  MY ORDERS
                </button>
              ) : null}

              <button className="text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-500 p-2 mt-4 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 transition hover:scale-[104%] ease-in-out duration-200">
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;

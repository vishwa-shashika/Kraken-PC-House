import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push("/");
      history.push(`search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form
      onSubmit={searchHandler}
      className="flex-1 flex justify-center pl-2 items-center"
    >
      <input
        type="text"
        className="bg-zinc-600 h-10 border-2 border-r-0 border-emerald-500 w-80 px-2 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:w-full transition-all ease-in-out duration-300"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="bg-gradient-to-r from-emerald-500 to-green-500 h-10 flex items-center px-4 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600">
        SEARCH
      </button>
    </form>
  );
};

export default Search;

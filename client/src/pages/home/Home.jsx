import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-3xl text-center mt-10">Welcome</div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className=" flex justify-center mb-3 gap-5">
          <Link to={"/signup"}>
            <button className=" bg-red-700 w-full text-white font-bold  px-2 py-2 rounded-lg">
              Signup
            </button>
          </Link>
          <Link to={"/login"}>
            <button className=" bg-red-700 w-full text-white font-bold  px-2 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import wrkout from "../assets/body-org.png";
import { motion, spring } from "framer-motion";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center ml-52">
        {/* Content on the left */}
        <div className=" flex-shrink-0 mb-12">
          <div className="mt-32 mb-5">
            <h1 className="font-bold text-9xl">Fitness Club</h1>
          </div>
          <h3 className="text-5xl">
            Lets Build it Together <br />
            And Get in{" "}
            <span className="text-red-600 font-bold text-7xl"> Shape </span>
            <br />
          </h3>
          <br />
          <p className="text-2xl mb-14">
            Checkout the most effective exercises
          </p>

          <button className="rounded-3xl w-48 h-14 text-2xl font-bold text-white hover:text-red-600 bg-red-600">
            Explore
          </button>
        </div>

        {/* Image on the right */}
        <div className="ml-24 mt-12">
          <img
            src={wrkout}
            alt="image"
            style={{ height: "800px", width: "600px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

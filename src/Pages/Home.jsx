import React from "react";
import gym from "../assets/gym.jpg";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="container text-black">
      <div className="flex items-center mt-14">
        {/* Content on the left */}
        <div className=" flex-shrink-0">
          <div className="mt-32 mb-5">
            <h1 className="font-bold text-9xl">Fitness Club</h1>
          </div>
          <h3 className="text-5xl">
            Lets Build it Together <br />
            And Get in{" "}
            <span className="text-blue-700 font-bold text-7xl"> Shape </span>
            <br />
          </h3>
          <br />
          <p className="text-2xl mb-14">
            Checkout the most effective exercises
          </p>
          <button className="rounded-3xl w-48 h-14 text-2xl font-bold text-white hover:text-cyan-400 bg-blue-600">
            Explore
          </button>
        </div>

        {/* Image on the right */}
        <div className="ml-24 mt-28">
          <img src={gym} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Home;

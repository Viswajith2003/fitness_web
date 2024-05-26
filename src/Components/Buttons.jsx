import React from "react";

function Buttons() {
  return (
    <div className="container">
      
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <button className="bg-red-600 text-black rounded-3xl w-48 h-12 text-xl">
        Glowing Btn
      </button>
      <br />
      <br />

      <button className=" rounded-3xl w-48 h-14 text-2xl text-green-400 hover:text-red-600">
        Submit
      </button>
    </div>
  );
}

export default Buttons;

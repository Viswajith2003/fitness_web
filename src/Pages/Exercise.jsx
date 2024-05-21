import React from "react";
import { motion } from "framer-motion";

function Exercise() {
  return (
    <div className="container">
      <div className="p-2  mt-20">
        <div className="mb-44 flex items-center justify-center flex-col p-2 ">
          <motion.h2
            className="text-6xl mb-14 font-bold"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            Awesome Exercise You Should Know
          </motion.h2>
          <motion.input
            type="search"
            className="p-3 rounded w-2/5"
            placeholder="Search Exercise.."
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
        </div>

        <motion.div
          className="flex items-center justify-between p-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="bg-white text-black w-44 h-44 font-bold text-4xl flex items-center justify-center rounded-md border-4 border-red-600 transition-all hover:border-transparent hover:shadow-2xl hover:ring-8 hover:ring-red-500"
           
          >
            All items
          </motion.div>

          <div className="bg-white text-black w-44 h-44 font-bold text-4xl flex items-center justify-center rounded-md border-4 border-red-600 transition-all hover:border-transparent hover:shadow-2xl hover:ring-8 hover:ring-red-500">
            Back
          </div>
          <div className="bg-white text-black w-44 h-44 font-bold text-4xl flex items-center justify-center rounded-md border-4 border-red-600 transition-all hover:border-transparent hover:shadow-2xl hover:ring-8 hover:ring-red-500">
            Chest
          </div>
          <div className="bg-white text-black w-44 h-44 font-bold text-4xl flex items-center justify-center rounded-md border-4 border-red-600 transition-all hover:border-transparent hover:shadow-2xl hover:ring-8 hover:ring-red-500">
            Leg
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Exercise;

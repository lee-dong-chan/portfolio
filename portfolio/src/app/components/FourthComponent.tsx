"use client";

import { motion } from "framer-motion";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
const FourthComp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "0px" }}
      animate={{ opacity: 1, translateY: "-20rem" }}
      transition={{ duration: 1 }}
    >
      <div className="fixed left-[35%]  w-[30rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden z-[200]">
        <div className="ps-3 w-[100%] h-[3rem] flex items-center gap-3 bg-stone-800 ">
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
        </div>
        <div className="p-3 text-black text-[1.3rem] font-bold">CONTECT</div>
        <div className="p-3 flex items-center text-black text-[1.3rem] font bold">
          <div>
            <FaPhoneSquareAlt size={30} />
          </div>
          <span className="ms-5">010-2030-4394</span>
        </div>
        <div className="p-3 flex items-center text-black text-[1.3rem] font bold">
          <div>
            <IoMailSharp size={30} />
          </div>
          <span className="ms-5">dsongc3082@naver.com</span>
        </div>
      </div>
    </motion.div>
  );
};
export default FourthComp;

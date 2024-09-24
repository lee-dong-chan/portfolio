"use client";

import { useState } from "react";
import FirstComp from "./FirstComp";
import FourthComp from "./FourthComponent";
import SecondComp from "./SecondComp";
import SideBar from "./SmallComp/Sidebar/SideBar";
import ThirdComp from "./ThirdComp";
import { motion } from "framer-motion";
const Container = () => {
  const [side, setside] = useState<boolean>(false);
  return (
    <div>
      <div className="fixed top-0 px-4 text-[3rem] font-bold">LDC</div>
      <FirstComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      {!side && (
        <div
          onMouseOver={() => {
            setside(true);
          }}
          className="fixed w-[0.5rem] h-[20rem] flex flex-col items-center rounded-[2rem] border-gray-600  bg-gray-200  top-[30%] right-0"
        ></div>
      )}
      {side && (
        <motion.div
          initial={{ translateX: "3rem" }}
          animate={{ translateX: "-0.5rem" }}
          transition={{ duration: 1 }}
          className="fixed top-[20%] right-6"
        >
          <SideBar setside={setside} />
        </motion.div>
      )}
    </div>
  );
};

export default Container;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FourthComp = () => {
  const [contect, setcontect] = useState<boolean>(false);

  return (
    <motion.div>
      {contect && (
        <div className="fixed  top-[20rem] right-[6rem] w-[25rem] h-[50rem]  rounded-[1rem] bg-gray-200 overflow-hidden z-[200]">
          <div className="ps-3 w-[100%] h-[3rem] flex items-center gap-3 bg-stone-800 ">
            <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
            <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
            <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
          </div>
          <div className="p-3 text-black text-[1.3rem] font-bold">CONTECT</div>
        </div>
      )}
    </motion.div>
  );
};
export default FourthComp;

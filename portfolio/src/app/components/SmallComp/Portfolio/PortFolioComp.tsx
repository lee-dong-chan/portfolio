"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const PortFolioComp = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        scaleX: [0.3, 1],
        scaleY: [0.3, 1],
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[100%] h-screen bg-gray-200 gap-3 rounded-t-[1rem] overflow-hidden">
        <div className="px-2 w-[100%] h-[3rem] flex items-center gap-3  bg-stone-800">
          <Link href={"/"}>
            <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
          </Link>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
        </div>
      </div>
    </motion.div>
  );
};
export default PortFolioComp;

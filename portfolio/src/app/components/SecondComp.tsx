"use client";
import { motion } from "framer-motion";
import FirstSlide from "./SmallComp/Slide/Firstslide";
import { useEffect, useRef, useState } from "react";
import { Observer } from "../lib/Observer";
const SecondComp = () => {
  const Secondref = useRef(null);
  const [view, setview] = useState<boolean>(false);
  const [page, setpage] = useState<number>(1);
  useEffect(() => {
    Observer({ state: setview, ref: Secondref });
  }, []);
  useEffect(() => {
    if (!view) {
      setpage(1);
    }
  }, [view]);
  return (
    <div>
      <div className=" w-[100%] h-screen flex justify-center" ref={Secondref}>
        {view ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FirstSlide page={page} setpage={setpage} />
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default SecondComp;

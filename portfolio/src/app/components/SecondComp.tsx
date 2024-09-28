"use client";
import { motion } from "framer-motion";
import FirstSlide from "./SmallComp/Slide/Firstslide";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Observer } from "../lib/Observer";
import { useBreakPoint } from "../lib/BreakPoint";
interface IProps {
  setscroll: Dispatch<SetStateAction<number>>;
}
const SecondComp = ({ setscroll }: IProps) => {
  const Secondref = useRef(null);
  const { ismini, isdesktop } = useBreakPoint();
  const [view, setview] = useState<boolean>(false);
  const [page, setpage] = useState<number>(1);
  useEffect(() => {
    Observer({ state: setview, ref: Secondref });
  }, []);
  useEffect(() => {
    if (!view) {
      setpage(1);
    } else {
      setscroll(2);
    }
  }, [view]);
  return (
    <div>
      <div className=" w-[100%] h-screen flex justify-center" ref={Secondref}>
        {view ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: [ismini ? 0.8 : 1] }}
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

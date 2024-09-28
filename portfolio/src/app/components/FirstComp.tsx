"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Observer } from "../lib/Observer";
interface IProps {
  setscroll: Dispatch<SetStateAction<number>>;
}

const FirstComp = ({ setscroll }: IProps) => {
  const [view, setview] = useState<boolean>(false);
  const Firstref = useRef(null);
  useEffect(() => {
    Observer({ state: setview, ref: Firstref });
  }, []);
  useEffect(() => {
    if (view) {
      setscroll(1);
    }
  }, [view]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translateY: "1rem" }}
      transition={{ duration: 3 }}
      ref={Firstref}
    >
      <div className="w-[100%] h-screen flex items-center justify-center">
        {view ? (
          <div className="w-[75rem] h-[40rem] bg-gray-300 rounded-[1rem] overflow-hidden">
            <div className="ps-3 w-[100%] h-[3rem] flex items-center gap-3 bg-stone-800 ">
              <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
              <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
              <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
            </div>
            <div className="ps-10 w-[100%] h-[100%] flex  gap-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="my-auto h-[30rem] w-[30rem] rounded-[30rem] border overflow-hidden ">
                  <img src="/imgs/myimg.png" alt="myimg"></img>
                </div>
              </motion.div>
              <div className="mt-[4rem]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, translateX: "-1rem" }}
                  transition={{ duration: 3.1, delay: 0 }}
                >
                  <div className="flex items-center">
                    <h1>Name:</h1>
                    <p className="p-2 mt-1">이동찬</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, translateX: "-0.5rem" }}
                  transition={{ duration: 3.2, delay: 0.1 }}
                >
                  <div className="flex items-center">
                    <h1>Date:</h1>
                    <p className="p-2 mt-1">96.06.28</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, translateX: "0.7rem" }}
                  transition={{ duration: 3.5, delay: 0.4 }}
                >
                  <div className="flex items-center">
                    <h1>Git:</h1>
                    <p className="p-2 mt-1">
                      https://github.com/lee-dong-chan/portfolio.git
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, translateX: "1rem" }}
                  transition={{ duration: 3.7, delay: 0.7 }}
                >
                  <div className="items-center">
                    <h1>Career</h1>
                  </div>
                  <div className="text-[0.8rem]">
                    <p className="p-2 mt-1 ">인덕대학교 기계자동차과 졸업</p>
                    <p className="p-2 mt-1">
                      경일it아카데미 AWS 클라우드 융합 웹 프레임워크 개발자
                      양성과정A 수료
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
};
export default FirstComp;

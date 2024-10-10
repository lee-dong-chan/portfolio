"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import FirstComp from "./FirstComp";
import FourthComp from "./FourthComponent";

import ThirdComp from "./ThirdComp";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SecondComp from "./SecondComp";

const Container = () => {
  const [scroll, setscroll] = useState<number>(1);
  const [move, setmove] = useState<boolean>(false);
  const [title, settitle] = useState<boolean>(false);
  const path = usePathname();

  const scrollController = useCallback((e: WheelEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", scrollController, { passive: false });
    return () => {
      window.removeEventListener("wheel", scrollController);
    };
  }, []);

  useEffect(() => {
    if (scroll == 1) {
      setmove(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setmove(false);
      }, 500);
    } else if (scroll == 2) {
      setmove(true);
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      setTimeout(() => {
        setmove(false);
      }, 500);
    } else if (scroll == 3) {
      setmove(true);
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
      setTimeout(() => {
        setmove(false);
      }, 500);
    } else if (scroll == 4) {
      setmove(true);
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
      setTimeout(() => {
        setmove(false);
      }, 500);
    }
  }, [scroll, path]);

  useEffect(() => {
    if (!move) {
      setTimeout(() => {
        settitle(true);
      }, 3000);
    }
  }, []);

  return (
    <div
      onWheel={debounce((e) => {
        if (e.deltaY > 0 && scroll < 4) {
          setscroll(scroll + 1);
        } else if (e.deltaY < 0 && scroll > 1) {
          setscroll(scroll - 1);
        }
      }, 100)}
    >
      {!move && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex">
            <div className="fixed w-[10rem] h-[10rem]">
              <img
                className="w-[100%] h-[100%]"
                src={`${!title ? "/imgs/LDC3.gif" : "/imgs/title.png"}`}
                alt="LDC"
              ></img>
            </div>

            <div className="fixed flex top-3 left-[40%]  font-bold gap-5 z-[100]">
              <div
                className="flex"
                onClick={() => {
                  setscroll(1);
                }}
              >
                <span
                  className={`{text-[1.7rem] ${scroll === 1 && "animate-ping"}`}
                >
                  .
                </span>
                <div
                  className={`${
                    scroll === 1 ? "text-[1.7rem]" : "text-[1.4rem]"
                  }`}
                >
                  Home
                </div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  setscroll(2);
                }}
              >
                <span
                  className={`{text-[1.7rem] ${scroll === 2 && "animate-ping"}`}
                >
                  .
                </span>
                <div
                  className={`${
                    scroll === 2 ? "text-[1.7rem]" : "text-[1.4rem]"
                  }`}
                >
                  PortFolio
                </div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  setscroll(3);
                }}
              >
                <span
                  className={`{text-[1.7rem] ${scroll === 3 && "animate-ping"}`}
                >
                  .
                </span>
                <div
                  className={`${
                    scroll === 3 ? "text-[1.7rem]" : "text-[1.4rem]"
                  }`}
                >
                  Skills
                </div>
              </div>
              <div
                className="flex"
                onClick={() => {
                  setscroll(4);
                }}
              >
                <span
                  className={`{text-[1.7rem] ${scroll === 4 && "animate-ping"}`}
                >
                  .
                </span>
                <div
                  className={`${
                    scroll === 4 ? "text-[1.7rem]" : "text-[1.4rem]"
                  }`}
                >
                  Contect
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <FirstComp setscroll={setscroll} />
      {scroll !== 1 && <SecondComp setscroll={setscroll} />}
      {scroll !== 1 && <ThirdComp scroll={scroll} />}
      {scroll !== 1 && scroll === 4 && <FourthComp />}
    </div>
  );
};

export default Container;

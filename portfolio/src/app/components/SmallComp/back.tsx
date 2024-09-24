import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

interface IProps {
  plus: boolean;
  setplus: Dispatch<SetStateAction<boolean>>;
  page: number;
  setpage: Dispatch<SetStateAction<number>>;
}

const FirstSlide = ({ plus, setplus, page, setpage }: IProps) => {
  const [plusAnime, setplusAnime] = useState<boolean>(false);
  const [minussAnime, setminusAnime] = useState<boolean>(false);

  const minusspage = () => {
    if (page > 1 && !minussAnime) {
      setminusAnime(true);
      setplus(false);
      setpage(page - 1);
      setTimeout(() => {
        setminusAnime(false);
      }, 1000);
    }
  };
  const pluspage = () => {
    if (page < 5 && !plusAnime) {
      setplusAnime(true);
      setpage(page + 1);
      setplus(true);
      setTimeout(() => {
        setplusAnime(false);
      }, 1000);
    }
  };

  return (
    <div className="relative top-[20rem] gap-5 h-fit flex items-center">
      <div className="absolute left-[-4rem] z-[100]" onClick={minusspage}>
        <IoIosArrowBack
          size={60}
          color="black"
          opacity={page === 1 ? 0.3 : 1}
        />
      </div>

      {!plus && (
        <div>
          <div className="absolute left-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                translateX: "-10rem",
                translateY: "8rem",
              }}
              animate={{
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 0.9 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-[-5rem] left-[-24rem] z-[-50] ">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "23.5rem",
                translateY: "5rem",
              }}
              animate={{
                filter: "blur(5px)",
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <Link href={`/portfolio/${page}`}>
            <div className="relative">
              <motion.div
                initial={{
                  filter: "blur(5px)",
                  opacity: 1,
                  translateY: "-7rem",
                  translateX: "14rem",
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  translateX: "0rem",
                  translateY: "0rem",
                  scaleX: [1, 1.1],
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={page}
              >
                <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                  <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Link>

          <div className="absolute right-[-24rem]  top-[-5rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "-12rem",
                translateY: "-10rem",
              }}
              animate={{
                opacity: 1,
                translateX: "-2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-[-12rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "-20rem",
              }}
              animate={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1.1 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {plus && (
        <div>
          <div className="absolute left-[-10rem]  top-[-15rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                translateX: "2rem",
                translateY: "0rem",
              }}
              animate={{
                translateX: "-12rem",
                translateY: "10rem",
              }}
              transition={{ duration: 0.9 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <Link href={`/portfolio/${page}`}>
            <div className="absolute top-[-5rem] left-[-24rem]   ">
              <motion.div
                initial={{
                  filter: "blur(5px)",
                  opacity: 1,
                  translateX: "10rem",
                  translateY: "0rem",
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  translateX: "24rem",
                  translateY: "5rem",
                  scaleX: [1, 1.1],
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={page}
              >
                <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                  <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                    <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Link>
          <div className="relative z-[-50]">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "-5rem",
                translateY: "-2rem",
              }}
              animate={{
                filter: "blur(5px)",
                opacity: 1,
                translateX: "22rem",
                translateY: "-5rem",
              }}
              transition={{ duration: 0.8 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem]  rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-[-24rem]  top-[-5rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "-6rem",
                translateY: "-3rem",
              }}
              animate={{
                opacity: 1,
                translateX: "-10rem",
                translateY: "-10rem",
              }}
              transition={{ duration: 1 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-[-12rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "0rem",
              }}
              animate={{
                opacity: 1,
                translateX: "-20rem",
              }}
              transition={{ duration: 1.1 }}
              key={page}
            >
              <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="absolute right-[-4rem] z-[100]" onClick={pluspage}>
        <IoIosArrowForward
          size={60}
          color="black"
          opacity={page === 5 ? 0.3 : 1}
        />
      </div>
    </div>
  );
};
export default FirstSlide;

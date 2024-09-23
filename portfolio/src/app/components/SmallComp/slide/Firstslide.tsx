import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  plus: boolean;
  setplus: Dispatch<SetStateAction<boolean>>;
  page: number;
  setpage: Dispatch<SetStateAction<number>>;
}

const FirstSlide = ({ plus, setplus, page, setpage }: IProps) => {
  return (
    <div className="relative top-[20rem] gap-5 h-fit flex items-center">
      <div
        className="absolute left-[-4rem]"
        onClick={() => {
          setplus(!plus);
          if (page < 5) {
            setpage(page + 1);
          }
        }}
      >
        <IoIosArrowBack size={60} color="black" />
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
              transition={{ duration: 1 }}
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
          <div className="absolute top-[-5rem] left-[-24rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "15rem",
                translateY: "4rem",
              }}
              animate={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
          <div className="relative">
            <motion.div
              initial={{
                translateY: "-10rem",
                translateX: "10rem",
              }}
              animate={{
                opacity: 1,
                translateX: "0rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
            >
              <div className="w-[25rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-[0rem] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateY: "0rem",
                translateX: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "-23em",
                translateY: "-5rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "10rem",
                translateY: "10rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-24rem]  top-[-5rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "-12rem",
                translateY: "-10rem",
              }}
              animate={{
                opacity: 1,
                translateX: "-2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute left-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "4rem",
                translateY: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "26rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "-20rem",
              }}
              animate={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1.1 }}
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
              transition={{ duration: 1 }}
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
          <div className="absolute top-[-5rem] left-[-24rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "15rem",
                translateY: "4rem",
              }}
              animate={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
          <div className="relative">
            <motion.div
              initial={{
                translateY: "-10rem",
                translateX: "10rem",
              }}
              animate={{
                opacity: 1,
                translateX: "0rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
            >
              <div className="w-[25rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-[0rem] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateY: "0rem",
                translateX: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "-23em",
                translateY: "-5rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "10rem",
                translateY: "10rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-24rem]  top-[-5rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "-12rem",
                translateY: "-10rem",
              }}
              animate={{
                opacity: 1,
                translateX: "-2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute left-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 1,
                translateX: "4rem",
                translateY: "0rem",
              }}
              animate={{
                opacity: 0,
                translateX: "26rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                translateX: "-20rem",
              }}
              animate={{
                opacity: 1,
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1.1 }}
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

      {/* {minus && (
        <div>
          <div className="absolute left-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                translateX: "10rem",
              }}
              animate={{
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute top-[-5rem] left-[-24rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                translateX: "10rem",
                translateY: "-4rem",
              }}
              animate={{
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div>
            <motion.div
              initial={{
                opacity: 0.8,
                translateX: "-10rem",
                translateY: "-4rem",
              }}
              animate={{
                opacity: 1,
                translateX: "0rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
            >
              <div className="w-[25rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
                <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
                  <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute right-[-24rem]  top-[-5rem] z-[-50] blur-sm">
            <motion.div
              initial={{
                translateX: "-10rem",
                translateY: "5rem",
              }}
              animate={{
                translateX: "-2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
          <div className="absolute right-[-10rem]  top-[-15rem] z-[-70] blur-sm">
            <motion.div
              initial={{
                translateX: "10rem",
                translateY: "5rem",
              }}
              animate={{
                translateX: "2rem",
                translateY: "0rem",
              }}
              transition={{ duration: 1 }}
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
      )} */}

      <div
        className="absolute right-[-4rem]"
        onClick={() => {
          setplus(true);
        }}
      >
        <IoIosArrowForward size={60} color="black" />
      </div>
    </div>
  );
};
export default FirstSlide;

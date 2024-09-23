"use client";
import { motion } from "framer-motion";
import FirstSlide from "./SmallComp/slide/Firstslide";
import { useState } from "react";
const SecondComp = () => {
  const [plus, setplus] = useState<boolean>(false);
  const [minus, setminus] = useState<boolean>(false);
  const [page, setpage] = useState<number>(1);
  return (
    <div>
      <div className=" w-[100%] h-screen flex justify-center">
        <FirstSlide
          plus={plus}
          setplus={setplus}
          page={page}
          setpage={setpage}
        />
      </div>
    </div>
  );
};
export default SecondComp;

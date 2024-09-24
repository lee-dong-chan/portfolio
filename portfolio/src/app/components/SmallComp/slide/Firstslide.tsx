import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Dispatch, SetStateAction, useState } from "react";
import Card from "./Card/FirstCard";
import Link from "next/link";

interface IProps {
  page: number;
  setpage: Dispatch<SetStateAction<number>>;
}

const FirstSlide = ({ page, setpage }: IProps) => {
  const [plusAnime, setplusAnime] = useState<boolean>(false);
  const [minussAnime, setminusAnime] = useState<boolean>(false);
  console.log(page);
  const minusspage = () => {
    if (page > 1 && !minussAnime) {
      setminusAnime(true);
      setpage(page - 1);
      setTimeout(() => {
        setminusAnime(false);
      }, 1000);
    } else if (page <= 1) {
      setpage(5);
    }
  };
  const pluspage = () => {
    if (page < 5 && !plusAnime) {
      setplusAnime(true);
      setpage(page + 1);
      setTimeout(() => {
        setplusAnime(false);
      }, 1000);
    } else if (page >= 5) {
      setpage(1);
    }
  };

  return (
    <div className="relative top-[20rem] gap-5 h-fit flex items-center">
      <div className="absolute left-[-40rem] z-[100]" onClick={minusspage}>
        <IoIosArrowBack size={60} color="black" />
      </div>

      <div>
        <Link href={`/portfolio/4`}>
          <Card page={page} card={4} />
        </Link>
        <Link href={`/portfolio/5`}>
          <Card page={page} card={5} />
        </Link>
        <Link href={`/portfolio/1`}>
          <Card page={page} card={1} />
        </Link>
        <Link href={`/portfolio/2`}>
          <Card page={page} card={2} />
        </Link>
        <Link href={`/portfolio/3`}>
          <Card page={page} card={3} />
        </Link>
      </div>

      <div className="absolute right-[-40rem] z-[100]" onClick={pluspage}>
        <IoIosArrowForward size={60} color="black" />
      </div>
    </div>
  );
};
export default FirstSlide;

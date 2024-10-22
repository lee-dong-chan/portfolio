import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFigma,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { useBreakPoint } from "../lib/BreakPoint";

interface IProps {
  scroll: number;
}

interface IContent {
  icon: JSX.Element;
  text: string;
}

const ThirdComp = ({ scroll }: IProps) => {
  const [modal, setmodal] = useState<boolean>(false);
  const [skillnum, setskillnum] = useState<number>(0);
  const [hover, sethover] = useState<string>("");
  const { ismini } = useBreakPoint();

  const myskills: IContent = useMemo(() => {
    switch (skillnum) {
      case 1:
        return {
          icon: <RiJavascriptFill size={120} />,
          text: "자바스크립트 설명",
        };
      case 2:
        return {
          icon: <SiTypescript size={120} />,
          text: "타입스크립트 설명",
        };
      case 3:
        return {
          icon: <FaHtml5 size={120} />,
          text: "HTML 설명",
        };
      case 4:
        return {
          icon: <FaCss3Alt size={120} />,
          text: "CSS 설명",
        };
      case 5:
        return {
          icon: <RiTailwindCssFill size={120} />,
          text: "Tailwind 설명",
        };
      case 6:
        return {
          icon: <FaReact size={120} />,
          text: "React 설명",
        };
      case 7:
        return {
          icon: <SiNextdotjs size={120} />,
          text: "Next.js 설명",
        };
      case 8:
        return {
          icon: <FaNodeJs size={120} />,
          text: "Node.js 설명",
        };
      case 9:
        return {
          icon: <SiExpress size={120} />,
          text: "Express.js 설명",
        };
      case 10:
        return {
          icon: <SiNestjs size={120} />,
          text: "Nest.js 설명",
        };
      case 11:
        return {
          icon: <SiSequelize />,
          text: "Sequelize 설명",
        };
      case 12:
        return {
          icon: <SiMysql />,
          text: "Mysql 설명",
        };
      case 13:
        return {
          icon: <SiFigma />,
          text: "Figma 설명",
        };
      default:
        return {
          icon: <RiJavascriptFill />,
          text: "자바스크립트 설명",
        };
    }
  }, []);

  return (
    <div className="pt-[10rem] px-2 w-[100%] h-screen flex items-center">
      {scroll === 3 && !modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: ismini ? 0.8 : 1 }}
          transition={{ duration: 2 }}
        >
          <div className="p-5 flex gap-10">
            <div
              className={`flex flex-col items-center w-[5rem] `}
              onMouseOver={() => {
                sethover("javascript");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(1);
              }}
            >
              <RiJavascriptFill
                size={100}
                className={`${hover === "javascript" && "animate-bounce"}`}
              />
              <div>JAVASCRIPT</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("typescript");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(2);
              }}
            >
              <BiLogoTypescript
                size={100}
                className={`${hover === "typescript" && "animate-bounce"}`}
              />
              <div>TYPESCRIPT</div>
            </div>
          </div>
          <div className="p-5 flex gap-10">
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("html");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(3);
              }}
            >
              <FaHtml5
                size={100}
                className={`${hover === "html" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">HTML</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("css");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(4);
              }}
            >
              <FaCss3Alt
                size={100}
                className={`${hover === "css" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">CSS</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("tailwindcss");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(5);
              }}
            >
              <RiTailwindCssFill
                size={100}
                className={`${hover === "tailwindcss" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">TailwindCSS</div>
            </div>

            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("react");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(6);
              }}
            >
              <FaReact
                size={100}
                className={`${hover === "react" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">React</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("next.js");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(7);
              }}
            >
              <SiNextdotjs
                size={100}
                className={`${hover === "next.js" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Next.js</div>
            </div>
          </div>
          <div className="p-5 flex gap-10">
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("node.js");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(8);
              }}
            >
              <FaNodeJs
                size={100}
                className={`${hover === "node.js" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Node.js</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("express");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(9);
              }}
            >
              <SiExpress
                size={100}
                className={`${hover === "express" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Express.js</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("nest.js");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(10);
              }}
            >
              <SiNestjs
                size={100}
                className={`${hover === "nest.js" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Nest.js</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("sequelize");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(11);
              }}
            >
              <SiSequelize
                size={100}
                className={`${hover === "sequelize" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Sequelize</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("mysql");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(12);
              }}
            >
              <SiMysql
                size={100}
                className={`${hover === "mysql" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">MySQL</div>
            </div>
          </div>
          <div className="p-5 flex gap-10">
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("figma");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(13);
              }}
            >
              <FaFigma
                size={100}
                className={`${hover === "figma" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Figma</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("aws");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(13);
              }}
            >
              <FaAws
                size={100}
                className={`${hover === "aws" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">AWS</div>
            </div>
            <div
              className={`flex flex-col items-center w-[5rem]`}
              onMouseOver={() => {
                sethover("git");
              }}
              onMouseOut={() => {
                sethover("");
              }}
              onClick={() => {
                setmodal(true);
                setskillnum(13);
              }}
            >
              <FaGit
                size={100}
                className={`${hover === "git" && "animate-bounce"}`}
              />
              <div className="w-fit mx-auto">Git</div>
            </div>
          </div>
        </motion.div>
      )}
      {scroll === 3 && modal && (
        <div className="flex justify-between">
          <div>{myskills.icon}</div>
          <div>{myskills.text}</div>
        </div>
      )}
    </div>
  );
};
export default ThirdComp;

import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiEjs,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiSequelize,
} from "react-icons/si";

const ThirdComp = () => {
  return (
    <div className="pt-[10rem] px-2 w-[100%] h-screen">
      <div className="p-5 flex gap-10">
        <div className="flex flex-col items-center w-[5rem]">
          <RiJavascriptFill size={100} />
          <div>JAVASCRIPT</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <BiLogoTypescript size={100} />
          <div>TYPESCRIPT</div>
        </div>
      </div>
      <div className="p-5 flex gap-10">
        <div className="flex flex-col items-center w-[5rem]">
          <FaHtml5 size={100} />
          <div className="w-fit mx-auto">HTML</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <FaCss3Alt size={100} />
          <div className="w-fit mx-auto">CSS</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <RiTailwindCssFill size={100} />
          <div className="w-fit mx-auto">TailwindCSS</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiEjs size={100} />
          <div className="w-fit mx-auto">ejs</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <FaReact size={100} />
          <div className="w-fit mx-auto">React</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiNextdotjs size={100} />
          <div className="w-fit mx-auto">Next.js</div>
        </div>
      </div>
      <div className="p-5 flex gap-10">
        <div className="flex flex-col items-center w-[5rem]">
          <FaNodeJs size={100} />
          <div className="w-fit mx-auto">Node.js</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiExpress size={100} />
          <div className="w-fit mx-auto">Express.js</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiNestjs size={100} />
          <div className="w-fit mx-auto">Nest.js</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiSequelize size={100} />
          <div className="w-fit mx-auto">Sequelize</div>
        </div>
        <div className="flex flex-col items-center w-[5rem]">
          <SiMysql size={100} />
          <div className="w-fit mx-auto">MySQL</div>
        </div>
      </div>
      <div className="p-5 flex gap-10">
        <div className="flex flex-col items-center w-[5rem]">
          <FaFigma size={100} />
          <div className="w-fit mx-auto">Figma</div>
        </div>
      </div>
    </div>
  );
};
export default ThirdComp;

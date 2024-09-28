import Link from "next/link";
import { useParams } from "next/navigation";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiAxios,
  SiExpress,
  SiGoogledrive,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const PortFolioContent = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="w-[100%]">
      {params.id === "1" && (
        <div className="p-5 -[100%] text-black">
          <div className="text-[1.4rem] font-bold text-black">LOL인벤</div>
          <div className="w-[60rem] h-[40rem] mx-auto">
            <img className="w-[100%] h-[100%]" src="/imgs/LoL.png"></img>
          </div>
          <div>
            <Link href={"https://lol.dsongc.com"}>
              <div className="p-3 w-[8rem] rounded bg-gray-500">
                페이지 보러가기
              </div>
            </Link>
            <div>프로젝트 일자:3.14~4.08</div>
            <div>프로젝트인원:이동찬(1인)</div>
            <div>
              프로젝트설명:HTML,CSS를 통하여 LoL인벤 클론코딩을 진행하엿고
              node.js로 서버를 구축을 통해 게시판을 적용하엿습니다.
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center w-[5rem]">
                <FaHtml5 size={50} />
                <div className="w-fit mx-auto">HTML</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <FaCss3Alt size={50} />
                <div className="w-fit mx-auto">Css</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <RiJavascriptFill size={50} />
                <div className="w-fit mx-auto">Javascript</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <FaNodeJs size={50} />
                <div className="w-fit mx-auto">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {params.id === "2" && (
        <div className="p-5 -[100%] text-black">
          <div className="text-[1.4rem] font-bold">번개장터</div>
          <div className="w-[60rem] h-[40rem] mx-auto">
            <img className="w-[100%] h-[100%]" src="/imgs/thun.png"></img>
          </div>
          <div>
            <Link href={"https://thunder.dsongc.com"}>
              <div className="p-3 w-[8rem] rounded bg-gray-500">
                페이지 보러가기
              </div>
            </Link>
            <div className="p-2 flex items-center">
              <div>관련문서:</div>
              <Link
                href={
                  "https://docs.google.com/spreadsheets/d/1hjzL0aq-rSuwnUvOg7egJ71QTIcJtf_0WfB7r_d-NFg/edit?usp=sharing"
                }
              >
                <SiGoogledrive />
              </Link>
            </div>
            <div>프로젝트 일자:5.19~6.4</div>
            <div>프로젝트인원:2인</div>
            <div>프로젝트설명:번개장터 클론코딩을 진행한 프로젝트입니다.</div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center w-[5rem]">
              <FaHtml5 size={50} />
              <div className="w-fit mx-auto">HTML</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <FaCss3Alt size={50} />
              <div className="w-fit mx-auto">Css</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <RiJavascriptFill size={50} />
              <div className="w-fit mx-auto">Javascript</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <FaNodeJs size={50} />
              <div className="w-fit mx-auto">Node.js</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiExpress size={50} />
              <div className="w-fit mx-auto">Express</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiMysql size={50} />
              <div className="w-fit mx-auto">Mysql</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiSequelize size={50} />
              <div className="w-fit mx-auto">Sequelize</div>
            </div>
          </div>
        </div>
      )}
      {params.id === "3" && (
        <div className="p-5 -[100%] text-black">
          <div className="text-[1.4rem] font-bold">Yogiyo</div>
          <div className="w-[60rem] h-[40rem] mx-auto">
            <img className="w-[100%] h-[100%]" src="/imgs/yogi.png"></img>
          </div>
          <div>
            <Link href={"https:/yogi.dsongc.com"}>
              <div className="p-3 w-[8rem] rounded bg-gray-500">
                페이지 보러가기
              </div>
            </Link>
            <div>프로젝트 일자:6.13 ~ 6.28</div>
            <div>프로젝트인원:이동찬(1인)</div>
            <div>
              프로젝트설명:리액트를 이용하여 요기요 PC페이지UI를 클론코딩한
              프로젝트 입니다.
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center w-[5rem]">
                <SiTypescript size={50} />
                <div className="w-fit mx-auto">TypeScript</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiReact size={50} />
                <div className="w-fit mx-auto">React</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiTailwindcss size={50} />
                <div className="w-fit mx-auto">Tailwindcss</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {params.id === "4" && (
        <div className="p-5 -[100%] text-black">
          <div className="text-[1.4rem] font-bold">HamsterMarket</div>
          <div className="w-[60rem] h-[40rem] mx-auto">
            <img className="w-[100%] h-[100%]" src="/imgs/hamster.png"></img>
          </div>
          <div>
            <div className="flex">
              <Link href={"https://hamster.dsongc.com"}>
                <div className="p-3 w-[8rem] rounded bg-gray-500">
                  페이지 보러가기
                </div>
              </Link>
            </div>
            <div className="p-2 flex items-center">
              <div>관련문서:</div>
              <Link
                href={
                  " https://drive.google.com/drive/folders/1yF5krXC3MG6jJQ8BB1w6SqyAyIUU7y94?usp=drive_link"
                }
              >
                <SiGoogledrive />
              </Link>
            </div>
            <div>프로젝트 일자:7.5 ~ 8.5</div>
            <div>프로젝트인원:3인</div>
            <div>
              프로젝트설명:미션가이드에 따라 구매자와 판매자가 택배사를 통하여
              거래할수있는 중고거래사이트를 구현한 프로젝트
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center w-[5rem]">
                <SiTypescript size={50} />
                <div className="w-fit mx-auto">TypeScript</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiReact size={50} />
                <div className="w-fit mx-auto">React</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiTailwindcss size={50} />
                <div className="w-fit mx-auto">Tailwindcss</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiMysql size={50} />
                <div className="w-fit mx-auto">Mysql</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiMongodb size={50} />
                <div className="w-fit mx-auto">Mongodb</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiAxios size={50} />
                <div className="w-fit mx-auto">axios</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiExpress size={50} />
                <div className="w-fit mx-auto">Express</div>
              </div>
              <div className="flex flex-col items-center w-[5rem]">
                <SiSequelize size={50} />
                <div className="w-fit mx-auto">Sequelize</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {params.id === "5" && (
        <div className="p-5 -[100%] text-black">
          <div className="text-[1.4rem] font-bold">Pinterest</div>
          <div className="w-[60rem] h-[40rem] mx-auto">
            <img className="w-[100%] h-[100%]" src="/imgs/pins.png"></img>
          </div>
          <div>
            <div className="flex">
              <Link href={"https://lee.dsongc.com"}>
                <div className="p-3 w-[8rem] rounded bg-gray-500">
                  페이지 보러가기
                </div>
              </Link>
            </div>
            <div className="p-2 flex items-center">
              <div>관련문서:</div>
              <Link
                href={
                  "https://drive.google.com/drive/folders/10mGYuDisAkCqIpiTzKeEfqEyc2RBZq6u?usp=drive_link"
                }
              >
                <SiGoogledrive />
              </Link>
            </div>
            <div>프로젝트 일자:8.20 ~ 0.19</div>
            <div>프로젝트인원:이동찬(1인)</div>
            <div>
              프로젝트설명:Next와 Nest를 사용하여 Pinterest의 클론코딩을 진행한
              프로젝트입니다.
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center w-[5rem]">
              <SiTypescript size={50} />
              <div className="w-fit mx-auto">TypeScript</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiNextdotjs size={50} />
              <div className="w-fit mx-auto">Next.js</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiTailwindcss size={50} />
              <div className="w-fit mx-auto">Tailwindcss</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiMysql size={50} />
              <div className="w-fit mx-auto">Mysql</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiNestjs size={50} />
              <div className="w-fit mx-auto">Nest.js</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiAxios size={50} />
              <div className="w-fit mx-auto">axios</div>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <SiExpress size={50} />
              <div className="w-fit mx-auto">Express</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PortFolioContent;

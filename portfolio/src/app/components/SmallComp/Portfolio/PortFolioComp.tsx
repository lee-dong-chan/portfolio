"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import PortFolioContent from "./PortFolioContent";
import { useCallback, useEffect, useMemo } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRecoil,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface IContent {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  link: string;
  drive?: string;
  date: string;
  member: string;
  explanation: string;
  skills: {
    icon: JSX.Element;
    iconName: string;
  }[];

  work: string[];
  review: string;
}

const PortFolioComp = () => {
  const params = useParams();

  const portfolio: IContent = useMemo(() => {
    switch (params.id) {
      case "1":
        return {
          title: "롤인벤",
          img: {
            src: "/imgs/LoL.png",
            alt: "lol",
          },
          link: "https://lol.dsongc.com",
          date: "2024.3.14 ~ 2024.4.08",
          member: "개인프로젝트",
          explanation:
            "JavaScript와 node.js의 사용을 통한 LOL인벤 게시판을 구현해보는 프로젝트",
          skills: [
            {
              icon: <FaHtml5 size={50} />,
              iconName: "HTML",
            },
            {
              icon: <FaCss3Alt size={50} />,
              iconName: "CSS",
            },
            {
              icon: <RiJavascriptFill size={50} />,
              iconName: "JavaScript",
            },
            {
              icon: <FaNodeJs size={50} />,
              iconName: "Node.js",
            },
          ],
          work: [
            "롤인벤 게시판 UI 및 기능 구현",
            "게시글 등록을 위한 백엔드 서버를 구현",
          ],
          review:
            "HTML,CSS,JavaScript를 사용하여 페이지를 구현하는 경험을 해볼수 있엇고 서버를 구축을 통하여 페이지의 동작을 체험해볼수 있었음",
        };

      case "2":
        return {
          title: "번개장터",
          img: {
            src: "/imgs/thun.png",
            alt: "thunder",
          },
          link: "https://thunder.dsongc.com",
          date: "2024.5.19 ~ 2024.6.4",
          member: "2인",
          explanation: "번개장터의 UI를 만들어보고 기능을 구현해보는 프로젝트",
          skills: [
            {
              icon: <FaHtml5 size={50} />,
              iconName: "HTML",
            },
            {
              icon: <FaCss3Alt size={50} />,
              iconName: "CSS",
            },
            {
              icon: <RiJavascriptFill size={50} />,
              iconName: "JavaScript",
            },
            {
              icon: <FaNodeJs size={50} />,
              iconName: "Node.js",
            },
            {
              icon: <SiExpress size={50} />,
              iconName: "Express",
            },
            {
              icon: <SiMysql size={50} />,
              iconName: "Mysql",
            },
            {
              icon: <SiSequelize size={50} />,
              iconName: "Sequelize",
            },
          ],
          work: [
            "  API문서 ,플로우차트,시퀀스 다이어그램 작성",
            "요청받은 ERD대로 DB구성 및 백엔드 서버구현",
            "레이아웃 메뉴,사이드바 UI 및 기능 구현",
            "회원가입 및 로그인 모달 UI 및 기능구현 ",
            "카테고리 UI 및 기능 구현",
            "메인페이지,검색페이지,카테고리 페이지 UI구현 및 기능구현",
            "번개톡 페이지 UI구현",
            "관리자 페이지 UI 및 기능구현",
          ],
          review:
            "본격적으로 DB와 백엔드의 서버구성을 통하여 페이지의 유기적이 동작을 경험해볼수 있었고 프로젝트를 구현하기위해서 문서화를 통한 준비경험과  팀장으로써 프로젝트를 이끌면서 팀원간의 의견조율이나 프로젝트 완수를 위한 역활 분배 및 조정의 경험을 해볼수 있었음",
        };
      case "3":
        return {
          title: "요기요",
          img: {
            src: "/imgs/yogi.png",
            alt: "yogiyo",
          },
          link: "https://yogi.dsongc.com",
          date: "2024.6.13 ~ 2024.6.28",
          member: "개인프로젝트",
          explanation: "요기요 PC페이지 UI를 구현해보는 프로젝트",
          skills: [
            {
              icon: <SiTypescript size={50} />,
              iconName: "TypeScript",
            },
            {
              icon: <SiReact size={50} />,
              iconName: "React",
            },
            {
              icon: <SiTailwindcss size={50} />,
              iconName: "Tailwindcss",
            },
          ],
          work: [
            "페이지 레이아웃 UI 구현",
            "로그인 페이지 UI구현",
            "상점 목록 페이지UI 구현",
            "상점 메뉴페이지 구현",
            "메인페이지의 카테고리 UI구현",
          ],
          review:
            "기존의 HTML,CSS로 구현하는 페이지에서 벗어나 React와 Tailwind의 사용을 통해서 ",
        };

      case "4":
        return {
          title: "햄스터 마켓",
          img: {
            src: "/imgs/hamster.png",
            alt: "hamster",
          },
          link: "https://hamster.dsongc.com",
          date: "2024.07.05 ~ 2024.08.05",
          member: "개인프로젝트",
          explanation:
            "미션가이드에 따라 구매자와 판매자가 택배사를 통하여 거래할수있는 중고거래사이트를 구현한 프로젝트",
          skills: [
            {
              icon: <SiTypescript size={50} />,
              iconName: "TypeScript",
            },
            {
              icon: <SiReact size={50} />,
              iconName: "React",
            },
            {
              icon: <SiTailwindcss size={50} />,
              iconName: "Tailwindcss",
            },
            {
              icon: <SiRecoil size={50} />,
              iconName: "Recoil",
            },
            {
              icon: <SiReactquery size={50} />,
              iconName: "ReactQuery",
            },
            {
              icon: <SiFigma size={50} />,
              iconName: "Figma",
            },
          ],
          work: [
            "전체적인 UI 디자인",
            "페이지 레이아웃 UI구현",
            "키워드검색  및 카테고리 검색기능 및 UI 구현 ",
            "메인,검색,카테고리 페이지 상품리스트 페이지 구현",
            "관리자페이지 UI및 동작구현",
            "배송페이지 UI및 동작 구현",
          ],
          review:
            "본격적인 React의 사용과 SPA를 경험해볼수 있었고 팀원으로써 좀더 세부적으로 나누어진 역활속에서 같이 협업하는 팀원과의 의견조율 경험하고 팀장의 지시에따라 프로젝트를 완성하는 경험을 해볼수있었음",
        };

      case "5":
        return {
          title: "핀터레스트",
          img: {
            src: "/imgs/pins.png",
            alt: "pinterest",
          },
          link: "https://lee.dsongc.com",
          date: "2024.8.20 ~ 2024.9.19",
          member: "개인프로젝트",
          explanation: "반응형 웹이 적용된 핀터레스트 사이트 구현",
          skills: [
            {
              icon: <SiTypescript size={50} />,
              iconName: "TypeScript",
            },
            {
              icon: <SiNextdotjs size={50} />,
              iconName: "Next.js",
            },
            {
              icon: <SiTailwindcss size={50} />,
              iconName: "Tailwindcss",
            },
            {
              icon: <SiRecoil size={50} />,
              iconName: "Recoil",
            },
            {
              icon: <SiReactquery size={50} />,
              iconName: "ReactQuery",
            },
            {
              icon: <SiNestjs size={50} />,
              iconName: "Nest.js",
            },
            {
              icon: <SiMysql size={50} />,
              iconName: "Mysql",
            },
            {
              icon: <SiExpress size={50} />,
              iconName: "Express",
            },
            {
              icon: <SiAxios size={50} />,
              iconName: "axios",
            },
            {
              icon: <SiFigma size={50} />,
              iconName: "Figma",
            },
          ],
          work: [
            "전체적인 UI 디자인",
            "백앤드 서버 구축",
            "로그인 로그아웃 구현",
            "페이지 기능구현",
            "업로드 기능 구현",
            "모바일 반응형 웹 적용",
            "모바일 기능 구현",
            "메인 배너 페이지 구현",
          ],
          review:
            "본격적인 React의 사용과 SPA를 경험해볼수 있었고 팀원으로써 좀더 세부적으로 나누어진 역활속에서 같이 협업하는 팀원과의 의견조율 경험하고 팀장의 지시에따라 프로젝트를 완성하는 경험을 해볼수있었음",
        };

      default:
        return {
          title: "롤인벤",
          img: {
            src: "/imgs/LoL.png",
            alt: "lol",
          },
          link: "https://lol.dsongc.com",
          date: "2024.3.14 ~ 2024.4.08",
          member: "개인프로젝트",
          explanation:
            "JavaScript와 node.js의 사용을 통한 LOL인벤 게시판을 구현해보는 프로젝트",
          skills: [
            {
              icon: <FaHtml5 size={50} />,
              iconName: "HTML",
            },
            {
              icon: <FaCss3Alt size={50} />,
              iconName: "CSS",
            },
            {
              icon: <RiJavascriptFill size={50} />,
              iconName: "JavaScript",
            },
            {
              icon: <FaNodeJs size={50} />,
              iconName: "Node.js",
            },
          ],
          work: [
            "롤인벤 게시판 UI 및 기능 구현",
            "게시글 등록을 위한 백엔드 서버를 구현",
          ],
          review:
            "HTML,CSS,JavaScript를 사용하여 페이지를 구현하는 경험을 해볼수 있엇고 서버를 구축을 통하여 페이지의 동작을 체험해볼수 있었음",
        };
    }
  }, [params.id]);

  const router = useRouter();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        scaleX: [0.3, 1],
        scaleY: [0.3, 1],
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[100%] h-screen bg-gray-200 gap-3 rounded-t-[1rem] overflow-auto">
        <div className="px-2 w-[100%] h-[3rem] flex items-center gap-3  bg-stone-800">
          <div
            className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"
            onClick={() => {
              router.back();
            }}
          ></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
        </div>
        <PortFolioContent portfolio={portfolio} />
      </div>
    </motion.div>
  );
};
export default PortFolioComp;

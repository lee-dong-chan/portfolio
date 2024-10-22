"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import PortFolioContent from "./PortFolioContent";
import { useMemo } from "react";
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
  Implementation: {
    page?: string[];
    list: string[];
    list2?: string[];
    list3?: string[];
  };
}

const PortFolioComp = () => {
  const params = useParams();

  const portfolio: IContent = useMemo(() => {
    switch (params.id) {
      case "5":
        return {
          title: "롤인벤",
          img: {
            src: "/imgs/LoL.png",
            alt: "lol",
          },
          link: "https://lol.dsongc.com",
          date: "2024.03.14 ~ 2024.04.08(26일)",
          member: "개인프로젝트",
          explanation:
            "페이지 구현능력 향상과 HTTP 프로토콜을 이해하기 위해 기본적인 Net모듈을 사용하여 서버를 구축하여 LOL인벤 게시판을 구현해본 개인프로젝트 입니다.",
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
          work: ["프론트엔드 및 백엔드 구현", "프로젝트 배포"],
          Implementation: {
            list: [
              "Net모듈 서버가 요청헤더와 바디를 파싱하여 Path와 Method를 체크하도록 구현",
              "Path 와 Method에 따라 응답 헤더와 바디를 구성하여 해당페이지의 HTML,CSS,JS,게시글 데이터를 응답하도록 구현",
              "HTML의 Form태그와 Fetch를 사용하여 서버에 요청을 보내고 Net모듈을 사용한 서버가 전달받은 게시글 데이터를 배열에 저장하도록 게시글 작성기능을 구현 ",
              "게시글에 접속하여 Path가 /board 이면 해당하는 HTML,JS,CSS를 불러오고 쿼리스트링을 통하여 게시글은 구분하여 게시글 정보를 요청, 해당 게시글의 내용을 표현하도록 구현 ",
            ],
          },
        };

      case "4":
        return {
          title: "번개장터",
          img: {
            src: "/imgs/thun.png",
            alt: "thunder",
          },
          link: "https://thunder.dsongc.com",
          date: "2024.05.19 ~ 2024.06.14(17일)",
          member: "2인",
          explanation:
            "팀원과의 협업을 통한 프로젝트 경험과 여러 라이브러리를 사용한 서버구축 및 DB구축 경험을 위한 프로젝트",
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
            "API문서 ,플로우차트,시퀀스 다이어그램 등 프로젝트 문서화 및 설계",
            "요청받은 ERD대로 DB구성",
            "업무분배한 기능별 프론트엔드 및 백엔드 서버 구축",
            "Git 및 GitHub를 사용하여 프로젝트 브랜치병합 및 관리",
            "프로젝트 배포",
          ],
          Implementation: {
            page: ["관리자 페이지"],
            list: [
              "레이아웃 메뉴 구현",
              "메인페이지 슬라이드 구현",
              "Session을 사용하여 로그인 로그아웃 구현",
              "Sequelize의 OP.like를 사용하여 해당 키워드의 상품검색기능을 구현하고 검색결과의 최신순,오래된순등 정렬기능 구현",
              "쿼리스트링을 사용하여 카테고리를 구별하고 카테고리별로 상품리스트를 확인할 수 있도록 구현",
              "상품페이지 접속시 해당상품의 데이터를 쿠키에 저장하여 최근에 살펴본 상품링크가 사이드바에 나타나도록 구현",
              "쿼리스트링을 사용하여 현재상품을 구별하고 해당상품의 정보를 보여주도록 구현",
            ],
            list2: [
              "현재 가입된 유저의 목록을 불러와 나타내고 검색시에는 검색된 유저만 나타내도록 구현하엿고 유저를 정지할 수 있도록 구현",
              "현재 작성된 게시글 목록을 불러와 나타내고 검색시에는 해당 게시글만 출력,게시글에 접속하여 확인하고 삭제할 수 있도록 기능을 구현",
              "카테고리를 선택하여 삭제하거나 추가할수 있도록 구현,카테고리명이 중복될시에는 생성이 불가",
            ],
          },
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
          Implementation: {
            list: [],
          },
        };

      case "2":
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
          Implementation: {
            list: [],
          },
        };

      case "1":
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
          Implementation: {
            list: [],
          },
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
          Implementation: {
            list: [],
          },
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

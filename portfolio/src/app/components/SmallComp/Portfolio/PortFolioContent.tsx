import Link from "next/link";
import { IContent } from "./PortFolioComp";

interface IProps {
  portfolio: IContent;
}

const PortFolioContent = ({ portfolio }: IProps) => {
  return (
    <div className="w-[100%]">
      <div className="p-5 -[100%] text-black">
        <div className="text-[1.4rem] font-bold text-black">
          {portfolio.title}
        </div>
        <div className="w-[60rem] h-[40rem] mx-auto">
          <img
            className="w-[100%] h-[100%]"
            src={portfolio.img.src}
            alt={portfolio.img.alt}
          ></img>
        </div>
        <div>
          <Link href={portfolio.link} target="_blank">
            <div className="p-3 w-fit rounded bg-gray-500">페이지 보러가기</div>
          </Link>
          <div>프로젝트 일자:{portfolio.date}</div>
          <div>프로젝트인원:{portfolio.member}</div>
          <div>프로젝트설명:{portfolio.explanation}</div>
          <div>사용스택</div>
          <div className="flex gap-5">
            {portfolio.skills.map(
              (item: { icon: JSX.Element; iconName: string }, idx: number) => (
                <div key={idx} className="flex flex-col items-center w-[5rem]">
                  {item.icon}
                  <div className="w-fit mx-auto">{item.iconName}</div>
                </div>
              )
            )}
          </div>
          <div>주요업무</div>
          <div>
            {portfolio.work.map((item: string, idx: number) => (
              <div key={idx}>
                {idx + 1}.{item}
              </div>
            ))}
          </div>
          <div>프로젝트후 느낀점:{portfolio.review}</div>
        </div>
      </div>
    </div>
  );
};
export default PortFolioContent;

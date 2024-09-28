import Image from "next/image";

import { useEffect, useState } from "react";

interface IProps {
  page: number;
  card: number;
}

const Card = ({ page, card }: IProps) => {
  const [view, setview] = useState<boolean>(false);
  const First =
    "transition duration-700 translate-x-[-10rem] translate-y-[1rem]";
  const Second =
    "transition duration-700 translate-x-[13rem] translate-y-[-5rem] z-[-50] blur-sm";
  const Third =
    "transition duration-700 translate-x-[2rem] translate-y-[-15rem] z-[-70] blur-sm";
  const Fourth =
    "transition duration-700 translate-x-[-22rem] translate-y-[-15rem] z-[-70] blur-sm";
  const Fifth =
    "transition duration-700 translate-x-[-33rem] translate-y-[-5rem] z-[-50] blur-sm";

  const card1 = `absolute   ${page === 1 && First} ${page === 2 && Second}
      ${page === 3 && Third}
        ${page === 4 && Fourth}
         ${page === 5 && Fifth}
      
      `;
  const card2 = `absolute   ${page === 1 && Second} ${page === 2 && Third}
      ${page === 3 && Fourth}
        ${page === 4 && Fifth}
         ${page === 5 && First}
      
      `;
  const card3 = `absolute   ${page === 1 && Third} ${page === 2 && Fourth}
      ${page === 3 && Fifth}
        ${page === 4 && First}
         ${page === 5 && Second}
      
      `;
  const card4 = `absolute   ${page === 1 && Fourth} ${page === 2 && Fifth}
          ${page === 3 && First}
            ${page === 4 && Second}
             ${page === 5 && Third}
          
          `;
  const card5 = `absolute   ${page === 1 && Fifth} ${page === 2 && First}      
                  ${page === 3 && Second}
                    ${page === 4 && Third}
                     ${page === 5 && Fourth}
                  
                  `;
  useEffect(() => {
    setTimeout(() => {
      setview(true);
    }, 100);
  }, []);
  return (
    <div
      className={`${card === 1 && card1} 
    ${card === 2 && view && card2}
    ${card === 3 && view && card3}
    ${card === 4 && view && card4}
    ${card === 5 && view && card5}
    ${
      !view &&
      "absolute transition duration-700 translate-x-[-10rem] translate-y-[1rem]"
    }

 
    `}
    >
      <div className="w-[20rem] h-[30rem] rounded-[1rem] bg-gray-200 overflow-hidden">
        <div className="px-2 w-[100%] h-[2.5rem] flex items-center gap-2 bg-stone-800">
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-red-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-gray-500"></div>
          <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-green-500"></div>
        </div>

        <img
          src={`${card === 1 ? "/imgs/inven.png" : ""}
          ${card === 2 ? "/imgs/Thunder.png" : ""}
          ${card === 3 ? "/imgs/yogiyo.png" : ""}
          ${card === 4 ? "/imgs/hamster.png" : ""}
            ${card === 5 ? "/imgs/pinterest.png" : ""} `}
          className="w-[100%] h-[93%]  pointer-events-none"
          alt="portfolio"
        ></img>
      </div>
    </div>
  );
};
export default Card;

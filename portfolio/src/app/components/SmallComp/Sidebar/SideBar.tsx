import { Dispatch, SetStateAction } from "react";

interface IProps {
  setside: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ setside }: IProps) => {
  return (
    <div
      onMouseLeave={() => {
        setTimeout(() => {
          setside(false);
        }, 2000);
      }}
      className=" w-[4rem] h-[30rem] flex flex-col items-center rounded-[2rem] border-gray-600  bg-gray-200  "
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default SideBar;

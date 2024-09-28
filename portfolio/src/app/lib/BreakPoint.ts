import { useEffect, useState } from "react";

export const useBreakPoint = () => {
  const [ismobile, setIsmobile] = useState(false);
  const [ismini, setIsMini] = useState(false);
  const [isdesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsmobile(screenWidth < 450);
      setIsMini(screenWidth < 1300 && screenWidth >= 430);
      setIsDesktop(screenWidth >= 1300);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { ismini, isdesktop, ismobile };
};

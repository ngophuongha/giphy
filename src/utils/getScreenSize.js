import { useState, useEffect } from "react";

function getColNum(width) {
  if (width > 1200) {
    return 4;
  } else if (width >= 768) {
    return 3;
  }
  return 2;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const colNum = getColNum(width);
  return {
    width,
    height,
    colNum,
  };
}
//eslint-disable-next-line
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

import React, { useEffect, useState } from "react";
import LeftSide from "./left-side";
import RightSide from "./right-side";
import Main from "./main";
import { GlobalStyled } from "../styles/global.styled";
interface Props {}
export default function Home({}: Props) {
  useEffect(() => {
    const dark = window.localStorage.getItem("dark");
  }, []);
  return (
    <div id="home" className="flex flex-1">
      <GlobalStyled theme={true} />
      <LeftSide />
      <Main/>
      <RightSide/>
    </div>
  );
}

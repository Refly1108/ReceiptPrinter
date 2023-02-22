import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../xpyun/index";
import { useEffect } from "react";
import config from "../config/config";
import { PageRouterContext } from "../App";

export default function Welcome() {
  const changeRoute = useContext(PageRouterContext);
  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const checkPlay = () => {
    navigateTo(changeRoute, config.pages.input);
  };
  return (
    <div>
      <div onClick={checkPlay}>
        {/* <video id="myVideo" width="400" height="800" controls autoPlay> */}
        <img src="/welcome.webp" />
        {/* </video> */}
      </div>
    </div>
  );
}

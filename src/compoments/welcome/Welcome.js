import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../..//xpyun/index";
import { useEffect } from "react";
import config from "../../config/config";
import { getAccess_token } from "../../fetch/wxInfo";
import { PageRouterContext } from "../../App";
import {
  getQueryString,
  getRandomWish,
  subWish,
  getWishArray,
} from "../../xpyun/util/util";
import "./CustomerWelcome.css";
import { drawLogo, drawLogo2 } from "../../printer/index";
import wishs from "../../config/wishs";
export default function Welcome(props) {
  const changeRoute = useContext(PageRouterContext);

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const checkPlay = async () => {
    // await drawLogo();
    // await drawLogo2();
    // console.log(getWishArray(wishs.en[1]));
    // console.log(getWishArray(wishs.en[2]));
    // console.log(getWishArray(wishs.en[3]));
    // console.log(getWishArray(wishs.en[4]));
    let useinfo = await getAccess_token(getQueryString("code"));
    props.setUsername("Refly");
    navigateTo(changeRoute, config.pages.input);
  };

  return (
    <div>
      <div className="welcomeBackground">
        <button className="wishButton" onClick={checkPlay}>
          我要许愿
        </button>
      </div>
    </div>
  );
}

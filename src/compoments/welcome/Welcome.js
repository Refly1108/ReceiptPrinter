import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../..//xpyun/index";
import { useEffect } from "react";
import config from "../../config/config";
import { getAccess_token } from "../../fetch/wxInfo";
import { PageRouterContext } from "../../App";
import { getQueryString } from "../../xpyun/util/util";
import "./CustomerWelcome.css";
export default function Welcome() {
  const changeRoute = useContext(PageRouterContext);

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const checkPlay = async () => {
    let useinfo = await getAccess_token(getQueryString("code"));
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

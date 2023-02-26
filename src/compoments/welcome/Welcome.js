import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../..//xpyun/index";
import { useEffect } from "react";
import config from "../../config/config";
import { getAccess_token, getUserinfo } from "../../fetch/wxInfo";
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
  const [name, setName] = useState("");
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

    // if (props.username) {
    //   setName(props.username);
    // } else {
    //   let useinfo = await getUserinfo(getQueryString("code"));
    //   console.log(useinfo);
    //   console.log(useinfo.nickname);
    //   if (useinfo) {
    //     props.setUsername(useinfo.nickname);
    //     setName(useinfo.nickname);
    //     navigateTo(changeRoute, config.pages.input);
    //   }
    // }

    navigateTo(changeRoute, config.pages.input);
  };

  // const getname = async () => {
  //   let useinfo = await getUserinfo(getQueryString("code"));
  //   if (useinfo) {
  //     props.setUsername(useinfo.nickname);
  //     setName(useinfo.nickname);
  //   }
  // };
  useEffect(() => {
    if (props.username) {
      setName(props.username);
    } else {
      (async () => {
        let useinfo = await getUserinfo(getQueryString("code"));
        if (useinfo) {
          props.setUsername(useinfo.nickname);
          setName(useinfo.nickname);
        }
      })();
    }
  }, []);

  return (
    <div>
      <div className="welcomeBackground">
        <br></br>
        <br />
        <br />
        <br />
        <br />
        <br />
        {name}
        <button className="wishButton" onClick={checkPlay}>
          我要许愿
        </button>
      </div>
    </div>
  );
}

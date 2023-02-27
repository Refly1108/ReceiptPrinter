import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../..//xpyun/index";
import { useEffect } from "react";
import config from "../../config/config";
import { getAccess_token, getUserinfo } from "../../fetch/wxInfo";
import { PageRouterContext } from "../../App";
import { getQueryString } from "../../xpyun/util/util";
import "./CustomerWelcome.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

export default function Welcome(props) {
  const changeRoute = useContext(PageRouterContext);
  const [name, setName] = useState("");
  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const checkPlay = async () => {
    // let useinfo = await getAccess_token(getQueryString("code"));
    navigateTo(changeRoute, config.pages.input);
  };
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
    <div className="welcomeBackground">
      <div className="welcomebgContent">
        <div className="wechatId">
          @<span id="postWechatId">{name}</span>
        </div>
        <div className="niceMeet">很高兴遇见你</div>
        <div className="wishRs">心愿收据</div>
        <div className="Regarding2023">2023年万事顺遂，心想事成</div>
        {/*       <div><button className="wishButton" onClick={checkPlay}>
          我要许愿</button></div>

        <div className="groupName"><span className="gnbord">零.壹团队</span><br />Annual Dinner 2023</div>*/}
        {/* 按钮特效 */}
        <Button
          variant="contained"
          color="green"
          className="wishButton"
          onClick={checkPlay}
        >
          <span className="iWish">我要许愿</span>
        </Button>
        <div className="groupName">
          <span className="gnbord">零.壹团队</span>
          <br />
          Annual Dinner 2023
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { PrinterData } from "../xpyun/index";
import { PageRouterContext } from "../App";
import config from "../config/config";
export default function Failed() {
  const [name, setName] = useState("");
  const [staff, setStaff] = useState("");
  const [text, setText] = useState("");
  const [printResult, setPrintResult] = useState(false);
  const [process, setProcess] = useState(false);
  const changeRoute = useContext(PageRouterContext);

  const retry = async () => {
    navigateTo(changeRoute, config.pages.input);
  };

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };

  const resultData = () => {
    return (
      <div>
        <div>failed </div>
        <button onClick={retry}>retry</button>
      </div>
    );
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

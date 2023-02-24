import React, { useContext, useState } from "react";
import { PageRouterContext } from "../../App";
import config from "../../config/config";
import "./Failed.css";
export default function Failed() {
  const changeRoute = useContext(PageRouterContext);
  const retry = async () => {
    navigateTo(changeRoute, config.pages.input);
  };

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };

  return (
    <div>
      <div className="FaildedBackground">
        <button className="wishButton" onClick={retry}>
          Printer Issu 再试试吧
        </button>
      </div>
    </div>
  );
}

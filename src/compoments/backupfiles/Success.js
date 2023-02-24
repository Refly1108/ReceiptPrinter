import React, { useContext, useState } from "react";
import { PrinterData } from "../xpyun/index";
import { PageRouterContext } from "../App";
import config from "../config/config";
export default function Success() {
  const changeRoute = useContext(PageRouterContext);

  const submit = async () => {};

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };

  return <div>success</div>;
}

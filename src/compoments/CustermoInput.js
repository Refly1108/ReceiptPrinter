import React, { useContext, useState } from "react";
import { PrinterData } from "../xpyun/index";
import { PageRouterContext } from "../App";
import config from "../config/config";
export default function CustermoInput() {
  const [name, setName] = useState("");
  const [staff, setStaff] = useState("");
  const [text, setText] = useState("");
  const [printResult, setPrintResult] = useState(false);
  const [process, setProcess] = useState(false);
  const changeRoute = useContext(PageRouterContext);

  const submit = async () => {
    setProcess(true);
    let result = await PrinterData({
      staffId: staff,
      name: name,
      text: text,
    });
    if (result) {
      navigateTo(changeRoute, config.pages.success);
    } else {
      navigateTo(changeRoute, config.pages.failed);
    }
  };

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const inputData = () => {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></input>{" "}
        祝福
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>{" "}
        name
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            setStaff(e.target.value);
          }}
          value={staff}
        ></input>{" "}
        staff id
        <br></br>
        <button onClick={submit}>开始打印</button>
      </div>
    );
  };
  const processing = () => {
    return <div>printing......</div>;
  };

  return <div>{!process ? inputData() : processing()}</div>;
}

import React, { useContext, useState } from "react";
import { postToServer } from "../fetch/index";
import { PageRouterContext } from "../App";
import config from "../config/config";
export default function CustermoInputold(proprs) {
  const [name, setName] = useState("1");
  const [staff, setStaff] = useState("1");
  const [text, setText] = useState("1");
  const [printResult, setPrintResult] = useState(-1);
  const [process, setProcess] = useState(false);
  const changeRoute = useContext(PageRouterContext);
  const submit = async () => {
    setProcess(true);
    if (name == "12345678") {
      navigateTo(changeRoute, config.pages.printList);
    } else {
      const result = await postToServer({
        staffName: name,
        staffId: staff,
        wish: text,
      });
      //let result = '0';
      setProcess(false);
      if (result) {
        setPrintResult(1);
      } else {
        setPrintResult(2);
      }
    }
  };
  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const success = () => {
    return (
      <div>
        <div>添加队列成功！</div>
        <div>{continueInput()}</div>
      </div>
    );
  };
  const failed = () => {
    return <div>添加队列失败！</div>;
  };
  const continueInput = () => {
    return (
      <button
        onClick={() => {
          setProcess(false);
          setPrintResult(-1);
        }}
      >
        continueInput
      </button>
    );
  };
  const printing = () => {
    if (process) {
      return <div>打印信息添加中。。。。</div>;
    } else {
      return (
        <div>
          <div>{printResult == 1 ? success() : failed()}</div>
        </div>
      );
    }
  };

  const inputData = () => {
    return (
      <div>
        <form>
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
          staff
          <br></br>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></input>
          print data
          <br></br>
          <button onClick={submit}>confirm</button>
        </form>
      </div>
    );
  };
  return <div>{!process & (printResult == -1) ? inputData() : printing()}</div>;
}

import React, { useContext, useState } from "react";
import { printerReceipt } from "../../printer/index";
import { getPrintListFromServer, postToServer, sleep } from "../../fetch/index";
import { useEffect } from "react";
import { getRandomWish, getparams } from "../../xpyun/util/util";
let stop = false;
export default function PrintJob() {
  const [printResult, setPrintResult] = useState(0);
  const [process, setProcess] = useState(false);
  const [printeList, setPrinteList] = useState([]);
  const [currentJob, setCurrentJob] = useState("");
  const [networkIssue, setNetworkIssue] = useState(false);
  const [printerIssue, setPrinterIssue] = useState(false);
  const getPrintList = async () => {
    stop = false;
    setProcess(true);
    setNetworkIssue(false);
    setPrinterIssue(false);
    let result = await getPrintListFromServer();

    if (result) {
      await printerJob(result);
    } else {
      setNetworkIssue(true);
    }
  };
  const submit = () => {
    // await postToServer({
    //   name: "Refly",
    //   text: getRandomWish(),
    // });
    let a = getparams(
      "https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index",
      "action"
    );
    setProcess(false);
  };
  const stopPrint = () => {
    stop = true;
  };

  const printerJob = async (list) => {
    console.log(list.length);
    let array = list;
    while (array.length > 0) {
      setPrinteList([...array]);
      setCurrentJob(array[array.length - 1].staffName);
      let result = await printerReceipt(array[array.length - 1]);
      await sleep(2000);
      result = true;
      if (result.error == 0) {
        array.pop();
        setPrinteList(array);
      } else {
        stop = true;
        setPrinterIssue(true);
        break;
      }
    }
    if (!stop) {
      await getPrintList();
    }
    setProcess(false);
  };
  const startJob = async () => {
    let result = await getPrintListFromServer();
    if (result.length > 0) {
      await executeJob(result);
    } else {
      console.log("currently no job list");
    }

    console.log(result);
  };
  const executeJob = async (list) => {
    console.log(list.length);
    let array = list;
    setPrinteList([...array]);

    while (array.length > 0) {
      setCurrentJob(array[0].name);

      // await printerReceipt(array[0]);
      await sleep(2000);
      console.log(array[0].text);
      array.shift();
      setPrinteList([...array]);
      // console.log(array[0].name);
    }
  };
  // useEffect(() => {
  //   //use changed
  //   console.log(printeList);
  // }, [printeList]);

  const jobList = () => {
    return (
      <div>
        <p>Printer Job List</p>
        <ol>
          {printeList.map((value, key) => {
            return (
              <ul>
                {value.name}
                {value.text}
              </ul>
            );
          })}
        </ol>
        <div>current job for {currentJob}</div>
      </div>
    );
  };
  const getStart = () => {
    return (
      <div>
        <button onClick={startJob}>start Print Job</button>
      </div>
    );
  };
  const getStop = () => {
    return (
      <div>
        <button onClick={stopPrint}>stop Print Job</button>
      </div>
    );
  };
  const networkAlert = () => {
    return (
      <div>
        <div>network issue now .............</div>
      </div>
    );
  };
  const printerAlert = () => {
    return (
      <div>
        <div>printer issue now .............</div>
      </div>
    );
  };
  return (
    <div>
      {/* <div>{jobList()}</div>

      <div>{getStart()}</div>
      <div>{getStop()}</div> */}
      <div>
        <button onClick={submit}>add</button>
      </div>
    </div>
  );
}

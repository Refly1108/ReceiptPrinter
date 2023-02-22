import React, { useContext, useState } from "react";
import { printerReceipt } from "../printer";
import { getPrintListFromServer, postToServer, sleep } from "../fetch/index";
import { useEffect } from "react";
let stop = false;
export default function Printer() {
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
  const submit = async () => {
    const result = await postToServer({
      staffName: new Date().toISOString(),
      staffId: "staff",
      wish: "text",
    });
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

  useEffect(() => {
    //use changed
    console.log(printeList);
  }, [printeList]);
  const printing = () => {
    return <div>job start....</div>;
  };

  const jobList = () => {
    return (
      <div>
        <p>Printer Job List</p>
        <ol>
          {printeList.map((value, key) => {
            return (
              <ul>
                {value.staffName}
                {/* {value.wish} */}
              </ul>
            );
          })}
        </ol>
        {process ? <div>current job for {currentJob}</div> : ""}
      </div>
    );
  };
  const getStart = () => {
    return (
      <div>
        <form>
          <button onClick={getPrintList}>start Print Job</button>
        </form>
      </div>
    );
  };
  const getStop = () => {
    return (
      <div>
        <form>
          <button onClick={stopPrint}>stop Print Job</button>
        </form>
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
      <div>{jobList()}</div>
      <div>{networkIssue ? networkAlert() : ""}</div>
      <div>{printerIssue ? printerAlert() : ""}</div>
      <div>{process ? printing() : getStart()}</div>
      <div>{getStop()}</div>
      <div>
        {
          <form>
            <button onClick={submit}>add</button>
          </form>
        }
      </div>
    </div>
  );
}

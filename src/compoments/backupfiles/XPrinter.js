import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../xpyun/index";
import { useEffect } from "react";

export default function XPrinter() {
  const [printResult, setPrintResult] = useState(true);
  const submit = async () => {
    const result = await PrinterData({
      staffId: "123456789",
      name: "Fei",
      text: "test aajhahjahj",
    });
    setPrintResult(result);
  };
  const printerResult = () => {
    return (
      <div>
        <div>{printResult ? "aaaa" : "abbbbbbb"}</div>
      </div>
    );
  };

  const printing = () => {
    return <div>job start....</div>;
  };

  return (
    <div>
      <button onClick={submit}>add</button>
      <div>{printerResult()}</div>
    </div>
  );
}

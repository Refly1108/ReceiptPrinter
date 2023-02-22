import {
  getMillisecond,
  generateSign,
  generateContext,
  getDateString,
} from "./util/util";
import config from "../config/config";
import { fetchRequest } from "../fetch";
const USER_NAME = "417770773@qq.com";
const USER_KEY = "e442232f7e044db79041a78f6c9b65b1";
const OK_PRINTER_SN = "748PG68WQZ8694A";

export const addPrinter = async () => {
  let timestamp = getMillisecond();
  let opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
    encoding: "utf-8",
    body: JSON.stringify({
      items: [
        { sn: OK_PRINTER_SN, name: "A" },
        // { sn: "XPY987654321B", name: "X58B" },
        // { sn: "XPY123456723A", name: "X58C" },
        // { sn: "XPY987654345B", name: "X58D" },
      ],
      user: USER_NAME,
      timestamp: timestamp,
      sign: generateSign(USER_NAME, USER_KEY, timestamp),
      debug: "0",
    }),
  };
  let result = await fetchRequest(config.xpyun.apis.printRecept, opts, true);

  return result;
};

export const getSN = async () => {
  let timestamp = getMillisecond();
  let date = getDateString();
  console.log(date);
  let opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
    encoding: "utf-8",
    body: JSON.stringify({
      sn: OK_PRINTER_SN,
      date: date,
      user: USER_NAME,
      timestamp: timestamp,
      sign: generateSign(USER_NAME, USER_KEY, timestamp),
      debug: "0",
    }),
  };
  let result = await fetchRequest(config.xpyun.apis.getSN.url, opts, true);
  if (result.code === 0) {
    return result.data.printed;
  }
  return 0;
};

export const PrinterData = async (data) => {
  let timestamp = getMillisecond();
  let opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
    json: true,
    encoding: "utf-8",
    body: JSON.stringify({
      sn: OK_PRINTER_SN,
      content: await generateContext(data),
      copies: 1,
      voice: 1,
      user: USER_NAME,
      timestamp: timestamp,
      sign: generateSign(USER_NAME, USER_KEY, timestamp),
      debug: "0",
    }),
  };
  let result = await fetchRequest(
    config.xpyun.apis.printRecept.url,
    opts,
    true
  );
  console.log(result);
  if (result.code === 0) {
    return true;
  } else {
    return false;
  }
};

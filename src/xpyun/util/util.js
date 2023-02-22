import crypto from "crypto";
import { getSN } from "..";

/**
 * 哈稀签名
 * @param signSource - 源字符串
 * @return
 */
export const sign = (signSource) => {
  let signature = crypto.createHash("sha1").update(signSource).digest("hex");

  return signature;
};

/**
 *获得毫秒数
 */

export const getMillisecond = () => {
  return new Date().getTime();
};
export const getDateString = () => {
  let d = new Date();
  let curr_date = d.getDate().toString();
  let curr_month = (d.getMonth() + 1).toString();
  let curr_year = d.getFullYear().toString();
  console.log(curr_date);
  console.log(curr_month);
  console.log(curr_month);
  if (curr_month.length < 2) {
    curr_month = curr_month = "0" + curr_month;
  }
  if (curr_date.length < 2) {
    curr_date = "0" + curr_date;
  }

  let yyyyMMdd = curr_year + "-" + curr_month + "-" + curr_date;
  return yyyyMMdd;
};

/**
 * 获得字符串重复
 * @param str - 要进行重复的字符串
 * @param repeatTimes - 重复次数
 */
export const strRepeat = (str, repeatTimes) => {
  let len = repeatTimes + 1;
  return new Array(len).join(str);
};

export const generateSign = (user, userKey, timestamp) => {
  return sign(user + userKey + timestamp);
};

export const generateContext = async (data) => {
  let sn = await getSN();

  let printContent = "<CB>Revive & Thrive<BR>";
  printContent = printContent + "<N><C>2023 壹.零 Annual Dinner<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><C>欢迎" + data.name + ",<BR>";
  printContent = printContent + "<N><C>第" + sn + "个拥抱未来的壹.零er<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<L><N>--------------------------------<BR>";
  printContent = printContent + "<N><C>你的心愿<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><C>年年既欢喜<BR>";
  printContent = printContent + "<N><C>岁岁同喜庆<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><R>2023年3月10日<BR>";
  printContent = printContent + "<L><N>--------------------------------<BR>";
  printContent = printContent + "<IMG></IMG>";
  printContent = printContent + "<BR>";
  printContent = printContent + "<L><N>TIPS #1 保留小票留下专属回忆<BR>";
  printContent = printContent + "<L><N>TIPS #2 扫码进入年会相册";
  printContent = printContent + "<C><QR>https://www.xpyun.net</QR></C>";
  // printContent = printContent + "<L><HB>Hello: " + data.name + " <BR></HB>";
  // printContent = printContent + "<C>" + data.text + "<BR></C>";
  // printContent =
  //   printContent + "<C><BARCODE>" + data.staffId + "</BARCODE></C>";
  // printContent = printContent + "<C><QR>https://www.xpyun.net</QR></C>";
  // printContent = printContent + "<IMG></IMG>";
  // `no element：default font<BR>
  // <BR>
  // L element: <L>left<BR></L>
  // <BR>
  // R element: <R>right<BR></R>
  // <BR>
  // C element: <C>center<BR></C>
  // <BR>
  // N element：<N>normal font size<BR></N>
  // <BR>
  // HB element: <HB>double font height<BR></HB>
  // <BR>
  // WB element: <WB>double font width<BR></WB>
  // <BR>
  // B element: <B>double font size<BR></B>
  // <BR>
  // HB2 element: <HB2>triple font height<BR></HB2>
  // <BR>
  // WB2 element: <WB2>triple font width<BR></WB2>
  // <BR>
  // B2 element: <B2>triple font size<BR></B2>
  // <BR>
  // BOLD element: <BOLD>bold font<BR></BOLD>`;

  // printContent = printContent + "<BR>";
  // // neseted using font and align element
  // printContent =
  //   printContent + "<C>nested use:<BOLD>center bold</BOLD><BR></C>";

  // // print barcode and QR
  // printContent = printContent + "<BR>";
  // printContent = printContent + "<C><BARCODE>9884822189</BARCODE></C>";
  //printContent = printContent + "<C><QR>https://www.xpyun.net</QR></C>";
  return printContent;
};

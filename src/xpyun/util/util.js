import crypto from "crypto";
import { getSN } from "..";
import config from "../../config/config";
import wishs from "../../config/wishs";
import { getSNfromServer } from "../../fetch/index";

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
  // let result = await getSNfromServer();
  let array = getWishArray(data.text);
  let printContent = "<L><B2>Revive&<BR>";
  printContent = printContent + "<L><B2>Thrive<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><L>壹.零 团队Annual Dinner<BR>";
  printContent = printContent + "<N><L>Annual Dinner<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><R>2023年3月10日<BR>";
  printContent = printContent + "<L><N>--------------------------------<BR>";
  printContent = printContent + "<N><L>@" + data.name + ",<BR>";
  printContent = printContent + "<N><L>很高心在这里遇见你<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<L><N>////////////////////////////////<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<WB><L>“<BR>";
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    printContent = printContent + "<N><C>" + array[index] + "<BR>";
  }
  printContent = printContent + "<WB><R>”<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<N><L>祝福你心愿成真！<BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<L><N>////////////////////////////////<BR>";
  printContent = printContent + "<N><C><BR>";
  printContent = printContent + "<BR><BR>";
  printContent = printContent + "<L><N>TIPS #1 保留小票留下专属回忆<BR>";
  printContent = printContent + "<L><N>TIPS #2 扫码进入年会相册";
  printContent = printContent + "<C><QR>https://www.xpyun.net</QR></C>";
  printContent = printContent + "<IMG></IMG>";
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
export const getQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

  var r = window.location.search.substr(1).match(reg);
  console.log(r);
  if (r != null) {
    return unescape(r[2]);
  }

  return null;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomWish = (min, max) => {
  let lan = getRandomInt(0, 1);
  let wish;
  if (lan == 1) {
    wish = wishs.en[getRandomInt(0, 49)];
  } else {
    wish = wishs.zh[getRandomInt(0, 49)];
  }

  return wish;
};

//这里为什么是n/2呢，因为前面提到中文和英文的差别是2个字符和1个字符的差别，由于下面需要进行for的循环，考虑到中文，我们将进行极端假设法，全部中文，于是将 for循环的i初始值设定为中文的最小长度（即n/2），由于考虑到单数，于是加上Math.floor(n/2)取最小整数值。

//通过for对传入的字符串依次遍历，并转化成英文，计算其长度，如果大于 n, 便终止循环并跳出。完整代码如下：

//view plaincopy to clipboardprint?

export const subWish = (str, n) => {
  var strReg = /[^\x00-\xff]/g;

  var _str = str.replace(strReg, "**");

  var _len = _str.length;

  if (_len > n) {
    var _newLen = Math.floor(n / 2);

    var _strLen = str.length;

    for (var i = _newLen; i < _strLen; i++) {
      var _newStr = str.substr(0, i).replace(strReg, "**");

      if (_newStr.length >= n) {
        return str.substr(0, i);

        break;
      }
    }
  } else {
    return str;
  }
};
//5454545455454545
export const getWishArray = (str) => {
  let array = [];
  let cut = 10;
  let string = str;
  let temp = "";

  if (checkChinese(str)) {
    array = str.split("，");
    if (array.length < 2) {
      array = splitBylength(str);
    }
  } else {
    array = str.split(",");
    if (array.length < 2) {
      array = splitByblack(str);
    }
  }

  console.log(array);
  return array;
};

export const splitBylength = (str) => {
  let array = [];
  let cut = 10;
  let string = str;
  let temp = "";
  console.log(string.length);
  while (string.length > cut) {
    console.log(string);
    // temp = subWish(string, cut * 2);
    temp = string.substr(0, cut);
    string = string.substr(temp.length, string.length);
    array.push(temp);
    if (string.length <= cut) {
      array.push(string);
      break;
    }
  }

  console.log(array);
  return array;
};

export const splitByblack = (str) => {
  let array = [];
  let array2 = [];
  array = str.split(" ");
  console.log(array);
  for (let index = 0; index < array.length; index = index + 6) {
    let temp = "";
    for (
      let index2 = 0;
      index2 < 6 && index2 + index < array.length;
      index2++
    ) {
      temp += array[index2 + index] + " ";
    }
    array2.push(temp);
    // if (index + 6 >= array.length) {
    //   for (let index2 = index + 6; index2 < array.length; index2++) {
    //     temp += array[index2] + " ";
    //   }
    //   array2.push(temp);
    //   break;
    // }
  }

  return array2;
};

export const checkChinese = (val) => {
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (reg.test(val)) {
    return true;
  } else {
    return false;
  }
};

export const getparams = (url, key) => {
  let str = url;
  let param = "";
  console.log(url);
  console.log(key);
  param = str.substring(str.indexOf(key) + key.length + 1);
  if (param.indexOf("&") > -1) {
    param = param.substring(0, param.indexOf("&"));
  }
  console.log(param);
  return param;
};

import React, { useContext, useState, useEffect } from "react";
import { PrinterData } from "../../xpyun/index";
import { PageRouterContext } from "../../App";
import config from "../../config/config";
import "./CustomerInput.css";
import ChatGPT from "../ChatGPT";
import leaf from "../../resource/leaf.PNG";
import logo from "../../resource/logo1.0.png";
import { postToServer } from "../../fetch/index";
import { getQueryString } from "../../xpyun/util/util";

import leaf_right from "../../resource/leaf_right.png";
import Closebtn from "../../resource/CloseBtn.png";
import leaf_down from "../../resource/leaf_down.png";
import RandomWishSelector from "../ChatGPT/components/RandomWishSelect";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Container,
} from "@material-ui/core";
import { getRandomWish } from "../../xpyun/util/util";
export default function CustermoInput(props) {
  const [name, setName] = useState("");
  const [staff, setStaff] = useState("");
  const [text, setText] = useState("");
  const [printResult, setPrintResult] = useState(false);
  const [process, setProcess] = useState(false);
  const changeRoute = useContext(PageRouterContext);
  // jay for ui display
  const [displayMask, setDisplayMask] = useState(false);
  const [displayPrintFirst, setDisplayPrintFirst] = useState(false);
  const [displayPrintSecond, setDisplayPrintSecond] = useState(false);
  const [displayPrintThird, setDisplayPrintThird] = useState(false);

  //Add for chatGPT
  const [displayPrintForth, setDisplayPrintForth] = useState(false);
  const [ChatGPTdata, setChatGPTData] = useState();
  const selectedData = "祝福你的人生充满爱、和平和幸福！";

  //字数统计
  // const [inputWishValue, setInputWishValue] = useState('');

  const MAX_LENGTH = 70;
  function inputWish(event) {
    let newText = event.target.value;
    if (newText.length <= MAX_LENGTH) {
      setText(newText);
    }
    console.log(newText);
  }

  //ChatGPT
  function ChatGPTSelect() {
    let wish = getRandomWish();
    setChatGPTData(wish);
    setText(wish);

    console.log("selectedData:" + selectedData);
    console.log("ChatGPTdata:" + ChatGPTdata);

    return <ChatGPTDiv selectedData={selectedData} />;
  }

  //Cancel to use ChatGPT
  function ChatGPTCancel() {
    let wish = getRandomWish();
    setChatGPTData(wish);
    //setText(wish);
    setText("");

    console.log("selectedData:" + selectedData);
    console.log("ChatGPTdata:" + ChatGPTdata);

    return <ChatGPTDiv selectedData={selectedData} />;
  }
  function ChatGPTDiv(props) {
    return <div>{props.selectedData}</div>;
  }

  function CloseButton(props) {
    return (
      <button className="close-button" onClick={props.onClick}>
        <img src={Closebtn} alt="Close_button" />
      </button>
    );
  }

  //
  const printWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(true);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
    setDisplayPrintForth(false);
  };

  const printingWish = async () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(true);
    setDisplayPrintThird(false);
    // 打印中，跳转暂时设置5秒
    setDisplayPrintForth(false);
    await submit();
  };

  const finishPrintingWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(true);
    setDisplayPrintForth(false);
  };

  const closePrinting = () => {
    setDisplayMask(false);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    setDisplayPrintForth(false);
    //打印逻辑
  };

  const cancelPrinting = () => {
    setDisplayMask(false);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    setDisplayPrintForth(false);
    ChatGPTCancel();
    //打印逻辑
  };
  const ChatGPTPrint = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    setDisplayPrintForth(true);
    ChatGPTSelect();
    //setChatGPTData(selectedData);
    //打印逻辑
  };

  //jay

  const submit = async () => {
    setProcess(true);
    let result;
    let type = getQueryString("type");
    if (!type) {
      result = await PrinterData({
        name: props.username,
        text: text,
      });
    } else {
      result = await postToServer({
        name: props.username,
        text: text,
      });
    }

    // let result = await printerReceipt(text);
    if (result) {
      finishPrintingWish();
    } else {
      navigateTo(changeRoute, config.pages.failed);
    }
  };
  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };

  const home = () => {
    navigateTo(changeRoute, config.pages.welcome);
  };

  return (
    <div className="inputBackground">
      <div className="inputWishTitle">请输入你的愿望</div>
      {/* <textarea className="inputWishDiv"></textarea> */}
      {/* 字数统计 */}

      {/* <textarea className="inputWishDiv" type="text" value={text} onChange={inputWish}></textarea> */}
      {/* <Container className="inputWishDiv"> */}
      <textarea type="text" value={text} onChange={inputWish}></textarea>
      <div className="wordinglimit">
        {text.length}/{MAX_LENGTH}
      </div>
      {/* </Container> */}
      <div className="flower"></div>

      {/* ChatGPT */}
      <ChatGPT
        className="ChatGPTbtn"
        label="没有头绪？问问ChatGPT吧"
        onClick={ChatGPTPrint}
      />

      {/* <button className="printWish" onClick={printWish}>
        打印愿望
      </button> */}
      {/* 按键特效 */}
      <Button
        variant="contained"
        color="green"
        className="printWish"
        onClick={printWish}
      >
        <span className="btnPrintWording">打印愿望</span>
      </Button>

      <div className="back" onClick={home}>
        返回
      </div>
      <div className="signing">
        <div className="madeBy">
          <p>Made with love by</p>
        </div>
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo"></div>
      </div>

      {/* masking */}
      <div
        class="mask"
        style={{ display: displayMask ? "block" : "none" }}
      ></div>

      {/* 弹窗1 */}
      <div
        class="pop1"
        // class="pop1"
        style={{ display: displayPrintFirst ? "block" : "none" }}
      >
        {/* <div class="title"></div> */}
        <div class="content">打印后请及时取走<br />以免丢失</div>
        {/* <button class="i_know" onClick={printingWish}>
          知道了,开始打印
        </button> */}

        <Button
          variant="contained"
          color="green"
          class="i_know"
          onClick={printingWish}
        >
          <div> 知道了，开始打印</div>
        </Button>

        <div class="later" onClick={closePrinting}>
          稍后再打印
        </div>
      </div>

      {/* 弹窗2 */}
      <div
        class="pop2"
        style={{ display: displayPrintSecond ? "block" : "none" }}
      >
        {/* <div class="title"></div> */}
        <div class="loading">打印中，请稍等</div>
        <div class="printing"></div>
      </div>

      {/* 弹窗3 */}
      <div
        class="pop3"
        style={{ display: displayPrintThird ? "block" : "none" }}
      >
        {/* <div class="title"></div> */}
        <div class="content">你已成功许下心愿<br />请及时取走</div>

        <button class="backToWelcome" onClick={home}>
          返回首页
        </button>
      </div>

      {/* 弹窗4 - ChatGPT */}
      <div
        class="pop4"
        style={{ display: displayPrintForth ? "block" : "none" }}
      >
        <div className="leaf">
          <img src={leaf} alt="leaf" />
        </div>

        <div className="closebtn">
          {/* <CloseButton onClick={closePrinting} /> */}
          <CloseButton onClick={cancelPrinting} />

        </div>

        {/* <div class="title"></div> */}
        {/* <div class="leaf_left">
          <img src={leaf_left} alt="leaf part1" />
        </div>
        <div class="leaf_right">
          <img src={leaf_right} alt="leaf part2" />
        </div>
        <div class="leaf_down">
          <img src={leaf_down} alt="leaf part13" />
        </div> */}
        {/* <div class="ChatGPTArea"><ChatGPTSelect /></div> */}
        <div class="ChatGPTArea">{ChatGPTdata}</div>
        {/* <div class="ChatGPTArea"><ChatGPTDiv /></div> */}
        {/* <button class="useitBtn" onClick={printingWish}>
          <div class="useItWording">使用心愿</div>
        </button> */}

        {/* 按键特效 */}
        <Button
          variant="contained"
          color="green"
          class="useitBtn"
          // onClick={printingWish}
          onClick={closePrinting}
        >
          <div class="useItWording">使用心愿</div>
        </Button>

        <div class="anotherBtn" onClick={ChatGPTPrint}>
          <div class="anotherWording">换一个</div>
        </div>
      </div>
    </div>
  );
}

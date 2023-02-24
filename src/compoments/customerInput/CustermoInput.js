import React, { useContext, useState } from "react";
import { PrinterData } from "../../xpyun/index";
import { PageRouterContext } from "../../App";
import config from "../../config/config";
import "./CustomerInput.css";
export default function CustermoInput() {
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
  //
  const printWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(true);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
  };

  const printingWish = async () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(true);
    setDisplayPrintThird(false);
    // 打印中，跳转暂时设置5秒
    await submit();
  };

  const finishPrintingWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(true);
  };

  const closePrinting = () => {
    setDisplayMask(false);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
  };
  //jay
  const submit = async () => {
    setProcess(true);
    let result = await PrinterData({
      name: "userinfoStore.name",
      text: text,
    });
    if (result) {
      finishPrintingWish();
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
        <br></br>
        <br></br>
        <button onClick={submit}>开始打印</button>
      </div>
    );
  };
  const home = () => {
    navigateTo(changeRoute, config.pages.welcome);
  };

  return (
    <div className="inputBackground">
      <div className="inputWishTitle">请输入你的愿望</div>
      <textarea className="inputWishDiv"></textarea>
      <div className="flower"></div>
      <button className="printWish" onClick={printWish}>
        打印愿望
      </button>

      <div className="back" onClick={home}>
        返回
      </div>

      {/* masking */}
      <div
        class="mask"
        style={{ display: displayMask ? "block" : "none" }}
      ></div>

      {/* 弹窗1 */}
      <div
        class="pop1"
        style={{ display: displayPrintFirst ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">打印后请及时取走以免丢失</div>
        <button class="i_know" onClick={printingWish}>
          知道了,开始打印
        </button>
        <div class="later" onClick={closePrinting}>
          稍后再打印
        </div>
      </div>

      {/* 弹窗2 */}
      <div
        class="pop2"
        style={{ display: displayPrintSecond ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="loading"></div>
        <div class="printing"></div>
      </div>

      {/* 弹窗3 */}
      <div
        class="pop3"
        style={{ display: displayPrintThird ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">你已成功许下心愿请及时取走</div>

        <button class="backToWelcome" onClick={home}>
          返回主页面
        </button>
      </div>
    </div>
  );
}

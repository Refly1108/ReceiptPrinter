import config from "../config/config";
import header_image from "../resource/heard_image.jpg";
import boot_image from "../resource/boot_image.jpg";
import { getWishArray } from "../xpyun/util/util";
export const printerReceipt = async (data) => {
  console.log(data);
  const port = 8043;
  let error = 0;
  const result = await getPrinter(config.epson.ip, port);
  if (result.printer) {
    await printerData(data, result.printer);
  } else {
    error = result.error;
  }

  return { error: error };
};

export const getPrinter = async (ip, port) => {
  return new Promise((resolve, reject) => {
    var printer = null;
    var ePosDev = new window.epson.ePOSDevice();
    ePosDev.connect(ip, port, function (data) {
      console.log(data);
      if (data == "OK" || data == "SSL_CONNECT_OK") {
        ePosDev.createDevice(
          "local_printer",
          ePosDev.DEVICE_TYPE_PRINTER,
          { crypto: true, buffer: false },
          function (devobj, retcode) {
            console.log(devobj);
            console.log(retcode);
            if (retcode == "OK") {
              printer = devobj;
              resolve({ printer: printer });
            } else {
              resolve({ printer: false, error: 2 });
            }
          }
        );
      } else {
        resolve({ printer: false, error: 1 });
      }
    });
  });
};

export const printerData = async (data, printer) => {
  console.log("start print data");
  console.log(data);
  let arr = ["中文祝福语Test1", "中文祝福语Test2", "中文祝福语Test13"];
  let len = await drawLogo(getWishArray(data));
  await drawLogo2();
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const canvas2 = document.getElementById("canvas2");
  console.log(canvas);
  console.log("canvas2");
  console.log(canvas2);
  const context2 = canvas2.getContext("2d");
  console.log(context2);
  printer.addTextAlign(printer.ALIGN_LEFT);
  printer.addTextAlign(printer.ALIGN_LEFT);
  printer.addTextLineSpace(35);
  printer.addTextFont(printer.FONT_D);
  //

  console.log(len);
  if (context) {
    printer.addImage(
      context,
      0,
      0,
      600,
      len,
      printer.COLOR_1,
      printer.MODE_MONO
    );
  }

  // printer.addFeed(1);
  // printer.addText(data);

  console.log(context2);
  if (context2) {
    printer.addImage(
      context2,
      0,
      0,
      600,
      600,
      printer.COLOR_1,
      printer.MODE_MONO
    );
  }

  printer.addFeed(1);
  printer.addCut(printer.CUT_FEED);
  printer.send();
};

export const drawLogo = (arr) => {
  return new Promise((resolve, reject) => {
    let image_header = new Image();
    let canvas;
    let context;
    image_header.src = header_image;
    image_header.onload = function () {
      canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        let len = 0;
        console.log(image_header.width);
        console.log(image_header.height);
        canvas.width = image_header.width;
        canvas.height = image_header.height + 550 + arr.length * 50;
        context = canvas.getContext("2d");
        context.drawImage(image_header, 0, 0);
        context.beginPath();
        // context.font = "28px serif";
        context.font = "30px PingFang SC";
        //after first pic +50 height  for  hello name  fix height  50
        context.fillText("     @Refly", 40, image_header.height + 50);
        //fix height  50
        context.fillText(
          "     很高兴在这里遇见你",
          40,
          image_header.height + 100
        );
        //fix height  100
        context.fillText(
          "     //////////////////////////////////",
          40,
          image_header.height + 200
        );
        // wishing lines start
        len = image_header.height + 250;

        for (let index = 0; index < arr.length; index++) {
          context.fillText("     " + arr[index], 100, len + 50);
          len += 50;
        }

        // wishing lines end
        len += 100;
        context.fillText("     祝福你心愿成真！", 40, len);
        //fix height  100
        len += 100;
        context.fillText("     //////////////////////////////////", 40, len);

        console.log(len);
        context.closePath();
        resolve(len + 10);
      } else {
        resolve(false);
      }
    };
  });
};

export const drawLogo2 = () => {
  return new Promise((resolve, reject) => {
    let image_boot = new Image();
    let canvas;
    let context;
    image_boot.src = boot_image;
    image_boot.onload = function () {
      canvas = document.getElementById("canvas2");
      if (canvas.getContext) {
        console.log(image_boot.width);
        console.log(image_boot.height);
        canvas.width = image_boot.width;
        canvas.height = image_boot.height + 80;

        context = canvas.getContext("2d");

        context.drawImage(image_boot, 0, 0);
        resolve(true);
      } else {
        resolve(false);
      }
    };
  });
};

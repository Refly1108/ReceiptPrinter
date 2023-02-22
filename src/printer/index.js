export const printerReceipt = async (data, ip) => {
  console.log(data);
  const port = 8043;
  let error = 0;
  const result = await getPrinter(ip ? ip : "0.0.0.0", port);
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
            if (retcode == "ok") {
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

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  printer.addTextAlign(printer.ALIGN_LEFT);
  printer.addTextAlign(printer.ALIGN_LEFT);
  printer.addTextLineSpace(35);
  printer.addTextFont(printer.FONT_D);
  if (context) {
    printer.addImage(
      context,
      10,
      10,
      219,
      81,
      printer.COLOR_1,
      printer.MODE_MONO
    );
  }
  printer.addText(data);

  printer.addFeed(1);
  printer.addCut(printer.CUT_FEED);
  printer.send();
};

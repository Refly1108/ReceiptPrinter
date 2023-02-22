const config = {
  url: {
    save: "http://localhost:8080/setWish",
    getlist: "http://localhost:8080/getWish",
  },

  pages: {
    home: "home",
    printList: "printList",
    input: "input",
    welcome: "welcome",
    success: "success",
    failed: "failed",
  },

  xpyun: {
    apis: {
      getPrinter: {
        url: "/api/openapi/ddPrinters",
        method: "POST",
      },
      printRecept: {
        url: "/api/openapi/xprinter/print",
        method: "POST",
      },
      getSN: {
        url: "/api/openapi/xprinter/queryOrderStatis",
        method: "POST",
      },
    },
  },
};

export default config;

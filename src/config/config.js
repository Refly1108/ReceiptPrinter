const config = {
  url: {
    save: "http://localhost:8080/setWish",
    getlist: "http://localhost:8080/getWish",
    getSN: "http://localhost:3001/sn",
  },

  wxurl: {
    // access_token: "https://api.weixin.qq.com/sns/oauth2/access_token?",
    access_token: "/test/sns/oauth2/access_token?",
    re_access_token: "/test/sns/oauth2/refresh_token?",
    userinfo: "/test/sns/userinfo?",
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
        url: "/openapi/ddPrinters",
        method: "POST",
      },
      printRecept: {
        url: "/api/openapi/xprinter/print",
        method: "POST",
      },
      getSN: {
        url: "/openapi/xprinter/queryOrderStatis",
        method: "POST",
      },
    },
  },
};

export default config;

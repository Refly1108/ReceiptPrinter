const config = {
  url: {
    save: "http://39.108.114.45:3001/saveprdata/",
    getlist: "http://39.108.114.45:3001/getlist",
    getSN: "http://localhost:3001/sn",
    getuserinfo: "http://39.108.114.45:3001/gettoken/",
  },
  networkprinter: "network",
  wxurl: {
    // access_token: "https://api.weixin.qq.com/sns/oauth2/access_token?",
    access_token: "/test/sns/oauth2/access_token?",
    re_access_token: "/test/sns/oauth2/refresh_token?",
    userinfo: "/test/sns/userinfo?",
  },

  wxurl: {
    // access_token: "https://api.weixin.qq.com/sns/oauth2/access_token?",
    access_token: "/test/sns/oauth2/access_token?",
    re_access_token: "/test/sns/oauth2/refresh_token?",
    userinfo: "/test/sns/userinfo?",
  },

  epson: { ip: "192.168.8.101" },
  lineNum: 50,
  pics: {
    headers: { width: 597, height: 532 },
    boot: { width: 598, height: 578 },
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
        //https://open.xpyun.net/api/openapi/xprinter/addPrinters
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

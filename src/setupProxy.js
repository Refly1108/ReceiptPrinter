const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://open.xpyun.net",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/test", {
      target: "https://api.weixin.qq.com",
      changeOrigin: true,
      pathRewrite: { "^/test": "" },
    })
  );
};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://open.xpyun.net",
      changeOrigin: true,
    })
  );
};

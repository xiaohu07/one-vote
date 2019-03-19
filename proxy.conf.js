const PROXY_CONFIG = {
  "/api/*": {
    "target": "http://localhost:8085",
    "secure": false,
    "pathRewrite": {
      "^/api": ""
    },
    "logLevel": "debug"
  }
};

module.exports = PROXY_CONFIG;

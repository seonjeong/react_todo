"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _reload = _interopRequireDefault(require("reload"));

var _route = _interopRequireDefault(require("./routes/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var app = (0, _express["default"])();
var port = 3000;
app.use('/', _route["default"]);

var server = _http["default"].createServer(app);

(0, _reload["default"])(app).then(function (reloadReturned) {
  console.log('reload');
  server.listen(port, function () {
    console.log('Express listening on port', port);
  });
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "C:\\Users\\me\\code\\react\\react_todo\\server\\main.js");
  reactHotLoader.register(port, "port", "C:\\Users\\me\\code\\react\\react_todo\\server\\main.js");
  reactHotLoader.register(server, "server", "C:\\Users\\me\\code\\react\\react_todo\\server\\main.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.status(200);
  res.send('posts!!!');
  res.end();
});
router.get('/ajax/list', function (req, res) {
  var body = [{
    "img": 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
    "title": '책 제목0',
    "subtitle": '책 부제목0',
    "star": "5"
  }, {
    "img": 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
    "title": '책 제목1',
    "subtitle": '책 부제목',
    "star": "5"
  }, {
    "img": 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
    "title": '책 제목2',
    "subtitle": '책 부제목',
    "star": "5"
  }];
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200);
  res.send(body);
  res.end();
});
router.get('/ajax/detail', function (req, res) {
  var body = {
    'img': 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
    'title': '책 제목0',
    'subtitle': '책 부제목0',
    'star': '5',
    'author': '지은이',
    'company': '출판사',
    'year': '2016',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
    'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
  };
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200);
  console.log('detail', res);
  res.send(body);
  res.end();
});
var _default = router;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, "router", "C:\\Users\\me\\code\\react\\react_todo\\server\\routes\\route.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\me\\code\\react\\react_todo\\server\\routes\\route.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
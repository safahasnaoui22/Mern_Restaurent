"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config({
  path: './config/config.env'
});

app.use((0, _cors["default"])({
  origin: [process.env.FRONT_URL],
  methods: ["POST"],
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.dev.js.map

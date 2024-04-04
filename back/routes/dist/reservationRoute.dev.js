"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _resarvationController = require("../controllers/resarvation-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/send', _resarvationController.sendResarvation);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=reservationRoute.dev.js.map

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resarvation = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reservationSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "first name must contain at least 3 characters !"],
    maxLength: [30, "First name cannot be more than 30 char "]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "lastName must contain at least 3 characters !"],
    maxLength: [30, "lastName cannot be more than 30 char "]
  },
  email: {
    type: String,
    required: true,
    validate: [_validator["default"].isEmail, "Provide a valid email"]
  },
  phone: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

var Resarvation = _mongoose["default"].model("Resarvation", reservationSchema);

exports.Resarvation = Resarvation;
//# sourceMappingURL=resarvationasachema.dev.js.map

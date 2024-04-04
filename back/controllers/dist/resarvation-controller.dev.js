"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendResarvation = void 0;

var _error = _interopRequireDefault(require("../error/error.js"));

var _resarvationasachema = require("../models/resarvationasachema.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sendResarvation = function sendResarvation(req, res, next) {
  var _req$body, firstName, lastName, email, phone, date, time, validationErrors;

  return regeneratorRuntime.async(function sendResarvation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, phone = _req$body.phone, date = _req$body.date, time = _req$body.time;

          if (!(!firstName || !lastName || !email || !phone || !date || !time)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next(new _error["default"]("Please fill out all reservation details", 400)));

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_resarvationasachema.Resarvation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            time: time
          }));

        case 6:
          res.status(200).json({
            success: true,
            message: "Reservation sent successfully"
          });
          _context.next = 17;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);

          if (!(_context.t0.name === "ValidationError")) {
            _context.next = 16;
            break;
          }

          validationErrors = Object.values(_context.t0.errors).map(function (err) {
            return err.message;
          });
          return _context.abrupt("return", next(new _error["default"](validationErrors.join(', '), 400)));

        case 16:
          return _context.abrupt("return", next(new _error["default"](_context.t0.message, 500)));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
};

exports.sendResarvation = sendResarvation;
//# sourceMappingURL=resarvation-controller.dev.js.map

"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _error = _interopRequireDefault(require("./error/error.js"));

var _reservationRoute = _interopRequireDefault(require("./routes/reservationRoute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.get('/', function (req, res) {
  res.send('Hello, welcome to the Nova API!');
});
app.use('/api/reservtion', _reservationRoute["default"]);

_mongoose["default"].connect('mongodb+srv://nova:nova@cluster0.haxquto.mongodb.net/').then(function () {
  return console.log('Connected to MongoDB');
})["catch"](function (error) {
  return console.log('Failed to connect to MongoDB:', error);
});

app.use(_error["default"]);
{
  /** app.use((err, req, res, next) => {
     err.statusCode = err.statusCode || 500;
     err.status = err.status || 'error';
  
     res.status(err.statusCode).json({
         status: err.status,
         message: err.message,
     });
  }); */
}
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Nova Running on port ".concat(PORT));
});
//# sourceMappingURL=index.dev.js.map

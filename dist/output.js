(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _routersRouter = require('./routers/router');

var _routersRouter2 = _interopRequireDefault(_routersRouter);

var Butterfly = function Butterfly() {
    _classCallCheck(this, Butterfly);

    new _routersRouter2['default']();
    Backbone.history.start();
};

$(function () {
    new Butterfly();
});

},{"./routers/router":3}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routersRouter = require('./routers/router');

var _routersRouter2 = _interopRequireDefault(_routersRouter);

require('./butterfly');

},{"./butterfly":1,"./routers/router":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = (function (_Backbone$Router) {
  _inherits(Router, _Backbone$Router);

  function Router(options) {
    _classCallCheck(this, Router);

    _get(Object.getPrototypeOf(Router.prototype), "constructor", this).call(this);
    // this.$rootEl = options.$rootEl;
    this.routes = { "": "testMain" };
    this._bindRoutes();
  }

  _createClass(Router, [{
    key: "testMain",
    value: function testMain() {
      alert('router works?');
    }
  }]);

  return Router;
})(Backbone.Router);

exports["default"] = Router;
module.exports = exports["default"];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21haW4uanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvcm91dGVycy9yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDQW1CLGtCQUFrQjs7OztJQUUvQixTQUFTLEdBRUMsU0FGVixTQUFTLEdBRUk7MEJBRmIsU0FBUzs7QUFHVCxvQ0FBWSxDQUFDO0FBQ2IsWUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7QUFJTCxDQUFDLENBQUMsWUFBTTtBQUNKLFFBQUksU0FBUyxFQUFFLENBQUM7Q0FDbkIsQ0FBQyxDQUFDOzs7Ozs7OzZCQ2JnQixrQkFBa0I7Ozs7UUFDOUIsYUFBYTs7O0FDRHBCLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFUCxNQUFNO1lBQU4sTUFBTTs7QUFFSSxXQUZWLE1BQU0sQ0FFSyxPQUFPLEVBQUU7MEJBRnBCLE1BQU07O0FBR04sK0JBSEEsTUFBTSw2Q0FHRTs7QUFFUixRQUFJLENBQUMsTUFBTSxHQUFHLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtHQUVuQjs7ZUFSQyxNQUFNOztXQVdDLG9CQUFHO0FBQ1YsV0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0tBRXZCOzs7U0FkQyxNQUFNO0dBQVMsUUFBUSxDQUFDLE1BQU07O3FCQW1CckIsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuXG5jbGFzcyBCdXR0ZXJmbHkge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgbmV3IFJvdXRlcigpO1xuICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuICAgIH1cblxufVxuXG4kKCgpID0+IHtcbiAgICBuZXcgQnV0dGVyZmx5KCk7XG59KTtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICAgIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgICAgdGhpcy5yb3V0ZXMgPSB7XCJcIjogXCJ0ZXN0TWFpblwifTtcbiAgICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gICAgfVxuXG5cbiAgICB0ZXN0TWFpbiAoKSB7XG4gICAgICBhbGVydCgncm91dGVyIHdvcmtzPycpXG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iXX0=

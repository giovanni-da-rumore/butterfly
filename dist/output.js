(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _routersRouter = require('./routers/router');

var _routersRouter2 = _interopRequireDefault(_routersRouter);

var _modelsUser = require('./models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var _collectionsUsers = require('./collections/users');

var _collectionsUsers2 = _interopRequireDefault(_collectionsUsers);

var Butterfly = (function () {
    function Butterfly() {
        _classCallCheck(this, Butterfly);

        Backbone.$.ajaxSetup({
            headers: { 'Authorization': 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40' }
        });
        window.Butterfly = {};
        window.Butterfly.currentUser = new _modelsUser2['default']();
        window.Butterfly.currentUser.fetch();
        new _routersRouter2['default']({
            $rootEl: $('#main'),
            $navBar: $('#nav')
        });
        Backbone.history.start();

        var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
        $.ajax({
            type: "GET",
            dataType: 'json',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
            },
            url: url,
            success: this.syncInfo
        });
    }

    _createClass(Butterfly, [{
        key: 'syncInfo',
        value: function syncInfo(data) {
            window.Butterfly.Users = new _collectionsUsers2['default']();
            window.Butterfly.Users.set(data.users);

            //Butterfly.currentUser = new User(data);
            //debugger;
        }
    }, {
        key: 'test',
        value: function test() {}
    }]);

    return Butterfly;
})();

$(function () {
    window.Butterfly = new Butterfly();
});

},{"./collections/users":2,"./models/user":4,"./routers/router":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = (function (_Backbone$Model) {
  _inherits(Users, _Backbone$Model);

  function Users() {
    _classCallCheck(this, Users);

    _get(Object.getPrototypeOf(Users.prototype), 'constructor', this).call(this);
    this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
  }

  return Users;
})(Backbone.Model);

exports['default'] = Users;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

require('./butterfly');

},{"./butterfly":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (function (_Backbone$Model) {
  _inherits(User, _Backbone$Model);

  function User() {
    _classCallCheck(this, User);

    _get(Object.getPrototypeOf(User.prototype), 'constructor', this).call(this);
    this.urlRoot = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
  }

  _createClass(User, [{
    key: 'initialize',
    value: function initialize(options) {}
  }]);

  return User;
})(Backbone.Model);

exports['default'] = User;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _modelsUser = require('../models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var _viewsUser_show = require('../views/user_show');

var _viewsUser_show2 = _interopRequireDefault(_viewsUser_show);

var _viewsNav_bar = require('../views/nav_bar');

var _viewsNav_bar2 = _interopRequireDefault(_viewsNav_bar);

var Router = (function (_Backbone$Router) {
  _inherits(Router, _Backbone$Router);

  function Router(options) {
    _classCallCheck(this, Router);

    _get(Object.getPrototypeOf(Router.prototype), 'constructor', this).call(this);
    this.$rootEl = options.$rootEl;
    this.$navBar = options.$navBar;
    this.routes = { "": "homePage",
      "profile": "homePage",
      "groups": "groups",
      "users": "users" };
    this._bindRoutes();
  }

  _createClass(Router, [{
    key: 'homePage',
    value: function homePage() {
      var user = window.Butterfly.currentUser;
      var view = new _viewsUser_show2['default']({ model: user });
      this.swapViews("view", "profile");
    }
  }, {
    key: 'users',
    value: function users() {
      this.swapViews('view', 'users');
    }
  }, {
    key: 'groups',
    value: function groups() {
      this.swapViews('view', 'groups');
    }
  }, {
    key: 'swapViews',
    value: function swapViews(view, page) {

      this._nav = new _viewsNav_bar2['default']({ page: page });
      this.$navBar.html(this._nav.render().$el);
      // this._currentView && this._currentView.remove();
      // this._currentView = view;
      // this.$rootEl.html(view.render().$el);
    }
  }]);

  return Router;
})(Backbone.Router);

;

exports['default'] = Router;
module.exports = exports['default'];

},{"../models/user":4,"../views/nav_bar":6,"../views/user_show":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = (function (_Backbone$View) {
  _inherits(NavBar, _Backbone$View);

  function NavBar(options) {
    _classCallCheck(this, NavBar);

    _get(Object.getPrototypeOf(NavBar.prototype), "constructor", this).call(this);
    this.page = options.page;
    this.template = _.template($("#nav-template").html());

    this.events = {
      "click ul": "changePage"
    };
  }

  _createClass(NavBar, [{
    key: "initialize",
    value: function initialize() {
      // this.clickEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var id = "#navbar-" + this.page;
      this.$el.html(this.template());
      this.$el.find('li').removeClass('active');
      this.$el.find(id).addClass('active');
      this.clickEvents();
      return this;
    }
  }, {
    key: "changePage",
    value: function changePage(event) {
      var $newPage = $(event.currentTarget);
      var url = $newPage.attr('id').split("-")[1];
      Backbone.history.navigate('#/' + url, { trigger: true });
    }
  }, {
    key: "clickEvents",
    value: function clickEvents() {
      this.$el.on('click', 'li', this.changePage);
    }
  }]);

  return NavBar;
})(Backbone.View);

exports["default"] = NavBar;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserShow = (function (_Backbone$View) {
  _inherits(UserShow, _Backbone$View);

  function UserShow(options) {
    _classCallCheck(this, UserShow);

    _get(Object.getPrototypeOf(UserShow.prototype), "constructor", this).call(this);
    this.model = options.model;
    this.template = _.template($("#user-show-template").html());
  }

  return UserShow;
})(Backbone.View);

exports["default"] = UserShow;
module.exports = exports["default"];

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL3VzZXJzLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21haW4uanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvbmF2X2Jhci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy91c2VyX3Nob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs2QkNBbUIsa0JBQWtCOzs7OzBCQUNwQixlQUFlOzs7O2dDQUNkLHFCQUFxQjs7OztJQUVqQyxTQUFTO0FBRUMsYUFGVixTQUFTLEdBRUk7OEJBRmIsU0FBUzs7QUFHVCxnQkFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsbUJBQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSw2Q0FBNkMsRUFBQztTQUM1RSxDQUFDLENBQUM7QUFDSCxjQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN0QixjQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyw2QkFBVSxDQUFDO0FBQzFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFD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LFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FFVSxvQkFBQyxLQUFLLEVBQUU7QUFDakIsVUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0QyxVQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxjQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7S0FFdkQ7OztXQUVXLHVCQUFHO0FBQ2IsVUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0M7OztTQXBDRyxNQUFNO0dBQVMsUUFBUSxDQUFDLElBQUk7O3FCQTJDbkIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztJQzNDZixRQUFRO1lBQVIsUUFBUTs7QUFHQSxXQUhSLFFBQVEsQ0FHQyxPQUFPLEVBQUU7MEJBSGxCLFFBQVE7O0FBSVYsK0JBSkUsUUFBUSw2Q0FJRjtBQUNSLFFBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUM3RDs7U0FQRyxRQUFRO0dBQVMsUUFBUSxDQUFDLElBQUk7O3FCQWNyQixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIEJhY2tib25lLiQuYWpheFNldHVwKHtcbiAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSB7fTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkuY3VycmVudFVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgd2luZG93LkJ1dHRlcmZseS5jdXJyZW50VXNlci5mZXRjaCgpO1xuICAgICAgbmV3IFJvdXRlcih7XG4gICAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAgICRuYXZCYXI6ICQoJyNuYXYnKVxuICAgICAgfSk7XG4gICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblxuICAgICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3luY0luZm9cbiAgICB9KTtcbiAgICB9XG5cbiAgICBzeW5jSW5mbyAoZGF0YSkge1xuICAgICAgd2luZG93LkJ1dHRlcmZseS5Vc2VycyA9IG5ldyBVc2VycygpO1xuICAgICAgd2luZG93LkJ1dHRlcmZseS5Vc2Vycy5zZXQoZGF0YS51c2Vycyk7XG5cblxuXG4gICAgICAvL0J1dHRlcmZseS5jdXJyZW50VXNlciA9IG5ldyBVc2VyKGRhdGEpO1xuICAgICAgLy9kZWJ1Z2dlcjtcbiAgICB9XG5cbiAgICB0ZXN0ICgpIHtcbiAgICB9XG5cbn1cblxuJCgoKSA9PiB7XG4gICAgd2luZG93LkJ1dHRlcmZseSA9IG5ldyBCdXR0ZXJmbHkoKTtcbn0pO1xuIiwiY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiXG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmxSb290ID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgICB9XG5cbiAgICBpbml0aWFsaXplIChvcHRpb25zKSB7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tICcuLi92aWV3cy91c2VyX3Nob3cnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi92aWV3cy9uYXZfYmFyJztcblxuXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBCYWNrYm9uZS5Sb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiRyb290RWwgPSBvcHRpb25zLiRyb290RWw7XG4gICAgdGhpcy4kbmF2QmFyID0gb3B0aW9ucy4kbmF2QmFyO1xuICAgIHRoaXMucm91dGVzID0ge1wiXCI6IFwiaG9tZVBhZ2VcIixcbiAgICAgIFwicHJvZmlsZVwiOiBcImhvbWVQYWdlXCIsXG4gICAgICBcImdyb3Vwc1wiOiAgXCJncm91cHNcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCJ9O1xuICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gIH1cblxuICBob21lUGFnZSAoKSB7XG4gICAgbGV0IHVzZXIgPSB3aW5kb3cuQnV0dGVyZmx5LmN1cnJlbnRVc2VyO1xuICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlcn0pO1xuICAgIHRoaXMuc3dhcFZpZXdzKFwidmlld1wiLCBcInByb2ZpbGVcIik7XG4gIH1cblxuICB1c2VycyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJ3ZpZXcnLCAndXNlcnMnKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJ3ZpZXcnLCAnZ3JvdXBzJylcblxuICB9XG5cblxuICBzd2FwVmlld3MgKHZpZXcsIHBhZ2UpIHtcblxuICAgIHRoaXMuX25hdiA9IG5ldyBOYXZCYXIoe3BhZ2U6IHBhZ2V9KTtcbiAgICB0aGlzLiRuYXZCYXIuaHRtbCh0aGlzLl9uYXYucmVuZGVyKCkuJGVsKTtcbiAgICAvLyB0aGlzLl9jdXJyZW50VmlldyAmJiB0aGlzLl9jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICAvLyB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgLy8gdGhpcy4kcm9vdEVsLmh0bWwodmlldy5yZW5kZXIoKS4kZWwpO1xuICB9XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiY2xhc3MgTmF2QmFyIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjbmF2LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIFwiY2xpY2sgdWxcIjogXCJjaGFuZ2VQYWdlXCIsXG4gICAgICAgIH07XG4gIH1cblxuICBpbml0aWFsaXplICgpIHtcbiAgICAvLyB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGlkID0gXCIjbmF2YmFyLVwiICsgdGhpcy5wYWdlO1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLiRlbC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLiRlbC5maW5kKGlkKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy5jbGlja0V2ZW50cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlUGFnZSAoZXZlbnQpIHtcbiAgICBsZXQgJG5ld1BhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCB1cmwgPSAkbmV3UGFnZS5hdHRyKCdpZCcpLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjLycgKyB1cmwsIHt0cmlnZ2VyOiB0cnVlfSlcblxuICB9XG5cbiAgY2xpY2tFdmVudHMgKCkge1xuICAgIHRoaXMuJGVsLm9uKCdjbGljaycsICdsaScsIHRoaXMuY2hhbmdlUGFnZSk7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJjbGFzcyBVc2VyU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1zaG93LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2hvdztcbiJdfQ==

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
      "profile": "profile",
      "groups": "groups",
      "users": "users" };
    this._bindRoutes();
  }

  _createClass(Router, [{
    key: 'homePage',
    value: function homePage() {
      // this.user = window.Butterfly.currentUser;
      var user = new _modelsUser2['default']();
      user.fetch();
      var view = new _viewsUser_show2['default']({ model: user });
      this.swapViews(view, "profile");
    }
  }, {
    key: 'profile',
    value: function profile() {
      var user = new _modelsUser2['default']();
      user.fetch();
      var view = new _viewsUser_show2['default']({ model: user });
      this.swapViews(view, "profile");
    }
  }, {
    key: 'users',
    value: function users() {
      this.swapViews($("<div></div>"), 'users');
    }
  }, {
    key: 'groups',
    value: function groups() {
      this.swapViews($("<div></div>"), 'groups');
    }
  }, {
    key: 'swapViews',
    value: function swapViews(view, page) {
      this._nav = new _viewsNav_bar2['default']({ page: page });
      this.$navBar.html(this._nav.render().$el);
      this._currentView && this._currentView.remove();
      this._currentView = view;
      this.$rootEl.html(view.render().$el);
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserShow, [{
    key: "render",
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      return this;
    }
  }]);

  return UserShow;
})(Backbone.View);

exports["default"] = UserShow;
module.exports = exports["default"];

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL3VzZXJzLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21haW4uanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvbmF2X2Jhci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy91c2VyX3Nob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs2QkNBbUIsa0JBQWtCOzs7OzBCQUNwQixlQUFlOzs7O2dDQUNkLHFCQUFxQjs7OztJQUVqQyxTQUFTO0FBRUMsYUFGVixTQUFTLEdBRUk7OEJBRmIsU0FBUzs7QUFHVCxnQkFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsbUJBQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSw2Q0FBNkMsRUFBQztTQUM1RSxDQUFDLENBQUM7QUFDSCxjQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN0QixjQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyw2QkFBVSxDQUFDO0FBQzFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFD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Ozs7Ozs7Ozs7Ozs7SUMzQ2YsUUFBUTtZQUFSLFFBQVE7O0FBR0EsV0FIUixRQUFRLENBR0MsT0FBTyxFQUFFOzBCQUhsQixRQUFROztBQUlWLCtCQUpFLFFBQVEsNkNBSUY7QUFDUixRQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDM0IsUUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUQsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7R0FDL0M7O2VBUkcsUUFBUTs7V0FVTCxrQkFBRztBQUNSLFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxhQUFPLElBQUksQ0FBQztLQUViOzs7U0FkRyxRQUFRO0dBQVMsUUFBUSxDQUFDLElBQUk7O3FCQXFCckIsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5cbmNsYXNzIEJ1dHRlcmZseSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJyA6J0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuQnV0dGVyZmx5ID0ge307XG4gICAgICB3aW5kb3cuQnV0dGVyZmx5LmN1cnJlbnRVc2VyID0gbmV3IFVzZXIoKTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkuY3VycmVudFVzZXIuZmV0Y2goKTtcbiAgICAgIG5ldyBSb3V0ZXIoe1xuICAgICAgICAkcm9vdEVsOiAkKCcjbWFpbicpLFxuICAgICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICAgIH0pO1xuICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN5bmNJbmZvXG4gICAgfSk7XG4gICAgfVxuXG4gICAgc3luY0luZm8gKGRhdGEpIHtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkuVXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkuVXNlcnMuc2V0KGRhdGEudXNlcnMpO1xuXG5cblxuICAgICAgLy9CdXR0ZXJmbHkuY3VycmVudFVzZXIgPSBuZXcgVXNlcihkYXRhKTtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgfVxuXG4gICAgdGVzdCAoKSB7XG4gICAgfVxuXG59XG5cbiQoKCkgPT4ge1xuICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSBuZXcgQnV0dGVyZmx5KCk7XG59KTtcbiIsImNsYXNzIFVzZXJzIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiIsIlxuaW1wb3J0ICcuL2J1dHRlcmZseSc7XG4iLCJjbGFzcyBVc2VyIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsUm9vdCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSAob3B0aW9ucykge1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcImhvbWVQYWdlXCIsXG4gICAgICBcInByb2ZpbGVcIjogXCJwcm9maWxlXCIsXG4gICAgICBcImdyb3Vwc1wiOiAgXCJncm91cHNcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCJ9O1xuICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gIH1cblxuICBob21lUGFnZSAoKSB7XG4gICAgLy8gdGhpcy51c2VyID0gd2luZG93LkJ1dHRlcmZseS5jdXJyZW50VXNlcjtcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdXNlci5mZXRjaCgpO1xuICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlcn0pO1xuICAgIHRoaXMuc3dhcFZpZXdzKHZpZXcsIFwicHJvZmlsZVwiKTtcbiAgfVxuXG4gIHByb2ZpbGUgKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICB1c2VyLmZldGNoKCk7XG4gICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyfSk7XG4gICAgdGhpcy5zd2FwVmlld3ModmlldywgXCJwcm9maWxlXCIpO1xuICB9XG5cblxuICB1c2VycyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJChcIjxkaXY+PC9kaXY+XCIpLCAndXNlcnMnKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJChcIjxkaXY+PC9kaXY+XCIpLCAnZ3JvdXBzJyk7XG5cbiAgfVxuXG5cbiAgc3dhcFZpZXdzICh2aWV3LCBwYWdlKSB7XG4gICAgdGhpcy5fbmF2ID0gbmV3IE5hdkJhcih7cGFnZTogcGFnZX0pO1xuICAgIHRoaXMuJG5hdkJhci5odG1sKHRoaXMuX25hdi5yZW5kZXIoKS4kZWwpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ICYmIHRoaXMuX2N1cnJlbnRWaWV3LnJlbW92ZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICB0aGlzLiRyb290RWwuaHRtbCh2aWV3LnJlbmRlcigpLiRlbCk7XG4gIH1cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcblxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgXCJjbGljayB1bFwiOiBcImNoYW5nZVBhZ2VcIixcbiAgICAgICAgfTtcbiAgfVxuXG4gIGluaXRpYWxpemUgKCkge1xuICAgIC8vIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgaWQgPSBcIiNuYXZiYXItXCIgKyB0aGlzLnBhZ2U7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuJGVsLmZpbmQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VQYWdlIChldmVudCkge1xuICAgIGxldCAkbmV3UGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IHVybCA9ICRuZXdQYWdlLmF0dHIoJ2lkJykuc3BsaXQoXCItXCIpWzFdO1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvJyArIHVybCwge3RyaWdnZXI6IHRydWV9KVxuXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXNob3ctdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNob3c7XG4iXX0=

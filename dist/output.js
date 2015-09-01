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
            var users = new _collectionsUsers2['default']();
            // let user = new Backbone.Model(data.users[1]);
            var user1 = new _modelsUser2['default'](data.users[1]);
            users.add(data.users);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _modelsUser = require('../models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var Users = (function (_Backbone$Collection) {
  _inherits(Users, _Backbone$Collection);

  function Users() {
    _classCallCheck(this, Users);

    _get(Object.getPrototypeOf(Users.prototype), 'constructor', this).call(this);
    this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    this.model = _modelsUser2['default'];
  }

  return Users;
})(Backbone.Collection);

exports['default'] = Users;
module.exports = exports['default'];

},{"../models/user":4}],3:[function(require,module,exports){
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

    _get(Object.getPrototypeOf(User.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(User, [{
    key: 'urlRoot',

    // Can't use constructor here as it overwrites some assignment by parameters property
    // constructor () {
    //   super();
    //   this.urlRoot = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
    //  
    // }

    value: function urlRoot() {
      return 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
    }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL3VzZXJzLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21haW4uanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvbmF2X2Jhci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy91c2VyX3Nob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs2QkNBbUIsa0JBQWtCOzs7OzBCQUNwQixlQUFlOzs7O2dDQUNkLHFCQUFxQjs7OztJQUVqQyxTQUFTO0FBRUMsYUFGVixTQUFTLEdBRUk7OEJBRmIsU0FBUzs7QUFHVCxnQkFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsbUJBQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSw2Q0FBNkMsRUFBQztTQUM1RSxDQUFDLENBQUM7QUFDSCxjQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN0QixjQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyw2QkFBVSxDQUFDO0FBQzFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFD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TUFBTTtHQUFTLFFBQVEsQ0FBQyxJQUFJOztxQkEyQ25CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNDZixRQUFRO1lBQVIsUUFBUTs7QUFHQSxXQUhSLFFBQVEsQ0FHQyxPQUFPLEVBQUU7MEJBSGxCLFFBQVE7O0FBSVYsK0JBSkUsUUFBUSw2Q0FJRjtBQUNSLFFBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM1RCxRQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtHQUMvQzs7ZUFSRyxRQUFROztXQVVMLGtCQUFHO0FBQ1IsVUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELGFBQU8sSUFBSSxDQUFDO0tBRWI7OztTQWRHLFFBQVE7R0FBUyxRQUFRLENBQUMsSUFBSTs7cUJBcUJyQixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIEJhY2tib25lLiQuYWpheFNldHVwKHtcbiAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSB7fTtcbiAgICAgIHdpbmRvdy5CdXR0ZXJmbHkuY3VycmVudFVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgd2luZG93LkJ1dHRlcmZseS5jdXJyZW50VXNlci5mZXRjaCgpO1xuICAgICAgbmV3IFJvdXRlcih7XG4gICAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAgICRuYXZCYXI6ICQoJyNuYXYnKVxuICAgICAgfSk7XG4gICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblxuICAgICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3luY0luZm9cbiAgICB9KTtcbiAgICB9XG5cbiAgICBzeW5jSW5mbyAoZGF0YSkge1xuICAgICAgbGV0IHVzZXJzID0gbmV3IFVzZXJzKCk7XG4gICAgICAvLyBsZXQgdXNlciA9IG5ldyBCYWNrYm9uZS5Nb2RlbChkYXRhLnVzZXJzWzFdKTtcbiAgICAgIGxldCB1c2VyMSA9IG5ldyBVc2VyKGRhdGEudXNlcnNbMV0pO1xuICAgICAgdXNlcnMuYWRkKGRhdGEudXNlcnMpO1xuXG5cblxuICAgICAgLy9CdXR0ZXJmbHkuY3VycmVudFVzZXIgPSBuZXcgVXNlcihkYXRhKTtcbiAgICAgIC8vZGVidWdnZXI7XG4gICAgfVxuXG4gICAgdGVzdCAoKSB7XG4gICAgfVxuXG59XG5cbiQoKCkgPT4ge1xuICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSBuZXcgQnV0dGVyZmx5KCk7XG59KTtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiXG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgLy8gQ2FuJ3QgdXNlIGNvbnN0cnVjdG9yIGhlcmUgYXMgaXQgb3ZlcndyaXRlcyBzb21lIGFzc2lnbm1lbnQgYnkgcGFyYW1ldGVycyBwcm9wZXJ0eVxuICAgIC8vIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyAgIHN1cGVyKCk7XG4gICAgLy8gICB0aGlzLnVybFJvb3QgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgIC8vICAgXG4gICAgLy8gfVxuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcImhvbWVQYWdlXCIsXG4gICAgICBcInByb2ZpbGVcIjogXCJwcm9maWxlXCIsXG4gICAgICBcImdyb3Vwc1wiOiAgXCJncm91cHNcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCJ9O1xuICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gIH1cblxuICBob21lUGFnZSAoKSB7XG4gICAgLy8gdGhpcy51c2VyID0gd2luZG93LkJ1dHRlcmZseS5jdXJyZW50VXNlcjtcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdXNlci5mZXRjaCgpO1xuICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlcn0pO1xuICAgIHRoaXMuc3dhcFZpZXdzKHZpZXcsIFwicHJvZmlsZVwiKTtcbiAgfVxuXG4gIHByb2ZpbGUgKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICB1c2VyLmZldGNoKCk7XG4gICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyfSk7XG4gICAgdGhpcy5zd2FwVmlld3ModmlldywgXCJwcm9maWxlXCIpO1xuICB9XG5cblxuICB1c2VycyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJChcIjxkaXY+PC9kaXY+XCIpLCAndXNlcnMnKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgdGhpcy5zd2FwVmlld3MoJChcIjxkaXY+PC9kaXY+XCIpLCAnZ3JvdXBzJyk7XG5cbiAgfVxuXG5cbiAgc3dhcFZpZXdzICh2aWV3LCBwYWdlKSB7XG4gICAgdGhpcy5fbmF2ID0gbmV3IE5hdkJhcih7cGFnZTogcGFnZX0pO1xuICAgIHRoaXMuJG5hdkJhci5odG1sKHRoaXMuX25hdi5yZW5kZXIoKS4kZWwpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ICYmIHRoaXMuX2N1cnJlbnRWaWV3LnJlbW92ZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICB0aGlzLiRyb290RWwuaHRtbCh2aWV3LnJlbmRlcigpLiRlbCk7XG4gIH1cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcblxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgXCJjbGljayB1bFwiOiBcImNoYW5nZVBhZ2VcIixcbiAgICAgICAgfTtcbiAgfVxuXG4gIGluaXRpYWxpemUgKCkge1xuICAgIC8vIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgaWQgPSBcIiNuYXZiYXItXCIgKyB0aGlzLnBhZ2U7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuJGVsLmZpbmQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VQYWdlIChldmVudCkge1xuICAgIGxldCAkbmV3UGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IHVybCA9ICRuZXdQYWdlLmF0dHIoJ2lkJykuc3BsaXQoXCItXCIpWzFdO1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvJyArIHVybCwge3RyaWdnZXI6IHRydWV9KVxuXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXNob3ctdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNob3c7XG4iXX0=

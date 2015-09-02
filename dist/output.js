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
        }
    }]);

    return Butterfly;
})();

$(function () {
    window.Butterfly = new Butterfly();
});

},{"./collections/users":3,"./models/user":6,"./routers/router":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _modelsGroup = require('../models/group');

var _modelsGroup2 = _interopRequireDefault(_modelsGroup);

var Groups = (function (_Backbone$Collection) {
  _inherits(Groups, _Backbone$Collection);

  function Groups() {
    _classCallCheck(this, Groups);

    _get(Object.getPrototypeOf(Groups.prototype), 'constructor', this).call(this);
    this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    this.model = _modelsGroup2['default'];
  }

  return Groups;
})(Backbone.Collection);

exports['default'] = Groups;
module.exports = exports['default'];

},{"../models/group":5}],3:[function(require,module,exports){
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

},{"../models/user":6}],4:[function(require,module,exports){
'use strict';

require('./butterfly');

},{"./butterfly":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = (function (_Backbone$Model) {
  _inherits(Group, _Backbone$Model);

  function Group() {
    _classCallCheck(this, Group);

    _get(Object.getPrototypeOf(Group.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Group, [{
    key: 'urlRoot',
    value: function urlRoot() {
      return 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    }
  }]);

  return Group;
})(Backbone.Model);

exports['default'] = Group;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

var _utilsSync_helper = require('../utils/sync_helper');

var _utilsSync_helper2 = _interopRequireDefault(_utilsSync_helper);

var Router = (function (_Backbone$Router) {
  _inherits(Router, _Backbone$Router);

  function Router(options) {
    _classCallCheck(this, Router);

    _get(Object.getPrototypeOf(Router.prototype), 'constructor', this).call(this);
    this.$rootEl = options.$rootEl;
    this.$navBar = options.$navBar;
    this.syncHelper = new _utilsSync_helper2['default']();
    this.routes = { "": "profile",
      "profile": "profile",
      "groups": "groups",
      "users": "users" };
    this._bindRoutes();
  }

  // homePage () {
  //   let user = new User();
  //   user.fetch();
  //   let view = new UserShow({model: user});
  //   this.swapViews(view, "profile");
  // }

  _createClass(Router, [{
    key: 'profile',
    value: function profile() {
      var that = this;
      var user = new _modelsUser2['default']();
      user.fetch();
      $.when(that.syncHelper.groups()).done(function (groups) {
        var view = new _viewsUser_show2['default']({ model: user, collection: groups });
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'users',
    value: function users() {
      var mod = new _modelsUser2['default']();
      mod.fetch();
      var that = this;
      $.when(that.syncHelper.groups()).done(function (groups) {
        var view = new _viewsUser_show2['default']({ model: mod, collection: groups });
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'groups',
    value: function groups(_groups) {
      var view = new _viewsUser_show2['default']({ model: mod, collection: _groups });
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

},{"../models/user":6,"../utils/sync_helper":8,"../views/nav_bar":9,"../views/user_show":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _collectionsUsers = require('../collections/users');

var _collectionsUsers2 = _interopRequireDefault(_collectionsUsers);

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var SyncHelper = (function () {
  function SyncHelper() {
    _classCallCheck(this, SyncHelper);
  }

  _createClass(SyncHelper, [{
    key: 'users',
    value: function users() {
      return this.syncData(this.getUsers);
    }
  }, {
    key: 'groups',
    value: function groups() {
      return this.syncData(this.getGroups);
    }
  }, {
    key: 'syncData',
    value: function syncData(callback) {
      console.log('sync called');
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
      return $.ajax({
        type: "GET",
        dataType: 'json',
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        success: callback
      }).done(this.getUsers);
    }
  }, {
    key: 'getUsers',
    value: function getUsers(data) {
      var users = new _collectionsUsers2['default']();
      users.add(data.users);
      return users;
    }
  }, {
    key: 'getGroups',
    value: function getGroups(data) {
      var groups = new _collectionsGroups2['default']();
      groups.add(data.groups);
      return groups;
    }
  }]);

  return SyncHelper;
})();

exports['default'] = SyncHelper;
module.exports = exports['default'];

},{"../collections/groups":2,"../collections/users":3}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsSync_helper = require('../utils/sync_helper');

var _utilsSync_helper2 = _interopRequireDefault(_utilsSync_helper);

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var UserShow = (function (_Backbone$View) {
  _inherits(UserShow, _Backbone$View);

  function UserShow(options) {
    _classCallCheck(this, UserShow);

    _get(Object.getPrototypeOf(UserShow.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.groups = new _collectionsGroups2['default']();
    this.groups.add(options.collection.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      this.model.get('groupIds').forEach((function (groupId) {
        var string = '<li class="profile__group-item"> x ';
        if (this.groupById(groupId)) {
          string += this.groupById(groupId).escape('name') + "</li>";
          this.$el.find('.profile__groups-list').append(string);
        }
      }).bind(this));
      return this;
    }
  }, {
    key: 'groupById',
    value: function groupById(id) {
      var targetGroup = null;
      this.groups.each(function (group) {
        if (group.get('_id') === id) {
          targetGroup = group;
          return group;
        }
      });
      return targetGroup;
    }
  }]);

  return UserShow;
})(Backbone.View);

exports['default'] = UserShow;
module.exports = exports['default'];

},{"../collections/groups":2,"../utils/sync_helper":8}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tYWluLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21vZGVscy9ncm91cC5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tb2RlbHMvdXNlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9yb3V0ZXJzL3JvdXRlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy91dGlscy9zeW5jX2hlbHBlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy9uYXZfYmFyLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL3VzZXJfc2hvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzZCQ0FtQixrQkFBa0I7Ozs7MEJBQ3BCLGVBQWU7Ozs7Z0NBQ2QscUJBQXFCOzs7O0lBRWpDLFNBQVM7QUFFQyxhQUZWLFNBQVMsR0FFSTs4QkFGYixTQUFTOztB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Q0YsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2QsYUFBTyxJQUFJLENBQUM7S0FFYjs7O1dBRVMsbUJBQUMsRUFBRSxFQUFFO0FBQ2IsVUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFBO0FBQ3RCLFVBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFO0FBQ2hDLFlBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUU7QUFDM0IscUJBQVcsR0FBRyxLQUFLLENBQUM7QUFDcEIsaUJBQU8sS0FBSyxDQUFDO1NBQ2Q7T0FDRixDQUFDLENBQUE7QUFDRixhQUFPLFdBQVcsQ0FBQztLQUVwQjs7O1NBcENHLFFBQVE7R0FBUyxRQUFRLENBQUMsSUFBSTs7cUJBMkNyQixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIEJhY2tib25lLiQuYWpheFNldHVwKHtcbiAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgICB9KTtcbiAgICAgIG5ldyBSb3V0ZXIoe1xuICAgICAgICAkcm9vdEVsOiAkKCcjbWFpbicpLFxuICAgICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICAgIH0pO1xuICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN5bmNJbmZvXG4gICAgfSk7XG4gICAgfVxuXG4gICAgc3luY0luZm8gKGRhdGEpIHtcbiAgICAgIGxldCB1c2VycyA9IG5ldyBVc2VycygpO1xuICAgICAgLy8gbGV0IHVzZXIgPSBuZXcgQmFja2JvbmUuTW9kZWwoZGF0YS51c2Vyc1sxXSk7XG4gICAgICBsZXQgdXNlcjEgPSBuZXcgVXNlcihkYXRhLnVzZXJzWzFdKTtcbiAgICAgIHVzZXJzLmFkZChkYXRhLnVzZXJzKTtcblxuICAgIH1cblxuXG59XG5cbiQoKCkgPT4ge1xuICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSBuZXcgQnV0dGVyZmx5KCk7XG59KTtcbiIsImltcG9ydCBHcm91cCBmcm9tICcuLi9tb2RlbHMvZ3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gR3JvdXA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiXG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsImNsYXNzIEdyb3VwIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiY2xhc3MgVXNlciBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAvLyBDYW4ndCB1c2UgY29uc3RydWN0b3IgaGVyZSBhcyBpdCBvdmVyd3JpdGVzIHNvbWUgYXNzaWdubWVudCBieSBwYXJhbWV0ZXJzIHByb3BlcnR5XG4gICAgLy8gY29uc3RydWN0b3IgKCkge1xuICAgIC8vICAgc3VwZXIoKTtcbiAgICAvLyAgIHRoaXMudXJsUm9vdCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgLy8gICBcbiAgICAvLyB9XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tICcuLi92aWV3cy91c2VyX3Nob3cnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi92aWV3cy9uYXZfYmFyJztcbmltcG9ydCBTeW5jSGVscGVyIGZyb20gJy4uL3V0aWxzL3N5bmNfaGVscGVyJztcblxuXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBCYWNrYm9uZS5Sb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiRyb290RWwgPSBvcHRpb25zLiRyb290RWw7XG4gICAgdGhpcy4kbmF2QmFyID0gb3B0aW9ucy4kbmF2QmFyO1xuICAgIHRoaXMuc3luY0hlbHBlciA9IG5ldyBTeW5jSGVscGVyKCk7XG4gICAgdGhpcy5yb3V0ZXMgPSB7XCJcIjogXCJwcm9maWxlXCIsXG4gICAgICBcInByb2ZpbGVcIjogXCJwcm9maWxlXCIsXG4gICAgICBcImdyb3Vwc1wiOiAgXCJncm91cHNcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCJ9O1xuICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gIH1cblxuICAvLyBob21lUGFnZSAoKSB7XG4gIC8vICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAvLyAgIHVzZXIuZmV0Y2goKTtcbiAgLy8gICBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHVzZXJ9KTtcbiAgLy8gICB0aGlzLnN3YXBWaWV3cyh2aWV3LCBcInByb2ZpbGVcIik7XG4gIC8vIH1cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhhdC5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChncm91cHMpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlciwgY29sbGVjdGlvbjogZ3JvdXBzfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKVxuICAgIH0pO1xuICB9XG5cblxuICB1c2VycyAoKSB7XG4gICAgbGV0IG1vZCA9IG5ldyBVc2VyKCk7XG4gICAgbW9kLmZldGNoKCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGF0LnN5bmNIZWxwZXIuZ3JvdXBzKCkpLmRvbmUoZnVuY3Rpb24gKGdyb3Vwcykge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiBtb2QsIGNvbGxlY3Rpb246IGdyb3Vwc30pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJylcbiAgICB9KTtcbiAgfVxuXG4gIGdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiBtb2QsIGNvbGxlY3Rpb246IGdyb3Vwc30pXG4gICAgdGhpcy5zd2FwVmlld3MoJChcIjxkaXY+PC9kaXY+XCIpLCAnZ3JvdXBzJyk7XG5cbiAgfVxuXG5cbiAgc3dhcFZpZXdzICh2aWV3LCBwYWdlKSB7XG4gICAgdGhpcy5fbmF2ID0gbmV3IE5hdkJhcih7cGFnZTogcGFnZX0pO1xuICAgIHRoaXMuJG5hdkJhci5odG1sKHRoaXMuX25hdi5yZW5kZXIoKS4kZWwpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ICYmIHRoaXMuX2N1cnJlbnRWaWV3LnJlbW92ZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICB0aGlzLiRyb290RWwuaHRtbCh2aWV3LnJlbmRlcigpLiRlbCk7XG4gIH1cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBTeW5jSGVscGVyIHtcblxuICB1c2VycyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRVc2Vycyk7XG4gIH1cblxuICBncm91cHMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0R3JvdXBzKTtcbiAgfVxuXG4gIHN5bmNEYXRhIChjYWxsYmFjaykge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jIGNhbGxlZCcpXG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdWNjZXNzOiBjYWxsYmFjayxcbiAgICAgICAgfSkuZG9uZSh0aGlzLmdldFVzZXJzKVxuICB9XG5cbiAgZ2V0VXNlcnMgKGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICB1c2Vycy5hZGQoZGF0YS51c2Vycyk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgZ2V0R3JvdXBzIChkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBncm91cHMuYWRkKGRhdGEuZ3JvdXBzKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY0hlbHBlcjtcbiIsImNsYXNzIE5hdkJhciBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZSA9IG9wdGlvbnMucGFnZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI25hdi10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuXG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgICBcImNsaWNrIHVsXCI6IFwiY2hhbmdlUGFnZVwiLFxuICAgICAgICB9O1xuICB9XG5cbiAgaW5pdGlhbGl6ZSAoKSB7XG4gICAgLy8gdGhpcy5jbGlja0V2ZW50cygpO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBpZCA9IFwiI25hdmJhci1cIiArIHRoaXMucGFnZTtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG4gICAgdGhpcy4kZWwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy4kZWwuZmluZChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoYW5nZVBhZ2UgKGV2ZW50KSB7XG4gICAgbGV0ICRuZXdQYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgdXJsID0gJG5ld1BhZ2UuYXR0cignaWQnKS5zcGxpdChcIi1cIilbMV07XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy8nICsgdXJsLCB7dHJpZ2dlcjogdHJ1ZX0pXG5cbiAgfVxuXG4gIGNsaWNrRXZlbnRzICgpIHtcbiAgICB0aGlzLiRlbC5vbignY2xpY2snLCAnbGknLCB0aGlzLmNoYW5nZVBhZ2UpO1xuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBVc2VyU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb24uZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwSWQpIHtcbiAgICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiPiB4ICc7XG4gICAgICBpZiAodGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCkpIHtcbiAgICAgICAgc3RyaW5nICs9IHRoaXMuZ3JvdXBCeUlkKGdyb3VwSWQpLmVzY2FwZSgnbmFtZScpICsgXCI8L2xpPlwiO1xuICAgICAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZV9fZ3JvdXBzLWxpc3QnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuXG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2hvdztcbiJdfQ==

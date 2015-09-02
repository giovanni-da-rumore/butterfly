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

  _createClass(Router, [{
    key: 'profile',
    value: function profile() {
      var that = this;
      var user = new _modelsUser2['default']();
      user.fetch();
      $.when(that.syncHelper.groups()).done(function (groups) {
        var view = new _viewsUser_show2['default']({ model: user, collection: groups });
        that.swapViews(view, 'profile');
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
      // let view = new UserShow({model: mod, collection: groups})
      // this.swapViews($("<div></div>"), 'groups');

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tYWluLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21vZGVscy9ncm91cC5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tb2RlbHMvdXNlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9yb3V0ZXJzL3JvdXRlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy91dGlscy9zeW5jX2hlbHBlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy9uYXZfYmFyLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL3VzZXJfc2hvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzZCQ0FtQixrQkFBa0I7Ozs7MEJBQ3BCLGVBQWU7Ozs7Z0NBQ2QscUJBQXFCOzs7O0lBRWpDLFNBQVM7QUFFQyxhQUZWLFNBQVMsR0FFSTs4QkFGYixTQUFTOztB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Q0FBQyxVQUFVLEtBQUssRUFBRTtBQUNoQyxZQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQzNCLHFCQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLGlCQUFPLEtBQUssQ0FBQztTQUNkO09BQ0YsQ0FBQyxDQUFBO0FBQ0YsYUFBTyxXQUFXLENBQUM7S0FFcEI7OztTQXBDRyxRQUFRO0dBQVMsUUFBUSxDQUFDLElBQUk7O3FCQTJDckIsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5cbmNsYXNzIEJ1dHRlcmZseSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJyA6J0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnfVxuICAgICAgfSk7XG4gICAgICBuZXcgUm91dGVyKHtcbiAgICAgICAgJHJvb3RFbDogJCgnI21haW4nKSxcbiAgICAgICAgJG5hdkJhcjogJCgnI25hdicpXG4gICAgICB9KTtcbiAgICAgIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcblxuXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5zeW5jSW5mb1xuICAgIH0pO1xuICAgIH1cblxuICAgIHN5bmNJbmZvIChkYXRhKSB7XG4gICAgICBsZXQgdXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICAgIC8vIGxldCB1c2VyID0gbmV3IEJhY2tib25lLk1vZGVsKGRhdGEudXNlcnNbMV0pO1xuICAgICAgbGV0IHVzZXIxID0gbmV3IFVzZXIoZGF0YS51c2Vyc1sxXSk7XG4gICAgICB1c2Vycy5hZGQoZGF0YS51c2Vycyk7XG5cbiAgICB9XG5cblxufVxuXG4kKCgpID0+IHtcbiAgICB3aW5kb3cuQnV0dGVyZmx5ID0gbmV3IEJ1dHRlcmZseSgpO1xufSk7XG4iLCJpbXBvcnQgR3JvdXAgZnJvbSAnLi4vbW9kZWxzL2dyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgdGhpcy5tb2RlbCA9IEdyb3VwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHM7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgdGhpcy5tb2RlbCA9IFVzZXI7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiIsIlxuaW1wb3J0ICcuL2J1dHRlcmZseSc7XG4iLCJjbGFzcyBHcm91cCBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAgIHVybFJvb3QgKCkge1xuICAgICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgLy8gQ2FuJ3QgdXNlIGNvbnN0cnVjdG9yIGhlcmUgYXMgaXQgb3ZlcndyaXRlcyBzb21lIGFzc2lnbm1lbnQgYnkgcGFyYW1ldGVycyBwcm9wZXJ0eVxuICAgIC8vIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyAgIHN1cGVyKCk7XG4gICAgLy8gICB0aGlzLnVybFJvb3QgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgIC8vICAgXG4gICAgLy8gfVxuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5pbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnN5bmNIZWxwZXIgPSBuZXcgU3luY0hlbHBlcigpO1xuICAgIHRoaXMucm91dGVzID0ge1wiXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJwcm9maWxlXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJncm91cHNcIjogIFwiZ3JvdXBzXCIsXG4gICAgICBcInVzZXJzXCI6ICAgXCJ1c2Vyc1wifTtcbiAgICB0aGlzLl9iaW5kUm91dGVzKClcblxuICB9XG5cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhhdC5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChncm91cHMpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlciwgY29sbGVjdGlvbjogZ3JvdXBzfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAncHJvZmlsZScpXG4gICAgfSk7XG4gIH1cblxuXG4gIHVzZXJzICgpIHtcbiAgICBsZXQgbW9kID0gbmV3IFVzZXIoKTtcbiAgICBtb2QuZmV0Y2goKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoYXQuc3luY0hlbHBlci5ncm91cHMoKSkuZG9uZShmdW5jdGlvbiAoZ3JvdXBzKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IG1vZCwgY29sbGVjdGlvbjogZ3JvdXBzfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKVxuICAgIH0pO1xuICB9XG5cbiAgZ3JvdXBzIChncm91cHMpIHtcbiAgICAvLyBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IG1vZCwgY29sbGVjdGlvbjogZ3JvdXBzfSlcbiAgICAvLyB0aGlzLnN3YXBWaWV3cygkKFwiPGRpdj48L2Rpdj5cIiksICdncm91cHMnKTtcblxuICB9XG5cblxuICBzd2FwVmlld3MgKHZpZXcsIHBhZ2UpIHtcbiAgICB0aGlzLl9uYXYgPSBuZXcgTmF2QmFyKHtwYWdlOiBwYWdlfSk7XG4gICAgdGhpcy4kbmF2QmFyLmh0bWwodGhpcy5fbmF2LnJlbmRlcigpLiRlbCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgJiYgdGhpcy5fY3VycmVudFZpZXcucmVtb3ZlKCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB2aWV3O1xuICAgIHRoaXMuJHJvb3RFbC5odG1sKHZpZXcucmVuZGVyKCkuJGVsKTtcbiAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBVc2VycyBmcm9tICcuLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIFN5bmNIZWxwZXIge1xuXG4gIHVzZXJzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldFVzZXJzKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRHcm91cHMpO1xuICB9XG5cbiAgc3luY0RhdGEgKGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coJ3N5bmMgY2FsbGVkJylcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICB9KS5kb25lKHRoaXMuZ2V0VXNlcnMpXG4gIH1cblxuICBnZXRVc2VycyAoZGF0YSkge1xuICAgIGxldCB1c2VycyA9IG5ldyBVc2VycygpO1xuICAgIHVzZXJzLmFkZChkYXRhLnVzZXJzKTtcbiAgICByZXR1cm4gdXNlcnM7XG4gIH1cblxuICBnZXRHcm91cHMgKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIGdyb3Vwcy5hZGQoZGF0YS5ncm91cHMpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTeW5jSGVscGVyO1xuIiwiY2xhc3MgTmF2QmFyIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjbmF2LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIFwiY2xpY2sgdWxcIjogXCJjaGFuZ2VQYWdlXCIsXG4gICAgICAgIH07XG4gIH1cblxuICBpbml0aWFsaXplICgpIHtcbiAgICAvLyB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGlkID0gXCIjbmF2YmFyLVwiICsgdGhpcy5wYWdlO1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLiRlbC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLiRlbC5maW5kKGlkKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy5jbGlja0V2ZW50cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlUGFnZSAoZXZlbnQpIHtcbiAgICBsZXQgJG5ld1BhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCB1cmwgPSAkbmV3UGFnZS5hdHRyKCdpZCcpLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjLycgKyB1cmwsIHt0cmlnZ2VyOiB0cnVlfSlcblxuICB9XG5cbiAgY2xpY2tFdmVudHMgKCkge1xuICAgIHRoaXMuJGVsLm9uKCdjbGljaycsICdsaScsIHRoaXMuY2hhbmdlUGFnZSk7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJpbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbi5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1zaG93LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWx9KSk7XG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCI+IHggJztcbiAgICAgIGlmICh0aGlzLmdyb3VwQnlJZChncm91cElkKSkge1xuICAgICAgICBzdHJpbmcgKz0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCkuZXNjYXBlKCduYW1lJykgKyBcIjwvbGk+XCI7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5wcm9maWxlX19ncm91cHMtbGlzdCcpLmFwcGVuZChzdHJpbmcpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsXG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaG93O1xuIl19

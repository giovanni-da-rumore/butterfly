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

var _viewsNav_bar = require('../views/nav_bar');

var _viewsNav_bar2 = _interopRequireDefault(_viewsNav_bar);

var _utilsSync_helper = require('../utils/sync_helper');

var _utilsSync_helper2 = _interopRequireDefault(_utilsSync_helper);

var _modelsUser = require('../models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var _viewsUser_show = require('../views/user_show');

var _viewsUser_show2 = _interopRequireDefault(_viewsUser_show);

var _viewsUsers_index = require('../views/users_index');

var _viewsUsers_index2 = _interopRequireDefault(_viewsUsers_index);

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
      var that = this;
      $.when(that.syncHelper.syncData()).done(function (data) {
        var view = new _viewsUsers_index2['default']({ collections: data });
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'groups',
    value: function groups(_groups) {}
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

},{"../models/user":6,"../utils/sync_helper":8,"../views/nav_bar":10,"../views/user_show":12,"../views/users_index":13}],8:[function(require,module,exports){
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
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
      return $.ajax({
        type: "GET",
        dataType: 'json',
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        success: callback
      });
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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupItem = (function (_Backbone$View) {
  _inherits(GroupItem, _Backbone$View);

  function GroupItem(options) {
    _classCallCheck(this, GroupItem);

    _get(Object.getPrototypeOf(GroupItem.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(GroupItem, [{
    key: 'render',
    value: function render() {
      var string = '<li class="profile__group-item id="' + this.model.get('id');
      string += '"> <div class="del-x">x</div> ' + this.model.escape('name') + '</li>';
      this.$el.html(string);
      return this;
    }
  }]);

  return GroupItem;
})(Backbone.View);

exports['default'] = GroupItem;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserItem = (function (_Backbone$View) {
  _inherits(UserItem, _Backbone$View);

  function UserItem(options) {
    _classCallCheck(this, UserItem);

    _get(Object.getPrototypeOf(UserItem.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.groups = options.groups;
    this.template = _.template($("#user-item-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserItem, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      this.model.get('groupIds').forEach((function (groupId) {
        var group = this.groupById(groupId);
        if (group) {
          this.$el.find('.user-item__groups__text').append(group.escape('name'));
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

  return UserItem;
})(Backbone.View);

exports['default'] = UserItem;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
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

var _group_item = require('./group_item');

var _group_item2 = _interopRequireDefault(_group_item);

var UserShow = (function (_Backbone$View) {
  _inherits(UserShow, _Backbone$View);

  function UserShow(options) {
    _classCallCheck(this, UserShow);

    _get(Object.getPrototypeOf(UserShow.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.groups = new _collectionsGroups2['default']();
    options.collection && this.groups.add(options.collection.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      this.model.get('groupIds').forEach((function (groupId) {
        var group = this.groupById(groupId);
        if (group) {
          var groupView = new _group_item2['default']({ model: group });
          this.$el.find('.profile__groups-list').append(groupView.render().$el);
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

},{"../collections/groups":2,"../utils/sync_helper":8,"./group_item":9}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var _collectionsUsers = require('../collections/users');

var _collectionsUsers2 = _interopRequireDefault(_collectionsUsers);

var _user_item = require('./user_item');

var _user_item2 = _interopRequireDefault(_user_item);

var UserIndex = (function (_Backbone$View) {
  _inherits(UserIndex, _Backbone$View);

  function UserIndex(options) {
    _classCallCheck(this, UserIndex);

    _get(Object.getPrototypeOf(UserIndex.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.groups = new _collectionsGroups2['default']();
    this.collection = new _collectionsUsers2['default']();
    options.collections && this.collection.add(options.collections.users);
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#users-index-template").html());
  }

  _createClass(UserIndex, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template());
      this.collection.forEach((function (user) {
        var userView = new _user_item2['default']({ model: user, groups: this.groups });
        this.$el.find("#users-index").append(userView.render().$el);
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

  return UserIndex;
})(Backbone.View);

exports['default'] = UserIndex;
module.exports = exports['default'];

},{"../collections/groups":2,"../collections/users":3,"./user_item":11}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tYWluLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21vZGVscy9ncm91cC5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tb2RlbHMvdXNlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9yb3V0ZXJzL3JvdXRlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy91dGlscy9zeW5jX2hlbHBlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy9ncm91cF9pdGVtLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL25hdl9iYXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvdXNlcl9pdGVtLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL3VzZXJfc2hvdy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy91c2Vyc19pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OzZCQ0FtQixrQkFBa0I7Ozs7MEJBQ3BCLGVBQWU7Ozs7Z0NBQ2QscUJBQXFCOzs7O0lBRWpDLFNBQVM7QUFFQyxhQUZWLFNBQVMsR0FFSTs4QkFGYixTQUFTOztBQUdULGdCQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNqQixtQkFBTyxFQUFFLEVBQUMsZUFBZSxFQUFFLDZDQUE2QyxFQUFDO1NBQzVFLENBQUMsQ0FBQztBQUNILHVDQUFXO0FBQ1QsbUJBQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25CLG1CQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNuQixDQUFDLENBQUM7QUFDSCxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFHekIsWUFBSSxHQUFHLEdBQUcsMERBQTBELENBQUM7QUFDckUsU0FBQyxDQUFDLElBQUksQ0FBQztBQUNELGdCQUFJLEVBQUMsS0FBSztBQUNWLG9CQUFRLEVBQUUsTUFBTTtBQUNoQixzQkFBVSxFQUFFLG9CQUFVLE9BQU8sRUFDN0I7QUFDSSx1QkFBTyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO2FBQzVGO0FBQ0QsZUFBRyxFQUFFLEdBQUc7QUFDUixtQkFBTyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQztLQUNGOztpQkF4QkMsU0FBUzs7ZUEwQkYsa0JBQUMsSUFBSSxFQUFFO0FBQ2QsZ0JBQUksS0FBSyxHQUFHLG1DQUFXLENBQUM7O0FBRXhCLGdCQUFJLEtBQUssR0FBRyw0QkFBUyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsaUJBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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RTtBQUN0QyxZQUFJLFFBQVEsR0FBRywyQkFBYSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBQ2hFLFlBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDN0QsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2QsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBRVMsbUJBQUMsRUFBRSxFQUFFO0FBQ2IsVUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFBO0FBQ3RCLFVBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFO0FBQ2hDLFlBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUU7QUFDM0IscUJBQVcsR0FBRyxLQUFLLENBQUM7QUFDcEIsaUJBQU8sS0FBSyxDQUFDO1NBQ2Q7T0FDRixDQUFDLENBQUE7QUFDRixhQUFPLFdBQVcsQ0FBQztLQUVwQjs7O1NBakNHLFNBQVM7R0FBUyxRQUFRLENBQUMsSUFBSTs7cUJBd0N0QixTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIEJhY2tib25lLiQuYWpheFNldHVwKHtcbiAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgICB9KTtcbiAgICAgIG5ldyBSb3V0ZXIoe1xuICAgICAgICAkcm9vdEVsOiAkKCcjbWFpbicpLFxuICAgICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICAgIH0pO1xuICAgICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuXG5cbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN5bmNJbmZvXG4gICAgfSk7XG4gICAgfVxuXG4gICAgc3luY0luZm8gKGRhdGEpIHtcbiAgICAgIGxldCB1c2VycyA9IG5ldyBVc2VycygpO1xuICAgICAgLy8gbGV0IHVzZXIgPSBuZXcgQmFja2JvbmUuTW9kZWwoZGF0YS51c2Vyc1sxXSk7XG4gICAgICBsZXQgdXNlcjEgPSBuZXcgVXNlcihkYXRhLnVzZXJzWzFdKTtcbiAgICAgIHVzZXJzLmFkZChkYXRhLnVzZXJzKTtcblxuICAgIH1cblxuXG59XG5cbiQoKCkgPT4ge1xuICAgIHdpbmRvdy5CdXR0ZXJmbHkgPSBuZXcgQnV0dGVyZmx5KCk7XG59KTtcbiIsImltcG9ydCBHcm91cCBmcm9tICcuLi9tb2RlbHMvZ3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gR3JvdXA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiXG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsImNsYXNzIEdyb3VwIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiY2xhc3MgVXNlciBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAvLyBDYW4ndCB1c2UgY29uc3RydWN0b3IgaGVyZSBhcyBpdCBvdmVyd3JpdGVzIHNvbWUgYXNzaWdubWVudCBieSBwYXJhbWV0ZXJzIHByb3BlcnR5XG4gICAgLy8gY29uc3RydWN0b3IgKCkge1xuICAgIC8vICAgc3VwZXIoKTtcbiAgICAvLyAgIHRoaXMudXJsUm9vdCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgLy8gICBcbiAgICAvLyB9XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5pbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBVc2Vyc0luZGV4IGZyb20gJy4uL3ZpZXdzL3VzZXJzX2luZGV4JztcblxuXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBCYWNrYm9uZS5Sb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiRyb290RWwgPSBvcHRpb25zLiRyb290RWw7XG4gICAgdGhpcy4kbmF2QmFyID0gb3B0aW9ucy4kbmF2QmFyO1xuICAgIHRoaXMuc3luY0hlbHBlciA9IG5ldyBTeW5jSGVscGVyKCk7XG4gICAgdGhpcy5yb3V0ZXMgPSB7XCJcIjogXCJwcm9maWxlXCIsXG4gICAgICBcInByb2ZpbGVcIjogXCJwcm9maWxlXCIsXG4gICAgICBcImdyb3Vwc1wiOiAgXCJncm91cHNcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCJ9O1xuICAgIHRoaXMuX2JpbmRSb3V0ZXMoKVxuXG4gIH1cblxuXG4gIHByb2ZpbGUgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdXNlci5mZXRjaCgpO1xuICAgICQud2hlbih0aGF0LnN5bmNIZWxwZXIuZ3JvdXBzKCkpLmRvbmUoZnVuY3Rpb24gKGdyb3Vwcykge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uOiBncm91cHN9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICdwcm9maWxlJylcbiAgICB9KTtcbiAgfVxuXG5cbiAgdXNlcnMgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLndoZW4odGhhdC5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFVzZXJzSW5kZXgoe2NvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKVxuICAgIH0pO1xuICB9XG5cbiAgZ3JvdXBzIChncm91cHMpIHtcblxuXG4gIH1cblxuXG4gIHN3YXBWaWV3cyAodmlldywgcGFnZSkge1xuICAgIHRoaXMuX25hdiA9IG5ldyBOYXZCYXIoe3BhZ2U6IHBhZ2V9KTtcbiAgICB0aGlzLiRuYXZCYXIuaHRtbCh0aGlzLl9uYXYucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyAmJiB0aGlzLl9jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgdGhpcy4kcm9vdEVsLmh0bWwodmlldy5yZW5kZXIoKS4kZWwpO1xuICB9XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgU3luY0hlbHBlciB7XG5cbiAgdXNlcnMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0VXNlcnMpO1xuICB9XG5cbiAgZ3JvdXBzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldEdyb3Vwcyk7XG4gIH1cblxuICBzeW5jRGF0YSAoY2FsbGJhY2spIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICB9KVxuICB9XG5cbiAgZ2V0VXNlcnMgKGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICB1c2Vycy5hZGQoZGF0YS51c2Vycyk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgZ2V0R3JvdXBzIChkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBncm91cHMuYWRkKGRhdGEuZ3JvdXBzKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY0hlbHBlcjtcbiIsImNsYXNzIEdyb3VwSXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtIGlkPVwiJyArIHRoaXMubW9kZWwuZ2V0KCdpZCcpO1xuICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJkZWwteFwiPng8L2Rpdj4gJyArIHRoaXMubW9kZWwuZXNjYXBlKCduYW1lJykgKyAnPC9saT4nXG4gICAgdGhpcy4kZWwuaHRtbChzdHJpbmcpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEl0ZW07XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcblxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgXCJjbGljayB1bFwiOiBcImNoYW5nZVBhZ2VcIixcbiAgICAgICAgfTtcbiAgfVxuXG4gIGluaXRpYWxpemUgKCkge1xuICAgIC8vIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgaWQgPSBcIiNuYXZiYXItXCIgKyB0aGlzLnBhZ2U7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuJGVsLmZpbmQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VQYWdlIChldmVudCkge1xuICAgIGxldCAkbmV3UGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IHVybCA9ICRuZXdQYWdlLmF0dHIoJ2lkJykuc3BsaXQoXCItXCIpWzFdO1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvJyArIHVybCwge3RyaWdnZXI6IHRydWV9KVxuXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImNsYXNzIFVzZXJJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBvcHRpb25zLmdyb3VwcztcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItaXRlbS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwSWQpIHtcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBCeUlkKGdyb3VwSWQpO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy51c2VyLWl0ZW1fX2dyb3Vwc19fdGV4dCcpLmFwcGVuZChncm91cC5lc2NhcGUoJ25hbWUnKSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGw7XG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJdGVtO1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuXG5jbGFzcyBVc2VyU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbiAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9uLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXNob3ctdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwSXRlbSh7bW9kZWw6IGdyb3VwfSlcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGVfX2dyb3Vwcy1saXN0JykuYXBwZW5kKGdyb3VwVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsXG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaG93O1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBVc2VySXRlbSBmcm9tICcuL3VzZXJfaXRlbSc7XG5cbmNsYXNzIFVzZXJJbmRleCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBVc2VycygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLnVzZXJzKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2Vycy1pbmRleC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgbGV0IHVzZXJWaWV3ID0gbmV3IFVzZXJJdGVtKHttb2RlbDogdXNlciwgZ3JvdXBzOiB0aGlzLmdyb3Vwc30pO1xuICAgICAgdGhpcy4kZWwuZmluZChcIiN1c2Vycy1pbmRleFwiKS5hcHBlbmQodXNlclZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGxcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZGV4O1xuIl19

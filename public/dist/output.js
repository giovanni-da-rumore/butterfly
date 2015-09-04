(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _routersRouter = require('./routers/router');

var _routersRouter2 = _interopRequireDefault(_routersRouter);

var _modelsUser = require('./models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var _collectionsUsers = require('./collections/users');

var _collectionsUsers2 = _interopRequireDefault(_collectionsUsers);

var Butterfly = function Butterfly() {
  _classCallCheck(this, Butterfly);

  Backbone.$.ajaxSetup({
    headers: { 'Authorization': 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40' }
  });
  new _routersRouter2['default']({
    $rootEl: $('#main'),
    $navBar: $('#nav')
  });
  Backbone.history.start();
};

$(function () {
  $.when($('#nav-template-holder').load('/templates/nav_bar.jst.ejs'), $('#user-prof-template-holder').load('templates/user_profile.jst.ejs'), $('#user-show-template-holder').load('templates/user_show.jst.ejs'), $('#user-show-template-holder').load('templates/user_show.jst.ejs'), $('#users-index-template-holder').load('templates/users_index.jst.ejs'), $('#user-item-template-holder').load('templates/user_item.jst.ejs')).then(function () {
    new Butterfly();
  });
});

},{"./collections/users":3,"./models/user":5,"./routers/router":6}],2:[function(require,module,exports){
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

},{"../models/group":4}],3:[function(require,module,exports){
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

},{"../models/user":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

var _viewsProfile_show = require('../views/profile_show');

var _viewsProfile_show2 = _interopRequireDefault(_viewsProfile_show);

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
      "users/:id": "userShow",
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
      $.when(this.syncHelper.groups()).done(function (data) {
        var view = new _viewsProfile_show2['default']({ model: user, collections: data });
        that.swapViews(view, 'profile');
      });
    }
  }, {
    key: 'users',
    value: function users() {
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var view = new _viewsUsers_index2['default']({ collections: data });
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'userShow',
    value: function userShow(id) {
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var user = new _modelsUser2['default'](that.getUser(id, data));
        var view = new _viewsUser_show2['default']({ model: user, collections: data });
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
  }, {
    key: 'getUser',
    value: function getUser(id, data) {
      var users = data.users;
      for (var i = 0; i < users.length; i++) {
        if (users[i]._id === id) {
          return users[i];
        }
      }
    }
  }]);

  return Router;
})(Backbone.Router);

;

exports['default'] = Router;
module.exports = exports['default'];

},{"../models/user":5,"../utils/sync_helper":7,"../views/nav_bar":9,"../views/profile_show":10,"../views/user_show":12,"../views/users_index":13}],7:[function(require,module,exports){
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

},{"../collections/groups":2,"../collections/users":3}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var _group_item = require('./group_item');

var _group_item2 = _interopRequireDefault(_group_item);

var _user_show = require("./user_show");

var _user_show2 = _interopRequireDefault(_user_show);

var ProfileShow = (function (_Backbone$View) {
  _inherits(ProfileShow, _Backbone$View);

  function ProfileShow(options) {
    _classCallCheck(this, ProfileShow);

    _get(Object.getPrototypeOf(ProfileShow.prototype), 'constructor', this).call(this);
    this.model = options.model;
    this.collections = options.collections;
    this.groups = new _collectionsGroups2['default']();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-profile-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(ProfileShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      var subView = new _user_show2['default']({ model: this.model, collections: this.collections, profile: true });
      this.$el.find('.profile-user-show').append(subView.render().$el);
      // if (!this.model.get('groupIds')) {
      //   return this;
      // }
      // this.model.get('groupIds').forEach(function (groupId) {
      //   let group = this.groupById(groupId);
      //   if (group) {
      //     let groupView = new GroupItem({model: group});
      //     this.$el.find('.profile__groups-list').append(groupView.render().$el);
      //   }
      // }.bind(this));
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

  return ProfileShow;
})(Backbone.View);

exports['default'] = ProfileShow;
module.exports = exports['default'];

},{"../collections/groups":2,"./group_item":8,"./user_show":12}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserItem = (function (_Backbone$View) {
  _inherits(UserItem, _Backbone$View);

  function UserItem(options) {
    _classCallCheck(this, UserItem);

    _get(Object.getPrototypeOf(UserItem.prototype), "constructor", this).call(this);
    this.model = options.model;
    this.groups = options.groups;
    this.template = _.template($("#user-item-template").html());
    this.events = {
      "click .user-item__checkbox": "selectItem",
      "click .user-item__groups__edit": "editUser"
    };
    this.listenTo(this.model, 'sync', this.render);
    Backbone.View.apply(this);
  }

  _createClass(UserItem, [{
    key: "render",
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      var count = 0;
      this.model.get('groupIds').forEach((function (groupId) {
        var group = this.groupById(groupId);
        if (group) {
          var string = "";
          if (count === 0) {
            string = " " + group.escape('name');
          } else {
            string = ", " + group.escape('name');
          }
          count += 1;
          this.$el.find('.user-item__groups__text').append(string);
        }
      }).bind(this));
      return this;
    }
  }, {
    key: "groupById",
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
  }, {
    key: "selectItem",
    value: function selectItem(event) {
      var $box = $(event.currentTarget);
      $box.find('div').toggleClass('active');
    }
  }, {
    key: "editUser",
    value: function editUser(event) {
      Backbone.history.navigate('#/users/' + this.model.get('_id'), { trigger: true });
    }
  }]);

  return UserItem;
})(Backbone.View);

exports["default"] = UserItem;
module.exports = exports["default"];

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
    this.profile = options.profile;
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model, profile: this.profile }));
      if (!this.model.get('groupIds')) {
        return this;
      }
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

},{"../collections/groups":2,"../utils/sync_helper":7,"./group_item":8}],13:[function(require,module,exports){
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
        this.$el.find(".users-index").append(userView.render().$el);
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

},{"../collections/groups":2,"../collections/users":3,"./user_item":11}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9uYXZfYmFyLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3Byb2ZpbGVfc2hvdy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX2l0ZW0uanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcl9zaG93LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJzX2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzZCQ0FtQixrQkFBa0I7Ozs7MEJBQ3BCLGVB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QUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDZCxhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FFUyxtQkFBQyxFQUFFLEVBQUU7QUFDYixVQUFJLFdBQVcsR0FBRyxJQUFJLENBQUE7QUFDdEIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUU7QUFDaEMsWUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUMzQixxQkFBVyxHQUFHLEtBQUssQ0FBQztBQUNwQixpQkFBTyxLQUFLLENBQUM7U0FDZDtPQUNGLENBQUMsQ0FBQTtBQUNGLGFBQU8sV0FBVyxDQUFDO0tBRXBCOzs7U0FqQ0csU0FBUztHQUFTLFFBQVEsQ0FBQyxJQUFJOztxQkF3Q3RCLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vY29sbGVjdGlvbnMvdXNlcnMnO1xuXG5jbGFzcyBCdXR0ZXJmbHkge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbicgOidCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJ31cbiAgICB9KTtcbiAgICBuZXcgUm91dGVyKHtcbiAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICB9KTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG4gIH1cbn1cblxuJCgoKSA9PiB7XG4gICQud2hlbihcbiAgICAkKCcjbmF2LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJy90ZW1wbGF0ZXMvbmF2X2Jhci5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXItcHJvZi10ZW1wbGF0ZS1ob2xkZXInKS5sb2FkKCd0ZW1wbGF0ZXMvdXNlcl9wcm9maWxlLmpzdC5lanMnKSxcbiAgICAkKCcjdXNlci1zaG93LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJ3RlbXBsYXRlcy91c2VyX3Nob3cuanN0LmVqcycpLFxuICAgICQoJyN1c2VyLXNob3ctdGVtcGxhdGUtaG9sZGVyJykubG9hZCgndGVtcGxhdGVzL3VzZXJfc2hvdy5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXJzLWluZGV4LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJ3RlbXBsYXRlcy91c2Vyc19pbmRleC5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXItaXRlbS10ZW1wbGF0ZS1ob2xkZXInKS5sb2FkKCd0ZW1wbGF0ZXMvdXNlcl9pdGVtLmpzdC5lanMnKVxuICApLnRoZW4oZnVuY3Rpb24gKCkgeyBuZXcgQnV0dGVyZmx5KCkgfSk7XG59KTtcbiIsImltcG9ydCBHcm91cCBmcm9tICcuLi9tb2RlbHMvZ3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gR3JvdXA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiY2xhc3MgR3JvdXAgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJjbGFzcyBVc2VyIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gIC8vIENhbid0IHVzZSBjb25zdHJ1Y3RvciBoZXJlIGFzIGl0IG92ZXJ3cml0ZXMgc29tZSBhc3NpZ25tZW50IGJ5IHBhcmFtZXRlcnMgcHJvcGVydHlcbiAgICAvLyBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gICBzdXBlcigpO1xuICAgIC8vICAgdGhpcy51cmxSb290ID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgICAvLyAgIFxuICAgIC8vIH1cblxuICAgIHVybFJvb3QgKCkge1xuICAgICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IE5hdkJhciBmcm9tICcuLi92aWV3cy9uYXZfYmFyJztcbmltcG9ydCBTeW5jSGVscGVyIGZyb20gJy4uL3V0aWxzL3N5bmNfaGVscGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tICcuLi92aWV3cy91c2VyX3Nob3cnO1xuaW1wb3J0IFByb2ZpbGVTaG93IGZyb20gJy4uL3ZpZXdzL3Byb2ZpbGVfc2hvdyc7XG5pbXBvcnQgVXNlcnNJbmRleCBmcm9tICcuLi92aWV3cy91c2Vyc19pbmRleCc7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnN5bmNIZWxwZXIgPSBuZXcgU3luY0hlbHBlcigpO1xuICAgIHRoaXMucm91dGVzID0ge1wiXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJwcm9maWxlXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJ1c2Vycy86aWRcIjogXCJ1c2VyU2hvd1wiLFxuICAgICAgXCJncm91cHNcIjogIFwiZ3JvdXBzXCIsXG4gICAgICBcInVzZXJzXCI6ICAgXCJ1c2Vyc1wifTtcbiAgICB0aGlzLl9iaW5kUm91dGVzKClcblxuICB9XG5cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBQcm9maWxlU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAncHJvZmlsZScpXG4gICAgfSk7XG4gIH1cblxuXG4gIHVzZXJzICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2Vyc0luZGV4KHtjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJylcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJTaG93IChpZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIodGhhdC5nZXRVc2VyKGlkLCBkYXRhKSk7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKVxuICAgIH0pO1xuXG4gIH1cblxuICBncm91cHMgKGdyb3Vwcykge1xuXG5cbiAgfVxuXG5cbiAgc3dhcFZpZXdzICh2aWV3LCBwYWdlKSB7XG4gICAgdGhpcy5fbmF2ID0gbmV3IE5hdkJhcih7cGFnZTogcGFnZX0pO1xuICAgIHRoaXMuJG5hdkJhci5odG1sKHRoaXMuX25hdi5yZW5kZXIoKS4kZWwpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ICYmIHRoaXMuX2N1cnJlbnRWaWV3LnJlbW92ZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICB0aGlzLiRyb290RWwuaHRtbCh2aWV3LnJlbmRlcigpLiRlbCk7XG4gIH1cblxuXG4gIGdldFVzZXIgKGlkLCBkYXRhKSB7XG4gICAgbGV0IHVzZXJzID0gZGF0YS51c2VycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodXNlcnNbaV0uX2lkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdXNlcnNbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBTeW5jSGVscGVyIHtcblxuICB1c2VycyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRVc2Vycyk7XG4gIH1cblxuICBncm91cHMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0R3JvdXBzKTtcbiAgfVxuXG4gIHN5bmNEYXRhIChjYWxsYmFjaykge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgc3VjY2VzczogY2FsbGJhY2ssXG4gICAgICAgIH0pXG4gIH1cblxuICBnZXRVc2VycyAoZGF0YSkge1xuICAgIGxldCB1c2VycyA9IG5ldyBVc2VycygpO1xuICAgIHVzZXJzLmFkZChkYXRhLnVzZXJzKTtcbiAgICByZXR1cm4gdXNlcnM7XG4gIH1cblxuICBnZXRHcm91cHMgKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIGdyb3Vwcy5hZGQoZGF0YS5ncm91cHMpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTeW5jSGVscGVyO1xuIiwiY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc3RyaW5nID0gJzxsaSBjbGFzcz1cInByb2ZpbGVfX2dyb3VwLWl0ZW0gaWQ9XCInICsgdGhpcy5tb2RlbC5nZXQoJ2lkJyk7XG4gICAgc3RyaW5nICs9ICdcIj4gPGRpdiBjbGFzcz1cImRlbC14XCI+eDwvZGl2PiAnICsgdGhpcy5tb2RlbC5lc2NhcGUoJ25hbWUnKSArICc8L2xpPidcbiAgICB0aGlzLiRlbC5odG1sKHN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwSXRlbTtcbiIsImNsYXNzIE5hdkJhciBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZSA9IG9wdGlvbnMucGFnZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI25hdi10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuXG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgICBcImNsaWNrIHVsXCI6IFwiY2hhbmdlUGFnZVwiLFxuICAgICAgICB9O1xuICB9XG5cbiAgaW5pdGlhbGl6ZSAoKSB7XG4gICAgLy8gdGhpcy5jbGlja0V2ZW50cygpO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBpZCA9IFwiI25hdmJhci1cIiArIHRoaXMucGFnZTtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG4gICAgdGhpcy4kZWwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy4kZWwuZmluZChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoYW5nZVBhZ2UgKGV2ZW50KSB7XG4gICAgbGV0ICRuZXdQYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgdXJsID0gJG5ld1BhZ2UuYXR0cignaWQnKS5zcGxpdChcIi1cIilbMV07XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy8nICsgdXJsLCB7dHJpZ2dlcjogdHJ1ZX0pXG5cbiAgfVxuXG4gIGNsaWNrRXZlbnRzICgpIHtcbiAgICB0aGlzLiRlbC5vbignY2xpY2snLCAnbGknLCB0aGlzLmNoYW5nZVBhZ2UpO1xuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gXCIuL3VzZXJfc2hvd1wiO1xuXG5jbGFzcyBQcm9maWxlU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBvcHRpb25zLmNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItcHJvZmlsZS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIGxldCBzdWJWaWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdGhpcy5tb2RlbCwgY29sbGVjdGlvbnM6IHRoaXMuY29sbGVjdGlvbnMsIHByb2ZpbGU6IHRydWV9KTtcbiAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZS11c2VyLXNob3cnKS5hcHBlbmQoc3ViVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgIC8vIGlmICghdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykpIHtcbiAgICAvLyAgIHJldHVybiB0aGlzO1xuICAgIC8vIH1cbiAgICAvLyB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgLy8gICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAvLyAgIGlmIChncm91cCkge1xuICAgIC8vICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwSXRlbSh7bW9kZWw6IGdyb3VwfSk7XG4gICAgLy8gICAgIHRoaXMuJGVsLmZpbmQoJy5wcm9maWxlX19ncm91cHMtbGlzdCcpLmFwcGVuZChncm91cFZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuXG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU2hvdztcbiIsImNsYXNzIFVzZXJJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBvcHRpb25zLmdyb3VwcztcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItaXRlbS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayAudXNlci1pdGVtX19jaGVja2JveFwiOiBcInNlbGVjdEl0ZW1cIixcbiAgICAgIFwiY2xpY2sgLnVzZXItaXRlbV9fZ3JvdXBzX19lZGl0XCI6IFwiZWRpdFVzZXJcIixcbiAgICAgfVxuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIGxldCBjb3VudCA9IDBcbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgc3RyaW5nID0gXCJcIlxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiBcIiArIGdyb3VwLmVzY2FwZSgnbmFtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0cmluZyA9IFwiLCBcIiArIGdyb3VwLmVzY2FwZSgnbmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB0aGlzLiRlbC5maW5kKCcudXNlci1pdGVtX19ncm91cHNfX3RleHQnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGw7XG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0gKGV2ZW50KSB7XG4gICAgbGV0ICRib3ggPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICRib3guZmluZCgnZGl2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgZWRpdFVzZXIgKGV2ZW50KSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy8nICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckl0ZW07XG4iLCJpbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5cbmNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5wcm9maWxlID0gb3B0aW9ucy5wcm9maWxlO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsLCBwcm9maWxlOiB0aGlzLnByb2ZpbGV9KSk7XG4gICAgaWYgKCF0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwSWQpIHtcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBCeUlkKGdyb3VwSWQpO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cFZpZXcgPSBuZXcgR3JvdXBJdGVtKHttb2RlbDogZ3JvdXB9KVxuICAgICAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZV9fZ3JvdXBzLWxpc3QnKS5hcHBlbmQoZ3JvdXBWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGxcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNob3c7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IFVzZXJJdGVtIGZyb20gJy4vdXNlcl9pdGVtJztcblxuY2xhc3MgVXNlckluZGV4IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IFVzZXJzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmNvbGxlY3Rpb24uYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMudXNlcnMpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXJzLWluZGV4LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBsZXQgdXNlclZpZXcgPSBuZXcgVXNlckl0ZW0oe21vZGVsOiB1c2VyLCBncm91cHM6IHRoaXMuZ3JvdXBzfSk7XG4gICAgICB0aGlzLiRlbC5maW5kKFwiLnVzZXJzLWluZGV4XCIpLmFwcGVuZCh1c2VyVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuXG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5kZXg7XG4iXX0=

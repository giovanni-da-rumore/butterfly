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

},{"../models/user":6,"../utils/sync_helper":8,"../views/nav_bar":10,"../views/profile_show":11,"../views/user_show":13,"../views/users_index":14}],8:[function(require,module,exports){
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
      var subView = new _user_show2['default']({ model: this.model, collections: this.collections });
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

},{"../collections/groups":2,"./group_item":9,"./user_show":13}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);
  }

  _createClass(UserShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
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

},{"../collections/groups":2,"../utils/sync_helper":8,"./group_item":9}],14:[function(require,module,exports){
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

},{"../collections/groups":2,"../collections/users":3,"./user_item":12}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tYWluLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL21vZGVscy9ncm91cC5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9tb2RlbHMvdXNlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy9yb3V0ZXJzL3JvdXRlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy91dGlscy9zeW5jX2hlbHBlci5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy9ncm91cF9pdGVtLmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL25hdl9iYXIuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvcHJvZmlsZV9zaG93LmpzIiwiL1VzZXJzL2FwcGFjYWRlbXkvRGVza3RvcC9idXR0ZXJmbHlfY2hhbGxlbmdlL2pzL3ZpZXdzL3VzZXJfaXRlbS5qcyIsIi9Vc2Vycy9hcHBhY2FkZW15L0Rlc2t0b3AvYnV0dGVyZmx5X2NoYWxsZW5nZS9qcy92aWV3cy91c2VyX3Nob3cuanMiLCIvVXNlcnMvYXBwYWNhZGVteS9EZXNrdG9wL2J1dHRlcmZseV9jaGFsbGVuZ2UvanMvdmlld3MvdXNlcnNfaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDQW1CLGtCQUFrQjs7OzswQkFDcEIsZUFBZTs7OztnQ0FDZCxxQkFBcUI7Ozs7SUFFakMsU0FBUyxHQUVELFNBRlIsU0FBUyxHQUVFO3dCQUZYLFNBQVM7O0FBR1gsVUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsV0FBTyxFQUFFLEVBQUMsZUFBZSxFQUFFLDZDQUE2QyxFQUFDO0dBQzVFLENBQUMsQ0FBQztBQUNILGlDQUFXO0FBQ1QsV0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkIsV0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7R0FDbkIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7QUFHSCxDQUFDLENBQUMsWUFBTTtBQUNOLEdBQUMsQ0FBQyxJQUFJLENBQ0osQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQzVELENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUN0RSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsRUFDbkUsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEVBQ25FLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUN2RSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FDcEUsQ0FB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Ozs7U0FqQ0csU0FBUztHQUFTLFFBQVEsQ0FBQyxJQUFJOztxQkF3Q3RCLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vY29sbGVjdGlvbnMvdXNlcnMnO1xuXG5jbGFzcyBCdXR0ZXJmbHkge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbicgOidCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJ31cbiAgICB9KTtcbiAgICBuZXcgUm91dGVyKHtcbiAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICB9KTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG4gIH1cbn1cblxuJCgoKSA9PiB7XG4gICQud2hlbihcbiAgICAkKCcjbmF2LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJy90ZW1wbGF0ZXMvbmF2X2Jhci5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXItcHJvZi10ZW1wbGF0ZS1ob2xkZXInKS5sb2FkKCd0ZW1wbGF0ZXMvdXNlcl9wcm9maWxlLmpzdC5lanMnKSxcbiAgICAkKCcjdXNlci1zaG93LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJ3RlbXBsYXRlcy91c2VyX3Nob3cuanN0LmVqcycpLFxuICAgICQoJyN1c2VyLXNob3ctdGVtcGxhdGUtaG9sZGVyJykubG9hZCgndGVtcGxhdGVzL3VzZXJfc2hvdy5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXJzLWluZGV4LXRlbXBsYXRlLWhvbGRlcicpLmxvYWQoJ3RlbXBsYXRlcy91c2Vyc19pbmRleC5qc3QuZWpzJyksXG4gICAgJCgnI3VzZXItaXRlbS10ZW1wbGF0ZS1ob2xkZXInKS5sb2FkKCd0ZW1wbGF0ZXMvdXNlcl9pdGVtLmpzdC5lanMnKVxuICApLnRoZW4oZnVuY3Rpb24gKCkgeyBuZXcgQnV0dGVyZmx5KCkgfSk7XG59KTtcbiIsImltcG9ydCBHcm91cCBmcm9tICcuLi9tb2RlbHMvZ3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gR3JvdXA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiXG5pbXBvcnQgJy4vYnV0dGVyZmx5JztcbiIsImNsYXNzIEdyb3VwIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiY2xhc3MgVXNlciBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAvLyBDYW4ndCB1c2UgY29uc3RydWN0b3IgaGVyZSBhcyBpdCBvdmVyd3JpdGVzIHNvbWUgYXNzaWdubWVudCBieSBwYXJhbWV0ZXJzIHByb3BlcnR5XG4gICAgLy8gY29uc3RydWN0b3IgKCkge1xuICAgIC8vICAgc3VwZXIoKTtcbiAgICAvLyAgIHRoaXMudXJsUm9vdCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgLy8gICBcbiAgICAvLyB9XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5pbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBQcm9maWxlU2hvdyBmcm9tICcuLi92aWV3cy9wcm9maWxlX3Nob3cnO1xuaW1wb3J0IFVzZXJzSW5kZXggZnJvbSAnLi4vdmlld3MvdXNlcnNfaW5kZXgnO1xuXG5cbmNsYXNzIFJvdXRlciBleHRlbmRzIEJhY2tib25lLlJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuJHJvb3RFbCA9IG9wdGlvbnMuJHJvb3RFbDtcbiAgICB0aGlzLiRuYXZCYXIgPSBvcHRpb25zLiRuYXZCYXI7XG4gICAgdGhpcy5zeW5jSGVscGVyID0gbmV3IFN5bmNIZWxwZXIoKTtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwicHJvZmlsZVwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwidXNlcnMvOmlkXCI6IFwidXNlclNob3dcIixcbiAgICAgIFwiZ3JvdXBzXCI6ICBcImdyb3Vwc1wiLFxuICAgICAgXCJ1c2Vyc1wiOiAgIFwidXNlcnNcIn07XG4gICAgdGhpcy5fYmluZFJvdXRlcygpXG5cbiAgfVxuXG5cbiAgcHJvZmlsZSAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICB1c2VyLmZldGNoKCk7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5ncm91cHMoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgUHJvZmlsZVNob3coe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3Byb2ZpbGUnKVxuICAgIH0pO1xuICB9XG5cblxuICB1c2VycyAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlcnNJbmRleCh7Y29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpXG4gICAgfSk7XG4gIH1cblxuICB1c2VyU2hvdyAoaWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHRoYXQuZ2V0VXNlcihpZCwgZGF0YSkpO1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJylcbiAgICB9KTtcblxuICB9XG5cbiAgZ3JvdXBzIChncm91cHMpIHtcblxuXG4gIH1cblxuXG4gIHN3YXBWaWV3cyAodmlldywgcGFnZSkge1xuICAgIHRoaXMuX25hdiA9IG5ldyBOYXZCYXIoe3BhZ2U6IHBhZ2V9KTtcbiAgICB0aGlzLiRuYXZCYXIuaHRtbCh0aGlzLl9uYXYucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyAmJiB0aGlzLl9jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgdGhpcy4kcm9vdEVsLmh0bWwodmlldy5yZW5kZXIoKS4kZWwpO1xuICB9XG5cblxuICBnZXRVc2VyIChpZCwgZGF0YSkge1xuICAgIGxldCB1c2VycyA9IGRhdGEudXNlcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHVzZXJzW2ldLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJzW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgU3luY0hlbHBlciB7XG5cbiAgdXNlcnMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0VXNlcnMpO1xuICB9XG5cbiAgZ3JvdXBzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldEdyb3Vwcyk7XG4gIH1cblxuICBzeW5jRGF0YSAoY2FsbGJhY2spIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICB9KVxuICB9XG5cbiAgZ2V0VXNlcnMgKGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICB1c2Vycy5hZGQoZGF0YS51c2Vycyk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgZ2V0R3JvdXBzIChkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBncm91cHMuYWRkKGRhdGEuZ3JvdXBzKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY0hlbHBlcjtcbiIsImNsYXNzIEdyb3VwSXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtIGlkPVwiJyArIHRoaXMubW9kZWwuZ2V0KCdpZCcpO1xuICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJkZWwteFwiPng8L2Rpdj4gJyArIHRoaXMubW9kZWwuZXNjYXBlKCduYW1lJykgKyAnPC9saT4nXG4gICAgdGhpcy4kZWwuaHRtbChzdHJpbmcpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEl0ZW07XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcblxuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgXCJjbGljayB1bFwiOiBcImNoYW5nZVBhZ2VcIixcbiAgICAgICAgfTtcbiAgfVxuXG4gIGluaXRpYWxpemUgKCkge1xuICAgIC8vIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgaWQgPSBcIiNuYXZiYXItXCIgKyB0aGlzLnBhZ2U7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuJGVsLmZpbmQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VQYWdlIChldmVudCkge1xuICAgIGxldCAkbmV3UGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IHVybCA9ICRuZXdQYWdlLmF0dHIoJ2lkJykuc3BsaXQoXCItXCIpWzFdO1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvJyArIHVybCwge3RyaWdnZXI6IHRydWV9KVxuXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cF9pdGVtJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tIFwiLi91c2VyX3Nob3dcIjtcblxuY2xhc3MgUHJvZmlsZVNob3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gb3B0aW9ucy5jb2xsZWN0aW9ucztcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXByb2ZpbGUtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgc3ViVmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHRoaXMubW9kZWwsIGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zfSk7XG4gICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGUtdXNlci1zaG93JykuYXBwZW5kKHN1YlZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICAvLyBpZiAoIXRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcztcbiAgICAvLyB9XG4gICAgLy8gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgIC8vICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgLy8gICBpZiAoZ3JvdXApIHtcbiAgICAvLyAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cEl0ZW0oe21vZGVsOiBncm91cH0pO1xuICAgIC8vICAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZV9fZ3JvdXBzLWxpc3QnKS5hcHBlbmQoZ3JvdXBWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgLy8gICB9XG4gICAgLy8gfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGxcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVNob3c7XG4iLCJjbGFzcyBVc2VySXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gb3B0aW9ucy5ncm91cHM7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLWl0ZW0tdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3RyaW5nID0gXCIgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiwgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnVzZXItaXRlbV9fZ3JvdXBzX190ZXh0JykuYXBwZW5kKHN0cmluZyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGw7XG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJdGVtO1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuXG5jbGFzcyBVc2VyU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIGlmICghdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwSXRlbSh7bW9kZWw6IGdyb3VwfSlcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGVfX2dyb3Vwcy1saXN0JykuYXBwZW5kKGdyb3VwVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsXG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG5cbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaG93O1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBVc2VySXRlbSBmcm9tICcuL3VzZXJfaXRlbSc7XG5cbmNsYXNzIFVzZXJJbmRleCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBVc2VycygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLnVzZXJzKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2Vycy1pbmRleC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgbGV0IHVzZXJWaWV3ID0gbmV3IFVzZXJJdGVtKHttb2RlbDogdXNlciwgZ3JvdXBzOiB0aGlzLmdyb3Vwc30pO1xuICAgICAgdGhpcy4kZWwuZmluZChcIi51c2Vycy1pbmRleFwiKS5hcHBlbmQodXNlclZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGxcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcblxuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZGV4O1xuIl19

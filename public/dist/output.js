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

  Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  function createLoadPromise(fileName, id) {
    return $.Deferred(function (promise) {
      $(id).load(fileName, function () {
        promise.resolve();
      });
    }).promise();
  }

  var promises = [];

  promises.push(createLoadPromise('templates/user_show.jst.ejs', '#user-show-template-holder'));
  promises.push(createLoadPromise('templates/user_profile.jst.ejs', '#user-prof-template-holder'));
  promises.push(createLoadPromise('templates/users_index.jst.ejs', '#users-index-template-holder'));
  promises.push(createLoadPromise('templates/user_item.jst.ejs', '#user-item-template-holder'));
  promises.push(createLoadPromise('templates/nav_bar.jst.ejs', '#nav-template-holder'));
  promises.push(createLoadPromise('templates/groups_modal.jst.ejs', '#groups-modal-template-holder'));
  promises.push(createLoadPromise('templates/groups_index.jst.ejs', '#groups-index-template-holder'));

  $.when.apply(undefined, promises).done(function () {
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

var _viewsUser_new = require('../views/user_new');

var _viewsUser_new2 = _interopRequireDefault(_viewsUser_new);

var _viewsProfile_show = require('../views/profile_show');

var _viewsProfile_show2 = _interopRequireDefault(_viewsProfile_show);

var _viewsUsers_index = require('../views/users_index');

var _viewsUsers_index2 = _interopRequireDefault(_viewsUsers_index);

var _viewsGroups_index = require('../views/groups_index');

var _viewsGroups_index2 = _interopRequireDefault(_viewsGroups_index);

var _viewsGroups_modal = require('../views/groups_modal');

var _viewsGroups_modal2 = _interopRequireDefault(_viewsGroups_modal);

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
      "users": "users",
      "users/new": "userNew",
      "users/:id": "userShow",
      "groups": "groups"
    };
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
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
      });
    }
  }, {
    key: 'users',
    value: function users() {
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var view = new _viewsUsers_index2['default']({ collections: data });
        that.swapViews(view, 'users');
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
      });
    }
  }, {
    key: 'userShow',
    value: function userShow(id) {
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var user = new _modelsUser2['default'](that.getUser(id, data));
        var view = new _viewsUser_show2['default']({ model: user, collections: data });
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'userNew',
    value: function userNew() {
      var user = new _modelsUser2['default']();
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var view = new _viewsUser_new2['default']({ model: user, collections: data });
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
        that.swapViews(view, 'users');
      });
    }
  }, {
    key: 'groups',
    value: function groups(_groups) {
      var that = this;
      $.when(this.syncHelper.syncData()).done(function (data) {
        var view = new _viewsGroups_index2['default']({ collection: data.groups });
        that.swapViews(view, 'groups');
      });
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

},{"../models/user":5,"../utils/sync_helper":7,"../views/groups_index":9,"../views/groups_modal":10,"../views/nav_bar":11,"../views/profile_show":12,"../views/user_new":14,"../views/user_show":15,"../views/users_index":16}],7:[function(require,module,exports){
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
      var string = '<li class="profile__group-item" id="' + this.model.get('_id');
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var GroupsIndex = (function (_Backbone$View) {
  _inherits(GroupsIndex, _Backbone$View);

  function GroupsIndex(options) {
    _classCallCheck(this, GroupsIndex);

    _get(Object.getPrototypeOf(GroupsIndex.prototype), "constructor", this).call(this);
    this.collection = new _collectionsGroups2["default"]();
    options.collection && this.collection.add(options.collection);
    this.template = _.template($("#groups-index-template").html());
    this.events = {
      "click .checkbox-propre": "selectGroup",
      "submit #new-group-form": "addGroup",
      "submit #edit-group-form": "saveEdit",
      "click .index__options__delete": "deleteGroups",
      "click .index__options__edit": "editGroup"
    };
    this.count = this.groupCount();
    Backbone.View.apply(this);
  }

  _createClass(GroupsIndex, [{
    key: "render",
    value: function render() {
      this.$el.html(this.template({ count: this.count }));
      this.collection.each((function (group) {
        if (group.get('deletedAt')) {
          return;
        }
        var string = '<li class="profile__group-item" id="' + group.get('_id');
        string += '"> <div class="checkbox-propre"></div> <div class="group-name">' + group.escape('name') + '</div></li>';
        this.$el.find('.groups-index').append(string);
      }).bind(this));
      return this;
    }
  }, {
    key: "selectGroup",
    value: function selectGroup(event) {
      $(event.currentTarget).parent().toggleClass('active');
    }
  }, {
    key: "addGroup",
    value: function addGroup(event) {
      event.preventDefault();
      var name = $(event.currentTarget).find('input').val();
      this.createGroup(name);
    }
  }, {
    key: "createGroup",
    value: function createGroup(name) {
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/';
      var dataString = JSON.stringify({ name: name });
      var that = this;
      $.ajax({
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        data: dataString,
        url: url,
        success: that.refresh.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: "deleteGroups",
    value: function deleteGroups() {
      var $groups = this.$el.find('li.active');
      $groups.each((function (idx, group) {
        var id = group.id;
        this.deleteGroup(group.id);
        this.$el.find('li#' + id).remove();
        this.count -= 1;
        this.$el.find('.index__count').html(this.count);
      }).bind(this));
    }
  }, {
    key: "deleteGroup",
    value: function deleteGroup(id) {
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/' + id;
      $.ajax({
        type: "DELETE",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup(event) {
      var $groups = this.$el.find('li.active');
      $groups.each((function (idx, group) {
        var $groupName = $(group).find('.group-name');
        if ($groupName.has('form').length) {
          return;
        }
        var htmlString = '<form id="edit-group-form" data-id="' + group.id + '"><input class="group-edit-input" value="';
        htmlString += $groupName.html() + '"></form><button></button>';
        $groupName.html(htmlString);
        var $input = $(group).find('.group-edit-input');
        $input.attr('size', $input.val().length);
      }).bind(this));
    }
  }, {
    key: "saveEdit",
    value: function saveEdit(event) {
      event.preventDefault();
      var name = $(event.currentTarget).find('input').val();
      var id = event.currentTarget.getAttribute('data-id');
      this.saveEditAjax(id, name);
      // this.ajaxRequest({data: name, urlAdd: })
    }
  }, {
    key: "saveEditAjax",
    value: function saveEditAjax(id, name) {
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/';
      url += id;
      var dataString = JSON.stringify({ name: name });
      var that = this;
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        data: dataString,
        url: url,
        success: that.editRender.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: "editRender",
    value: function editRender(response) {
      var $group = this.$el.find('li#' + response.data._id);
      $group.find('.group-name').html(response.data.name);
      $group.removeClass('active');
    }
  }, {
    key: "refresh",
    value: function refresh(response) {
      var string = '<li class="profile__group-item" id="' + response.data._id;
      string += '"> <div class="checkbox-propre"></div> ' + response.data.name + '</li>';
      this.$el.find('.groups-index').append(string);
      this.count += 1;
      this.$el.find('.index__count').html(this.count);
    }
  }, {
    key: "groupCount",
    value: function groupCount() {
      var count = 0;
      this.collection.each(function (group) {
        if (!group.get('deletedAt')) {
          count += 1;
        }
      });
      return count;
    }
  }]);

  return GroupsIndex;
})(Backbone.View);

exports["default"] = GroupsIndex;
module.exports = exports["default"];

},{"../collections/groups":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var GroupsModal = (function (_Backbone$View) {
  _inherits(GroupsModal, _Backbone$View);

  function GroupsModal(options) {
    _classCallCheck(this, GroupsModal);

    _get(Object.getPrototypeOf(GroupsModal.prototype), "constructor", this).call(this);
    this.collection = new _collectionsGroups2["default"]();
    options.collection && this.collection.add(options.collection);
    this.template = _.template($("#groups-modal-template").html());
    this.events = {
      "click .checkbox-propre": "selectGroup"
    };
    Backbone.View.apply(this);
  }

  _createClass(GroupsModal, [{
    key: "render",
    value: function render() {
      this.$el.html(this.template());
      this.collection.each((function (group) {
        if (group.get('deletedAt')) {
          return;
        }
        var string = '<li class="profile__group-item" id="' + group.get('_id');
        string += '"> <div class="checkbox-propre"></div> ' + group.escape('name') + '</li>';
        this.$el.find('ul').append(string);
      }).bind(this));
      return this;
    }
  }, {
    key: "selectGroup",
    value: function selectGroup(event) {
      // $(event.currentTarget).toggleClass('active');
      $(event.currentTarget).parent().toggleClass('active');
    }
  }]);

  return GroupsModal;
})(Backbone.View);

exports["default"] = GroupsModal;
module.exports = exports["default"];

},{"../collections/groups":2}],11:[function(require,module,exports){
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
    var that = this;
    this.collections = options.collections;
    this.groups = new _collectionsGroups2['default']();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-profile-template").html());
    this.listenTo(this.model, 'sync', this.render);
    this.events = {
      'submit #password-form': 'updatePassowrd',
      'click #dropzone-prof-pic': 'clearZone'
    };

    Dropzone.options.dropzoneProfPic = {
      maxFilesize: 4096,
      accept: function accept(file, done) {
        $(file.previewTemplate).find('.dz-success-mark').css('display', 'none');
        $(file.previewTemplate).find('.dz-error-mark').css('display', 'none');
        $('.profile__pic-words').append('<div class="save-pic">Save new photo</div>');
        $('.save-pic').on('click', that.savePicture.bind(that));
      }
    };
    Backbone.View.apply(this);
  }

  _createClass(ProfileShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      var subView = new _user_show2['default']({ model: this.model, collections: this.collections, profile: true });
      this.$el.find('.profile-user-show').append(subView.render().$el);
      this.setDropzone();
      return this;
    }
  }, {
    key: 'setDropzone',
    value: function setDropzone() {
      if (this.profDropzone) {
        return;
      } else if ($('#dropzone-prof-pic').length > 0) {
        this.profDropzone = new Dropzone("#dropzone-prof-pic", { url: "#", autoProcessQueue: false });
        clearInterval(this.findDropElement);
      } else {
        this.findDropElement = window.setInterval((function () {
          this.setDropzone();
        }).bind(this), 200);
      }
    }
  }, {
    key: 'savePicture',
    value: function savePicture() {
      var $img = $('.dz-image').children();
      var picture = $img.attr('src');
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
      var that = this;
      var dataString = JSON.stringify({ picture: picture });
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.pictureSaved.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'updatePassowrd',
    value: function updatePassowrd(event) {
      event.preventDefault();
      if ($('.user-groups-modal').hasClass('active')) {
        return;
      }
      var that = this;
      var data = $(event.currentTarget).serializeJSON().user;
      var dataString = JSON.stringify(data);
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.refresh.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      alert("Succès!");
      this.render();
    }
  }, {
    key: 'pictureSaved',
    value: function pictureSaved(response) {
      this.$el.find('.profile__pic').attr('src', response.data.picture);
      this.model.set({ picture: response.data.picture });
      this.clearZone();
    }
  }, {
    key: 'clearZone',
    value: function clearZone(event) {
      if (!event || event.target.id === "dropzone-prof-pic") {
        this.$el.find('#dropzone-prof-pic').children().remove();
        this.$el.find('.save-pic').remove();
      }
    }
  }]);

  return ProfileShow;
})(Backbone.View);

exports['default'] = ProfileShow;
module.exports = exports['default'];

},{"../collections/groups":2,"./group_item":8,"./user_show":15}],13:[function(require,module,exports){
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
        if (group.get('deletedAt')) {
          return;
        } else if (group.get('_id') === id) {
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

},{}],14:[function(require,module,exports){
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

var _user_show = require('./user_show');

var _user_show2 = _interopRequireDefault(_user_show);

var UserNew = (function (_UserShow) {
  _inherits(UserNew, _UserShow);

  function UserNew(options) {
    _classCallCheck(this, UserNew);

    _get(Object.getPrototypeOf(UserNew.prototype), 'constructor', this).call(this, options);
    this.model = options.model;
    this.groups = new _collectionsGroups2['default']();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.events = {
      "submit form": "create"
    };
    // "keyup input": "storeFormData",
    Backbone.View.apply(this);
  }

  // storeFormData (event) {
  //   let value = $(event.currentTarget).val();
  //   let name = event.currentTarget.name.slice(5,-1);
  //   this.model.attributes[name] = value;
  // }

  _createClass(UserNew, [{
    key: 'updateInfo',
    value: function updateInfo() {
      return;
    }
  }, {
    key: 'create',
    value: function create(event) {
      event.preventDefault();
      var that = this;
      var data = $(event.currentTarget).serializeJSON().user;
      data.groupIds = this.model.get('groupIds');
      var dataString = JSON.stringify(data);
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users';
      $.ajax({
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.refresh.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'refresh',
    value: function refresh(response) {
      Backbone.history.navigate('#/users/' + response.data._id, { trigger: true });
    }
  }]);

  return UserNew;
})(_user_show2['default']);

exports['default'] = UserNew;
module.exports = exports['default'];

},{"../collections/groups":2,"./group_item":8,"./user_show":15}],15:[function(require,module,exports){
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

var _groups_modal = require('./groups_modal');

var _groups_modal2 = _interopRequireDefault(_groups_modal);

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
    this.events = {
      'submit #normal-form': 'updateInfo',
      'click .del-x': 'deleteGroup',
      'click #groups-button': "groupsModal",
      "keyup input": "storeFormData"
    };
    Backbone.View.apply(this);
  }

  _createClass(UserShow, [{
    key: 'storeFormData',
    value: function storeFormData(event) {
      var value = $(event.currentTarget).val();
      var name = event.currentTarget.name.slice(5, -1);
      this.model.attributes[name] = value;
    }
  }, {
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
          this.$el.find('.user-show__groups-list').append(groupView.render().$el);
        }
      }).bind(this));
      return this;
    }
  }, {
    key: 'groupById',
    value: function groupById(id) {
      var targetGroup = null;
      this.groups.each(function (group) {
        if (group.get('deletedAt')) {
          return;
        }
        if (group.get('_id') === id) {
          targetGroup = group;
          return group;
        }
      });
      return targetGroup;
    }
  }, {
    key: 'updateInfo',
    value: function updateInfo(event) {
      event.preventDefault();
      if (this.inModal) {
        return;
      }
      var that = this;
      var data = $(event.currentTarget).serializeJSON().user;
      data.groupIds = this.model.get('groupIds');
      var dataString = JSON.stringify(data);
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users/';
      url += this.model.get('_id');
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.refresh.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'refresh',
    value: function refresh(response) {
      alert("Succès!");
      this.model.set(response.data);
      this.render();
    }
  }, {
    key: 'deleteGroup',
    value: function deleteGroup(event) {
      var $group = $(event.currentTarget).parent();
      var id = $group.attr('id');
      var ids = this.model.get('groupIds');
      for (var i = 0; i < ids.length; i++) {
        if (ids[i] == id) {
          this.model.attributes.groupIds.remove(i);
          break;
        }
      }
      $group.remove();
    }
  }, {
    key: 'groupsModal',
    value: function groupsModal() {
      if (this.inModal) {
        return;
      }
      this.inModal = true;
      this.toggleBlur();
      $('.user-groups-button').on('click', this.addGroups.bind(this));
    }
  }, {
    key: 'addGroups',
    value: function addGroups(event) {
      var $groups = $(event.currentTarget).parent().find('li.active');
      $groups.each((function (index, group) {
        if (!this.model.attributes.groupIds) {
          this.model.attributes.groupIds = [group.id];
        } else if (this.model.attributes.groupIds.indexOf(group.id) < 0) {
          this.model.attributes.groupIds.push(group.id);
        }
      }).bind(this));
      this.toggleBlur();
      this.inModal = false;
      $('.user-groups-button').off('click');
      this.render();
    }
  }, {
    key: 'toggleBlur',
    value: function toggleBlur() {
      $('.blur-wrapper').toggleClass('active');
      $('.blur-wrapper-sub').toggleClass('active');
      $('.user-groups-modal').toggleClass('active');
      $('.user-groups-modal').find('li.active').removeClass('active');
    }
  }]);

  return UserShow;
})(Backbone.View);

exports['default'] = UserShow;
module.exports = exports['default'];

},{"../collections/groups":2,"../utils/sync_helper":7,"./group_item":8,"./groups_modal":10}],16:[function(require,module,exports){
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
    this.count = this.userCount();
    this.events = {
      'click .index__options__add': 'addUser',
      'click .index__options__delete': 'deleteUsers',
      'click .index__options__edit': 'editUser'
    };
    Backbone.View.apply(this);
  }

  _createClass(UserIndex, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ count: this.count }));
      this.collection.forEach((function (user) {
        if (user.get('deletedAt')) {
          return;
        }
        var userView = new _user_item2['default']({ model: user, groups: this.groups });
        this.$el.find(".users-index").append(userView.render().$el);
      }).bind(this));
      return this;
    }
  }, {
    key: 'addUser',
    value: function addUser() {
      Backbone.history.navigate('#/users/new', { trigger: true });
    }
  }, {
    key: 'deleteUsers',
    value: function deleteUsers() {
      var $users = this.$el.find('.active');
      $users.each((function (idx, user) {
        var id = user.parentElement.id;
        this.deleteUser(id);
        this.$el.find('ul#' + id).remove();
        this.count -= 1;
        this.$el.find('.index__count').html(this.count);
      }).bind(this));
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser(id) {
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users/' + id;
      $.ajax({
        type: "DELETE",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'editUser',
    value: function editUser() {
      var $users = this.$el.find('.active');
      var $user = $users.first().parent();
      if ($user.attr('id')) {
        Backbone.history.navigate("#/users/" + $user.attr('id'));
      }
      // $users.each(function (idx, user) {
      //   let id = user.parentElement.id
      //   this.deleteUser(id);
      //   this.$el.find('ul#' + id).remove();
      //   this.count -= 1;
      //   this.$el.find('.index__count').html(this.count);
      // }.bind(this));
    }
  }, {
    key: 'userCount',
    value: function userCount() {
      var count = 0;
      this.collection.each(function (user) {
        if (!user.get('deletedAt')) {
          count += 1;
        }
      });
      return count;
    }
  }]);

  return UserIndex;
})(Backbone.View);

exports['default'] = UserIndex;
module.exports = exports['default'];

},{"../collections/groups":2,"../collections/users":3,"./user_item":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9ncm91cHNfaW5kZXguanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBzX21vZGFsLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL25hdl9iYXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvcHJvZmlsZV9zaG93LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX25ldy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX3Nob3cuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcnNfaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDQW1CLGtCQUFrQjs7OzswQkFDcEIsZUFBZTs7OztnQ0FDZCxxQkFBcUI7Ozs7SUFFakMsU0FBUyxHQUVELFNBRlIsU0FBUyxHQUVFO3dCQUZYLFNBQVM7O0FBR1gsVUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsV0FBTyxFQUFFLEVBQUMsZUFBZSxFQUFFLDZDQUE2QyxFQUFDO0dBQzVFLENBQUMsQ0FBQztBQUNILGlDQUFXO0FBQ1QsV0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkIsV0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7R0FDbkIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7QUFHSCxDQUFDLENBQUMsWUFBTTs7QUFFTixPQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDMUMsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUEsR0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbkQsV0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDdkMsV0FBTyxDQUFDLENBQUMsUUFB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WUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDMUIsZUFBSyxJQUFJLENBQUMsQ0FBQztTQUNaO09BQ0YsQ0FBQyxDQUFDO0FBQ0gsYUFBTyxLQUFLLENBQUM7S0FDZDs7O1NBekZHLFNBQVM7R0FBUyxRQUFRLENBQUMsSUFBSTs7cUJBK0Z0QixTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgQmFja2JvbmUuJC5hamF4U2V0dXAoe1xuICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgfSk7XG4gICAgbmV3IFJvdXRlcih7XG4gICAgICAkcm9vdEVsOiAkKCcjbWFpbicpLFxuICAgICAgJG5hdkJhcjogJCgnI25hdicpXG4gICAgfSk7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuICB9XG59XG5cbiQoKCkgPT4ge1xuXG4gIEFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICAgIHZhciByZXN0ID0gdGhpcy5zbGljZSgodG8gfHwgZnJvbSkgKyAxIHx8IHRoaXMubGVuZ3RoKTtcbiAgICB0aGlzLmxlbmd0aCA9IGZyb20gPCAwID8gdGhpcy5sZW5ndGggKyBmcm9tIDogZnJvbTtcbiAgICByZXR1cm4gdGhpcy5wdXNoLmFwcGx5KHRoaXMsIHJlc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvYWRQcm9taXNlKGZpbGVOYW1lLCBpZCkge1xuICAgIHJldHVybiAkLkRlZmVycmVkKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICQoaWQpLmxvYWQoZmlsZU5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KS5wcm9taXNlKCk7XG4gIH1cblxuICB2YXIgcHJvbWlzZXMgPSBbIF07XG5cbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2VyX3Nob3cuanN0LmVqcycsICcjdXNlci1zaG93LXRlbXBsYXRlLWhvbGRlcicpICk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcl9wcm9maWxlLmpzdC5lanMnLCAnI3VzZXItcHJvZi10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcnNfaW5kZXguanN0LmVqcycsICcjdXNlcnMtaW5kZXgtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJfaXRlbS5qc3QuZWpzJywgJyN1c2VyLWl0ZW0tdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL25hdl9iYXIuanN0LmVqcycsICcjbmF2LXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy9ncm91cHNfbW9kYWwuanN0LmVqcycsICcjZ3JvdXBzLW1vZGFsLXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy9ncm91cHNfaW5kZXguanN0LmVqcycsICcjZ3JvdXBzLWluZGV4LXRlbXBsYXRlLWhvbGRlcicpKTtcblxuICAkLndoZW4uYXBwbHkoIHRoaXMsIHByb21pc2VzICkuZG9uZSggZnVuY3Rpb24oKSB7XG4gICAgICBuZXcgQnV0dGVyZmx5KCk7XG4gIH0pO1xuXG59KTtcbiIsImltcG9ydCBHcm91cCBmcm9tICcuLi9tb2RlbHMvZ3JvdXAnO1xuXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gR3JvdXA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgICB0aGlzLm1vZGVsID0gVXNlcjtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiY2xhc3MgR3JvdXAgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJjbGFzcyBVc2VyIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gIC8vIENhbid0IHVzZSBjb25zdHJ1Y3RvciBoZXJlIGFzIGl0IG92ZXJ3cml0ZXMgc29tZSBhc3NpZ25tZW50IGJ5IHBhcmFtZXRlcnMgcHJvcGVydHlcbiAgICAvLyBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gICBzdXBlcigpO1xuICAgIC8vICAgdGhpcy51cmxSb290ID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgICAvLyAgIFxuICAgIC8vIH1cblxuICAgIHVybFJvb3QgKCkge1xuICAgICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IE5hdkJhciBmcm9tICcuLi92aWV3cy9uYXZfYmFyJztcbmltcG9ydCBTeW5jSGVscGVyIGZyb20gJy4uL3V0aWxzL3N5bmNfaGVscGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tICcuLi92aWV3cy91c2VyX3Nob3cnO1xuaW1wb3J0IFVzZXJOZXcgZnJvbSAnLi4vdmlld3MvdXNlcl9uZXcnO1xuaW1wb3J0IFByb2ZpbGVTaG93IGZyb20gJy4uL3ZpZXdzL3Byb2ZpbGVfc2hvdyc7XG5pbXBvcnQgVXNlcnNJbmRleCBmcm9tICcuLi92aWV3cy91c2Vyc19pbmRleCc7XG5pbXBvcnQgR3JvdXBzSW5kZXggZnJvbSAnLi4vdmlld3MvZ3JvdXBzX2luZGV4JztcbmltcG9ydCBHcm91cHNNb2RhbCBmcm9tICcuLi92aWV3cy9ncm91cHNfbW9kYWwnO1xuXG5cbmNsYXNzIFJvdXRlciBleHRlbmRzIEJhY2tib25lLlJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuJHJvb3RFbCA9IG9wdGlvbnMuJHJvb3RFbDtcbiAgICB0aGlzLiRuYXZCYXIgPSBvcHRpb25zLiRuYXZCYXI7XG4gICAgdGhpcy5zeW5jSGVscGVyID0gbmV3IFN5bmNIZWxwZXIoKTtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwicHJvZmlsZVwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCIsXG4gICAgICBcInVzZXJzL25ld1wiOiBcInVzZXJOZXdcIixcbiAgICAgIFwidXNlcnMvOmlkXCI6IFwidXNlclNob3dcIixcbiAgICAgIFwiZ3JvdXBzXCI6ICBcImdyb3Vwc1wiLFxuICAgIH07XG4gICAgdGhpcy5fYmluZFJvdXRlcygpXG4gIH1cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBQcm9maWxlU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAncHJvZmlsZScpO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VycyAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlcnNJbmRleCh7Y29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VyU2hvdyAoaWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHRoYXQuZ2V0VXNlcihpZCwgZGF0YSkpO1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbClcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpXG4gICAgfSk7XG4gIH1cblxuICB1c2VyTmV3ICgpIHtcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlck5ldyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpO1xuICAgIH0pO1xuXG4gIH1cblxuICBncm91cHMgKGdyb3Vwcykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IEdyb3Vwc0luZGV4KHtjb2xsZWN0aW9uOiBkYXRhLmdyb3Vwc30pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ2dyb3VwcycpO1xuICAgIH0pO1xuICB9XG5cbiAgc3dhcFZpZXdzICh2aWV3LCBwYWdlKSB7XG4gICAgdGhpcy5fbmF2ID0gbmV3IE5hdkJhcih7cGFnZTogcGFnZX0pO1xuICAgIHRoaXMuJG5hdkJhci5odG1sKHRoaXMuX25hdi5yZW5kZXIoKS4kZWwpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ICYmIHRoaXMuX2N1cnJlbnRWaWV3LnJlbW92ZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICB0aGlzLiRyb290RWwuaHRtbCh2aWV3LnJlbmRlcigpLiRlbCk7XG4gIH1cblxuXG4gIGdldFVzZXIgKGlkLCBkYXRhKSB7XG4gICAgbGV0IHVzZXJzID0gZGF0YS51c2VycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodXNlcnNbaV0uX2lkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdXNlcnNbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBTeW5jSGVscGVyIHtcblxuICB1c2VycyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRVc2Vycyk7XG4gIH1cblxuICBncm91cHMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0R3JvdXBzKTtcbiAgfVxuXG4gIHN5bmNEYXRhIChjYWxsYmFjaykge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgc3VjY2VzczogY2FsbGJhY2ssXG4gICAgICAgIH0pXG4gIH1cblxuICBnZXRVc2VycyAoZGF0YSkge1xuICAgIGxldCB1c2VycyA9IG5ldyBVc2VycygpO1xuICAgIHVzZXJzLmFkZChkYXRhLnVzZXJzKTtcbiAgICByZXR1cm4gdXNlcnM7XG4gIH1cblxuICBnZXRHcm91cHMgKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIGdyb3Vwcy5hZGQoZGF0YS5ncm91cHMpO1xuICAgIHJldHVybiBncm91cHM7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTeW5jSGVscGVyO1xuIiwiY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc3RyaW5nID0gJzxsaSBjbGFzcz1cInByb2ZpbGVfX2dyb3VwLWl0ZW1cIiBpZD1cIicgKyB0aGlzLm1vZGVsLmdldCgnX2lkJyk7XG4gICAgc3RyaW5nICs9ICdcIj4gPGRpdiBjbGFzcz1cImRlbC14XCI+eDwvZGl2PiAnICsgdGhpcy5tb2RlbC5lc2NhcGUoJ25hbWUnKSArICc8L2xpPidcbiAgICB0aGlzLiRlbC5odG1sKHN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwSXRlbTtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgR3JvdXBzSW5kZXggZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9uICYmIHRoaXMuY29sbGVjdGlvbi5hZGQob3B0aW9ucy5jb2xsZWN0aW9uKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI2dyb3Vwcy1pbmRleC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayAuY2hlY2tib3gtcHJvcHJlXCI6IFwic2VsZWN0R3JvdXBcIixcbiAgICAgIFwic3VibWl0ICNuZXctZ3JvdXAtZm9ybVwiOiBcImFkZEdyb3VwXCIsXG4gICAgICBcInN1Ym1pdCAjZWRpdC1ncm91cC1mb3JtXCI6IFwic2F2ZUVkaXRcIixcbiAgICAgIFwiY2xpY2sgLmluZGV4X19vcHRpb25zX19kZWxldGVcIjogXCJkZWxldGVHcm91cHNcIixcbiAgICAgIFwiY2xpY2sgLmluZGV4X19vcHRpb25zX19lZGl0XCI6IFwiZWRpdEdyb3VwXCIsXG4gICAgfVxuICAgIHRoaXMuY291bnQgPSB0aGlzLmdyb3VwQ291bnQoKTtcbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe2NvdW50OiB0aGlzLmNvdW50fSkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgZ3JvdXAuZ2V0KCdfaWQnKTtcbiAgICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gPGRpdiBjbGFzcz1cImdyb3VwLW5hbWVcIj4nICsgZ3JvdXAuZXNjYXBlKCduYW1lJykgKyAnPC9kaXY+PC9saT4nXG4gICAgICB0aGlzLiRlbC5maW5kKCcuZ3JvdXBzLWluZGV4JykuYXBwZW5kKHN0cmluZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbGVjdEdyb3VwIChldmVudCkge1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgYWRkR3JvdXAgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICB0aGlzLmNyZWF0ZUdyb3VwKG5hbWUpO1xuICB9XG5cbiAgY3JlYXRlR3JvdXAgKG5hbWUpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi9ncm91cHMvJztcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBuYW1lfSk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6XCJQT1NUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlR3JvdXBzICgpIHtcbiAgICBsZXQgJGdyb3VwcyA9IHRoaXMuJGVsLmZpbmQoJ2xpLmFjdGl2ZScpO1xuICAgICRncm91cHMuZWFjaChmdW5jdGlvbiAoaWR4LCBncm91cCkge1xuICAgICAgbGV0IGlkID0gZ3JvdXAuaWRcbiAgICAgIHRoaXMuZGVsZXRlR3JvdXAoZ3JvdXAuaWQpO1xuICAgICAgdGhpcy4kZWwuZmluZCgnbGkjJyArIGlkKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY291bnQgLT0gMTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJy5pbmRleF9fY291bnQnKS5odG1sKHRoaXMuY291bnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cblxuICB9XG5cbiAgZGVsZXRlR3JvdXAgKGlkKSB7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvYWRtaW4vZ3JvdXBzLycgKyBpZDtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTpcIkRFTEVURVwiLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgIH0sXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZWRpdEdyb3VwIChldmVudCkge1xuICAgIGxldCAkZ3JvdXBzID0gdGhpcy4kZWwuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGdyb3VwKSB7XG4gICAgICBsZXQgJGdyb3VwTmFtZSA9ICQoZ3JvdXApLmZpbmQoJy5ncm91cC1uYW1lJyk7XG4gICAgICBpZiAoJGdyb3VwTmFtZS5oYXMoJ2Zvcm0nKS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGh0bWxTdHJpbmcgPSAnPGZvcm0gaWQ9XCJlZGl0LWdyb3VwLWZvcm1cIiBkYXRhLWlkPVwiJyArIGdyb3VwLmlkICsgJ1wiPjxpbnB1dCBjbGFzcz1cImdyb3VwLWVkaXQtaW5wdXRcIiB2YWx1ZT1cIidcbiAgICAgIGh0bWxTdHJpbmcgKz0gJGdyb3VwTmFtZS5odG1sKCkgKyAnXCI+PC9mb3JtPjxidXR0b24+PC9idXR0b24+JztcbiAgICAgICRncm91cE5hbWUuaHRtbChodG1sU3RyaW5nKTtcbiAgICAgIGxldCAkaW5wdXQgPSAkKGdyb3VwKS5maW5kKCcuZ3JvdXAtZWRpdC1pbnB1dCcpO1xuICAgICAgJGlucHV0LmF0dHIoJ3NpemUnLCAkaW5wdXQudmFsKCkubGVuZ3RoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2F2ZUVkaXQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICBsZXQgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRoaXMuc2F2ZUVkaXRBamF4KGlkLCBuYW1lKTtcbiAgICAvLyB0aGlzLmFqYXhSZXF1ZXN0KHtkYXRhOiBuYW1lLCB1cmxBZGQ6IH0pXG5cbiAgfVxuXG4gIHNhdmVFZGl0QWpheCAoaWQsIG5hbWUpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi9ncm91cHMvJztcbiAgICB1cmwgKz0gaWQ7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTogbmFtZX0pO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgIH0sXG4gICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBzdWNjZXNzOiB0aGF0LmVkaXRSZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZWRpdFJlbmRlciAocmVzcG9uc2UpIHtcbiAgICBsZXQgJGdyb3VwID0gdGhpcy4kZWwuZmluZCgnbGkjJyArIHJlc3BvbnNlLmRhdGEuX2lkKTtcbiAgICAkZ3JvdXAuZmluZCgnLmdyb3VwLW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgJGdyb3VwLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICB9XG5cblxuICByZWZyZXNoIChyZXNwb25zZSkge1xuICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiIGlkPVwiJyArIHJlc3BvbnNlLmRhdGEuX2lkO1xuICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gJyArIHJlc3BvbnNlLmRhdGEubmFtZSArICc8L2xpPidcbiAgICB0aGlzLiRlbC5maW5kKCcuZ3JvdXBzLWluZGV4JykuYXBwZW5kKHN0cmluZyk7XG4gICAgdGhpcy5jb3VudCArPSAxO1xuICAgIHRoaXMuJGVsLmZpbmQoJy5pbmRleF9fY291bnQnKS5odG1sKHRoaXMuY291bnQpO1xuICB9XG5cbiAgZ3JvdXBDb3VudCAoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmICghZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHNJbmRleDtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgR3JvdXBzTW9kYWwgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9uICYmIHRoaXMuY29sbGVjdGlvbi5hZGQob3B0aW9ucy5jb2xsZWN0aW9uKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI2dyb3Vwcy1tb2RhbC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayAuY2hlY2tib3gtcHJvcHJlXCI6IFwic2VsZWN0R3JvdXBcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgZ3JvdXAuZ2V0KCdfaWQnKTtcbiAgICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gJyArIGdyb3VwLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgICAgdGhpcy4kZWwuZmluZCgndWwnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0R3JvdXAgKGV2ZW50KSB7XG4gICAgLy8gJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHNNb2RhbDtcbiIsImNsYXNzIE5hdkJhciBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgdWxcIjogXCJjaGFuZ2VQYWdlXCIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGlkID0gXCIjbmF2YmFyLVwiICsgdGhpcy5wYWdlO1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLiRlbC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLiRlbC5maW5kKGlkKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy5jbGlja0V2ZW50cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlUGFnZSAoZXZlbnQpIHtcbiAgICBsZXQgJG5ld1BhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCB1cmwgPSAkbmV3UGFnZS5hdHRyKCdpZCcpLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjLycgKyB1cmwsIHt0cmlnZ2VyOiB0cnVlfSlcblxuICB9XG5cbiAgY2xpY2tFdmVudHMgKCkge1xuICAgIHRoaXMuJGVsLm9uKCdjbGljaycsICdsaScsIHRoaXMuY2hhbmdlUGFnZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5pbXBvcnQgVXNlclNob3cgZnJvbSBcIi4vdXNlcl9zaG93XCI7XG5cbmNsYXNzIFByb2ZpbGVTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBvcHRpb25zLmNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItcHJvZmlsZS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnc3VibWl0ICNwYXNzd29yZC1mb3JtJzogJ3VwZGF0ZVBhc3Nvd3JkJyxcbiAgICAgICdjbGljayAjZHJvcHpvbmUtcHJvZi1waWMnOiAnY2xlYXJab25lJyxcbiAgICB9XG5cbiAgICBEcm9wem9uZS5vcHRpb25zLmRyb3B6b25lUHJvZlBpYyA9IHtcbiAgICAgIG1heEZpbGVzaXplOiA0MDk2LFxuICAgICAgYWNjZXB0OiBmdW5jdGlvbiAoZmlsZSwgZG9uZSkge1xuICAgICAgICAkKGZpbGUucHJldmlld1RlbXBsYXRlKS5maW5kKCcuZHotc3VjY2Vzcy1tYXJrJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAkKGZpbGUucHJldmlld1RlbXBsYXRlKS5maW5kKCcuZHotZXJyb3ItbWFyaycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgJCgnLnByb2ZpbGVfX3BpYy13b3JkcycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNhdmUtcGljXCI+U2F2ZSBuZXcgcGhvdG88L2Rpdj4nKVxuICAgICAgICAkKCcuc2F2ZS1waWMnKS5vbignY2xpY2snLCB0aGF0LnNhdmVQaWN0dXJlLmJpbmQodGhhdCkpO1xuICAgICAgfSxcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWx9KSk7XG4gICAgbGV0IHN1YlZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB0aGlzLm1vZGVsLCBjb2xsZWN0aW9uczogdGhpcy5jb2xsZWN0aW9ucywgcHJvZmlsZTogdHJ1ZX0pO1xuICAgIHRoaXMuJGVsLmZpbmQoJy5wcm9maWxlLXVzZXItc2hvdycpLmFwcGVuZChzdWJWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgdGhpcy5zZXREcm9wem9uZSgpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBzZXREcm9wem9uZSAoKSB7XG4gICAgaWYgKHRoaXMucHJvZkRyb3B6b25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICgkKCcjZHJvcHpvbmUtcHJvZi1waWMnKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb2ZEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNkcm9wem9uZS1wcm9mLXBpY1wiLCB7dXJsOiBcIiNcIiwgYXV0b1Byb2Nlc3NRdWV1ZTogZmFsc2V9KTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5maW5kRHJvcEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmREcm9wRWxlbWVudCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zZXREcm9wem9uZSgpO1xuICAgICAgfSkuYmluZCh0aGlzKSwgMjAwKTtcbiAgICB9XG4gIH1cblxuXG4gIHNhdmVQaWN0dXJlICgpIHtcbiAgICBsZXQgJGltZyA9ICQoJy5kei1pbWFnZScpLmNoaWxkcmVuKCk7XG4gICAgbGV0IHBpY3R1cmUgPSAkaW1nLmF0dHIoJ3NyYycpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoe3BpY3R1cmU6IHBpY3R1cmV9KVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgfSxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgIHN1Y2Nlc3M6IHRoYXQucGljdHVyZVNhdmVkLmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgdXBkYXRlUGFzc293cmQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJCgnLnVzZXItZ3JvdXBzLW1vZGFsJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplSlNPTigpLnVzZXI7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIGFsZXJ0KFwiU3VjY8OocyFcIik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHBpY3R1cmVTYXZlZCAocmVzcG9uc2UpIHtcbiAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZV9fcGljJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5waWN0dXJlKTtcbiAgICB0aGlzLm1vZGVsLnNldCh7cGljdHVyZTogcmVzcG9uc2UuZGF0YS5waWN0dXJlfSk7XG4gICAgdGhpcy5jbGVhclpvbmUoKTtcblxuXG4gIH1cblxuICBjbGVhclpvbmUgKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCB8fCBldmVudC50YXJnZXQuaWQgPT09IFwiZHJvcHpvbmUtcHJvZi1waWNcIikge1xuICAgICAgdGhpcy4kZWwuZmluZCgnI2Ryb3B6b25lLXByb2YtcGljJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJy5zYXZlLXBpYycpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVNob3c7XG4iLCJjbGFzcyBVc2VySXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gb3B0aW9ucy5ncm91cHM7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLWl0ZW0tdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgLnVzZXItaXRlbV9fY2hlY2tib3hcIjogXCJzZWxlY3RJdGVtXCIsXG4gICAgICBcImNsaWNrIC51c2VyLWl0ZW1fX2dyb3Vwc19fZWRpdFwiOiBcImVkaXRVc2VyXCIsXG4gICAgIH1cbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3RyaW5nID0gXCIgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiwgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnVzZXItaXRlbV9fZ3JvdXBzX190ZXh0JykuYXBwZW5kKHN0cmluZyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0gKGV2ZW50KSB7XG4gICAgbGV0ICRib3ggPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICRib3guZmluZCgnZGl2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgZWRpdFVzZXIgKGV2ZW50KSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy8nICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckl0ZW07XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi91c2VyX3Nob3cnO1xuXG5jbGFzcyBVc2VyTmV3IGV4dGVuZHMgVXNlclNob3cge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcblxuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJzdWJtaXQgZm9ybVwiOiBcImNyZWF0ZVwiLFxuICAgICAgLy8gXCJrZXl1cCBpbnB1dFwiOiBcInN0b3JlRm9ybURhdGFcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcblxuICB9XG5cbiAgLy8gc3RvcmVGb3JtRGF0YSAoZXZlbnQpIHtcbiAgLy8gICBsZXQgdmFsdWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAvLyAgIGxldCBuYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lLnNsaWNlKDUsLTEpO1xuICAvLyAgIHRoaXMubW9kZWwuYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuICAvLyB9XG5cbiAgdXBkYXRlSW5mbyAoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuXG4gIGNyZWF0ZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplSlNPTigpLnVzZXI7XG4gICAgZGF0YS5ncm91cElkcyA9IHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvYWRtaW4vdXNlcnMnO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6XCJQT1NUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2ggKHJlc3BvbnNlKSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy8nICsgcmVzcG9uc2UuZGF0YS5faWQsIHt0cmlnZ2VyOiB0cnVlfSk7XG5cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5ldztcbiIsImltcG9ydCBTeW5jSGVscGVyIGZyb20gJy4uL3V0aWxzL3N5bmNfaGVscGVyJztcbmltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cF9pdGVtJztcbmltcG9ydCBHcm91cHNNb2RhbCBmcm9tICcuL2dyb3Vwc19tb2RhbCc7XG5cbmNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5wcm9maWxlID0gb3B0aW9ucy5wcm9maWxlO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnc3VibWl0ICNub3JtYWwtZm9ybSc6ICd1cGRhdGVJbmZvJyxcbiAgICAgICdjbGljayAuZGVsLXgnOiAnZGVsZXRlR3JvdXAnLFxuICAgICAgJ2NsaWNrICNncm91cHMtYnV0dG9uJzogXCJncm91cHNNb2RhbFwiLFxuICAgICAgXCJrZXl1cCBpbnB1dFwiOiBcInN0b3JlRm9ybURhdGFcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG5cbiAgc3RvcmVGb3JtRGF0YSAoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAgIGxldCBuYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lLnNsaWNlKDUsLTEpO1xuICAgIHRoaXMubW9kZWwuYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWwsIHByb2ZpbGU6IHRoaXMucHJvZmlsZX0pKTtcbiAgICBpZiAoIXRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cEl0ZW0oe21vZGVsOiBncm91cH0pXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy51c2VyLXNob3dfX2dyb3Vwcy1saXN0JykuYXBwZW5kKGdyb3VwVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuICB9XG5cbiAgdXBkYXRlSW5mbyAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmluTW9kYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVKU09OKCkudXNlcjtcbiAgICBkYXRhLmdyb3VwSWRzID0gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJyk7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycy8nO1xuICAgIHVybCArPSB0aGlzLm1vZGVsLmdldCgnX2lkJyk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoIChyZXNwb25zZSkge1xuICAgIGFsZXJ0KFwiU3VjY8OocyFcIilcbiAgICB0aGlzLm1vZGVsLnNldChyZXNwb25zZS5kYXRhKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBkZWxldGVHcm91cCAoZXZlbnQpIHtcbiAgICBsZXQgJGdyb3VwID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcbiAgICBsZXQgaWQgPSAkZ3JvdXAuYXR0cignaWQnKTtcbiAgICBsZXQgaWRzID0gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpZHNbaV0gPT0gaWQpIHtcbiAgICAgICAgICB0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMucmVtb3ZlKGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAkZ3JvdXAucmVtb3ZlKCk7XG4gIH1cblxuICBncm91cHNNb2RhbCAoKSB7XG4gICAgaWYgKHRoaXMuaW5Nb2RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluTW9kYWwgPSB0cnVlO1xuICAgIHRoaXMudG9nZ2xlQmx1cigpO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vbignY2xpY2snLCB0aGlzLmFkZEdyb3Vwcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZEdyb3VwcyAoZXZlbnQpIHtcbiAgICBsZXQgJGdyb3VwcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZ3JvdXApIHtcbiAgICAgIGlmICghdGhpcy5tb2RlbC5hdHRyaWJ1dGVzLmdyb3VwSWRzKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcyA9IFtncm91cC5pZF07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5pbmRleE9mKGdyb3VwLmlkKSA8IDApIHtcbiAgICAgICAgdGhpcy5tb2RlbC5hdHRyaWJ1dGVzLmdyb3VwSWRzLnB1c2goZ3JvdXAuaWQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVCbHVyKCk7XG4gICAgdGhpcy5pbk1vZGFsID0gZmFsc2U7XG4gICAgJCgnLnVzZXItZ3JvdXBzLWJ1dHRvbicpLm9mZignY2xpY2snKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgdG9nZ2xlQmx1ciAoKSB7XG4gICAgJCgnLmJsdXItd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuYmx1ci13cmFwcGVyLXN1YicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcudXNlci1ncm91cHMtbW9kYWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLW1vZGFsJykuZmluZCgnbGkuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNob3c7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IFVzZXJJdGVtIGZyb20gJy4vdXNlcl9pdGVtJztcblxuY2xhc3MgVXNlckluZGV4IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBVc2VycygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLnVzZXJzKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2Vycy1pbmRleC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuY291bnQgPSB0aGlzLnVzZXJDb3VudCgpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgJ2NsaWNrIC5pbmRleF9fb3B0aW9uc19fYWRkJzogJ2FkZFVzZXInLFxuICAgICAgJ2NsaWNrIC5pbmRleF9fb3B0aW9uc19fZGVsZXRlJzogJ2RlbGV0ZVVzZXJzJyxcbiAgICAgICdjbGljayAuaW5kZXhfX29wdGlvbnNfX2VkaXQnOiAnZWRpdFVzZXInLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe2NvdW50OiB0aGlzLmNvdW50fSkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBpZiAodXNlci5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCB1c2VyVmlldyA9IG5ldyBVc2VySXRlbSh7bW9kZWw6IHVzZXIsIGdyb3VwczogdGhpcy5ncm91cHN9KTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoXCIudXNlcnMtaW5kZXhcIikuYXBwZW5kKHVzZXJWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFVzZXIgKCkge1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvdXNlcnMvbmV3Jywge3RyaWdnZXI6IHRydWV9KVxuICB9XG5cbiAgZGVsZXRlVXNlcnMgKCkge1xuICAgIGxldCAkdXNlcnMgPSB0aGlzLiRlbC5maW5kKCcuYWN0aXZlJyk7XG4gICAgJHVzZXJzLmVhY2goZnVuY3Rpb24gKGlkeCwgdXNlcikge1xuICAgICAgbGV0IGlkID0gdXNlci5wYXJlbnRFbGVtZW50LmlkXG4gICAgICB0aGlzLmRlbGV0ZVVzZXIoaWQpO1xuICAgICAgdGhpcy4kZWwuZmluZCgndWwjJyArIGlkKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY291bnQgLT0gMTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJy5pbmRleF9fY291bnQnKS5odG1sKHRoaXMuY291bnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuXG4gIGRlbGV0ZVVzZXIgKGlkKSB7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvYWRtaW4vdXNlcnMvJyArIGlkO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6XCJERUxFVEVcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICB9LFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIGVkaXRVc2VyICgpIHtcbiAgICBsZXQgJHVzZXJzID0gdGhpcy4kZWwuZmluZCgnLmFjdGl2ZScpO1xuICAgIGxldCAkdXNlciA9ICR1c2Vycy5maXJzdCgpLnBhcmVudCgpO1xuICAgIGlmICgkdXNlci5hdHRyKCdpZCcpKSB7XG4gICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKFwiIy91c2Vycy9cIiArICR1c2VyLmF0dHIoJ2lkJykpO1xuICAgIH1cbiAgICAvLyAkdXNlcnMuZWFjaChmdW5jdGlvbiAoaWR4LCB1c2VyKSB7XG4gICAgLy8gICBsZXQgaWQgPSB1c2VyLnBhcmVudEVsZW1lbnQuaWRcbiAgICAvLyAgIHRoaXMuZGVsZXRlVXNlcihpZCk7XG4gICAgLy8gICB0aGlzLiRlbC5maW5kKCd1bCMnICsgaWQpLnJlbW92ZSgpO1xuICAgIC8vICAgdGhpcy5jb3VudCAtPSAxO1xuICAgIC8vICAgdGhpcy4kZWwuZmluZCgnLmluZGV4X19jb3VudCcpLmh0bWwodGhpcy5jb3VudCk7XG4gICAgLy8gfS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgdXNlckNvdW50ICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBpZiAoIXVzZXIuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5kZXg7XG4iXX0=

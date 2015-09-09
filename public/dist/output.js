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
      debugger;
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
    key: 'clearZone',
    value: function clearZone(event) {
      if (event.target.id === "dropzone-prof-pic") {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9ncm91cHNfaW5kZXguanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBzX21vZGFsLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL25hdl9iYXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvcHJvZmlsZV9zaG93LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX25ldy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX3Nob3cuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcnNfaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDQW1CLGtCQUFrQjs7OzswQkFDcEIsZUFBZTs7OztnQ0FDZCxxQkFBcUI7Ozs7SUFFakMsU0FBUyxHQUVELFNBRlIsU0FBUyxHQUVFO3dCQUZYLFNBQVM7O0FBR1gsVUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsV0FBTyxFQUFFLEVBQUMsZUFBZSxFQUFFLDZDQUE2QyxFQUFDO0dBQzVFLENBQUMsQ0FBQztBQUNILGlDQUFXO0FBQ1QsV0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkIsV0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7R0FDbkIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7QUFHSCxDQUFDLENBQUMsWUFBTTs7QUFFTixPQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDMUMsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUEsR0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbkQsV0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDdkMsV0FBTyxDQUFDLENBQUMsUUFB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LGtCQUFVLEVBQUUsb0JBQVUsT0FBTyxFQUM3QjtBQUNJLGlCQUFPLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7U0FDNUY7QUFDRCxXQUFHLEVBQUUsR0FBRztBQUNSLGFBQUssRUFBRSxlQUFTLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQ3ZELGVBQUssQ0FBQywrQ0FBK0MsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1NBQzFGO09BQ0YsQ0FBQyxDQUFDO0tBQ047OztXQUdRLG9CQUFHO0FBQ1YsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEMsVUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFVBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNwQixnQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUMxRDs7Ozs7Ozs7S0FTRjs7O1dBRVMscUJBQUc7QUFDWCxVQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUNuQyxZQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUMxQixlQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1o7T0FDRixDQUFDLENBQUM7QUFDSCxhQUFPLEtBQUssQ0FBQztLQUNkOzs7U0F6RkcsU0FBUztHQUFTLFFBQVEsQ0FBQyxJQUFJOztxQkErRnRCLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vY29sbGVjdGlvbnMvdXNlcnMnO1xuXG5jbGFzcyBCdXR0ZXJmbHkge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbicgOidCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJ31cbiAgICB9KTtcbiAgICBuZXcgUm91dGVyKHtcbiAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICB9KTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG4gIH1cbn1cblxuJCgoKSA9PiB7XG5cbiAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gICAgdmFyIHJlc3QgPSB0aGlzLnNsaWNlKCh0byB8fCBmcm9tKSArIDEgfHwgdGhpcy5sZW5ndGgpO1xuICAgIHRoaXMubGVuZ3RoID0gZnJvbSA8IDAgPyB0aGlzLmxlbmd0aCArIGZyb20gOiBmcm9tO1xuICAgIHJldHVybiB0aGlzLnB1c2guYXBwbHkodGhpcywgcmVzdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9hZFByb21pc2UoZmlsZU5hbWUsIGlkKSB7XG4gICAgcmV0dXJuICQuRGVmZXJyZWQoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgJChpZCkubG9hZChmaWxlTmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLnByb21pc2UoKTtcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IFsgXTtcblxuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJfc2hvdy5qc3QuZWpzJywgJyN1c2VyLXNob3ctdGVtcGxhdGUtaG9sZGVyJykgKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2VyX3Byb2ZpbGUuanN0LmVqcycsICcjdXNlci1wcm9mLXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2Vyc19pbmRleC5qc3QuZWpzJywgJyN1c2Vycy1pbmRleC10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcl9pdGVtLmpzdC5lanMnLCAnI3VzZXItaXRlbS10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvbmF2X2Jhci5qc3QuZWpzJywgJyNuYXYtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL2dyb3Vwc19tb2RhbC5qc3QuZWpzJywgJyNncm91cHMtbW9kYWwtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL2dyb3Vwc19pbmRleC5qc3QuZWpzJywgJyNncm91cHMtaW5kZXgtdGVtcGxhdGUtaG9sZGVyJykpO1xuXG4gICQud2hlbi5hcHBseSggdGhpcywgcHJvbWlzZXMgKS5kb25lKCBmdW5jdGlvbigpIHtcbiAgICAgIG5ldyBCdXR0ZXJmbHkoKTtcbiAgfSk7XG5cbn0pO1xuIiwiaW1wb3J0IEdyb3VwIGZyb20gJy4uL21vZGVscy9ncm91cCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIEJhY2tib25lLkNvbGxlY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICAgIHRoaXMubW9kZWwgPSBHcm91cDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIEJhY2tib25lLkNvbGxlY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICAgIHRoaXMubW9kZWwgPSBVc2VyO1xuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG4iLCJjbGFzcyBHcm91cCBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAgIHVybFJvb3QgKCkge1xuICAgICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgLy8gQ2FuJ3QgdXNlIGNvbnN0cnVjdG9yIGhlcmUgYXMgaXQgb3ZlcndyaXRlcyBzb21lIGFzc2lnbm1lbnQgYnkgcGFyYW1ldGVycyBwcm9wZXJ0eVxuICAgIC8vIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyAgIHN1cGVyKCk7XG4gICAgLy8gICB0aGlzLnVybFJvb3QgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgIC8vICAgXG4gICAgLy8gfVxuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL3ZpZXdzL25hdl9iYXInO1xuaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gJy4uL3ZpZXdzL3VzZXJfc2hvdyc7XG5pbXBvcnQgVXNlck5ldyBmcm9tICcuLi92aWV3cy91c2VyX25ldyc7XG5pbXBvcnQgUHJvZmlsZVNob3cgZnJvbSAnLi4vdmlld3MvcHJvZmlsZV9zaG93JztcbmltcG9ydCBVc2Vyc0luZGV4IGZyb20gJy4uL3ZpZXdzL3VzZXJzX2luZGV4JztcbmltcG9ydCBHcm91cHNJbmRleCBmcm9tICcuLi92aWV3cy9ncm91cHNfaW5kZXgnO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4uL3ZpZXdzL2dyb3Vwc19tb2RhbCc7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnN5bmNIZWxwZXIgPSBuZXcgU3luY0hlbHBlcigpO1xuICAgIHRoaXMucm91dGVzID0ge1wiXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJwcm9maWxlXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJ1c2Vyc1wiOiAgIFwidXNlcnNcIixcbiAgICAgIFwidXNlcnMvbmV3XCI6IFwidXNlck5ld1wiLFxuICAgICAgXCJ1c2Vycy86aWRcIjogXCJ1c2VyU2hvd1wiLFxuICAgICAgXCJncm91cHNcIjogIFwiZ3JvdXBzXCIsXG4gICAgfTtcbiAgICB0aGlzLl9iaW5kUm91dGVzKClcbiAgfVxuXG4gIHByb2ZpbGUgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdXNlci5mZXRjaCgpO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuZ3JvdXBzKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFByb2ZpbGVTaG93KHttb2RlbDogdXNlciwgY29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICdwcm9maWxlJyk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJzICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2Vyc0luZGV4KHtjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJyk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJTaG93IChpZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIodGhhdC5nZXRVc2VyKGlkLCBkYXRhKSk7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKVxuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJylcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJOZXcgKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2VyTmV3KHttb2RlbDogdXNlciwgY29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIGxldCBncm91cHNWaWV3ID0gbmV3IEdyb3Vwc01vZGFsKHtjb2xsZWN0aW9uOiBkYXRhLmdyb3Vwc30pO1xuICAgICAgJCgnLmdyb3Vwcy1tb2RhbCcpLmh0bWwoZ3JvdXBzVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJyk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgR3JvdXBzSW5kZXgoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAnZ3JvdXBzJyk7XG4gICAgfSk7XG4gIH1cblxuICBzd2FwVmlld3MgKHZpZXcsIHBhZ2UpIHtcbiAgICB0aGlzLl9uYXYgPSBuZXcgTmF2QmFyKHtwYWdlOiBwYWdlfSk7XG4gICAgdGhpcy4kbmF2QmFyLmh0bWwodGhpcy5fbmF2LnJlbmRlcigpLiRlbCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgJiYgdGhpcy5fY3VycmVudFZpZXcucmVtb3ZlKCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB2aWV3O1xuICAgIHRoaXMuJHJvb3RFbC5odG1sKHZpZXcucmVuZGVyKCkuJGVsKTtcbiAgfVxuXG5cbiAgZ2V0VXNlciAoaWQsIGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBkYXRhLnVzZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh1c2Vyc1tpXS5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB1c2Vyc1tpXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBVc2VycyBmcm9tICcuLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIFN5bmNIZWxwZXIge1xuXG4gIHVzZXJzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldFVzZXJzKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRHcm91cHMpO1xuICB9XG5cbiAgc3luY0RhdGEgKGNhbGxiYWNrKSB7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdWNjZXNzOiBjYWxsYmFjayxcbiAgICAgICAgfSlcbiAgfVxuXG4gIGdldFVzZXJzIChkYXRhKSB7XG4gICAgbGV0IHVzZXJzID0gbmV3IFVzZXJzKCk7XG4gICAgdXNlcnMuYWRkKGRhdGEudXNlcnMpO1xuICAgIHJldHVybiB1c2VycztcbiAgfVxuXG4gIGdldEdyb3VwcyAoZGF0YSkge1xuICAgIGxldCBncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgZ3JvdXBzLmFkZChkYXRhLmdyb3Vwcyk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNIZWxwZXI7XG4iLCJjbGFzcyBHcm91cEl0ZW0gZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiIGlkPVwiJyArIHRoaXMubW9kZWwuZ2V0KCdfaWQnKTtcbiAgICBzdHJpbmcgKz0gJ1wiPiA8ZGl2IGNsYXNzPVwiZGVsLXhcIj54PC9kaXY+ICcgKyB0aGlzLm1vZGVsLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgIHRoaXMuJGVsLmh0bWwoc3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBJdGVtO1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBHcm91cHNJbmRleCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb24pO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjZ3JvdXBzLWluZGV4LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIC5jaGVja2JveC1wcm9wcmVcIjogXCJzZWxlY3RHcm91cFwiLFxuICAgICAgXCJzdWJtaXQgI25ldy1ncm91cC1mb3JtXCI6IFwiYWRkR3JvdXBcIixcbiAgICAgIFwic3VibWl0ICNlZGl0LWdyb3VwLWZvcm1cIjogXCJzYXZlRWRpdFwiLFxuICAgICAgXCJjbGljayAuaW5kZXhfX29wdGlvbnNfX2RlbGV0ZVwiOiBcImRlbGV0ZUdyb3Vwc1wiLFxuICAgICAgXCJjbGljayAuaW5kZXhfX29wdGlvbnNfX2VkaXRcIjogXCJlZGl0R3JvdXBcIixcbiAgICB9XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuZ3JvdXBDb3VudCgpO1xuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7Y291bnQ6IHRoaXMuY291bnR9KSk7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc3RyaW5nID0gJzxsaSBjbGFzcz1cInByb2ZpbGVfX2dyb3VwLWl0ZW1cIiBpZD1cIicgKyBncm91cC5nZXQoJ19pZCcpO1xuICAgICAgc3RyaW5nICs9ICdcIj4gPGRpdiBjbGFzcz1cImNoZWNrYm94LXByb3ByZVwiPjwvZGl2PiA8ZGl2IGNsYXNzPVwiZ3JvdXAtbmFtZVwiPicgKyBncm91cC5lc2NhcGUoJ25hbWUnKSArICc8L2Rpdj48L2xpPidcbiAgICAgIHRoaXMuJGVsLmZpbmQoJy5ncm91cHMtaW5kZXgnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0R3JvdXAgKGV2ZW50KSB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxuICBhZGRHcm91cCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIHRoaXMuY3JlYXRlR3JvdXAobmFtZSk7XG4gIH1cblxuICBjcmVhdGVHcm91cCAobmFtZSkge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL2dyb3Vwcy8nO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoe25hbWU6IG5hbWV9KTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgc3VjY2VzczogdGhhdC5yZWZyZXNoLmJpbmQodGhpcyksXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVHcm91cHMgKCkge1xuICAgIGxldCAkZ3JvdXBzID0gdGhpcy4kZWwuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGdyb3VwKSB7XG4gICAgICBsZXQgaWQgPSBncm91cC5pZFxuICAgICAgdGhpcy5kZWxldGVHcm91cChncm91cC5pZCk7XG4gICAgICB0aGlzLiRlbC5maW5kKCdsaSMnICsgaWQpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jb3VudCAtPSAxO1xuICAgICAgdGhpcy4kZWwuZmluZCgnLmluZGV4X19jb3VudCcpLmh0bWwodGhpcy5jb3VudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuXG4gIH1cblxuICBkZWxldGVHcm91cCAoaWQpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi9ncm91cHMvJyArIGlkO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOlwiREVMRVRFXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgfSxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlZGl0R3JvdXAgKGV2ZW50KSB7XG4gICAgbGV0ICRncm91cHMgPSB0aGlzLiRlbC5maW5kKCdsaS5hY3RpdmUnKTtcbiAgICAkZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGlkeCwgZ3JvdXApIHtcbiAgICAgIGxldCAkZ3JvdXBOYW1lID0gJChncm91cCkuZmluZCgnLmdyb3VwLW5hbWUnKTtcbiAgICAgIGlmICgkZ3JvdXBOYW1lLmhhcygnZm9ybScpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaHRtbFN0cmluZyA9ICc8Zm9ybSBpZD1cImVkaXQtZ3JvdXAtZm9ybVwiIGRhdGEtaWQ9XCInICsgZ3JvdXAuaWQgKyAnXCI+PGlucHV0IGNsYXNzPVwiZ3JvdXAtZWRpdC1pbnB1dFwiIHZhbHVlPVwiJ1xuICAgICAgaHRtbFN0cmluZyArPSAkZ3JvdXBOYW1lLmh0bWwoKSArICdcIj48L2Zvcm0+PGJ1dHRvbj48L2J1dHRvbj4nO1xuICAgICAgJGdyb3VwTmFtZS5odG1sKGh0bWxTdHJpbmcpO1xuICAgICAgbGV0ICRpbnB1dCA9ICQoZ3JvdXApLmZpbmQoJy5ncm91cC1lZGl0LWlucHV0Jyk7XG4gICAgICAkaW5wdXQuYXR0cignc2l6ZScsICRpbnB1dC52YWwoKS5sZW5ndGgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzYXZlRWRpdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgdGhpcy5zYXZlRWRpdEFqYXgoaWQsIG5hbWUpO1xuICAgIC8vIHRoaXMuYWpheFJlcXVlc3Qoe2RhdGE6IG5hbWUsIHVybEFkZDogfSlcblxuICB9XG5cbiAgc2F2ZUVkaXRBamF4IChpZCwgbmFtZSkge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL2dyb3Vwcy8nO1xuICAgIHVybCArPSBpZDtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBuYW1lfSk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgfSxcbiAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHN1Y2Nlc3M6IHRoYXQuZWRpdFJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlZGl0UmVuZGVyIChyZXNwb25zZSkge1xuICAgIGxldCAkZ3JvdXAgPSB0aGlzLiRlbC5maW5kKCdsaSMnICsgcmVzcG9uc2UuZGF0YS5faWQpO1xuICAgICRncm91cC5maW5kKCcuZ3JvdXAtbmFtZScpLmh0bWwocmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH1cblxuXG4gIHJlZnJlc2ggKHJlc3BvbnNlKSB7XG4gICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgcmVzcG9uc2UuZGF0YS5faWQ7XG4gICAgc3RyaW5nICs9ICdcIj4gPGRpdiBjbGFzcz1cImNoZWNrYm94LXByb3ByZVwiPjwvZGl2PiAnICsgcmVzcG9uc2UuZGF0YS5uYW1lICsgJzwvbGk+J1xuICAgIHRoaXMuJGVsLmZpbmQoJy5ncm91cHMtaW5kZXgnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgdGhpcy4kZWwuZmluZCgnLmluZGV4X19jb3VudCcpLmh0bWwodGhpcy5jb3VudCk7XG4gIH1cblxuICBncm91cENvdW50ICgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKCFncm91cC5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc0luZGV4O1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBHcm91cHNNb2RhbCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb24pO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjZ3JvdXBzLW1vZGFsLXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIC5jaGVja2JveC1wcm9wcmVcIjogXCJzZWxlY3RHcm91cFwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc3RyaW5nID0gJzxsaSBjbGFzcz1cInByb2ZpbGVfX2dyb3VwLWl0ZW1cIiBpZD1cIicgKyBncm91cC5nZXQoJ19pZCcpO1xuICAgICAgc3RyaW5nICs9ICdcIj4gPGRpdiBjbGFzcz1cImNoZWNrYm94LXByb3ByZVwiPjwvZGl2PiAnICsgZ3JvdXAuZXNjYXBlKCduYW1lJykgKyAnPC9saT4nXG4gICAgICB0aGlzLiRlbC5maW5kKCd1bCcpLmFwcGVuZChzdHJpbmcpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWxlY3RHcm91cCAoZXZlbnQpIHtcbiAgICAvLyAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc01vZGFsO1xuIiwiY2xhc3MgTmF2QmFyIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZSA9IG9wdGlvbnMucGFnZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI25hdi10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayB1bFwiOiBcImNoYW5nZVBhZ2VcIixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgaWQgPSBcIiNuYXZiYXItXCIgKyB0aGlzLnBhZ2U7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuJGVsLmZpbmQoaWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLmNsaWNrRXZlbnRzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VQYWdlIChldmVudCkge1xuICAgIGxldCAkbmV3UGFnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IHVybCA9ICRuZXdQYWdlLmF0dHIoJ2lkJykuc3BsaXQoXCItXCIpWzFdO1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvJyArIHVybCwge3RyaWdnZXI6IHRydWV9KVxuXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cF9pdGVtJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tIFwiLi91c2VyX3Nob3dcIjtcblxuY2xhc3MgUHJvZmlsZVNob3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IG9wdGlvbnMuY29sbGVjdGlvbnM7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1wcm9maWxlLXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICdzdWJtaXQgI3Bhc3N3b3JkLWZvcm0nOiAndXBkYXRlUGFzc293cmQnLFxuICAgICAgJ2NsaWNrICNkcm9wem9uZS1wcm9mLXBpYyc6ICdjbGVhclpvbmUnLFxuICAgIH1cblxuICAgIERyb3B6b25lLm9wdGlvbnMuZHJvcHpvbmVQcm9mUGljID0ge1xuICAgICAgbWF4RmlsZXNpemU6IDQwOTYsXG4gICAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmaWxlLCBkb25lKSB7XG4gICAgICAgICQoZmlsZS5wcmV2aWV3VGVtcGxhdGUpLmZpbmQoJy5kei1zdWNjZXNzLW1hcmsnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICQoZmlsZS5wcmV2aWV3VGVtcGxhdGUpLmZpbmQoJy5kei1lcnJvci1tYXJrJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAkKCcucHJvZmlsZV9fcGljLXdvcmRzJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2F2ZS1waWNcIj5TYXZlIG5ldyBwaG90bzwvZGl2PicpXG4gICAgICAgICQoJy5zYXZlLXBpYycpLm9uKCdjbGljaycsIHRoYXQuc2F2ZVBpY3R1cmUuYmluZCh0aGF0KSk7XG4gICAgICB9LFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgc3ViVmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHRoaXMubW9kZWwsIGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLCBwcm9maWxlOiB0cnVlfSk7XG4gICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGUtdXNlci1zaG93JykuYXBwZW5kKHN1YlZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLnNldERyb3B6b25lKCk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHNldERyb3B6b25lICgpIHtcbiAgICBpZiAodGhpcy5wcm9mRHJvcHpvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCQoJyNkcm9wem9uZS1wcm9mLXBpYycpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvZkRyb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2Ryb3B6b25lLXByb2YtcGljXCIsIHt1cmw6IFwiI1wiLCBhdXRvUHJvY2Vzc1F1ZXVlOiBmYWxzZX0pO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZpbmREcm9wRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluZERyb3BFbGVtZW50ID0gd2luZG93LnNldEludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLnNldERyb3B6b25lKCk7XG4gICAgICB9KS5iaW5kKHRoaXMpLCAyMDApO1xuICAgIH1cbiAgfVxuXG5cbiAgc2F2ZVBpY3R1cmUgKCkge1xuICAgIGxldCAkaW1nID0gJCgnLmR6LWltYWdlJykuY2hpbGRyZW4oKTtcbiAgICBsZXQgcGljdHVyZSA9ICRpbWcuYXR0cignc3JjJyk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcidcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7cGljdHVyZTogcGljdHVyZX0pXG4gICAgZGVidWdnZXI7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG5cblxuXG4gIHVwZGF0ZVBhc3Nvd3JkIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQoJy51c2VyLWdyb3Vwcy1tb2RhbCcpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUpTT04oKS51c2VyO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICBhbGVydChcIlN1Y2PDqHMhXCIpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbGVhclpvbmUgKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkcm9wem9uZS1wcm9mLXBpY1wiKSB7XG4gICAgICB0aGlzLiRlbC5maW5kKCcjZHJvcHpvbmUtcHJvZi1waWMnKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgdGhpcy4kZWwuZmluZCgnLnNhdmUtcGljJykucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU2hvdztcbiIsImNsYXNzIFVzZXJJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBvcHRpb25zLmdyb3VwcztcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItaXRlbS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayAudXNlci1pdGVtX19jaGVja2JveFwiOiBcInNlbGVjdEl0ZW1cIixcbiAgICAgIFwiY2xpY2sgLnVzZXItaXRlbV9fZ3JvdXBzX19lZGl0XCI6IFwiZWRpdFVzZXJcIixcbiAgICAgfVxuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIGxldCBjb3VudCA9IDBcbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgc3RyaW5nID0gXCJcIlxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiBcIiArIGdyb3VwLmVzY2FwZSgnbmFtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0cmluZyA9IFwiLCBcIiArIGdyb3VwLmVzY2FwZSgnbmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgY291bnQgKz0gMVxuICAgICAgICB0aGlzLiRlbC5maW5kKCcudXNlci1pdGVtX19ncm91cHNfX3RleHQnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGw7XG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuICB9XG5cbiAgc2VsZWN0SXRlbSAoZXZlbnQpIHtcbiAgICBsZXQgJGJveCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgJGJveC5maW5kKCdkaXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxuICBlZGl0VXNlciAoZXZlbnQpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjL3VzZXJzLycgKyB0aGlzLm1vZGVsLmdldCgnX2lkJyksIHt0cmlnZ2VyOiB0cnVlfSk7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySXRlbTtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cF9pdGVtJztcbmltcG9ydCBVc2VyU2hvdyBmcm9tICcuL3VzZXJfc2hvdyc7XG5cbmNsYXNzIFVzZXJOZXcgZXh0ZW5kcyBVc2VyU2hvdyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuXG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1zaG93LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcInN1Ym1pdCBmb3JtXCI6IFwiY3JlYXRlXCIsXG4gICAgICAvLyBcImtleXVwIGlucHV0XCI6IFwic3RvcmVGb3JtRGF0YVwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuXG4gIH1cblxuICAvLyBzdG9yZUZvcm1EYXRhIChldmVudCkge1xuICAvLyAgIGxldCB2YWx1ZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG4gIC8vICAgbGV0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWUuc2xpY2UoNSwtMSk7XG4gIC8vICAgdGhpcy5tb2RlbC5hdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG4gIC8vIH1cblxuICB1cGRhdGVJbmZvICgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG5cbiAgY3JlYXRlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVKU09OKCkudXNlcjtcbiAgICBkYXRhLmdyb3VwSWRzID0gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJyk7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycyc7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICB9LFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgICAgc3VjY2VzczogdGhhdC5yZWZyZXNoLmJpbmQodGhpcyksXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaCAocmVzcG9uc2UpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjL3VzZXJzLycgKyByZXNwb25zZS5kYXRhLl9pZCwge3RyaWdnZXI6IHRydWV9KTtcblxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmV3O1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4vZ3JvdXBzX21vZGFsJztcblxuY2xhc3MgVXNlclNob3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICB0aGlzLnByb2ZpbGUgPSBvcHRpb25zLnByb2ZpbGU7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1zaG93LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICdzdWJtaXQgI25vcm1hbC1mb3JtJzogJ3VwZGF0ZUluZm8nLFxuICAgICAgJ2NsaWNrIC5kZWwteCc6ICdkZWxldGVHcm91cCcsXG4gICAgICAnY2xpY2sgI2dyb3Vwcy1idXR0b24nOiBcImdyb3Vwc01vZGFsXCIsXG4gICAgICBcImtleXVwIGlucHV0XCI6IFwic3RvcmVGb3JtRGF0YVwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cblxuICBzdG9yZUZvcm1EYXRhIChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG4gICAgbGV0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWUuc2xpY2UoNSwtMSk7XG4gICAgdGhpcy5tb2RlbC5hdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbCwgcHJvZmlsZTogdGhpcy5wcm9maWxlfSkpO1xuICAgIGlmICghdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwSXRlbSh7bW9kZWw6IGdyb3VwfSlcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnVzZXItc2hvd19fZ3JvdXBzLWxpc3QnKS5hcHBlbmQoZ3JvdXBWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsXG4gICAgdGhpcy5ncm91cHMuZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGlmIChncm91cC5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cC5nZXQoJ19pZCcpID09PSBpZCkge1xuICAgICAgICB0YXJnZXRHcm91cCA9IGdyb3VwO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGFyZ2V0R3JvdXA7XG4gIH1cblxuICB1cGRhdGVJbmZvIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuaW5Nb2RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUpTT04oKS51c2VyO1xuICAgIGRhdGEuZ3JvdXBJZHMgPSB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKTtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL3VzZXJzLyc7XG4gICAgdXJsICs9IHRoaXMubW9kZWwuZ2V0KCdfaWQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2ggKHJlc3BvbnNlKSB7XG4gICAgYWxlcnQoXCJTdWNjw6hzIVwiKVxuICAgIHRoaXMubW9kZWwuc2V0KHJlc3BvbnNlLmRhdGEpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGRlbGV0ZUdyb3VwIChldmVudCkge1xuICAgIGxldCAkZ3JvdXAgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xuICAgIGxldCBpZCA9ICRncm91cC5hdHRyKCdpZCcpO1xuICAgIGxldCBpZHMgPSB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlkc1tpXSA9PSBpZCkge1xuICAgICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5yZW1vdmUoaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgICRncm91cC5yZW1vdmUoKTtcbiAgfVxuXG4gIGdyb3Vwc01vZGFsICgpIHtcbiAgICBpZiAodGhpcy5pbk1vZGFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5Nb2RhbCA9IHRydWU7XG4gICAgdGhpcy50b2dnbGVCbHVyKCk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLWJ1dHRvbicpLm9uKCdjbGljaycsIHRoaXMuYWRkR3JvdXBzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkR3JvdXBzIChldmVudCkge1xuICAgIGxldCAkZ3JvdXBzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS5maW5kKCdsaS5hY3RpdmUnKTtcbiAgICAkZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBncm91cCkge1xuICAgICAgaWYgKCF0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5hdHRyaWJ1dGVzLmdyb3VwSWRzID0gW2dyb3VwLmlkXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5hdHRyaWJ1dGVzLmdyb3VwSWRzLmluZGV4T2YoZ3JvdXAuaWQpIDwgMCkge1xuICAgICAgICB0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMucHVzaChncm91cC5pZCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRvZ2dsZUJsdXIoKTtcbiAgICB0aGlzLmluTW9kYWwgPSBmYWxzZTtcbiAgICAkKCcudXNlci1ncm91cHMtYnV0dG9uJykub2ZmKCdjbGljaycpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB0b2dnbGVCbHVyICgpIHtcbiAgICAkKCcuYmx1ci13cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5ibHVyLXdyYXBwZXItc3ViJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy51c2VyLWdyb3Vwcy1tb2RhbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcudXNlci1ncm91cHMtbW9kYWwnKS5maW5kKCdsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2hvdztcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBVc2VycyBmcm9tICcuLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgVXNlckl0ZW0gZnJvbSAnLi91c2VyX2l0ZW0nO1xuXG5jbGFzcyBVc2VySW5kZXggZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IFVzZXJzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmNvbGxlY3Rpb24uYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMudXNlcnMpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXJzLWluZGV4LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMudXNlckNvdW50KCk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnY2xpY2sgLmluZGV4X19vcHRpb25zX19hZGQnOiAnYWRkVXNlcicsXG4gICAgICAnY2xpY2sgLmluZGV4X19vcHRpb25zX19kZWxldGUnOiAnZGVsZXRlVXNlcnMnLFxuICAgICAgJ2NsaWNrIC5pbmRleF9fb3B0aW9uc19fZWRpdCc6ICdlZGl0VXNlcicsXG4gICAgfVxuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7Y291bnQ6IHRoaXMuY291bnR9KSk7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICh1c2VyLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHVzZXJWaWV3ID0gbmV3IFVzZXJJdGVtKHttb2RlbDogdXNlciwgZ3JvdXBzOiB0aGlzLmdyb3Vwc30pO1xuICAgICAgdGhpcy4kZWwuZmluZChcIi51c2Vycy1pbmRleFwiKS5hcHBlbmQodXNlclZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVXNlciAoKSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy9uZXcnLCB7dHJpZ2dlcjogdHJ1ZX0pXG4gIH1cblxuICBkZWxldGVVc2VycyAoKSB7XG4gICAgbGV0ICR1c2VycyA9IHRoaXMuJGVsLmZpbmQoJy5hY3RpdmUnKTtcbiAgICAkdXNlcnMuZWFjaChmdW5jdGlvbiAoaWR4LCB1c2VyKSB7XG4gICAgICBsZXQgaWQgPSB1c2VyLnBhcmVudEVsZW1lbnQuaWRcbiAgICAgIHRoaXMuZGVsZXRlVXNlcihpZCk7XG4gICAgICB0aGlzLiRlbC5maW5kKCd1bCMnICsgaWQpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jb3VudCAtPSAxO1xuICAgICAgdGhpcy4kZWwuZmluZCgnLmluZGV4X19jb3VudCcpLmh0bWwodGhpcy5jb3VudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG5cbiAgZGVsZXRlVXNlciAoaWQpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycy8nICsgaWQ7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIkRFTEVURVwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgZWRpdFVzZXIgKCkge1xuICAgIGxldCAkdXNlcnMgPSB0aGlzLiRlbC5maW5kKCcuYWN0aXZlJyk7XG4gICAgbGV0ICR1c2VyID0gJHVzZXJzLmZpcnN0KCkucGFyZW50KCk7XG4gICAgaWYgKCR1c2VyLmF0dHIoJ2lkJykpIHtcbiAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoXCIjL3VzZXJzL1wiICsgJHVzZXIuYXR0cignaWQnKSk7XG4gICAgfVxuICAgIC8vICR1c2Vycy5lYWNoKGZ1bmN0aW9uIChpZHgsIHVzZXIpIHtcbiAgICAvLyAgIGxldCBpZCA9IHVzZXIucGFyZW50RWxlbWVudC5pZFxuICAgIC8vICAgdGhpcy5kZWxldGVVc2VyKGlkKTtcbiAgICAvLyAgIHRoaXMuJGVsLmZpbmQoJ3VsIycgKyBpZCkucmVtb3ZlKCk7XG4gICAgLy8gICB0aGlzLmNvdW50IC09IDE7XG4gICAgLy8gICB0aGlzLiRlbC5maW5kKCcuaW5kZXhfX2NvdW50JykuaHRtbCh0aGlzLmNvdW50KTtcbiAgICAvLyB9LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICB1c2VyQ291bnQgKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICghdXNlci5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmRleDtcbiJdfQ==

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
      return 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups';
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

    //The url is for the default "current user", not users in general
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
      $.when(this.syncHelper.syncData()).done((function (data) {
        var view = new _viewsUsers_index2['default']({ collections: data });
        this.swapViews(view, 'users');
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
      }).bind(this));
    }
  }, {
    key: 'userShow',
    value: function userShow(id) {
      $.when(this.syncHelper.syncData()).done((function (data) {
        var user = new _modelsUser2['default'](that.getUser(id, data));
        var view = new _viewsUser_show2['default']({ model: user, collections: data });
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
        this.swapViews(view, 'users');
      }).bind(this));
    }
  }, {
    key: 'userNew',
    value: function userNew() {
      var user = new _modelsUser2['default']();
      $.when(this.syncHelper.syncData()).done((function (data) {
        var view = new _viewsUser_new2['default']({ model: user, collections: data });
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
        this.swapViews(view, 'users');
      }).bind(this));
    }
  }, {
    key: 'groups',
    value: function groups(_groups) {
      $.when(this.syncHelper.syncData()).done((function (data) {
        var view = new _viewsGroups_index2['default']({ collection: data.groups });
        this.swapViews(view, 'groups');
      }).bind(this));
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
      "click .index__options__edit": "renderEdit"
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
      $.ajax({
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        data: dataString,
        url: url,
        success: this.refresh.bind(this),
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
    key: "renderEdit",
    value: function renderEdit(event) {
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
      var url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/' + id;
      var dataString = JSON.stringify({ name: name });
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        data: dataString,
        url: url,
        success: this.renderSavedEdit.bind(this),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: "renderSavedEdit",
    value: function renderSavedEdit(response) {
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
      'click #dropzone-prof-pic': 'clearPicZone'
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
      var dataString = JSON.stringify({ picture: picture });
      var that = this;
      $.ajax({
        type: "PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function beforeSend(request) {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.pictureSaved.bind(that),
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
        success: that.render.bind(that),
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'pictureSaved',
    value: function pictureSaved(response) {
      this.$el.find('.profile__pic').attr('src', response.data.picture);
      this.model.set({ picture: response.data.picture });
      this.clearPicZone();
    }
  }, {
    key: 'clearPicZone',
    value: function clearPicZone(event) {
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
    Backbone.View.apply(this);
  }

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
        success: that.newPage,
        error: function error(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
    }
  }, {
    key: 'newPage',
    value: function newPage(response) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9ncm91cHNfaW5kZXguanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBzX21vZGFsLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL25hdl9iYXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvcHJvZmlsZV9zaG93LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX25ldy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2VyX3Nob3cuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcnNfaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDQW1CLGtCQUFrQjs7OzswQkFDcEIsZUFBZTs7OztnQ0FDZCxxQkFBcUI7Ozs7SUFFakMsU0FBUyxHQUVELFNBRlIsU0FBUyxHQUVFO3dCQUZYLFNBQVM7O0FBR1gsVUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakIsV0FBTyxFQUFFLEVBQUMsZUFBZSxFQUFFLDZDQUE2QyxFQUFDO0dBQzVFLENBQUMsQ0FBQztBQUNILGlDQUFXO0FBQ1QsV0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkIsV0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7R0FDbkIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7QUFHSCxDQUFDLENBQUMsWUFBTTtBQUNOLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUMxQyxRQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQSxHQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuRCxXQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwQyxDQUFDOztBQUVGLFdBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRTtBQUN2QyxXQUFPLENBQUMsQ0FBQyxRQUFR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dkQsZUFBSyxDQUFDLCtDQUErQyxHQUFHLFVBQVUsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDMUY7T0FDRixDQUFDLENBQUM7S0FDSjs7O1dBR1Esb0JBQUc7QUFDVixVQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QyxVQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsVUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BCLGdCQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQzFEO0tBQ0Y7OztXQUVTLHFCQUFHO0FBQ1gsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7QUFDbkMsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDMUIsZUFBSyxJQUFJLENBQUMsQ0FBQztTQUNaO09BQ0YsQ0FBQyxDQUFDO0FBQ0gsYUFBTyxLQUFLLENBQUM7S0FDZDs7O1NBakZHLFNBQVM7R0FBUyxRQUFRLENBQUMsSUFBSTs7cUJBcUZ0QixTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy91c2VyJztcbmltcG9ydCBVc2VycyBmcm9tICcuL2NvbGxlY3Rpb25zL3VzZXJzJztcblxuY2xhc3MgQnV0dGVyZmx5IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgQmFja2JvbmUuJC5hamF4U2V0dXAoe1xuICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nIDonQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCd9XG4gICAgfSk7XG4gICAgbmV3IFJvdXRlcih7XG4gICAgICAkcm9vdEVsOiAkKCcjbWFpbicpLFxuICAgICAgJG5hdkJhcjogJCgnI25hdicpXG4gICAgfSk7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xuICB9XG59XG5cbiQoKCkgPT4ge1xuICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgICB2YXIgcmVzdCA9IHRoaXMuc2xpY2UoKHRvIHx8IGZyb20pICsgMSB8fCB0aGlzLmxlbmd0aCk7XG4gICAgdGhpcy5sZW5ndGggPSBmcm9tIDwgMCA/IHRoaXMubGVuZ3RoICsgZnJvbSA6IGZyb207XG4gICAgcmV0dXJuIHRoaXMucHVzaC5hcHBseSh0aGlzLCByZXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVMb2FkUHJvbWlzZShmaWxlTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gJC5EZWZlcnJlZChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAkKGlkKS5sb2FkKGZpbGVOYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSkucHJvbWlzZSgpO1xuICB9XG5cbiAgbGV0IHByb21pc2VzID0gWyBdO1xuXG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcl9zaG93LmpzdC5lanMnLCAnI3VzZXItc2hvdy10ZW1wbGF0ZS1ob2xkZXInKSApO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJfcHJvZmlsZS5qc3QuZWpzJywgJyN1c2VyLXByb2YtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJzX2luZGV4LmpzdC5lanMnLCAnI3VzZXJzLWluZGV4LXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2VyX2l0ZW0uanN0LmVqcycsICcjdXNlci1pdGVtLXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy9uYXZfYmFyLmpzdC5lanMnLCAnI25hdi10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvZ3JvdXBzX21vZGFsLmpzdC5lanMnLCAnI2dyb3Vwcy1tb2RhbC10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvZ3JvdXBzX2luZGV4LmpzdC5lanMnLCAnI2dyb3Vwcy1pbmRleC10ZW1wbGF0ZS1ob2xkZXInKSk7XG5cbiAgJC53aGVuLmFwcGx5KHRoaXMsIHByb21pc2VzKS5kb25lKGZ1bmN0aW9uKCkge1xuICAgICAgbmV3IEJ1dHRlcmZseSgpO1xuICB9KTtcblxufSk7XG4iLCJpbXBvcnQgR3JvdXAgZnJvbSAnLi4vbW9kZWxzL2dyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG4gIFxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgdGhpcy5tb2RlbCA9IEdyb3VwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwcztcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgIHRoaXMubW9kZWwgPSBVc2VyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIiwiY2xhc3MgR3JvdXAgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG4gIFxuICB1cmxSb290ICgpIHtcbiAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL2dyb3Vwcyc7XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG4gIC8vVGhlIHVybCBpcyBmb3IgdGhlIGRlZmF1bHQgXCJjdXJyZW50IHVzZXJcIiwgbm90IHVzZXJzIGluIGdlbmVyYWxcbiAgdXJsUm9vdCAoKSB7XG4gICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL3ZpZXdzL25hdl9iYXInO1xuaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gJy4uL3ZpZXdzL3VzZXJfc2hvdyc7XG5pbXBvcnQgVXNlck5ldyBmcm9tICcuLi92aWV3cy91c2VyX25ldyc7XG5pbXBvcnQgUHJvZmlsZVNob3cgZnJvbSAnLi4vdmlld3MvcHJvZmlsZV9zaG93JztcbmltcG9ydCBVc2Vyc0luZGV4IGZyb20gJy4uL3ZpZXdzL3VzZXJzX2luZGV4JztcbmltcG9ydCBHcm91cHNJbmRleCBmcm9tICcuLi92aWV3cy9ncm91cHNfaW5kZXgnO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4uL3ZpZXdzL2dyb3Vwc19tb2RhbCc7XG5cbmNsYXNzIFJvdXRlciBleHRlbmRzIEJhY2tib25lLlJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuJHJvb3RFbCA9IG9wdGlvbnMuJHJvb3RFbDtcbiAgICB0aGlzLiRuYXZCYXIgPSBvcHRpb25zLiRuYXZCYXI7XG4gICAgdGhpcy5zeW5jSGVscGVyID0gbmV3IFN5bmNIZWxwZXIoKTtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwicHJvZmlsZVwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCIsXG4gICAgICBcInVzZXJzL25ld1wiOiBcInVzZXJOZXdcIixcbiAgICAgIFwidXNlcnMvOmlkXCI6IFwidXNlclNob3dcIixcbiAgICAgIFwiZ3JvdXBzXCI6ICBcImdyb3Vwc1wiLFxuICAgIH07XG4gICAgdGhpcy5fYmluZFJvdXRlcygpXG4gIH1cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBQcm9maWxlU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAncHJvZmlsZScpO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VycyAoKSB7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2Vyc0luZGV4KHtjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhpcy5zd2FwVmlld3ModmlldywgJ3VzZXJzJyk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXNlclNob3cgKGlkKSB7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHRoYXQuZ2V0VXNlcihpZCwgZGF0YSkpO1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlclNob3coe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbClcbiAgICAgIHRoaXMuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpXG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVzZXJOZXcgKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFVzZXJOZXcoe21vZGVsOiB1c2VyLCBjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgICB0aGlzLnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICBncm91cHMgKGdyb3Vwcykge1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgR3JvdXBzSW5kZXgoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICB0aGlzLnN3YXBWaWV3cyh2aWV3LCAnZ3JvdXBzJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN3YXBWaWV3cyAodmlldywgcGFnZSkge1xuICAgIHRoaXMuX25hdiA9IG5ldyBOYXZCYXIoe3BhZ2U6IHBhZ2V9KTtcbiAgICB0aGlzLiRuYXZCYXIuaHRtbCh0aGlzLl9uYXYucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyAmJiB0aGlzLl9jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgdGhpcy4kcm9vdEVsLmh0bWwodmlldy5yZW5kZXIoKS4kZWwpO1xuICB9XG5cbiAgZ2V0VXNlciAoaWQsIGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBkYXRhLnVzZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh1c2Vyc1tpXS5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB1c2Vyc1tpXVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgU3luY0hlbHBlciB7XG5cbiAgc3luY0RhdGEgKGNhbGxiYWNrKSB7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICAgIHR5cGU6XCJHRVRcIixcbiAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICAgICAgfSlcbiAgfVxuXG4gIGdldFVzZXJzIChkYXRhKSB7XG4gICAgbGV0IHVzZXJzID0gbmV3IFVzZXJzKCk7XG4gICAgdXNlcnMuYWRkKGRhdGEudXNlcnMpO1xuICAgIHJldHVybiB1c2VycztcbiAgfVxuXG4gIGdldEdyb3VwcyAoZGF0YSkge1xuICAgIGxldCBncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgZ3JvdXBzLmFkZChkYXRhLmdyb3Vwcyk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeW5jSGVscGVyO1xuIiwiY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiIGlkPVwiJyArIHRoaXMubW9kZWwuZ2V0KCdfaWQnKTtcbiAgICBzdHJpbmcgKz0gJ1wiPiA8ZGl2IGNsYXNzPVwiZGVsLXhcIj54PC9kaXY+ICcgKyB0aGlzLm1vZGVsLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgIHRoaXMuJGVsLmh0bWwoc3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEl0ZW07XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIEdyb3Vwc0luZGV4IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb24pO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjZ3JvdXBzLWluZGV4LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIC5jaGVja2JveC1wcm9wcmVcIjogXCJzZWxlY3RHcm91cFwiLFxuICAgICAgXCJzdWJtaXQgI25ldy1ncm91cC1mb3JtXCI6IFwiYWRkR3JvdXBcIixcbiAgICAgIFwic3VibWl0ICNlZGl0LWdyb3VwLWZvcm1cIjogXCJzYXZlRWRpdFwiLFxuICAgICAgXCJjbGljayAuaW5kZXhfX29wdGlvbnNfX2RlbGV0ZVwiOiBcImRlbGV0ZUdyb3Vwc1wiLFxuICAgICAgXCJjbGljayAuaW5kZXhfX29wdGlvbnNfX2VkaXRcIjogXCJyZW5kZXJFZGl0XCIsXG4gICAgfVxuICAgIHRoaXMuY291bnQgPSB0aGlzLmdyb3VwQ291bnQoKTtcbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe2NvdW50OiB0aGlzLmNvdW50fSkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgZ3JvdXAuZ2V0KCdfaWQnKTtcbiAgICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gPGRpdiBjbGFzcz1cImdyb3VwLW5hbWVcIj4nICsgZ3JvdXAuZXNjYXBlKCduYW1lJykgKyAnPC9kaXY+PC9saT4nXG4gICAgICB0aGlzLiRlbC5maW5kKCcuZ3JvdXBzLWluZGV4JykuYXBwZW5kKHN0cmluZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbGVjdEdyb3VwIChldmVudCkge1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgYWRkR3JvdXAgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICB0aGlzLmNyZWF0ZUdyb3VwKG5hbWUpO1xuICB9XG5cbiAgY3JlYXRlR3JvdXAgKG5hbWUpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi9ncm91cHMvJztcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBuYW1lfSk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6XCJQT1NUXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgfSxcbiAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHN1Y2Nlc3M6IHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVHcm91cHMgKCkge1xuICAgIGxldCAkZ3JvdXBzID0gdGhpcy4kZWwuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGdyb3VwKSB7XG4gICAgICBsZXQgaWQgPSBncm91cC5pZFxuICAgICAgdGhpcy5kZWxldGVHcm91cChncm91cC5pZCk7XG4gICAgICB0aGlzLiRlbC5maW5kKCdsaSMnICsgaWQpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jb3VudCAtPSAxO1xuICAgICAgdGhpcy4kZWwuZmluZCgnLmluZGV4X19jb3VudCcpLmh0bWwodGhpcy5jb3VudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGRlbGV0ZUdyb3VwIChpZCkge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL2dyb3Vwcy8nICsgaWQ7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6XCJERUxFVEVcIixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgIHtcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICB9LFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckVkaXQgKGV2ZW50KSB7XG4gICAgbGV0ICRncm91cHMgPSB0aGlzLiRlbC5maW5kKCdsaS5hY3RpdmUnKTtcbiAgICAkZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGlkeCwgZ3JvdXApIHtcbiAgICAgIGxldCAkZ3JvdXBOYW1lID0gJChncm91cCkuZmluZCgnLmdyb3VwLW5hbWUnKTtcbiAgICAgIGlmICgkZ3JvdXBOYW1lLmhhcygnZm9ybScpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaHRtbFN0cmluZyA9ICc8Zm9ybSBpZD1cImVkaXQtZ3JvdXAtZm9ybVwiIGRhdGEtaWQ9XCInICsgZ3JvdXAuaWQgKyAnXCI+PGlucHV0IGNsYXNzPVwiZ3JvdXAtZWRpdC1pbnB1dFwiIHZhbHVlPVwiJ1xuICAgICAgaHRtbFN0cmluZyArPSAkZ3JvdXBOYW1lLmh0bWwoKSArICdcIj48L2Zvcm0+PGJ1dHRvbj48L2J1dHRvbj4nO1xuICAgICAgJGdyb3VwTmFtZS5odG1sKGh0bWxTdHJpbmcpO1xuICAgICAgbGV0ICRpbnB1dCA9ICQoZ3JvdXApLmZpbmQoJy5ncm91cC1lZGl0LWlucHV0Jyk7XG4gICAgICAkaW5wdXQuYXR0cignc2l6ZScsICRpbnB1dC52YWwoKS5sZW5ndGgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzYXZlRWRpdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIGxldCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvYWRtaW4vZ3JvdXBzLycgKyBpZDtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtuYW1lOiBuYW1lfSk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6XCJQVVRcIixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgIHtcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICB9LFxuICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgc3VjY2VzczogdGhpcy5yZW5kZXJTYXZlZEVkaXQuYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyU2F2ZWRFZGl0IChyZXNwb25zZSkge1xuICAgIGxldCAkZ3JvdXAgPSB0aGlzLiRlbC5maW5kKCdsaSMnICsgcmVzcG9uc2UuZGF0YS5faWQpO1xuICAgICRncm91cC5maW5kKCcuZ3JvdXAtbmFtZScpLmh0bWwocmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgcmVmcmVzaCAocmVzcG9uc2UpIHtcbiAgICBsZXQgc3RyaW5nID0gJzxsaSBjbGFzcz1cInByb2ZpbGVfX2dyb3VwLWl0ZW1cIiBpZD1cIicgKyByZXNwb25zZS5kYXRhLl9pZDtcbiAgICBzdHJpbmcgKz0gJ1wiPiA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtcHJvcHJlXCI+PC9kaXY+ICcgKyByZXNwb25zZS5kYXRhLm5hbWUgKyAnPC9saT4nXG4gICAgdGhpcy4kZWwuZmluZCgnLmdyb3Vwcy1pbmRleCcpLmFwcGVuZChzdHJpbmcpO1xuICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICB0aGlzLiRlbC5maW5kKCcuaW5kZXhfX2NvdW50JykuaHRtbCh0aGlzLmNvdW50KTtcbiAgfVxuXG4gIGdyb3VwQ291bnQgKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoIWdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc0luZGV4O1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBHcm91cHNNb2RhbCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9uICYmIHRoaXMuY29sbGVjdGlvbi5hZGQob3B0aW9ucy5jb2xsZWN0aW9uKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI2dyb3Vwcy1tb2RhbC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJjbGljayAuY2hlY2tib3gtcHJvcHJlXCI6IFwic2VsZWN0R3JvdXBcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgZ3JvdXAuZ2V0KCdfaWQnKTtcbiAgICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gJyArIGdyb3VwLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgICAgdGhpcy4kZWwuZmluZCgndWwnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0R3JvdXAgKGV2ZW50KSB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzTW9kYWw7XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjbmF2LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIHVsXCI6IFwiY2hhbmdlUGFnZVwiLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBpZCA9IFwiI25hdmJhci1cIiArIHRoaXMucGFnZTtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG4gICAgdGhpcy4kZWwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy4kZWwuZmluZChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoYW5nZVBhZ2UgKGV2ZW50KSB7XG4gICAgbGV0ICRuZXdQYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgdXJsID0gJG5ld1BhZ2UuYXR0cignaWQnKS5zcGxpdChcIi1cIilbMV07XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy8nICsgdXJsLCB7dHJpZ2dlcjogdHJ1ZX0pXG4gIH1cblxuICBjbGlja0V2ZW50cyAoKSB7XG4gICAgdGhpcy4kZWwub24oJ2NsaWNrJywgJ2xpJywgdGhpcy5jaGFuZ2VQYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5pbXBvcnQgVXNlclNob3cgZnJvbSBcIi4vdXNlcl9zaG93XCI7XG5cbmNsYXNzIFByb2ZpbGVTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gb3B0aW9ucy5jb2xsZWN0aW9ucztcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXByb2ZpbGUtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgJ3N1Ym1pdCAjcGFzc3dvcmQtZm9ybSc6ICd1cGRhdGVQYXNzb3dyZCcsXG4gICAgICAnY2xpY2sgI2Ryb3B6b25lLXByb2YtcGljJzogJ2NsZWFyUGljWm9uZScsXG4gICAgfVxuXG4gICAgRHJvcHpvbmUub3B0aW9ucy5kcm9wem9uZVByb2ZQaWMgPSB7XG4gICAgICBtYXhGaWxlc2l6ZTogNDA5NixcbiAgICAgIGFjY2VwdDogZnVuY3Rpb24gKGZpbGUsIGRvbmUpIHtcbiAgICAgICAgJChmaWxlLnByZXZpZXdUZW1wbGF0ZSkuZmluZCgnLmR6LXN1Y2Nlc3MtbWFyaycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgJChmaWxlLnByZXZpZXdUZW1wbGF0ZSkuZmluZCgnLmR6LWVycm9yLW1hcmsnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICQoJy5wcm9maWxlX19waWMtd29yZHMnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJzYXZlLXBpY1wiPlNhdmUgbmV3IHBob3RvPC9kaXY+JylcbiAgICAgICAgJCgnLnNhdmUtcGljJykub24oJ2NsaWNrJywgdGhhdC5zYXZlUGljdHVyZS5iaW5kKHRoYXQpKTtcbiAgICAgIH0sXG4gICAgfVxuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgc3ViVmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHRoaXMubW9kZWwsIGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLCBwcm9maWxlOiB0cnVlfSk7XG4gICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGUtdXNlci1zaG93JykuYXBwZW5kKHN1YlZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLnNldERyb3B6b25lKCk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHNldERyb3B6b25lICgpIHtcbiAgICBpZiAodGhpcy5wcm9mRHJvcHpvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCQoJyNkcm9wem9uZS1wcm9mLXBpYycpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvZkRyb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2Ryb3B6b25lLXByb2YtcGljXCIsIHt1cmw6IFwiI1wiLCBhdXRvUHJvY2Vzc1F1ZXVlOiBmYWxzZX0pO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZpbmREcm9wRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluZERyb3BFbGVtZW50ID0gd2luZG93LnNldEludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLnNldERyb3B6b25lKCk7XG4gICAgICB9KS5iaW5kKHRoaXMpLCAyMDApO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVQaWN0dXJlICgpIHtcbiAgICBsZXQgJGltZyA9ICQoJy5kei1pbWFnZScpLmNoaWxkcmVuKCk7XG4gICAgbGV0IHBpY3R1cmUgPSAkaW1nLmF0dHIoJ3NyYycpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInXG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7cGljdHVyZTogcGljdHVyZX0pO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgIHtcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICB9LFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgc3VjY2VzczogdGhhdC5waWN0dXJlU2F2ZWQuYmluZCh0aGF0KSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICB1cGRhdGVQYXNzb3dyZCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKCcudXNlci1ncm91cHMtbW9kYWwnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVKU09OKCkudXNlcjtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBVVFwiLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgIH0sXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICBzdWNjZXNzOiB0aGF0LnJlbmRlci5iaW5kKHRoYXQpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwaWN0dXJlU2F2ZWQgKHJlc3BvbnNlKSB7XG4gICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGVfX3BpYycpLmF0dHIoJ3NyYycsIHJlc3BvbnNlLmRhdGEucGljdHVyZSk7XG4gICAgdGhpcy5tb2RlbC5zZXQoe3BpY3R1cmU6IHJlc3BvbnNlLmRhdGEucGljdHVyZX0pO1xuICAgIHRoaXMuY2xlYXJQaWNab25lKCk7XG4gIH1cblxuICBjbGVhclBpY1pvbmUgKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCB8fCBldmVudC50YXJnZXQuaWQgPT09IFwiZHJvcHpvbmUtcHJvZi1waWNcIikge1xuICAgICAgdGhpcy4kZWwuZmluZCgnI2Ryb3B6b25lLXByb2YtcGljJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJy5zYXZlLXBpYycpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU2hvdztcbiIsImNsYXNzIFVzZXJJdGVtIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gb3B0aW9ucy5ncm91cHM7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLWl0ZW0tdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgLnVzZXItaXRlbV9fY2hlY2tib3hcIjogXCJzZWxlY3RJdGVtXCIsXG4gICAgICBcImNsaWNrIC51c2VyLWl0ZW1fX2dyb3Vwc19fZWRpdFwiOiBcImVkaXRVc2VyXCIsXG4gICAgIH1cbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3RyaW5nID0gXCIgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiwgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnVzZXItaXRlbV9fZ3JvdXBzX190ZXh0JykuYXBwZW5kKHN0cmluZyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0gKGV2ZW50KSB7XG4gICAgbGV0ICRib3ggPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICRib3guZmluZCgnZGl2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgZWRpdFVzZXIgKGV2ZW50KSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy8nICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJdGVtO1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gJy4vdXNlcl9zaG93JztcblxuY2xhc3MgVXNlck5ldyBleHRlbmRzIFVzZXJTaG93IHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJzdWJtaXQgZm9ybVwiOiBcImNyZWF0ZVwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlSW5mbyAoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjcmVhdGUgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUpTT04oKS51c2VyO1xuICAgIGRhdGEuZ3JvdXBJZHMgPSB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKTtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL3VzZXJzJztcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgIHtcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICB9LFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgc3VjY2VzczogdGhhdC5uZXdQYWdlLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXdQYWdlIChyZXNwb25zZSkge1xuICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoJyMvdXNlcnMvJyArIHJlc3BvbnNlLmRhdGEuX2lkLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmV3O1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4vZ3JvdXBzX21vZGFsJztcblxuY2xhc3MgVXNlclNob3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5wcm9maWxlID0gb3B0aW9ucy5wcm9maWxlO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnc3VibWl0ICNub3JtYWwtZm9ybSc6ICd1cGRhdGVJbmZvJyxcbiAgICAgICdjbGljayAuZGVsLXgnOiAnZGVsZXRlR3JvdXAnLFxuICAgICAgJ2NsaWNrICNncm91cHMtYnV0dG9uJzogXCJncm91cHNNb2RhbFwiLFxuICAgICAgXCJrZXl1cCBpbnB1dFwiOiBcInN0b3JlRm9ybURhdGFcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHN0b3JlRm9ybURhdGEgKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcbiAgICBsZXQgbmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQubmFtZS5zbGljZSg1LC0xKTtcbiAgICB0aGlzLm1vZGVsLmF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsLCBwcm9maWxlOiB0aGlzLnByb2ZpbGV9KSk7XG4gICAgaWYgKCF0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwSWQpIHtcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBCeUlkKGdyb3VwSWQpO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cFZpZXcgPSBuZXcgR3JvdXBJdGVtKHttb2RlbDogZ3JvdXB9KVxuICAgICAgICB0aGlzLiRlbC5maW5kKCcudXNlci1zaG93X19ncm91cHMtbGlzdCcpLmFwcGVuZChncm91cFZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ3JvdXBCeUlkIChpZCkge1xuICAgIGxldCB0YXJnZXRHcm91cCA9IG51bGxcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnZGVsZXRlZEF0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcbiAgfVxuXG4gIHVwZGF0ZUluZm8gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5pbk1vZGFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplSlNPTigpLnVzZXI7XG4gICAgZGF0YS5ncm91cElkcyA9IHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvYWRtaW4vdXNlcnMvJztcbiAgICB1cmwgKz0gdGhpcy5tb2RlbC5nZXQoJ19pZCcpO1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgfSxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoIChyZXNwb25zZSkge1xuICAgIGFsZXJ0KFwiU3VjY8OocyFcIilcbiAgICB0aGlzLm1vZGVsLnNldChyZXNwb25zZS5kYXRhKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZGVsZXRlR3JvdXAgKGV2ZW50KSB7XG4gICAgbGV0ICRncm91cCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCk7XG4gICAgbGV0IGlkID0gJGdyb3VwLmF0dHIoJ2lkJyk7XG4gICAgbGV0IGlkcyA9IHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaWRzW2ldID09IGlkKSB7XG4gICAgICAgICAgdGhpcy5tb2RlbC5hdHRyaWJ1dGVzLmdyb3VwSWRzLnJlbW92ZShpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgJGdyb3VwLnJlbW92ZSgpO1xuICB9XG5cbiAgZ3JvdXBzTW9kYWwgKCkge1xuICAgIGlmICh0aGlzLmluTW9kYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbk1vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLnRvZ2dsZUJsdXIoKTtcbiAgICAkKCcudXNlci1ncm91cHMtYnV0dG9uJykub24oJ2NsaWNrJywgdGhpcy5hZGRHcm91cHMuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRHcm91cHMgKGV2ZW50KSB7XG4gICAgbGV0ICRncm91cHMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLmZpbmQoJ2xpLmFjdGl2ZScpO1xuICAgICRncm91cHMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGdyb3VwKSB7XG4gICAgICBpZiAoIXRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcykge1xuICAgICAgICB0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMgPSBbZ3JvdXAuaWRdO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMuaW5kZXhPZihncm91cC5pZCkgPCAwKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5wdXNoKGdyb3VwLmlkKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlQmx1cigpO1xuICAgIHRoaXMuaW5Nb2RhbCA9IGZhbHNlO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHRvZ2dsZUJsdXIgKCkge1xuICAgICQoJy5ibHVyLXdyYXBwZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmJsdXItd3JhcHBlci1zdWInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLW1vZGFsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy51c2VyLWdyb3Vwcy1tb2RhbCcpLmZpbmQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaG93O1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBVc2VySXRlbSBmcm9tICcuL3VzZXJfaXRlbSc7XG5cbmNsYXNzIFVzZXJJbmRleCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgVXNlcnMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuY29sbGVjdGlvbi5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy51c2Vycyk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlcnMtaW5kZXgtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy51c2VyQ291bnQoKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICdjbGljayAuaW5kZXhfX29wdGlvbnNfX2FkZCc6ICdhZGRVc2VyJyxcbiAgICAgICdjbGljayAuaW5kZXhfX29wdGlvbnNfX2RlbGV0ZSc6ICdkZWxldGVVc2VycycsXG4gICAgICAnY2xpY2sgLmluZGV4X19vcHRpb25zX19lZGl0JzogJ2VkaXRVc2VyJyxcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHtjb3VudDogdGhpcy5jb3VudH0pKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHVzZXIuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdXNlclZpZXcgPSBuZXcgVXNlckl0ZW0oe21vZGVsOiB1c2VyLCBncm91cHM6IHRoaXMuZ3JvdXBzfSk7XG4gICAgICB0aGlzLiRlbC5maW5kKFwiLnVzZXJzLWluZGV4XCIpLmFwcGVuZCh1c2VyVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRVc2VyICgpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjL3VzZXJzL25ldycsIHt0cmlnZ2VyOiB0cnVlfSlcbiAgfVxuXG4gIGRlbGV0ZVVzZXJzICgpIHtcbiAgICBsZXQgJHVzZXJzID0gdGhpcy4kZWwuZmluZCgnLmFjdGl2ZScpO1xuICAgICR1c2Vycy5lYWNoKGZ1bmN0aW9uIChpZHgsIHVzZXIpIHtcbiAgICAgIGxldCBpZCA9IHVzZXIucGFyZW50RWxlbWVudC5pZFxuICAgICAgdGhpcy5kZWxldGVVc2VyKGlkKTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJ3VsIycgKyBpZCkucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNvdW50IC09IDE7XG4gICAgICB0aGlzLiRlbC5maW5kKCcuaW5kZXhfX2NvdW50JykuaHRtbCh0aGlzLmNvdW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cblxuICBkZWxldGVVc2VyIChpZCkge1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL3VzZXJzLycgKyBpZDtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTpcIkRFTEVURVwiLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgIH0sXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBlZGl0VXNlciAoKSB7XG4gICAgbGV0ICR1c2VycyA9IHRoaXMuJGVsLmZpbmQoJy5hY3RpdmUnKTtcbiAgICBsZXQgJHVzZXIgPSAkdXNlcnMuZmlyc3QoKS5wYXJlbnQoKTtcbiAgICBpZiAoJHVzZXIuYXR0cignaWQnKSkge1xuICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZShcIiMvdXNlcnMvXCIgKyAkdXNlci5hdHRyKCdpZCcpKTtcbiAgICB9XG4gIH1cblxuICB1c2VyQ291bnQgKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICghdXNlci5nZXQoJ2RlbGV0ZWRBdCcpKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZGV4O1xuIl19

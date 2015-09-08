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

  $.when.apply(null, promises).done(function () {
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

var _viewsGroups_modal = require('../views/groups_modal');

var _viewsGroups_modal2 = _interopRequireDefault(_viewsGroups_modal);

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
      var view = new _viewsUser_new2['default']({ model: user });
      $.when(this.syncHelper.syncData()).done(function (data) {
        var groupsView = new _viewsGroups_modal2['default']({ collection: data.groups });
        $('.groups-modal').html(groupsView.render().$el);
      });

      this.swapViews(view, 'users');
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

},{"../models/user":5,"../utils/sync_helper":7,"../views/groups_modal":9,"../views/nav_bar":10,"../views/profile_show":11,"../views/user_new":13,"../views/user_show":14,"../views/users_index":15}],7:[function(require,module,exports){
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
        var string = '<li class="profile__group-item" id="' + group.get('_id');
        string += '"> <div class="checkbox-propre"></div> ' + group.escape('name') + '</li>';
        this.$el.find('ul').append(string);
      }).bind(this));
      return this;
    }
  }, {
    key: "selectGroup",
    value: function selectGroup(event) {
      $(event.currentTarget).toggleClass('active');
      $(event.currentTarget).parent().toggleClass('active');
    }
  }]);

  return GroupsModal;
})(Backbone.View);

exports["default"] = GroupsModal;
module.exports = exports["default"];

},{"../collections/groups":2}],10:[function(require,module,exports){
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
    this.events = {
      'submit #password-form': "updatePassowrd"
    };
    Backbone.View.apply(this);
  }

  _createClass(ProfileShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model }));
      var subView = new _user_show2['default']({ model: this.model, collections: this.collections, profile: true });
      this.$el.find('.profile-user-show').append(subView.render().$el);
      return this;
    }
  }, {
    key: 'updatePassowrd',
    value: function updatePassowrd(event) {
      event.preventDefault();
      var that = this;
      var data = $(event.currentTarget).serializeJSON().user;
      var dataString = JSON.stringify(data);
      debugger;
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
  }]);

  return ProfileShow;
})(Backbone.View);

exports['default'] = ProfileShow;
module.exports = exports['default'];

},{"../collections/groups":2,"./group_item":8,"./user_show":14}],12:[function(require,module,exports){
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

var _collectionsGroups = require('../collections/groups');

var _collectionsGroups2 = _interopRequireDefault(_collectionsGroups);

var _group_item = require('./group_item');

var _group_item2 = _interopRequireDefault(_group_item);

var UserNew = (function (_Backbone$View) {
  _inherits(UserNew, _Backbone$View);

  function UserNew(options) {
    _classCallCheck(this, UserNew);

    _get(Object.getPrototypeOf(UserNew.prototype), 'constructor', this).call(this);
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
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model, profile: false }));
      return this;
    }
  }, {
    key: 'create',
    value: function create(event) {
      event.preventDefault();
      var that = this;
      var data = $(event.currentTarget).serializeJSON().user;
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
      this.model.set(response.data);
      debugger;
      alert("Success!");
      this.render();
    }
  }]);

  return UserNew;
})(Backbone.View);

exports['default'] = UserNew;
module.exports = exports['default'];

},{"../collections/groups":2,"./group_item":8}],14:[function(require,module,exports){
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
    $('.user-groups-button').on('click', this.addGroups.bind(this));
    this.listenTo(this.model, 'sync', this.render);
    this.events = {
      'submit #normal-form': 'updateInfo',
      'click .del-x': 'deleteGroup',
      'click #groups-button': "groupsModal"
    };
    Backbone.View.apply(this);
  }

  _createClass(UserShow, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ user: this.model, profile: this.profile }));
      if (!this.model.get('groupIds')) {
        return this;
      }
      debugger;

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
        if (this.model.attributes.groupIds.indexOf(group.id) < 0) {
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
    }
  }]);

  return UserShow;
})(Backbone.View);

exports['default'] = UserShow;
module.exports = exports['default'];

},{"../collections/groups":2,"../utils/sync_helper":7,"./group_item":8,"./groups_modal":9}],15:[function(require,module,exports){
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
    this.events = {
      'click .users-index__options__add': 'addUser',
      'click .users-index__options__delete': 'deleteUsers'
    };
    Backbone.View.apply(this);
  }

  _createClass(UserIndex, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ count: this.collection.length }));
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
        $(user.parentElement).remove();
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
  }]);

  return UserIndex;
})(Backbone.View);

exports['default'] = UserIndex;
module.exports = exports['default'];

},{"../collections/groups":2,"../collections/users":3,"./user_item":12}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9ncm91cHNfbW9kYWwuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvbmF2X2Jhci5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9wcm9maWxlX3Nob3cuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcl9pdGVtLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfbmV3LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfc2hvdy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2Vyc19pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs2QkNBbUIsa0JBQWtCOzs7OzBCQUNwQixlQUFlOzs7O2dDQUNkLHFCQUFxQjs7OztJQUVqQyxTQUFTLEdBRUQsU0FGUixTQUFTLEdBRUU7d0JBRlgsU0FBUzs7QUFHWCxVQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNqQixXQUFPLEVBQUUsRUFBQyxlQUFlLEVBQUUsNkNBQTZDLEVBQUM7R0FDNUUsQ0FBQyxDQUFDO0FBQ0gsaUNBQVc7QUFDVCxXQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuQixXQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztHQUNuQixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQzFCOztBQUdILENBQUMsQ0FBQyxZQUFNOztBQUVOLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUMxQyxRQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQSxHQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuRCxXQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwQyxDQUFDOztBQUVGLFdBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRTtBQUN2QyxXQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBUyxPQUFPLEVBQUU7QUFDbEMsT0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FB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Q0YsQ0FBQyxDQUFDO0tBQ047OztTQTNERyxTQUFTO0dBQVMsUUFBUSxDQUFDLElBQUk7O3FCQWlFdEIsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5cbmNsYXNzIEJ1dHRlcmZseSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIEJhY2tib25lLiQuYWpheFNldHVwKHtcbiAgICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJyA6J0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnfVxuICAgIH0pO1xuICAgIG5ldyBSb3V0ZXIoe1xuICAgICAgJHJvb3RFbDogJCgnI21haW4nKSxcbiAgICAgICRuYXZCYXI6ICQoJyNuYXYnKVxuICAgIH0pO1xuICAgIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcbiAgfVxufVxuXG4kKCgpID0+IHtcblxuICBBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgICB2YXIgcmVzdCA9IHRoaXMuc2xpY2UoKHRvIHx8IGZyb20pICsgMSB8fCB0aGlzLmxlbmd0aCk7XG4gICAgdGhpcy5sZW5ndGggPSBmcm9tIDwgMCA/IHRoaXMubGVuZ3RoICsgZnJvbSA6IGZyb207XG4gICAgcmV0dXJuIHRoaXMucHVzaC5hcHBseSh0aGlzLCByZXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVMb2FkUHJvbWlzZShmaWxlTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gJC5EZWZlcnJlZChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAkKGlkKS5sb2FkKGZpbGVOYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSkucHJvbWlzZSgpO1xuICB9XG5cbiAgdmFyIHByb21pc2VzID0gWyBdO1xuXG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcl9zaG93LmpzdC5lanMnLCAnI3VzZXItc2hvdy10ZW1wbGF0ZS1ob2xkZXInKSApO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJfcHJvZmlsZS5qc3QuZWpzJywgJyN1c2VyLXByb2YtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJzX2luZGV4LmpzdC5lanMnLCAnI3VzZXJzLWluZGV4LXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2VyX2l0ZW0uanN0LmVqcycsICcjdXNlci1pdGVtLXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy9uYXZfYmFyLmpzdC5lanMnLCAnI25hdi10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvZ3JvdXBzX21vZGFsLmpzdC5lanMnLCAnI2dyb3Vwcy1tb2RhbC10ZW1wbGF0ZS1ob2xkZXInKSk7XG5cbiAgJC53aGVuLmFwcGx5KCBudWxsLCBwcm9taXNlcyApLmRvbmUoIGZ1bmN0aW9uKCkge1xuICAgICAgbmV3IEJ1dHRlcmZseSgpO1xuICB9KTtcblxufSk7XG4iLCJpbXBvcnQgR3JvdXAgZnJvbSAnLi4vbW9kZWxzL2dyb3VwJztcblxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgdGhpcy5tb2RlbCA9IEdyb3VwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHM7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQmFja2JvbmUuQ29sbGVjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgICAgdGhpcy5tb2RlbCA9IFVzZXI7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiIsImNsYXNzIEdyb3VwIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3N5bmMnO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiY2xhc3MgVXNlciBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAvLyBDYW4ndCB1c2UgY29uc3RydWN0b3IgaGVyZSBhcyBpdCBvdmVyd3JpdGVzIHNvbWUgYXNzaWdubWVudCBieSBwYXJhbWV0ZXJzIHByb3BlcnR5XG4gICAgLy8gY29uc3RydWN0b3IgKCkge1xuICAgIC8vICAgc3VwZXIoKTtcbiAgICAvLyAgIHRoaXMudXJsUm9vdCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgLy8gICBcbiAgICAvLyB9XG5cbiAgICB1cmxSb290ICgpIHtcbiAgICAgcmV0dXJuICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi4vdmlld3MvbmF2X2Jhcic7XG5pbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgVXNlclNob3cgZnJvbSAnLi4vdmlld3MvdXNlcl9zaG93JztcbmltcG9ydCBVc2VyTmV3IGZyb20gJy4uL3ZpZXdzL3VzZXJfbmV3JztcbmltcG9ydCBQcm9maWxlU2hvdyBmcm9tICcuLi92aWV3cy9wcm9maWxlX3Nob3cnO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4uL3ZpZXdzL2dyb3Vwc19tb2RhbCc7XG5pbXBvcnQgVXNlcnNJbmRleCBmcm9tICcuLi92aWV3cy91c2Vyc19pbmRleCc7XG5cblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQmFja2JvbmUuUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4kcm9vdEVsID0gb3B0aW9ucy4kcm9vdEVsO1xuICAgIHRoaXMuJG5hdkJhciA9IG9wdGlvbnMuJG5hdkJhcjtcbiAgICB0aGlzLnN5bmNIZWxwZXIgPSBuZXcgU3luY0hlbHBlcigpO1xuICAgIHRoaXMucm91dGVzID0ge1wiXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJwcm9maWxlXCI6IFwicHJvZmlsZVwiLFxuICAgICAgXCJ1c2Vyc1wiOiAgIFwidXNlcnNcIixcbiAgICAgIFwidXNlcnMvbmV3XCI6IFwidXNlck5ld1wiLFxuICAgICAgXCJ1c2Vycy86aWRcIjogXCJ1c2VyU2hvd1wiLFxuICAgICAgXCJncm91cHNcIjogIFwiZ3JvdXBzXCIsXG4gICAgfTtcbiAgICB0aGlzLl9iaW5kUm91dGVzKClcbiAgfVxuXG4gIHByb2ZpbGUgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdXNlci5mZXRjaCgpO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuZ3JvdXBzKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFByb2ZpbGVTaG93KHttb2RlbDogdXNlciwgY29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICdwcm9maWxlJyk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJzICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2Vyc0luZGV4KHtjb2xsZWN0aW9uczogZGF0YX0pO1xuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJyk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJTaG93IChpZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLnN5bmNEYXRhKCkpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIodGhhdC5nZXRVc2VyKGlkLCBkYXRhKSk7XG4gICAgICBsZXQgdmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKVxuICAgICAgdGhhdC5zd2FwVmlld3ModmlldywgJ3VzZXJzJylcbiAgICB9KTtcbiAgfVxuXG4gIHVzZXJOZXcgKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICBsZXQgdmlldyA9IG5ldyBVc2VyTmV3KHttb2RlbDogdXNlcn0pO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKTtcbiAgfVxuXG4gIGdyb3VwcyAoZ3JvdXBzKSB7XG5cblxuICB9XG5cblxuICBzd2FwVmlld3MgKHZpZXcsIHBhZ2UpIHtcbiAgICB0aGlzLl9uYXYgPSBuZXcgTmF2QmFyKHtwYWdlOiBwYWdlfSk7XG4gICAgdGhpcy4kbmF2QmFyLmh0bWwodGhpcy5fbmF2LnJlbmRlcigpLiRlbCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgJiYgdGhpcy5fY3VycmVudFZpZXcucmVtb3ZlKCk7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSB2aWV3O1xuICAgIHRoaXMuJHJvb3RFbC5odG1sKHZpZXcucmVuZGVyKCkuJGVsKTtcbiAgfVxuXG5cbiAgZ2V0VXNlciAoaWQsIGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBkYXRhLnVzZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh1c2Vyc1tpXS5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB1c2Vyc1tpXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBVc2VycyBmcm9tICcuLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIFN5bmNIZWxwZXIge1xuXG4gIHVzZXJzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldFVzZXJzKTtcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luY0RhdGEodGhpcy5nZXRHcm91cHMpO1xuICB9XG5cbiAgc3luY0RhdGEgKGNhbGxiYWNrKSB7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvc3luYyc7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgdHlwZTpcIkdFVFwiLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdWNjZXNzOiBjYWxsYmFjayxcbiAgICAgICAgfSlcbiAgfVxuXG4gIGdldFVzZXJzIChkYXRhKSB7XG4gICAgbGV0IHVzZXJzID0gbmV3IFVzZXJzKCk7XG4gICAgdXNlcnMuYWRkKGRhdGEudXNlcnMpO1xuICAgIHJldHVybiB1c2VycztcbiAgfVxuXG4gIGdldEdyb3VwcyAoZGF0YSkge1xuICAgIGxldCBncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgZ3JvdXBzLmFkZChkYXRhLmdyb3Vwcyk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNIZWxwZXI7XG4iLCJjbGFzcyBHcm91cEl0ZW0gZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiIGlkPVwiJyArIHRoaXMubW9kZWwuZ2V0KCdfaWQnKTtcbiAgICBzdHJpbmcgKz0gJ1wiPiA8ZGl2IGNsYXNzPVwiZGVsLXhcIj54PC9kaXY+ICcgKyB0aGlzLm1vZGVsLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgIHRoaXMuJGVsLmh0bWwoc3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBJdGVtO1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuXG5jbGFzcyBHcm91cHNNb2RhbCBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb24pO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjZ3JvdXBzLW1vZGFsLXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIC5jaGVja2JveC1wcm9wcmVcIjogXCJzZWxlY3RHcm91cFwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIGxldCBzdHJpbmcgPSAnPGxpIGNsYXNzPVwicHJvZmlsZV9fZ3JvdXAtaXRlbVwiIGlkPVwiJyArIGdyb3VwLmdldCgnX2lkJyk7XG4gICAgICBzdHJpbmcgKz0gJ1wiPiA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtcHJvcHJlXCI+PC9kaXY+ICcgKyBncm91cC5lc2NhcGUoJ25hbWUnKSArICc8L2xpPidcbiAgICAgIHRoaXMuJGVsLmZpbmQoJ3VsJykuYXBwZW5kKHN0cmluZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbGVjdEdyb3VwIChldmVudCkge1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzTW9kYWw7XG4iLCJjbGFzcyBOYXZCYXIgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjbmF2LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIHVsXCI6IFwiY2hhbmdlUGFnZVwiLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBpZCA9IFwiI25hdmJhci1cIiArIHRoaXMucGFnZTtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG4gICAgdGhpcy4kZWwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy4kZWwuZmluZChpZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRoaXMuY2xpY2tFdmVudHMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoYW5nZVBhZ2UgKGV2ZW50KSB7XG4gICAgbGV0ICRuZXdQYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgdXJsID0gJG5ld1BhZ2UuYXR0cignaWQnKS5zcGxpdChcIi1cIilbMV07XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy8nICsgdXJsLCB7dHJpZ2dlcjogdHJ1ZX0pXG5cbiAgfVxuXG4gIGNsaWNrRXZlbnRzICgpIHtcbiAgICB0aGlzLiRlbC5vbignY2xpY2snLCAnbGknLCB0aGlzLmNoYW5nZVBhZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gXCIuL3VzZXJfc2hvd1wiO1xuXG5jbGFzcyBQcm9maWxlU2hvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBvcHRpb25zLmNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItcHJvZmlsZS10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnc3VibWl0ICNwYXNzd29yZC1mb3JtJzogXCJ1cGRhdGVQYXNzb3dyZFwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgc3ViVmlldyA9IG5ldyBVc2VyU2hvdyh7bW9kZWw6IHRoaXMubW9kZWwsIGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLCBwcm9maWxlOiB0cnVlfSk7XG4gICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGUtdXNlci1zaG93JykuYXBwZW5kKHN1YlZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdXBkYXRlUGFzc293cmQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUpTT04oKS51c2VyO1xuICAgIGxldCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgZGVidWdnZXI7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vYjJiLXNlcnZlcjItc3RhZ2luZy5lbGFzdGljYmVhbnN0YWxrLmNvbS9hcGkvdXNlcic7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICBhbGVydChcIlN1Y2PDqHMhXCIpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVTaG93O1xuIiwiY2xhc3MgVXNlckl0ZW0gZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG9wdGlvbnMuZ3JvdXBzO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1pdGVtLXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBcImNsaWNrIC51c2VyLWl0ZW1fX2NoZWNrYm94XCI6IFwic2VsZWN0SXRlbVwiLFxuICAgICAgXCJjbGljayAudXNlci1pdGVtX19ncm91cHNfX2VkaXRcIjogXCJlZGl0VXNlclwiLFxuICAgICB9XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWx9KSk7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwSWQpIHtcbiAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBCeUlkKGdyb3VwSWQpO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBcIlwiXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgIHN0cmluZyA9IFwiIFwiICsgZ3JvdXAuZXNjYXBlKCduYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyaW5nID0gXCIsIFwiICsgZ3JvdXAuZXNjYXBlKCduYW1lJylcbiAgICAgICAgfVxuICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy51c2VyLWl0ZW1fX2dyb3Vwc19fdGV4dCcpLmFwcGVuZChzdHJpbmcpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbDtcbiAgICB0aGlzLmdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgaWYgKGdyb3VwLmdldCgnX2lkJykgPT09IGlkKSB7XG4gICAgICAgIHRhcmdldEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0YXJnZXRHcm91cDtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0gKGV2ZW50KSB7XG4gICAgbGV0ICRib3ggPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICRib3guZmluZCgnZGl2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgZWRpdFVzZXIgKGV2ZW50KSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy8nICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpLCB7dHJpZ2dlcjogdHJ1ZX0pO1xuICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckl0ZW07XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5cbmNsYXNzIFVzZXJOZXcgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLXNob3ctdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwic3VibWl0IGZvcm1cIjogXCJjcmVhdGVcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWwsIHByb2ZpbGU6IGZhbHNlfSkpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuXG4gIGNyZWF0ZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplSlNPTigpLnVzZXI7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycyc7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBPU1RcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCAnQmVhcmVyIDRlYzdkNjA5LWJkZjEtNGRlNC1iMmU2LTRhYzU5ZjYxYWM0MCcpO1xuICAgICAgICB9LFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YVN0cmluZyxcbiAgICAgICAgc3VjY2VzczogdGhhdC5yZWZyZXNoLmJpbmQodGhpcyksXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICBhbGVydChcIkVycnIuLi4gdGhpcyBpcyBhd2t3YXJkLiBTb21ldGhpbmcncyB3cm9uZyBcXG5cIiArIHRleHRTdGF0dXMgKyBcIjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaCAocmVzcG9uc2UpIHtcbiAgICB0aGlzLm1vZGVsLnNldChyZXNwb25zZS5kYXRhKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBhbGVydChcIlN1Y2Nlc3MhXCIpXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmV3O1xuIiwiaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IEdyb3VwcyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncm91cHMnO1xuaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwX2l0ZW0nO1xuaW1wb3J0IEdyb3Vwc01vZGFsIGZyb20gJy4vZ3JvdXBzX21vZGFsJztcblxuY2xhc3MgVXNlclNob3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICB0aGlzLnByb2ZpbGUgPSBvcHRpb25zLnByb2ZpbGU7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1zaG93LXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLWJ1dHRvbicpLm9uKCdjbGljaycsIHRoaXMuYWRkR3JvdXBzLmJpbmQodGhpcykpO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAnc3VibWl0ICNub3JtYWwtZm9ybSc6ICd1cGRhdGVJbmZvJyxcbiAgICAgICdjbGljayAuZGVsLXgnOiAnZGVsZXRlR3JvdXAnLFxuICAgICAgJ2NsaWNrICNncm91cHMtYnV0dG9uJzogXCJncm91cHNNb2RhbFwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWwsIHByb2ZpbGU6IHRoaXMucHJvZmlsZX0pKTtcbiAgICBpZiAoIXRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVidWdnZXI7XG5cbiAgICB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKS5mb3JFYWNoKGZ1bmN0aW9uIChncm91cElkKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwQnlJZChncm91cElkKTtcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwSXRlbSh7bW9kZWw6IGdyb3VwfSlcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnByb2ZpbGVfX2dyb3Vwcy1saXN0JykuYXBwZW5kKGdyb3VwVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuICB9XG5cbiAgdXBkYXRlSW5mbyAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmluTW9kYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVKU09OKCkudXNlcjtcbiAgICBkYXRhLmdyb3VwSWRzID0gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJyk7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycy8nO1xuICAgIHVybCArPSB0aGlzLm1vZGVsLmdldCgnX2lkJyk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoIChyZXNwb25zZSkge1xuICAgIGFsZXJ0KFwiU3VjY8OocyFcIilcbiAgICB0aGlzLm1vZGVsLnNldChyZXNwb25zZS5kYXRhKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBkZWxldGVHcm91cCAoZXZlbnQpIHtcbiAgICBsZXQgJGdyb3VwID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcbiAgICBsZXQgaWQgPSAkZ3JvdXAuYXR0cignaWQnKTtcbiAgICBsZXQgaWRzID0gdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpZHNbaV0gPT0gaWQpIHtcbiAgICAgICAgICB0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMucmVtb3ZlKGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAkZ3JvdXAucmVtb3ZlKCk7XG4gIH1cblxuICBncm91cHNNb2RhbCAoKSB7XG4gICAgaWYgKHRoaXMuaW5Nb2RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluTW9kYWwgPSB0cnVlO1xuICAgIHRoaXMudG9nZ2xlQmx1cigpO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vbignY2xpY2snLCB0aGlzLmFkZEdyb3Vwcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZEdyb3VwcyAoZXZlbnQpIHtcbiAgICBsZXQgJGdyb3VwcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZ3JvdXApIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMuaW5kZXhPZihncm91cC5pZCkgPCAwKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5wdXNoKGdyb3VwLmlkKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlQmx1cigpO1xuICAgIHRoaXMuaW5Nb2RhbCA9IGZhbHNlO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHRvZ2dsZUJsdXIgKCkge1xuICAgICQoJy5ibHVyLXdyYXBwZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmJsdXItd3JhcHBlci1zdWInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLW1vZGFsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNob3c7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29sbGVjdGlvbnMvdXNlcnMnO1xuaW1wb3J0IFVzZXJJdGVtIGZyb20gJy4vdXNlcl9pdGVtJztcblxuY2xhc3MgVXNlckluZGV4IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBVc2VycygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9uLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLnVzZXJzKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuZ3JvdXBzLmFkZChvcHRpb25zLmNvbGxlY3Rpb25zLmdyb3Vwcyk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2Vycy1pbmRleC10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgJ2NsaWNrIC51c2Vycy1pbmRleF9fb3B0aW9uc19fYWRkJzogJ2FkZFVzZXInLFxuICAgICAgJ2NsaWNrIC51c2Vycy1pbmRleF9fb3B0aW9uc19fZGVsZXRlJzogJ2RlbGV0ZVVzZXJzJyxcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHtjb3VudDogdGhpcy5jb2xsZWN0aW9uLmxlbmd0aH0pKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHVzZXIuZ2V0KCdkZWxldGVkQXQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdXNlclZpZXcgPSBuZXcgVXNlckl0ZW0oe21vZGVsOiB1c2VyLCBncm91cHM6IHRoaXMuZ3JvdXBzfSk7XG4gICAgICB0aGlzLiRlbC5maW5kKFwiLnVzZXJzLWluZGV4XCIpLmFwcGVuZCh1c2VyVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRVc2VyICgpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjL3VzZXJzL25ldycsIHt0cmlnZ2VyOiB0cnVlfSlcbiAgfVxuXG4gIGRlbGV0ZVVzZXJzICgpIHtcbiAgICBsZXQgJHVzZXJzID0gdGhpcy4kZWwuZmluZCgnLmFjdGl2ZScpO1xuICAgICR1c2Vycy5lYWNoKGZ1bmN0aW9uIChpZHgsIHVzZXIpIHtcbiAgICAgIGxldCBpZCA9IHVzZXIucGFyZW50RWxlbWVudC5pZFxuICAgICAgdGhpcy5kZWxldGVVc2VyKGlkKTtcbiAgICAgIHRoaXMuJGVsLmZpbmQoJ3VsIycgKyBpZCkucmVtb3ZlKCk7XG4gICAgICAkKHVzZXIucGFyZW50RWxlbWVudCkucmVtb3ZlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG5cbiAgZGVsZXRlVXNlciAoaWQpIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9hZG1pbi91c2Vycy8nICsgaWQ7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTpcIkRFTEVURVwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5kZXg7XG4iXX0=

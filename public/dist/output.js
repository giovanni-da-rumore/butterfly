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

},{"../collections/groups":2,"../utils/sync_helper":7,"./group_item":8}],15:[function(require,module,exports){
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
      'click .users-index__options__add': 'addUser'
    };
    Backbone.View.apply(this);
  }

  _createClass(UserIndex, [{
    key: 'render',
    value: function render() {
      this.$el.html(this.template({ count: this.collection.length }));
      this.collection.forEach((function (user) {
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
  }]);

  return UserIndex;
})(Backbone.View);

exports['default'] = UserIndex;
module.exports = exports['default'];

},{"../collections/groups":2,"../collections/users":3,"./user_item":12}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvYnV0dGVyZmx5LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL2NvbGxlY3Rpb25zL2dyb3Vwcy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9jb2xsZWN0aW9ucy91c2Vycy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy9tb2RlbHMvZ3JvdXAuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvbW9kZWxzL3VzZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvcm91dGVycy9yb3V0ZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdXRpbHMvc3luY19oZWxwZXIuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvZ3JvdXBfaXRlbS5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9ncm91cHNfbW9kYWwuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvbmF2X2Jhci5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy9wcm9maWxlX3Nob3cuanMiLCIvVXNlcnMvamVyZW15L0RvY3VtZW50cy9idXR0ZXJmbHkvanMvdmlld3MvdXNlcl9pdGVtLmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfbmV3LmpzIiwiL1VzZXJzL2plcmVteS9Eb2N1bWVudHMvYnV0dGVyZmx5L2pzL3ZpZXdzL3VzZXJfc2hvdy5qcyIsIi9Vc2Vycy9qZXJlbXkvRG9jdW1lbnRzL2J1dHRlcmZseS9qcy92aWV3cy91c2Vyc19pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs2QkNBbUIsa0JBQWtCOzs7OzBCQUNwQixlQUFlOzs7O2dDQUNkLHFCQUFxQjs7OztJQUVqQyxTQUFTLEdBRUQsU0FGUixTQUFTLEdBRUU7d0JBRlgsU0FBUzs7QUFHWCxVQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNqQixXQUFPLEVBQUUsRUFBQyxlQUFlLEVBQUUsNkNBQTZDLEVBQUM7R0FDNUUsQ0FBQyxDQUFDO0FBQ0gsaUNBQVc7QUFDVCxXQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuQixXQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztHQUNuQixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQzFCOztBQUdILENBQUMsQ0FBQyxZQUFNOztBQUVOLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUMxQyxRQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQSxHQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuRCxXQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwQyxDQUFDOztBQUVGLFdBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRTtBQUN2QyxXQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBUyxPQUFPLEVBQUU7QUFDbEMsT0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FB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QUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsUUFBSSxDQUFDLE1BQU0sR0FBRztBQUNaLHdDQUFrQyxFQUFFLFNBQVM7S0FDOUMsQ0FBQTtBQUNELFlBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzNCOztlQWZHLFNBQVM7O1dBaUJOLGtCQUFHO0FBQ1IsVUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxVQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBLFVBQVUsSUFBSSxFQUFFO0FBQ3RDLFlBQUksUUFBUSxHQUFHLDJCQUFhLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFDaEUsWUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM3RCxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDZCxhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FFTyxtQkFBRztBQUNULGNBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0tBSTFEOzs7U0EvQkcsU0FBUztHQUFTLFFBQVEsQ0FBQyxJQUFJOztxQkFtQ3RCLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vY29sbGVjdGlvbnMvdXNlcnMnO1xuXG5jbGFzcyBCdXR0ZXJmbHkge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBCYWNrYm9uZS4kLmFqYXhTZXR1cCh7XG4gICAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbicgOidCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJ31cbiAgICB9KTtcbiAgICBuZXcgUm91dGVyKHtcbiAgICAgICRyb290RWw6ICQoJyNtYWluJyksXG4gICAgICAkbmF2QmFyOiAkKCcjbmF2JylcbiAgICB9KTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG4gIH1cbn1cblxuJCgoKSA9PiB7XG5cbiAgQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gICAgdmFyIHJlc3QgPSB0aGlzLnNsaWNlKCh0byB8fCBmcm9tKSArIDEgfHwgdGhpcy5sZW5ndGgpO1xuICAgIHRoaXMubGVuZ3RoID0gZnJvbSA8IDAgPyB0aGlzLmxlbmd0aCArIGZyb20gOiBmcm9tO1xuICAgIHJldHVybiB0aGlzLnB1c2guYXBwbHkodGhpcywgcmVzdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9hZFByb21pc2UoZmlsZU5hbWUsIGlkKSB7XG4gICAgcmV0dXJuICQuRGVmZXJyZWQoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgJChpZCkubG9hZChmaWxlTmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLnByb21pc2UoKTtcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IFsgXTtcblxuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL3VzZXJfc2hvdy5qc3QuZWpzJywgJyN1c2VyLXNob3ctdGVtcGxhdGUtaG9sZGVyJykgKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2VyX3Byb2ZpbGUuanN0LmVqcycsICcjdXNlci1wcm9mLXRlbXBsYXRlLWhvbGRlcicpKTtcbiAgcHJvbWlzZXMucHVzaCggY3JlYXRlTG9hZFByb21pc2UoJ3RlbXBsYXRlcy91c2Vyc19pbmRleC5qc3QuZWpzJywgJyN1c2Vycy1pbmRleC10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvdXNlcl9pdGVtLmpzdC5lanMnLCAnI3VzZXItaXRlbS10ZW1wbGF0ZS1ob2xkZXInKSk7XG4gIHByb21pc2VzLnB1c2goIGNyZWF0ZUxvYWRQcm9taXNlKCd0ZW1wbGF0ZXMvbmF2X2Jhci5qc3QuZWpzJywgJyNuYXYtdGVtcGxhdGUtaG9sZGVyJykpO1xuICBwcm9taXNlcy5wdXNoKCBjcmVhdGVMb2FkUHJvbWlzZSgndGVtcGxhdGVzL2dyb3Vwc19tb2RhbC5qc3QuZWpzJywgJyNncm91cHMtbW9kYWwtdGVtcGxhdGUtaG9sZGVyJykpO1xuXG4gICQud2hlbi5hcHBseSggbnVsbCwgcHJvbWlzZXMgKS5kb25lKCBmdW5jdGlvbigpIHtcbiAgICAgIG5ldyBCdXR0ZXJmbHkoKTtcbiAgfSk7XG5cbn0pO1xuIiwiaW1wb3J0IEdyb3VwIGZyb20gJy4uL21vZGVscy9ncm91cCc7XG5cbmNsYXNzIEdyb3VwcyBleHRlbmRzIEJhY2tib25lLkNvbGxlY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICAgIHRoaXMubW9kZWwgPSBHcm91cDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIEJhY2tib25lLkNvbGxlY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICAgIHRoaXMubW9kZWwgPSBVc2VyO1xuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG4iLCJjbGFzcyBHcm91cCBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAgIHVybFJvb3QgKCkge1xuICAgICByZXR1cm4gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImNsYXNzIFVzZXIgZXh0ZW5kcyBCYWNrYm9uZS5Nb2RlbCB7XG5cbiAgLy8gQ2FuJ3QgdXNlIGNvbnN0cnVjdG9yIGhlcmUgYXMgaXQgb3ZlcndyaXRlcyBzb21lIGFzc2lnbm1lbnQgYnkgcGFyYW1ldGVycyBwcm9wZXJ0eVxuICAgIC8vIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyAgIHN1cGVyKCk7XG4gICAgLy8gICB0aGlzLnVybFJvb3QgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgIC8vICAgXG4gICAgLy8gfVxuXG4gICAgdXJsUm9vdCAoKSB7XG4gICAgIHJldHVybiAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL3VzZXInO1xuICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL3ZpZXdzL25hdl9iYXInO1xuaW1wb3J0IFN5bmNIZWxwZXIgZnJvbSAnLi4vdXRpbHMvc3luY19oZWxwZXInO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IFVzZXJTaG93IGZyb20gJy4uL3ZpZXdzL3VzZXJfc2hvdyc7XG5pbXBvcnQgVXNlck5ldyBmcm9tICcuLi92aWV3cy91c2VyX25ldyc7XG5pbXBvcnQgUHJvZmlsZVNob3cgZnJvbSAnLi4vdmlld3MvcHJvZmlsZV9zaG93JztcbmltcG9ydCBHcm91cHNNb2RhbCBmcm9tICcuLi92aWV3cy9ncm91cHNfbW9kYWwnO1xuaW1wb3J0IFVzZXJzSW5kZXggZnJvbSAnLi4vdmlld3MvdXNlcnNfaW5kZXgnO1xuXG5cbmNsYXNzIFJvdXRlciBleHRlbmRzIEJhY2tib25lLlJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuJHJvb3RFbCA9IG9wdGlvbnMuJHJvb3RFbDtcbiAgICB0aGlzLiRuYXZCYXIgPSBvcHRpb25zLiRuYXZCYXI7XG4gICAgdGhpcy5zeW5jSGVscGVyID0gbmV3IFN5bmNIZWxwZXIoKTtcbiAgICB0aGlzLnJvdXRlcyA9IHtcIlwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwicHJvZmlsZVwiOiBcInByb2ZpbGVcIixcbiAgICAgIFwidXNlcnNcIjogICBcInVzZXJzXCIsXG4gICAgICBcInVzZXJzL25ld1wiOiBcInVzZXJOZXdcIixcbiAgICAgIFwidXNlcnMvOmlkXCI6IFwidXNlclNob3dcIixcbiAgICAgIFwiZ3JvdXBzXCI6ICBcImdyb3Vwc1wiLFxuICAgIH07XG4gICAgdGhpcy5fYmluZFJvdXRlcygpXG4gIH1cblxuICBwcm9maWxlICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmV0Y2goKTtcbiAgICAkLndoZW4odGhpcy5zeW5jSGVscGVyLmdyb3VwcygpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgdmlldyA9IG5ldyBQcm9maWxlU2hvdyh7bW9kZWw6IHVzZXIsIGNvbGxlY3Rpb25zOiBkYXRhfSk7XG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAncHJvZmlsZScpO1xuICAgICAgbGV0IGdyb3Vwc1ZpZXcgPSBuZXcgR3JvdXBzTW9kYWwoe2NvbGxlY3Rpb246IGRhdGEuZ3JvdXBzfSk7XG4gICAgICAkKCcuZ3JvdXBzLW1vZGFsJykuaHRtbChncm91cHNWaWV3LnJlbmRlcigpLiRlbCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VycyAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVXNlcnNJbmRleCh7Y29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIHRoYXQuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpO1xuICAgIH0pO1xuICB9XG5cbiAgdXNlclNob3cgKGlkKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQud2hlbih0aGlzLnN5bmNIZWxwZXIuc3luY0RhdGEoKSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcih0aGF0LmdldFVzZXIoaWQsIGRhdGEpKTtcbiAgICAgIGxldCB2aWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdXNlciwgY29sbGVjdGlvbnM6IGRhdGF9KTtcbiAgICAgIGxldCBncm91cHNWaWV3ID0gbmV3IEdyb3Vwc01vZGFsKHtjb2xsZWN0aW9uOiBkYXRhLmdyb3Vwc30pO1xuICAgICAgJCgnLmdyb3Vwcy1tb2RhbCcpLmh0bWwoZ3JvdXBzVmlldy5yZW5kZXIoKS4kZWwpXG4gICAgICB0aGF0LnN3YXBWaWV3cyh2aWV3LCAndXNlcnMnKVxuICAgIH0pO1xuICB9XG5cbiAgdXNlck5ldyAoKSB7XG4gICAgbGV0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIGxldCB2aWV3ID0gbmV3IFVzZXJOZXcoe21vZGVsOiB1c2VyfSk7XG4gICAgJC53aGVuKHRoaXMuc3luY0hlbHBlci5zeW5jRGF0YSgpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgZ3JvdXBzVmlldyA9IG5ldyBHcm91cHNNb2RhbCh7Y29sbGVjdGlvbjogZGF0YS5ncm91cHN9KTtcbiAgICAgICQoJy5ncm91cHMtbW9kYWwnKS5odG1sKGdyb3Vwc1ZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3dhcFZpZXdzKHZpZXcsICd1c2VycycpO1xuICB9XG5cbiAgZ3JvdXBzIChncm91cHMpIHtcblxuXG4gIH1cblxuXG4gIHN3YXBWaWV3cyAodmlldywgcGFnZSkge1xuICAgIHRoaXMuX25hdiA9IG5ldyBOYXZCYXIoe3BhZ2U6IHBhZ2V9KTtcbiAgICB0aGlzLiRuYXZCYXIuaHRtbCh0aGlzLl9uYXYucmVuZGVyKCkuJGVsKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyAmJiB0aGlzLl9jdXJyZW50Vmlldy5yZW1vdmUoKTtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgdGhpcy4kcm9vdEVsLmh0bWwodmlldy5yZW5kZXIoKS4kZWwpO1xuICB9XG5cblxuICBnZXRVc2VyIChpZCwgZGF0YSkge1xuICAgIGxldCB1c2VycyA9IGRhdGEudXNlcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHVzZXJzW2ldLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJzW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbGxlY3Rpb25zL3VzZXJzJztcbmltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcblxuY2xhc3MgU3luY0hlbHBlciB7XG5cbiAgdXNlcnMgKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmNEYXRhKHRoaXMuZ2V0VXNlcnMpO1xuICB9XG5cbiAgZ3JvdXBzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jRGF0YSh0aGlzLmdldEdyb3Vwcyk7XG4gIH1cblxuICBzeW5jRGF0YSAoY2FsbGJhY2spIHtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS9zeW5jJztcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICB0eXBlOlwiR0VUXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAocmVxdWVzdClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgICAgICB9KVxuICB9XG5cbiAgZ2V0VXNlcnMgKGRhdGEpIHtcbiAgICBsZXQgdXNlcnMgPSBuZXcgVXNlcnMoKTtcbiAgICB1c2Vycy5hZGQoZGF0YS51c2Vycyk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgZ2V0R3JvdXBzIChkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICBncm91cHMuYWRkKGRhdGEuZ3JvdXBzKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY0hlbHBlcjtcbiIsImNsYXNzIEdyb3VwSXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ3N5bmMnLCB0aGlzLnJlbmRlcik7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgdGhpcy5tb2RlbC5nZXQoJ19pZCcpO1xuICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJkZWwteFwiPng8L2Rpdj4gJyArIHRoaXMubW9kZWwuZXNjYXBlKCduYW1lJykgKyAnPC9saT4nXG4gICAgdGhpcy4kZWwuaHRtbChzdHJpbmcpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEl0ZW07XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5cbmNsYXNzIEdyb3Vwc01vZGFsIGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbiAmJiB0aGlzLmNvbGxlY3Rpb24uYWRkKG9wdGlvbnMuY29sbGVjdGlvbik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNncm91cHMtbW9kYWwtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgLmNoZWNrYm94LXByb3ByZVwiOiBcInNlbGVjdEdyb3VwXCIsXG4gICAgfVxuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgbGV0IHN0cmluZyA9ICc8bGkgY2xhc3M9XCJwcm9maWxlX19ncm91cC1pdGVtXCIgaWQ9XCInICsgZ3JvdXAuZ2V0KCdfaWQnKTtcbiAgICAgIHN0cmluZyArPSAnXCI+IDxkaXYgY2xhc3M9XCJjaGVja2JveC1wcm9wcmVcIj48L2Rpdj4gJyArIGdyb3VwLmVzY2FwZSgnbmFtZScpICsgJzwvbGk+J1xuICAgICAgdGhpcy4kZWwuZmluZCgndWwnKS5hcHBlbmQoc3RyaW5nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0R3JvdXAgKGV2ZW50KSB7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cHNNb2RhbDtcbiIsImNsYXNzIE5hdkJhciBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiNuYXYtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgdWxcIjogXCJjaGFuZ2VQYWdlXCIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGlkID0gXCIjbmF2YmFyLVwiICsgdGhpcy5wYWdlO1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcbiAgICB0aGlzLiRlbC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB0aGlzLiRlbC5maW5kKGlkKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy5jbGlja0V2ZW50cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlUGFnZSAoZXZlbnQpIHtcbiAgICBsZXQgJG5ld1BhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGxldCB1cmwgPSAkbmV3UGFnZS5hdHRyKCdpZCcpLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjLycgKyB1cmwsIHt0cmlnZ2VyOiB0cnVlfSlcblxuICB9XG5cbiAgY2xpY2tFdmVudHMgKCkge1xuICAgIHRoaXMuJGVsLm9uKCdjbGljaycsICdsaScsIHRoaXMuY2hhbmdlUGFnZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJpbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5pbXBvcnQgVXNlclNob3cgZnJvbSBcIi4vdXNlcl9zaG93XCI7XG5cbmNsYXNzIFByb2ZpbGVTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IG9wdGlvbnMuY29sbGVjdGlvbnM7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlci1wcm9maWxlLXRlbXBsYXRlXCIpLmh0bWwoKSk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnc3luYycsIHRoaXMucmVuZGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICdzdWJtaXQgI3Bhc3N3b3JkLWZvcm0nOiBcInVwZGF0ZVBhc3Nvd3JkXCIsXG4gICAgfVxuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHt1c2VyOiB0aGlzLm1vZGVsfSkpO1xuICAgIGxldCBzdWJWaWV3ID0gbmV3IFVzZXJTaG93KHttb2RlbDogdGhpcy5tb2RlbCwgY29sbGVjdGlvbnM6IHRoaXMuY29sbGVjdGlvbnMsIHByb2ZpbGU6IHRydWV9KTtcbiAgICB0aGlzLiRlbC5maW5kKCcucHJvZmlsZS11c2VyLXNob3cnKS5hcHBlbmQoc3ViVmlldy5yZW5kZXIoKS4kZWwpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1cGRhdGVQYXNzb3dyZCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplSlNPTigpLnVzZXI7XG4gICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9iMmItc2VydmVyMi1zdGFnaW5nLmVsYXN0aWNiZWFuc3RhbGsuY29tL2FwaS91c2VyJztcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIGFsZXJ0KFwiU3VjY8OocyFcIik7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVNob3c7XG4iLCJjbGFzcyBVc2VySXRlbSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gb3B0aW9ucy5ncm91cHM7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJChcIiN1c2VyLWl0ZW0tdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFwiY2xpY2sgLnVzZXItaXRlbV9fY2hlY2tib3hcIjogXCJzZWxlY3RJdGVtXCIsXG4gICAgICBcImNsaWNrIC51c2VyLWl0ZW1fX2dyb3Vwc19fZWRpdFwiOiBcImVkaXRVc2VyXCIsXG4gICAgIH1cbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuICAgIEJhY2tib25lLlZpZXcuYXBwbHkodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbH0pKTtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3RyaW5nID0gXCIgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgPSBcIiwgXCIgKyBncm91cC5lc2NhcGUoJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGNvdW50ICs9IDFcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLnVzZXItaXRlbV9fZ3JvdXBzX190ZXh0JykuYXBwZW5kKHN0cmluZyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdyb3VwQnlJZCAoaWQpIHtcbiAgICBsZXQgdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuICB9XG5cbiAgc2VsZWN0SXRlbSAoZXZlbnQpIHtcbiAgICBsZXQgJGJveCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgJGJveC5maW5kKCdkaXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxuICBlZGl0VXNlciAoZXZlbnQpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKCcjL3VzZXJzLycgKyB0aGlzLm1vZGVsLmdldCgnX2lkJyksIHt0cmlnZ2VyOiB0cnVlfSk7XG4gIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySXRlbTtcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cF9pdGVtJztcblxuY2xhc3MgVXNlck5ldyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgXCJzdWJtaXQgZm9ybVwiOiBcImNyZWF0ZVwiLFxuICAgIH1cbiAgICBCYWNrYm9uZS5WaWV3LmFwcGx5KHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7dXNlcjogdGhpcy5tb2RlbCwgcHJvZmlsZTogZmFsc2V9KSk7XG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG5cbiAgY3JlYXRlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemVKU09OKCkudXNlcjtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL3VzZXJzJztcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOlwiUE9TVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsICdCZWFyZXIgNGVjN2Q2MDktYmRmMS00ZGU0LWIyZTYtNGFjNTlmNjFhYzQwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiB0aGF0LnJlZnJlc2guYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyci4uLiB0aGlzIGlzIGF3a3dhcmQuIFNvbWV0aGluZydzIHdyb25nIFxcblwiICsgdGV4dFN0YXR1cyArIFwiOiBcIiArIGVycm9yVGhyb3duKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoIChyZXNwb25zZSkge1xuICAgIHRoaXMubW9kZWwuc2V0KHJlc3BvbnNlLmRhdGEpO1xuICAgIGRlYnVnZ2VyO1xuICAgIGFsZXJ0KFwiU3VjY2VzcyFcIilcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJOZXc7XG4iLCJpbXBvcnQgU3luY0hlbHBlciBmcm9tICcuLi91dGlscy9zeW5jX2hlbHBlcic7XG5pbXBvcnQgR3JvdXBzIGZyb20gJy4uL2NvbGxlY3Rpb25zL2dyb3Vwcyc7XG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBfaXRlbSc7XG5cbmNsYXNzIFVzZXJTaG93IGV4dGVuZHMgQmFja2JvbmUuVmlldyB7XG5cblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKCk7XG4gICAgdGhpcy5wcm9maWxlID0gb3B0aW9ucy5wcm9maWxlO1xuICAgIG9wdGlvbnMuY29sbGVjdGlvbnMgJiYgdGhpcy5ncm91cHMuYWRkKG9wdGlvbnMuY29sbGVjdGlvbnMuZ3JvdXBzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKFwiI3VzZXItc2hvdy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vbignY2xpY2snLCB0aGlzLmFkZEdyb3Vwcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdzeW5jJywgdGhpcy5yZW5kZXIpO1xuICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgJ3N1Ym1pdCAjbm9ybWFsLWZvcm0nOiAndXBkYXRlSW5mbycsXG4gICAgICAnY2xpY2sgLmRlbC14JzogJ2RlbGV0ZUdyb3VwJyxcbiAgICAgICdjbGljayAjZ3JvdXBzLWJ1dHRvbic6IFwiZ3JvdXBzTW9kYWxcIixcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoe3VzZXI6IHRoaXMubW9kZWwsIHByb2ZpbGU6IHRoaXMucHJvZmlsZX0pKTtcbiAgICBpZiAoIXRoaXMubW9kZWwuZ2V0KCdncm91cElkcycpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5tb2RlbC5nZXQoJ2dyb3VwSWRzJykuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJZCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cEl0ZW0oe21vZGVsOiBncm91cH0pXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5wcm9maWxlX19ncm91cHMtbGlzdCcpLmFwcGVuZChncm91cFZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBncm91cEJ5SWQgKGlkKSB7XG4gICAgbGV0IHRhcmdldEdyb3VwID0gbnVsbFxuICAgIHRoaXMuZ3JvdXBzLmVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXAuZ2V0KCdfaWQnKSA9PT0gaWQpIHtcbiAgICAgICAgdGFyZ2V0R3JvdXAgPSBncm91cDtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldEdyb3VwO1xuXG4gIH1cblxuICB1cGRhdGVJbmZvIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuaW5Nb2RhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUpTT04oKS51c2VyO1xuICAgIGRhdGEuZ3JvdXBJZHMgPSB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKTtcbiAgICBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCB1cmwgPSAnaHR0cDovL2IyYi1zZXJ2ZXIyLXN0YWdpbmcuZWxhc3RpY2JlYW5zdGFsay5jb20vYXBpL2FkbWluL3VzZXJzLyc7XG4gICAgdXJsICs9IHRoaXMubW9kZWwuZ2V0KCdfaWQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOlwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHJlcXVlc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgJ0JlYXJlciA0ZWM3ZDYwOS1iZGYxLTRkZTQtYjJlNi00YWM1OWY2MWFjNDAnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGFTdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6IHRoYXQucmVmcmVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJyLi4uIHRoaXMgaXMgYXdrd2FyZC4gU29tZXRoaW5nJ3Mgd3JvbmcgXFxuXCIgKyB0ZXh0U3RhdHVzICsgXCI6IFwiICsgZXJyb3JUaHJvd24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2ggKHJlc3BvbnNlKSB7XG4gICAgYWxlcnQoXCJTdWNjw6hzIVwiKVxuICAgIHRoaXMubW9kZWwuc2V0KHJlc3BvbnNlLmRhdGEpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIGRlbGV0ZUdyb3VwIChldmVudCkge1xuICAgIGxldCAkZ3JvdXAgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xuICAgIGxldCBpZCA9ICRncm91cC5hdHRyKCdpZCcpO1xuICAgIGxldCBpZHMgPSB0aGlzLm1vZGVsLmdldCgnZ3JvdXBJZHMnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlkc1tpXSA9PSBpZCkge1xuICAgICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5yZW1vdmUoaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgICRncm91cC5yZW1vdmUoKTtcblxuICB9XG5cbiAgZ3JvdXBzTW9kYWwgKCkge1xuICAgIGlmICh0aGlzLmluTW9kYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbk1vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLnRvZ2dsZUJsdXIoKTtcbiAgICAkKCcudXNlci1ncm91cHMtYnV0dG9uJykub24oJ2NsaWNrJywgdGhpcy5hZGRHcm91cHMuYmluZCh0aGlzKSk7XG4gIH1cblxuXG4gIGFkZEdyb3VwcyAoZXZlbnQpIHtcbiAgICBsZXQgJGdyb3VwcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCkuZmluZCgnbGkuYWN0aXZlJyk7XG4gICAgJGdyb3Vwcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZ3JvdXApIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLmF0dHJpYnV0ZXMuZ3JvdXBJZHMuaW5kZXhPZihncm91cC5pZCkgPCAwKSB7XG4gICAgICAgIHRoaXMubW9kZWwuYXR0cmlidXRlcy5ncm91cElkcy5wdXNoKGdyb3VwLmlkKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMudG9nZ2xlQmx1cigpO1xuICAgIHRoaXMuaW5Nb2RhbCA9IGZhbHNlO1xuICAgICQoJy51c2VyLWdyb3Vwcy1idXR0b24nKS5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHRvZ2dsZUJsdXIgKCkge1xuICAgICQoJy5ibHVyLXdyYXBwZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmJsdXItd3JhcHBlci1zdWInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLnVzZXItZ3JvdXBzLW1vZGFsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIFxuICB9XG5cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2hvdztcbiIsImltcG9ydCBHcm91cHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvZ3JvdXBzJztcbmltcG9ydCBVc2VycyBmcm9tICcuLi9jb2xsZWN0aW9ucy91c2Vycyc7XG5pbXBvcnQgVXNlckl0ZW0gZnJvbSAnLi91c2VyX2l0ZW0nO1xuXG5jbGFzcyBVc2VySW5kZXggZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcblxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcbiAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgVXNlcnMoKTtcbiAgICBvcHRpb25zLmNvbGxlY3Rpb25zICYmIHRoaXMuY29sbGVjdGlvbi5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy51c2Vycyk7XG4gICAgb3B0aW9ucy5jb2xsZWN0aW9ucyAmJiB0aGlzLmdyb3Vwcy5hZGQob3B0aW9ucy5jb2xsZWN0aW9ucy5ncm91cHMpO1xuICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoXCIjdXNlcnMtaW5kZXgtdGVtcGxhdGVcIikuaHRtbCgpKTtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICdjbGljayAudXNlcnMtaW5kZXhfX29wdGlvbnNfX2FkZCc6ICdhZGRVc2VyJyxcbiAgICB9XG4gICAgQmFja2JvbmUuVmlldy5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHtjb3VudDogdGhpcy5jb2xsZWN0aW9uLmxlbmd0aH0pKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgbGV0IHVzZXJWaWV3ID0gbmV3IFVzZXJJdGVtKHttb2RlbDogdXNlciwgZ3JvdXBzOiB0aGlzLmdyb3Vwc30pO1xuICAgICAgdGhpcy4kZWwuZmluZChcIi51c2Vycy1pbmRleFwiKS5hcHBlbmQodXNlclZpZXcucmVuZGVyKCkuJGVsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVXNlciAoKSB7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSgnIy91c2Vycy9uZXcnLCB7dHJpZ2dlcjogdHJ1ZX0pXG5cblxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5kZXg7XG4iXX0=

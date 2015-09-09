import NavBar from '../views/nav_bar';
import SyncHelper from '../utils/sync_helper';
import User from '../models/user';
import UserShow from '../views/user_show';
import UserNew from '../views/user_new';
import ProfileShow from '../views/profile_show';
import UsersIndex from '../views/users_index';
import GroupsIndex from '../views/groups_index';
import GroupsModal from '../views/groups_modal';

class Router extends Backbone.Router {

  constructor (options) {
    super();
    this.$rootEl = options.$rootEl;
    this.$navBar = options.$navBar;
    this.syncHelper = new SyncHelper();
    this.routes = {"": "profile",
      "profile": "profile",
      "users":   "users",
      "users/new": "userNew",
      "users/:id": "userShow",
      "groups":  "groups",
    };
    this._bindRoutes()
  }

  profile () {
    let that = this;
    let user = new User();
    user.fetch();
    $.when(this.syncHelper.groups()).done(function (data) {
      let view = new ProfileShow({model: user, collections: data});
      that.swapViews(view, 'profile');
      let groupsView = new GroupsModal({collection: data.groups});
      $('.groups-modal').html(groupsView.render().$el);
    });
  }

  users () {
    $.when(this.syncHelper.syncData()).done(function (data) {
      let view = new UsersIndex({collections: data});
      this.swapViews(view, 'users');
      let groupsView = new GroupsModal({collection: data.groups});
      $('.groups-modal').html(groupsView.render().$el);
    }.bind(this));
  }

  userShow (id) {
    $.when(this.syncHelper.syncData()).done(function (data) {
      let user = new User(that.getUser(id, data));
      let view = new UserShow({model: user, collections: data});
      let groupsView = new GroupsModal({collection: data.groups});
      $('.groups-modal').html(groupsView.render().$el)
      this.swapViews(view, 'users')
    }.bind(this));
  }

  userNew () {
    let user = new User();
    $.when(this.syncHelper.syncData()).done(function (data) {
      let view = new UserNew({model: user, collections: data});
      let groupsView = new GroupsModal({collection: data.groups});
      $('.groups-modal').html(groupsView.render().$el);
      this.swapViews(view, 'users');
    }.bind(this));

  }

  groups (groups) {
    $.when(this.syncHelper.syncData()).done(function (data) {
      let view = new GroupsIndex({collection: data.groups});
      this.swapViews(view, 'groups');
    }.bind(this));
  }

  swapViews (view, page) {
    this._nav = new NavBar({page: page});
    this.$navBar.html(this._nav.render().$el);
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

  getUser (id, data) {
    let users = data.users;
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === id) {
        return users[i]
      }
    }
  }
};

export default Router;

import User from '../models/user';
import UserShow from '../views/user_show';
import NavBar from '../views/nav_bar';
import SyncHelper from '../utils/sync_helper';


class Router extends Backbone.Router {

  constructor (options) {
    super();
    this.$rootEl = options.$rootEl;
    this.$navBar = options.$navBar;
    this.syncHelper = new SyncHelper();
    this.routes = {"": "profile",
      "profile": "profile",
      "groups":  "groups",
      "users":   "users"};
    this._bindRoutes()

  }


  profile () {
    let that = this;
    let user = new User();
    user.fetch();
    $.when(that.syncHelper.groups()).done(function (groups) {
      let view = new UserShow({model: user, collection: groups});
      that.swapViews(view, 'profile')
    });
  }


  users () {
    let mod = new User();
    mod.fetch();
    let that = this;
    $.when(that.syncHelper.groups()).done(function (groups) {
      let view = new UserShow({model: mod, collection: groups});
      that.swapViews(view, 'users')
    });
  }

  groups (groups) {
    // let view = new UserShow({model: mod, collection: groups})
    // this.swapViews($("<div></div>"), 'groups');

  }


  swapViews (view, page) {
    this._nav = new NavBar({page: page});
    this.$navBar.html(this._nav.render().$el);
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }


};

export default Router;

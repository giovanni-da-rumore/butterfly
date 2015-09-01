
import User from '../models/user';
import UserShow from '../views/user_show';
import NavBar from '../views/nav_bar';


class Router extends Backbone.Router {

  constructor (options) {
    super();
    this.$rootEl = options.$rootEl;
    this.$navBar = options.$navBar;
    this.routes = {"": "homePage",
      "profile": "homePage",
      "groups":  "groups",
      "users":   "users"};
    this._bindRoutes()

  }

  homePage () {
    this.user = window.Butterfly.currentUser;
    let user = window.Butterfly.currentUser;
    let view = new UserShow({model: user});
    this.swapViews(view, "profile");
  }

  users () {
    this.swapViews('view', 'users');
  }

  groups () {
    this.swapViews('view', 'groups')

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

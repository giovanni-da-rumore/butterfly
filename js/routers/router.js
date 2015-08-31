'use strict';

class Router extends Backbone.Router {

    constructor (options) {
      super();
      // this.$rootEl = options.$rootEl;
      this.routes = {"": "testMain"};
      this._bindRoutes()

    }

    testMain () {
      alert('router works?')

    }


};

export default Router;

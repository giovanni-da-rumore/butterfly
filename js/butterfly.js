import Router from './routers/router';

class Butterfly {

    constructor () {
      new Router();
      Backbone.history.start();
    }

}

$(() => {
    new Butterfly();
});

import Router from './routers/router';
import User from './models/user';
import Users from './collections/users';

class Butterfly {

  constructor () {
    Backbone.$.ajaxSetup({
        headers: {'Authorization' :'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40'}
    });
    new Router({
      $rootEl: $('#main'),
      $navBar: $('#nav')
    });
    Backbone.history.start();
  }
}

$(() => {

  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  function createLoadPromise(fileName, id) {
    return $.Deferred(function(promise) {
      $(id).load(fileName, function () {
        promise.resolve();
      });
    }).promise();
  }

  var promises = [ ];

  promises.push( createLoadPromise('templates/user_show.jst.ejs', '#user-show-template-holder') );
  promises.push( createLoadPromise('templates/user_profile.jst.ejs', '#user-prof-template-holder'));
  promises.push( createLoadPromise('templates/users_index.jst.ejs', '#users-index-template-holder'));
  promises.push( createLoadPromise('templates/user_item.jst.ejs', '#user-item-template-holder'));
  promises.push( createLoadPromise('templates/nav_bar.jst.ejs', '#nav-template-holder'));
  promises.push( createLoadPromise('templates/groups_modal.jst.ejs', '#groups-modal-template-holder'));

  $.when.apply( this, promises ).done( function() {
      new Butterfly();
  });

});

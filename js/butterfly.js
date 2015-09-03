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

  $('#nav-template-holder').load('/templates/nav_bar.jst.ejs', function () {
    $('#user-prof-template-holder').load('templates/user_profile.jst.ejs', function () {
      $('#user-show-template-holder').load('templates/user_show.jst.ejs', function () {
          $('#user-show-template-holder').load('templates/user_show.jst.ejs', function () {
            $('#users-index-template-holder').load('templates/users_index.jst.ejs', function () {
              $('#user-item-template-holder').load('templates/user_item.jst.ejs', function () {
                  window.Butterfly = new Butterfly();
              });
            });
          });
        });
      });
    });
  });

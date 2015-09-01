import Router from './routers/router';
import User from './models/user';
import Users from './collections/users';

class Butterfly {

    constructor () {
      Backbone.$.ajaxSetup({
          headers: {'Authorization' :'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40'}
      });
      window.Butterfly = {};
      window.Butterfly.currentUser = new User();
      window.Butterfly.currentUser.fetch();
      new Router({
        $rootEl: $('#main'),
        $navBar: $('#nav')
      });
      Backbone.history.start();


      let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
      $.ajax({
            type:"GET",
            dataType: 'json',
            beforeSend: function (request)
            {
                request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
            },
            url: url,
            success: this.syncInfo
    });
    }

    syncInfo (data) {
      window.Butterfly.Users = new Users();
      window.Butterfly.Users.set(data.users);



      //Butterfly.currentUser = new User(data);
      //debugger;
    }

    test () {
    }

}

$(() => {
    window.Butterfly = new Butterfly();
});

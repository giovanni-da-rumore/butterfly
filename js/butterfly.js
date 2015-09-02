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
      let users = new Users();
      // let user = new Backbone.Model(data.users[1]);
      let user1 = new User(data.users[1]);
      users.add(data.users);

    }


}

$(() => {
    window.Butterfly = new Butterfly();
});

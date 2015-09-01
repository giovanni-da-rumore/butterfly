class Users extends Backbone.Model {

    constructor () {
      super();
      this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    }


}

export default Users;

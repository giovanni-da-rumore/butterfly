class User extends Backbone.Model {

    constructor () {
      super();
      this.urlRoot = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
    }

    initialize (options) {
    }

}

export default User;

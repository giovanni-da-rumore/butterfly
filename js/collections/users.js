import User from '../models/user';

class Users extends Backbone.Collection {
  constructor () {
    super();
    this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    this.model = User;
  }
}

export default Users;

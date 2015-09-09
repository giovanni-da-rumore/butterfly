import Group from '../models/group';

class Groups extends Backbone.Collection {
  
  constructor () {
    super();
    this.url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/sync';
    this.model = Group;
  }
}

export default Groups;

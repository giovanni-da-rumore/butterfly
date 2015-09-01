class User extends Backbone.Model {

  // Can't use constructor here as it overwrites some assignment by parameters property
    // constructor () {
    //   super();
    //   this.urlRoot = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
    //   
    // }

    urlRoot () {
     return 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
   }




}

export default User;

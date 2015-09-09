class User extends Backbone.Model {
  //The url is for the default "current user", not users in general
  urlRoot () {
   return 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
 }
}

export default User;

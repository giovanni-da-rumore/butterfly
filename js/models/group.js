class Group extends Backbone.Model {
  
  urlRoot () {
   return 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups';
 }
}

export default Group;

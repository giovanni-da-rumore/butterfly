class User extends Backbone.Model {
  //The url is for the default "current user", not users in general
  urlRoot () {
   return 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
 }

 create (dataString, callback) {
   let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users';
   $.ajax({
     type:"POST",
     dataType: 'json',
     contentType: "application/json",
     beforeSend: function (request)
     {
         request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
     },
     url: url,
     data: dataString,
     success: callback,
     error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
     }
   });
 }

 update (dataString, callback) {
   let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users/';
   url += this.get('_id');
   $.ajax({
     type:"PUT",
     dataType: 'json',
     contentType: "application/json",
     beforeSend: function (request)
     {
         request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
     },
     url: url,
     data: dataString,
     success: callback,
     error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
     }
   });
 }
}

export default User;

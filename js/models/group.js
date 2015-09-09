class Group extends Backbone.Model {

  urlRoot () {
   return 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups';
 }

 update () {
   let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/';
   url += this.get('_id')
   let dataString = JSON.stringify({name: name});
   $.ajax({
     type:"PUT",
     dataType: 'json',
     contentType: "application/json",
     beforeSend: function (request)
     {
         request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
     },
     data: dataString,
     url: url,
     success: this.renderSavedEdit.bind(this),
     error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
     }
   });
 }



}

export default Group;

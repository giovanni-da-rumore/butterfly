import Groups from '../collections/groups';
import GroupItem from './group_item';
import UserShow from './user_show';

class UserNew extends UserShow {


  constructor (options) {

    super(options);
    this.model = options.model;
    this.groups = new Groups();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.events = {
      "submit form": "create",
      // "keyup input": "storeFormData",
    }
    Backbone.View.apply(this);

  }

  // storeFormData (event) {
  //   let value = $(event.currentTarget).val();
  //   let name = event.currentTarget.name.slice(5,-1);
  //   this.model.attributes[name] = value;
  // }

  updateInfo () {
    return
  }


  create (event) {
    event.preventDefault();
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    data.groupIds = this.model.get('groupIds');
    let dataString = JSON.stringify(data);
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
        success: that.refresh.bind(this),
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
  }

  refresh (response) {
    Backbone.history.navigate('#/users/' + response.data._id, {trigger: true});

  }

}


export default UserNew;

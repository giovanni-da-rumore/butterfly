import Groups from '../collections/groups';
import GroupItem from './group_item';
import UserShow from "./user_show";

class ProfileShow extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.collections = options.collections;
    this.groups = new Groups();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-profile-template").html());
    this.listenTo(this.model, 'sync', this.render);
    this.events = {
      'submit #password-form': "updatePassowrd",
    }
    Backbone.View.apply(this);

  }

  render () {
    this.$el.html(this.template({user: this.model}));
    let subView = new UserShow({model: this.model, collections: this.collections, profile: true});
    this.$el.find('.profile-user-show').append(subView.render().$el);
    return this;

  }

  updatePassowrd (event) {
    event.preventDefault();
    if ($('.user-groups-modal').hasClass('active')) {
      return;
    }
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    let dataString = JSON.stringify(data);
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
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
        success: that.refresh.bind(this),
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
  }

  refresh () {
    alert("Succès!");
    this.render();
  }

}

export default ProfileShow;

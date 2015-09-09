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
    }
    Backbone.View.apply(this);
  }

  updateInfo () {
    return
  }

  create (event) {
    event.preventDefault();
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    data.groupIds = this.model.get('groupIds');
    let dataString = JSON.stringify(data);
    this.model.create(dataString, this.newPage.bind(this));
  }

  newPage (response) {
    $('.success').addClass('active');
    let successFlash = window.setInterval((function() {
        $('.success').removeClass('active');
        clearInterval(successFlash);
    }).bind(this), 1000);
    Backbone.history.navigate('#/users/' + response.data._id, {trigger: true});
  }

}


export default UserNew;

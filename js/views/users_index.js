import Groups from '../collections/groups';
import Users from '../collections/users';
import UserItem from './user_item';

class UserIndex extends Backbone.View {

  constructor (options) {
    super();
    this.model = options.model;
    this.groups = new Groups();
    this.collection = new Users();
    options.collections && this.collection.add(options.collections.users);
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#users-index-template").html());
    this.events = {
      'click .index__options__add': 'addUser',
      'click .index__options__delete': 'deleteUsers',
    }
    Backbone.View.apply(this);
  }

  render () {
    this.$el.html(this.template({count: this.collection.length}));
    this.collection.forEach(function (user) {
      if (user.get('deletedAt')) {
        return;
      }
      let userView = new UserItem({model: user, groups: this.groups});
      this.$el.find(".users-index").append(userView.render().$el);
    }.bind(this));
    return this;
  }

  addUser () {
    Backbone.history.navigate('#/users/new', {trigger: true})
  }

  deleteUsers () {
    let $users = this.$el.find('.active');
    $users.each(function (idx, user) {
      let id = user.parentElement.id
      this.deleteUser(id);
      this.$el.find('ul#' + id).remove();
    }.bind(this));
  }


  deleteUser (id) {
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users/' + id;
    $.ajax({
        type:"DELETE",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function (request)
        {
            request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
  }



}

export default UserIndex;

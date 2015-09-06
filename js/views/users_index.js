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
      'click .users-index__options__add': 'addUser',
    }
    Backbone.View.apply(this);
  }

  render () {
    this.$el.html(this.template({count: this.collection.length}));
    this.collection.forEach(function (user) {
      let userView = new UserItem({model: user, groups: this.groups});
      this.$el.find(".users-index").append(userView.render().$el);
    }.bind(this));
    return this;
  }

  addUser () {
    Backbone.history.navigate('#/users/new', {trigger: true})



  }

}

export default UserIndex;

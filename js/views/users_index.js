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

  }

  render () {
    this.$el.html(this.template());
    this.collection.forEach(function (user) {
      let userView = new UserItem({model: user, groups: this.groups});
      this.$el.find("#users-index").append(userView.render().$el);
    }.bind(this));
    return this;
  }

  groupById (id) {
    let targetGroup = null
    this.groups.each(function (group) {
      if (group.get('_id') === id) {
        targetGroup = group;
        return group;
      }
    })
    return targetGroup;

  }




}

export default UserIndex;

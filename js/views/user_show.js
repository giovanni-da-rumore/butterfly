import SyncHelper from '../utils/sync_helper';
import Groups from '../collections/groups';

class UserShow extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.groups = new Groups();
    this.groups.add(options.collection.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);

  }

  render () {
    this.$el.html(this.template({user: this.model}));
    this.model.get('groupIds').forEach(function (groupId) {
      let string = '<li class="profile__group-item"> x ';
      if (this.groupById(groupId)) {
        string += this.groupById(groupId).escape('name') + "</li>";
        this.$el.find('.profile__groups-list').append(string);
      }
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

export default UserShow;

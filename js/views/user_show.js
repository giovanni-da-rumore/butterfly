import SyncHelper from '../utils/sync_helper';
import Groups from '../collections/groups';
import GroupItem from './group_item';

class UserShow extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.groups = new Groups();
    this.profile = options.profile;
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);

  }

  render () {
    this.$el.html(this.template({user: this.model, profile: this.profile}));
    if (!this.model.get('groupIds')) {
      return this;
    }
    this.model.get('groupIds').forEach(function (groupId) {
      let group = this.groupById(groupId);
      if (group) {
        let groupView = new GroupItem({model: group})
        this.$el.find('.profile__groups-list').append(groupView.render().$el);
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

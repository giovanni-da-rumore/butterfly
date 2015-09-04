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

  }

  render () {
    this.$el.html(this.template({user: this.model}));
    let subView = new UserShow({model: this.model, collections: this.collections, profile: true});
    this.$el.find('.profile-user-show').append(subView.render().$el);
    // if (!this.model.get('groupIds')) {
    //   return this;
    // }
    // this.model.get('groupIds').forEach(function (groupId) {
    //   let group = this.groupById(groupId);
    //   if (group) {
    //     let groupView = new GroupItem({model: group});
    //     this.$el.find('.profile__groups-list').append(groupView.render().$el);
    //   }
    // }.bind(this));
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

export default ProfileShow;

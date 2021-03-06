import SyncHelper from '../utils/sync_helper';
import Groups from '../collections/groups';
import GroupItem from './group_item';
import GroupsModal from './groups_modal';

class UserShow extends Backbone.View {

  constructor (options) {
    super();
    this.model = options.model;
    this.groups = new Groups();
    this.profile = options.profile;
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render);
    this.events = {
      'submit #normal-form': 'updateInfo',
      'click .del-x': 'deleteGroup',
      'click #groups-button': "groupsModal",
      "keyup input": "storeFormData",
    }
    Backbone.View.apply(this);
  }

  storeFormData (event) {
    let value = $(event.currentTarget).val();
    let name = event.currentTarget.name.slice(5,-1);
    this.model.attributes[name] = value;
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
        this.$el.find('.user-show__groups-list').append(groupView.render().$el);
      }
    }.bind(this));
    return this;
  }

  groupById (id) {
    let targetGroup = null
    this.groups.each(function (group) {
      if (group.get('deletedAt')) {
        return;
      }
      if (group.get('_id') === id) {
        targetGroup = group;
        return group;
      }
    })
    return targetGroup;
  }

  updateInfo (event) {
    event.preventDefault();
    if (this.inModal) {
      return;
    }
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    data.groupIds = this.model.get('groupIds');
    let dataString = JSON.stringify(data);
    this.model.update(dataString, this.refresh.bind(this));
  }

  refresh (response) {
    this.model.set(response.data);
    $('.success').addClass('active');
    let successFlash = window.setInterval((function() {
        $('.success').removeClass('active');
        clearInterval(successFlash);
    }).bind(this), 1000);
    this.render();
  }

  deleteGroup (event) {
    let $group = $(event.currentTarget).parent();
    let id = $group.attr('id');
    let ids = this.model.get('groupIds');
    for (var i = 0; i < ids.length; i++) {
      if (ids[i] == id) {
          this.model.attributes.groupIds.remove(i);
          break;
      }
    }
    $group.remove();
  }

  groupsModal () {
    if (this.inModal) {
      return;
    }
    this.inModal = true;
    this.toggleBlur();
    $('.user-groups-button').on('click', this.addGroups.bind(this));
  }

  addGroups (event) {
    let $groups = $(event.currentTarget).parent().find('li.active');
    $groups.each(function (index, group) {
      if (!this.model.attributes.groupIds) {
        this.model.attributes.groupIds = [group.id];
      } else if (this.model.attributes.groupIds.indexOf(group.id) < 0) {
        this.model.attributes.groupIds.push(group.id);
      }
    }.bind(this));
    this.toggleBlur();
    this.inModal = false;
    $('.user-groups-button').off('click');
    this.render();
  }

  toggleBlur () {
    $('.blur-wrapper').toggleClass('active');
    $('.blur-wrapper-sub').toggleClass('active');
    $('.user-groups-modal').toggleClass('active');
    $('.user-groups-modal').find('li.active').removeClass('active');
  }

}

export default UserShow;

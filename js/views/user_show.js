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
    this.events = {
      'submit #normal-form': 'updateInfo',
      'click .del-x': 'deleteGroup',
      'click #groups-button': "addGroups"
    }
    Backbone.View.apply(this);

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

  updateInfo (event) {
    event.preventDefault();
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    data.groupIds = this.model.get('groupIds');
    let dataString = JSON.stringify(data);
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/users/';
    url += this.model.get('_id');
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

  refresh (response) {
    alert("Succès!")
    this.model.set(response.data);
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

  addGroups () {
    $('.blur-wrapper').addClass('active');
    $('.blur-wrapper-sub').addClass('active');
  }




}


export default UserShow;

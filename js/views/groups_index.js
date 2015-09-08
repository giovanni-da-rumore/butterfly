import Groups from '../collections/groups';

class GroupsIndex extends Backbone.View {


  constructor (options) {
    super();
    this.collection = new Groups();
    options.collection && this.collection.add(options.collection);
    this.template = _.template($("#groups-index-template").html());
    this.events = {
      "click .checkbox-propre": "selectGroup",
      "submit #new-group-form": "addGroup",
      "submit #edit-group-form": "saveEdit",
      "click .index__options__delete": "deleteGroups",
      "click .index__options__edit": "editGroup",
    }
    this.count = this.groupCount();
    Backbone.View.apply(this);
  }

  render () {
    this.$el.html(this.template({count: this.count}));
    this.collection.each(function (group) {
      if (group.get('deletedAt')) {
        return;
      }
      let string = '<li class="profile__group-item" id="' + group.get('_id');
      string += '"> <div class="checkbox-propre"></div> <div class="group-name">' + group.escape('name') + '</div></li>'
      this.$el.find('.groups-index').append(string);
    }.bind(this));
    return this;
  }

  selectGroup (event) {
    $(event.currentTarget).parent().toggleClass('active');
  }

  addGroup (event) {
    event.preventDefault();
    let name = $(event.currentTarget).find('input').val();
    this.createGroup(name);
  }

  createGroup (name) {
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/';
    let dataString = JSON.stringify({name: name});
    let that = this;
    $.ajax({
        type:"POST",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function (request)
        {
            request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        data: dataString,
        url: url,
        success: that.refresh.bind(this),
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });

  }

  deleteGroups () {
    let $groups = this.$el.find('li.active');
    $groups.each(function (idx, group) {
      let id = group.id
      this.deleteGroup(group.id);
      this.$el.find('li#' + id).remove();
      this.count -= 1;
      this.$el.find('.index__count').html(this.count);
    }.bind(this));


  }

  deleteGroup (id) {
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/' + id;
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

  editGroup (event) {
    let $groups = this.$el.find('li.active');
    $groups.each(function (idx, group) {
      let $groupName = $(group).find('.group-name');
      if ($groupName.has('form').length) {
        return;
      }
      let htmlString = '<form id="edit-group-form" data-id="' + group.id + '"><input class="group-edit-input" value="'
      htmlString += $groupName.html() + '"></form><button></button>';
      $groupName.html(htmlString);
      let $input = $(group).find('.group-edit-input');
      $input.attr('size', $input.val().length);
    }.bind(this));
  }

  saveEdit (event) {
    event.preventDefault();
    let name = $(event.currentTarget).find('input').val();
    let id = event.currentTarget.getAttribute('data-id');
    this.saveEditAjax(id, name);
    // this.ajaxRequest({data: name, urlAdd: })

  }

  saveEditAjax (id, name) {
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/admin/groups/';
    url += id;
    let dataString = JSON.stringify({name: name});
    let that = this;
    $.ajax({
      type:"PUT",
      dataType: 'json',
      contentType: "application/json",
      beforeSend: function (request)
      {
          request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
      },
      data: dataString,
      url: url,
      success: that.editRender.bind(this),
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
      }
    });
  }

  editRender (response) {
    let $group = this.$el.find('li#' + response.data._id);
    $group.find('.group-name').html(response.data.name);
    $group.removeClass('active');

  }


  refresh (response) {
    let string = '<li class="profile__group-item" id="' + response.data._id;
    string += '"> <div class="checkbox-propre"></div> ' + response.data.name + '</li>'
    this.$el.find('.groups-index').append(string);
    this.count += 1;
    this.$el.find('.index__count').html(this.count);
  }

  groupCount () {
    let count = 0;
    this.collection.each(function (group) {
      if (!group.get('deletedAt')) {
        count += 1;
       }
    });
    return count;
  }




}

export default GroupsIndex;

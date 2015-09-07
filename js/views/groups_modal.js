import Groups from '../collections/groups';

class GroupsModal extends Backbone.View {


  constructor (options) {
    super();
    this.collection = new Groups();
    options.collection && this.collection.add(options.collection);
    this.template = _.template($("#groups-modal-template").html());

  }

  render () {
    this.$el.html(this.template());
    this.collection.each(function (group) {
      let string = '<li class="profile__group-item" id="' + group.get('_id');
      string += '"> <div class="checkbox-propre"></div> ' + group.escape('name') + '</li>'
      this.$el.find('ul').append(string);
    }.bind(this));
    return this;
  }

}

export default GroupsModal;

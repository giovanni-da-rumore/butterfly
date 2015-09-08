import Groups from '../collections/groups';

class GroupsIndex extends Backbone.View {


  constructor (options) {
    super();
    this.collection = new Groups();
    options.collection && this.collection.add(options.collection);
    this.template = _.template($("#groups-index-template").html());
    this.events = {
      "click .checkbox-propre": "selectGroup",
      "submit form": "addGroup",
    }
    Backbone.View.apply(this);
  }

  render () {
    this.$el.html(this.template({count: this.collection.length}));
    this.collection.each(function (group) {
      let string = '<li class="profile__group-item" id="' + group.get('_id');
      string += '"> <div class="checkbox-propre"></div> ' + group.escape('name') + '</li>'
      this.$el.find('.groups-index').append(string);
    }.bind(this));
    return this;
  }

  selectGroup (event) {
    $(event.currentTarget).toggleClass('active');
    $(event.currentTarget).parent().toggleClass('active');
  }

  addGroup (event) {
    event.preventDefault();

  }




}

export default GroupsIndex;

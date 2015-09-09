class GroupItem extends Backbone.View {

  constructor (options) {
    super();
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  }

  render () {
    let string = '<li class="profile__group-item" id="' + this.model.get('_id');
    string += '"> <div class="del-x">x</div> ' + this.model.escape('name') + '</li>'
    this.$el.html(string);
    return this;
  }
}

export default GroupItem;

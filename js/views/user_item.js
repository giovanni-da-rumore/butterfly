class UserItem extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.groups = options.groups;
    this.template = _.template($("#user-item-template").html());
    this.listenTo(this.model, 'sync', this.render);

  }

  render () {
    this.$el.html(this.template({user: this.model}));
    let count = 0
    this.model.get('groupIds').forEach(function (groupId) {
      let group = this.groupById(groupId);
      if (group) {
        let string = ""
        if (count === 0) {
          string = " " + group.escape('name');
        } else {
          string = ", " + group.escape('name')
        }
        count += 1
        this.$el.find('.user-item__groups__text').append(string);
      }
    }.bind(this));
    return this;

  }

  groupById (id) {
    let targetGroup = null;
    this.groups.each(function (group) {
      if (group.get('_id') === id) {
        targetGroup = group;
        return group;
      }
    })
    return targetGroup;

  }




}

export default UserItem;

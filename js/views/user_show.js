class UserShow extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render)
  }

  render () {
    this.$el.html(this.template({user: this.model}));
    return this;

  }




}

export default UserShow;

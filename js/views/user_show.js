class UserShow extends Backbone.View {


  constructor (options) {
    super();
    this.model = options.model;
    this.template = _.template($("#user-show-template").html());
  }




}

export default UserShow;

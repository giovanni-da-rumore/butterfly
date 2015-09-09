class NavBar extends Backbone.View {

  constructor (options) {
    super();
    this.page = options.page;
    this.template = _.template($("#nav-template").html());
    this.events = {
      "click ul": "changePage",
    };
  }

  render () {
    var id = "#navbar-" + this.page;
    this.$el.html(this.template());
    this.$el.find('li').removeClass('active');
    this.$el.find(id).addClass('active');
    this.clickEvents();
    return this;
  }

  changePage (event) {
    let $newPage = $(event.currentTarget);
    let url = $newPage.attr('id').split("-")[1];
    Backbone.history.navigate('#/' + url, {trigger: true})
  }

  clickEvents () {
    this.$el.on('click', 'li', this.changePage);
  }
}

export default NavBar;

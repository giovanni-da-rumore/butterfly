import SyncHelper from '../utils/sync_helper';
import Groups from '../collections/groups';

class UserShow extends Backbone.View {


  constructor (options) {
    super();
    this.syncHelper = new SyncHelper();
    this.model = options.model;
    this.collection = new Groups();
    this.collection.add(options.collection.groups);
    this.template = _.template($("#user-show-template").html());
    this.listenTo(this.model, 'sync', this.render)
    debugger;

  }

  render () {
    this.$el.html(this.template({user: this.model}));
    return this;

  }




}

export default UserShow;

import Groups from '../collections/groups';
import GroupItem from './group_item';
import UserShow from "./user_show";

class ProfileShow extends Backbone.View {

  constructor (options) {
    super();
    this.model = options.model;
    let that = this;
    this.collections = options.collections;
    this.groups = new Groups();
    options.collections && this.groups.add(options.collections.groups);
    this.template = _.template($("#user-profile-template").html());
    this.listenTo(this.model, 'sync', this.render);
    this.events = {
      'submit #password-form': 'updatePassowrd',
      'click #dropzone-prof-pic': 'clearPicZone',
    }

    Dropzone.options.dropzoneProfPic = {
      maxFilesize: 4096,
      accept: function (file, done) {
        $(file.previewTemplate).find('.dz-success-mark').css('display','none');
        $(file.previewTemplate).find('.dz-error-mark').css('display','none');
        $('.profile__pic-words').append('<div class="save-pic">Save new photo</div>')
        $('.save-pic').on('click', that.savePicture.bind(that));
      },
    }
    Backbone.View.apply(this);
  }

  render () {
    this.$el.html(this.template({user: this.model}));
    let subView = new UserShow({model: this.model, collections: this.collections, profile: true});
    this.$el.find('.profile-user-show').append(subView.render().$el);
    this.setDropzone();
    return this;

  }

  setDropzone () {
    if (this.profDropzone) {
      return;
    } else if ($('#dropzone-prof-pic').length > 0) {
      this.profDropzone = new Dropzone("#dropzone-prof-pic", {url: "#", autoProcessQueue: false});
      clearInterval(this.findDropElement);
    } else {
      this.findDropElement = window.setInterval((function() {
          this.setDropzone();
      }).bind(this), 200);
    }
  }

  savePicture () {
    let $img = $('.dz-image').children();
    let picture = $img.attr('src');
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user'
    let dataString = JSON.stringify({picture: picture});
    this.model.update(dataString, this.pictureSaved.bind(this));
  }


  updatePassowrd (event) {
    event.preventDefault();
    if ($('.user-groups-modal').hasClass('active')) {
      return;
    }
    let data = $(event.currentTarget).serializeJSON().user;
    let dataString = JSON.stringify(data);
    this.model.update(dataString, this.render.bind(this));
  }

  pictureSaved (response) {
    this.$el.find('.profile__pic').attr('src', response.data.picture);
    this.model.set({picture: response.data.picture});
    this.clearPicZone();
  }

  clearPicZone (event) {
    if (!event || event.target.id === "dropzone-prof-pic") {
      this.$el.find('#dropzone-prof-pic').children().remove();
      this.$el.find('.save-pic').remove();
    }
  }
}

export default ProfileShow;

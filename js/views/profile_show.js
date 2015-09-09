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
      'click #dropzone-prof-pic': 'clearZone',
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
    let that = this;
    let dataString = JSON.stringify({picture: picture})
    debugger;
    $.ajax({
        type:"PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function (request)
        {
            request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.refresh.bind(this),
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
  }





  updatePassowrd (event) {
    event.preventDefault();
    if ($('.user-groups-modal').hasClass('active')) {
      return;
    }
    let that = this;
    let data = $(event.currentTarget).serializeJSON().user;
    let dataString = JSON.stringify(data);
    let url = 'http://b2b-server2-staging.elasticbeanstalk.com/api/user';
    $.ajax({
        type:"PUT",
        dataType: 'json',
        contentType: "application/json",
        beforeSend: function (request)
        {
            request.setRequestHeader("Authorization", 'Bearer 4ec7d609-bdf1-4de4-b2e6-4ac59f61ac40');
        },
        url: url,
        data: dataString,
        success: that.refresh.bind(this),
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Errr... this is awkward. Something's wrong \n" + textStatus + ": " + errorThrown);
        }
      });
  }

  refresh () {
    alert("Succès!");
    this.render();
  }

  clearZone (event) {
    if (event.target.id === "dropzone-prof-pic") {
      this.$el.find('#dropzone-prof-pic').children().remove();
      this.$el.find('.save-pic').remove();
    }
  }


}

export default ProfileShow;
